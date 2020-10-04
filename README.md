# AWS Lambda Serverless Starter

## Manual Deployment

You will need to periodically update your AWS token.

- Log in to AWS.
- Click `Command line or programmatic access` next to the profile for the account you want to use.
- Copy "Option 2", titled "Add a profile to your AWS credentials file"
- On your machine, go to `~/.aws` and paste that into the `credentials` file.
- Replace the title of the block with a less cryptic name e.g. my-service-staging.

e.g.

```
[my-service-staging]
aws_access_key_id = <your key ID here>
aws_secret_access_key = <your key here>
aws_session_token = <your token here>
```

Or rename the profile to `default` so that you can skip specifying `AWS_PROFILE` in the commands below, e.g.

```
[default]
aws_access_key_id = <your key ID here>
...
```

### Deploying One Function

```
AWS_PROFILE=my-service-staging yarn run deploy-function <function-name>
```

### Deploying all Functions

```
AWS_PROFILE=my-service-staging yarn run deploy
```
