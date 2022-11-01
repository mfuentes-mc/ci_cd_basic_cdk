import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CiCdBasicCdkStack } from '../lib/ci_cd_basic_cdk-stack';


const app = new cdk.App();

new CiCdBasicCdkStack(app,'CiCdBasicCdkStack',{
  env:{
    account: '108072982334',
    region: 'us-west-2'
  }
});

app.synth();