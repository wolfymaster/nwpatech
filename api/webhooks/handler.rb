require 'json'
require 'octokit'
require 'sequel'
require 'dotenv/load'

DB_HOST = ENV['DB_HOST']
DB_USER = ENV['DB_USER']
DB_PORT = ENV['DB_PORT']
DB_PASSWORD = ENV['DB_PASSWORD']
DB_DATABASE = ENV['DB_DATABASE']

CHALLENGES_REPO = 'wolfymaster/nwpatech'
CHALLENGES_REPO_PATH = '/'
CHALLENGES_REPO_BRANCH = 'master'

db_connection_string ||= "mysql2://%s:%s@%s:%i/%s" % [DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE]

DB = Sequel.connect(db_connection_string, max_connections: 10)

def github(event:, context:)
    client = Octokit::Client.new(:login => ENV['GH_USER'], :password => ENV['GH_PASS'])
    files = client.contents(CHALLENGES_REPO, path: CHALLENGES_REPO_PATH, query: {ref: CHALLENGES_REPO_BRANCH})

    challenges = DB.from(:challenges)

    {
        statusCode: 200,
        body: {
          directories: filter_directories(files).map do |f| f.name end,
          challenges: process_challenges(challenges)
        }.to_json
    }
end


private

def filter_directories(files)
    files.select do |f|
        f.type === "dir"
    end
end

def process_challenges(challenges)
    challenges.map([:name, :branch])
end
