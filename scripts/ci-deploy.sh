#!/bin/bash
# exit script when any command ran here returns with non-zero exit code
set -e

SECRET_NAME=ecr-login-secret

# Fetch token (which will expire in 12 hours)
TOKEN=`aws ecr --region=$AWS_REGION get-authorization-token --output text --query authorizationData[].authorizationToken | base64 -d | cut -d: -f2`

COMMIT_SHA1=$CIRCLE_SHA1

# We must export it so it's available for envsubst
export COMMIT_SHA1=$COMMIT_SHA1

# since the only way for envsubst to work on files is using input/output redirection,
#  it's not possible to do in-place substitution, so we need to save the output to another file
#  and overwrite the original with that one.
envsubst <./k8s/deployment.yml >./k8s/deployment.yml.out
mv ./k8s/deployment.yml.out ./k8s/deployment.yml

echo "$KUBERNETES_CLUSTER_CERTIFICATE" | base64 --decode > cert.crt

# Create or replace registry secret
./kubectl --kubeconfig=/dev/null \
  --server=$KUBERNETES_SERVER \
  --certificate-authority=cert.crt \
  --token=$KUBERNETES_TOKEN \
  --namespace playground \
  delete secret --ignore-not-found $SECRET_NAME

./kubectl --kubeconfig=/dev/null \
  --server=$KUBERNETES_SERVER \
  --certificate-authority=cert.crt \
  --token=$KUBERNETES_TOKEN \
  --namespace playground \
   create secret docker-registry $SECRET_NAME \
 --docker-server="${AWS_ECR_ACCOUNT_URL}" \
 --docker-username=AWS \
 --docker-password="${TOKEN}"

# Apply deployment
./kubectl \
  --kubeconfig=/dev/null \
  --server=$KUBERNETES_SERVER \
  --certificate-authority=cert.crt \
  --token=$KUBERNETES_TOKEN \
  apply -f ./k8s/