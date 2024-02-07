import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import { SimpleAuroraClient } from '../src';

test('index', () => {
  const app = new App();
  const stack = new Stack(app, 'Stack');
  const vpc = new ec2.Vpc(stack, 'VPC');
  new SimpleAuroraClient(stack, 'SimpleAuroraClient', {
    engine: rds.DatabaseClusterEngine.AURORA_MYSQL,
    dbInstanceType: ec2.InstanceType.of(ec2.InstanceClass.R6G, ec2.InstanceSize.LARGE),
    vpc: vpc,
  });
  const template = Template.fromStack(stack);
  template.resourceCountIs('AWS::EC2::Instance', 1);
  template.resourceCountIs('AWS::RDS::DBCluster', 1);
  template.resourceCountIs('AWS::RDS::DBInstance', 2);
  template.resourceCountIs('AWS::SecretsManager::Secret', 1);
  template.allResourcesProperties('AWS::RDS::DBInstance', {
    PubliclyAccessible: false,
  });
  console.log(template.toJSON());
});