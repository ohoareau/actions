const {filterVarsWithPrefix} = require('./utils');
const core = require('@actions/core');

try {
    const secrets = JSON.parse(core.getInput('secrets') || '{}');
    const envName = core.getInput('env');
    const dynVars = filterVarsWithPrefix(secrets, `ENV_${envName.toUpperCase()}_`);
    Object.keys(dynVars).forEach(k => core.exportVariable(k, dynVars[k]));
    core.exportVariable('env', envName);
} catch (e) {
    core.setFailed(e.message);
}
