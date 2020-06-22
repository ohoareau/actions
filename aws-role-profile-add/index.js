const fs = require('fs');
const core = require('@actions/core');

try {
    const name = core.getInput('name');
    const dir = `${process.env.HOME}/.aws`;
    fs.existsSync(dir) || fs.mkdirSync(dir);
    fs.appendFileSync(
        `${dir}/config`,
        `[profile ${name}]\nsource_profile=${core.getInput('source')}\nrole_arn=${core.getInput('role')}\n\n`
    );
} catch (e) {
    core.setFailed(e.message);
}
