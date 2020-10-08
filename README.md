# AWS Lambda Serverless Starter

## Manual Deployment

### Set up Certificate and Custom Domain

Guide here: https://www.serverless.com/blog/serverless-api-gateway-domain

https://console.aws.amazon.com/acm/home?#

Need an ARN of created certificate in the YAML file for custom domain

### Set up user

You cannot use the root user for the keys. Set up an IAM user _with programmatic access_ (is a checkbox on initialisation). The following permission types should be granted:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Stmt1449904348000",
            "Effect": "Allow",
            "Action": [
                "cloudformation:CreateStack",
                "cloudformation:CreateChangeSet",
                "cloudformation:ListStacks",
                "cloudformation:UpdateStack",
                "cloudformation:DescribeChangeSet",
                "cloudformation:ExecuteChangeSet",
                "cloudformation:DescribeStackResource",
                "cloudformation:DescribeStackEvents",
                "cloudformation:DescribeStacks",
                "cloudformation:ValidateTemplate",
                "s3:CreateBucket",
                "s3:PutBucketPolicy",
                "s3:PutBucketWebsite",
                "s3:PutBucketAcl",
                "s3:GetEncryptionConfiguration",
                "s3:PutEncryptionConfiguration",
                "s3:ListBucket",
                "s3:PutBucketTagging",
                "s3:PutObject",
                "s3:ListAllMyBuckets"
            ],
            "Resource": [
                "*"
            ]
        }
    ]
}
```

Permission generator: https://open-sl.github.io/serverless-permission-generator/

### set up access keys

- Log in to AWS as the IAM user.
- click Profile, "My Security Credentails" - https://console.aws.amazon.com/iam/home?region=us-east-1#/security_credentials
- Create New Access Key and take note of the Access Key Id and Secret Access Key

If you're using MFA, you will also need to generate a session token as follows:

- Run `aws configure` and input these details
- Open `~/.aws/credentials` and make sure the aws_session_token is empty
- execute `aws sts get-session-token --duration-seconds 129600`

The response should look like:

```
{
    "Credentials": {
        "AccessKeyId": "ASIAYY3HXEYU23TS5P",
        "SecretAccessKey": "Jqkrmw0OFeOm0lXDlVVU26nPZShbO8nFP2RfBf",
        "SessionToken": "IQoJb3JpZ2luX2VjENL//////////wEaCXVzLWVhc3QtMiJHMEUCICMTrfN9xCs+sJcxAZ7pw6qm47Ay+TzuItOiqqrSQF85AiEAmWYEDGe8BL+kSkhoXkNPI1ZmxEpk5bXtEk7Hru1YmtEq9AEI+///////////ARAAGgw2MDMxMjM2MjU0MTciDLC6i8Ejebm2zung4SrIAaI8tJaEuEnaXlMJ2ZFFHIVNp4cu+/NqJo+RNvkHr7wicFrba8Tz0QYbjyywA/AH0emeAfDxoY/mE/9jqycKulKYjVXY7f3GzZHHWEfkFU2cyVyLYPrkVYA2+ek2TyFCDBs3ES33DQYEeBQrJCuEHbH4CBLvuNzl4skcCUb5fU+3/7eT72Z0QygRxFz1W39IKqHfPuW6TAe7M2Le8xnVMa4w9An6odP/KF5RnFIR8mVIpKYFcYs/LRW3TK10fgJuR6yn54zSMN3I9PsFOpgBB+/z+djbGPmgcfv1edL18W4jiaoF4WwGnLBL7mIHomykYSS0KsA87vc8WJo0qLHCd3tkvpRx3z3HUjM+KT1Sr35O20Y4c1v9PxjCZqX6OfeAmHaezpTa/+DEKvC/YUY7y0JlgKF1n10JNURZIkFoY919twlffP7yTo9mm/sT7VgMJ6fDeZS0TTL5ql6vFMJJrXsFRRg9Oqg=",
        "Expiration": "2020-10-08T14:13:49+00:00"
    }
}
```

Copy `AccessKeyId`, `SecretAccessKey` and `SessionToken` into `./.aws/credentials`, eg:

```
[default]
aws_access_key_id = <your key ID here>
aws_secret_access_key = <your key here>

```

If you're using MFA, you will also need to generate a session token and set it as `aws_session_token`.

### .aws/credentials

You can set the title of the block to a less cryptic name e.g. my-service-staging.

e.g.

```
[my-service-staging]
aws_access_key_id = <your key ID here>
aws_secret_access_key = <your key here>
```

Or rename the profile to `default` so that you can skip specifying `AWS_PROFILE` in the commands below, e.g.

```
[default]
aws_access_key_id = <your key ID here>
...
```

Dashboard is here: https://app.serverless.com/

## create domain

This command needs to be run the first time before deploying your lambda(s) if you're using a custom domain:

`sls create_domain`

### Deploying One Function

```
AWS_PROFILE=my-service-staging yarn run deploy-function <function-name>
```

### Deploying all Functions

```
AWS_PROFILE=my-service-staging yarn run deploy
```
