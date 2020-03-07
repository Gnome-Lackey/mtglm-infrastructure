const { exec } = require("child_process");

async function runCommand(cmd) {
  await new Promise((reject, resolve) => {
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
  let passing = true;
  passing = await runCommand('mkdir mtglm');
  passing = await runCommand('cd mtglm && git clone [repo]');
  // Todo: rest of commands go here
}

pullRepositories();
