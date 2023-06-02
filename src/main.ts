import * as core from '@actions/core'
import * as github from "@actions/github";
import { GitHub } from "@actions/github/lib/utils";

async function run(): Promise<void> {
  try {
    core.debug("Start");
    const token = core.getInput("github-token", { required: true });
    const octokit = github.getOctokit(token);

    //const labelNames = await getPullRequestLabelNames(octokit);
    //core.debug(`PR label names: ${labelNames}`);

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
