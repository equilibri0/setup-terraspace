import * as core from '@actions/core';
import * as exec from '@actions/exec';
import * as path from 'path';
import * as fs from 'fs';

async function run() {
  try {
    // Install tfenv and Terraform
    await exec.exec('brew install tfenv');

    const tfVersion = core.getInput('tf_version') || 'latest';
    await exec.exec(`tfenv install ${tfVersion}`);
    await exec.exec(`tfenv use ${tfVersion}`);

    // Change directory to Terraspace project
    const projectPath = core.getInput('ts_project') || '.';
    const absoluteProjectPath = path.resolve(process.env.GITHUB_WORKSPACE || '', projectPath || '');
    process.chdir(absoluteProjectPath);

    // Check if Gemfile exists
    if (!fs.existsSync('Gemfile')) {
      core.setFailed('Gemfile not found in the Terraspace project directory. Please ensure a Gemfile is present before running this action.');
      return;
    }

    // Install Ruby gems
    await exec.exec('bundle install');

    // Install Terraspace
    await exec.exec('bundle exec terraspace new shim');
  } 
  catch (error) {
    core.setFailed((error as Error).message);
  }
}

run();
