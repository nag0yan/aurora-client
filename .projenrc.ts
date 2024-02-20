import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'nag0yan',
  authorAddress: 'matsui-ka@kadokawa.jp',
  cdkVersion: '2.126.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.2.0',
  name: '@nag0yan/aurora-client',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/matsui-ka/aurora-client.git',
  depsUpgrade: false,
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.synth();


