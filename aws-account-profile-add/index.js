const fs = require('fs');
const core = require('@actions/core');

try {
    const dir = `${process.env.HOME}/.aws`;
    fs.existsSync(dir) || fs.mkdirSync(dir);
    fs.appendFileSync(
        `${dir}/credentials`,
        `[${core.getInput('name')}]\naws_access_key_id=${core.getInput('aki')}\naws_secret_access_key=${core.getInput('sak')}\n\n`
    );
} catch (e) {
    core.setFailed(e.message);
}
