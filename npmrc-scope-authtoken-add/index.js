const fs = require('fs');
const core = require('@actions/core');

try {
    fs.appendFileSync(
        `${process.env.HOME}/.npmrc`,
        `//${core.getInput('registry')}/:_authToken=${core.getInput('token')}\n@${core.getInput('scope')}:registry=https://${core.getInput('registry')}\n\n`
    );
} catch (e) {
    core.setFailed(e.message);
}
