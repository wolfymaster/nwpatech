'use strict';

module.exports.challenges = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      challenges: [
          {
              name: 'Challenge 1',
          },
          {
              name: 'Challenge 2',
          },
          {
              name: 'Challenge 3',
          }
      ],
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.challenge = async (event) => {
    let { id } = event.pathParameters;
    return {
        statusCode: 200,
        body: JSON.stringify({
            id: id,
            challenge: {
                id: id,
                name: 'Challenge 1',
                url: 'https://vftl24b9cl.execute-api.us-east-1.amazonaws.com/dev/challenge/1/src',
                language: 'javascript',
                difficulty: 5,
                description: 'This is a javascript code challenge',
                author: '@wolfymaster',
            },
        }),
    }
};

module.exports.challengesrc = async (event) => {
    let { id } = event.pathParameters;
    return {
        statusCode: 200,
        body: JSON.stringify({
            id: id,
            input: event,
        })
    }
};
