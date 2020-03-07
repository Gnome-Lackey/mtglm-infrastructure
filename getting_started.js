const { exec } = require("child_process");

function runCommand(cmd) {
  return new Promise((reject, resolve) => {
    exec(cmd, (err) => {
      if (err) {
        console.log(`Error running command: ${cmd}`);
        console.log(err);
        reject(false);
      } else {
        console.log(`Successfully ran command: ${cmd}`);
        resolve(true);
      }
    });
  });
}

async function pullRepositories() {
  const promises = [];

  promises.push(runCommand('mkdir mtglm'));
  promises.push(runCommand('cd mtglm && git clone [repo]'));
  promises.push(runCommand('cd mtglm && git clone [repo]'));
  promises.push(runCommand('cd mtglm && git clone [repo]'));
  promises.push(runCommand('cd mtglm && git clone [repo]'));
  promises.push(runCommand('cd mtglm && git clone [repo]'));
  promises.push(runCommand('cd mtglm && git clone [repo]'));
  promises.push(runCommand('cd mtglm && git clone [repo]'));

  const passing = await Promise.all(promises)

  return passing.every(pass => pass);
}

pullRepositories();

async function buildRepositories() {
  const promises = [];

  promises.push(runCommand('cd mtglm/[repo] && yarn build'));
  promises.push(runCommand('cd mtglm/[repo] && yarn build'));
  promises.push(runCommand('cd mtglm/[repo] && yarn build'));
  promises.push(runCommand('cd mtglm/[repo] && yarn build'));
  promises.push(runCommand('cd mtglm/[repo] && yarn build'));
  promises.push(runCommand('cd mtglm/[repo] && yarn build'));
  promises.push(runCommand('cd mtglm/[repo] && yarn build'));

  const passing = await Promise.all(promises)

  return passing.every(pass => pass);
}

buildRepositories();
