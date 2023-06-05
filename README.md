# API-2-QUESTION

An API that receives an user info and a question then access ChatGPT public api to get an answer and store in the user doc. This project is made to work with [api-1-users](https://github.com/henriqueyun/api-1-users).

## Environment

Setup environment making a copy of [.env.example](./.env.example) and naming it `.env`, then replace OPENAI_API_KEY value with yours.

## Running

To run this project, make sure have ran the api-1-users and have completed the environment step above, then:

1. Build the docker image with the script
```
./build.sh
```

2. Run a container and add it to api-1-users network with:
```
./docker.run.sh
```

## Tests

I didn't built many tests, but they're set n' up with, run then by `yarn install && yarn test`