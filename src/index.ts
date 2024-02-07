import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import { Construct } from 'constructs';

export interface ISimpleAuroraClientProps {
  vpc: ec2.IVpc;
  engine: rds.IClusterEngine;
  dbInstanceType: ec2.InstanceType;
}
export class SimpleAuroraClient extends Construct {
  // Includes EC2(with SSM Session Manager), Aurora
  constructor(scope: Construct, id: string, props: ISimpleAuroraClientProps) {
    super(scope, id);
    new ec2.Instance(this, 'Instance', {
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
      vpc: props.vpc,
      machineImage: ec2.MachineImage.latestAmazonLinux2(),
    });

    new rds.DatabaseCluster(this, 'Database', {
      engine: props.engine,
      writer: rds.ClusterInstance.provisioned('Writer', {
        instanceType: props.dbInstanceType,
      }),
      readers: [
        rds.ClusterInstance.provisioned('Reader', {
          instanceType: props.dbInstanceType,
        }),
      ],
      vpc: props.vpc,
      vpcSubnets: props.vpc.selectSubnets({
        availabilityZones: props.vpc.availabilityZones,
      }),
    });
  }
}