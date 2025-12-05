import { Stack, type StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Index } from "../src/index/index.ts";

export class WalkingApplicationStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    new Index(this, "Index");
  }
}
