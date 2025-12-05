import { Construct } from "constructs";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";

export class Index extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    const helloFunction = new NodejsFunction(this, "function", {
      bundling: {
        externalModules: ["aws-sdk"],
      },
    });
    new LambdaRestApi(this, "apigw", {
      handler: helloFunction,
    });
  }
}
