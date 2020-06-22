const {filterVarsWithPrefix} = require('./utils');
const core = require('@actions/core');

try {
    const map = require('./mappings.json').default;
    const secrets = JSON.parse(core.getInput('secrets') || '{}');
    const branch = core.getInput('branch') || (process.env.GITHUB_REF || '').replace(/^.+\/([^/]+)$/, '$1');
    const envName = map[branch] || map.default;
    const dynVars = filterVarsWithPrefix(secrets, `ENV_${envName.toUpperCase()}_`);
    Object.keys(dynVars).forEach(k => core.exportVariable(k, dynVars[k]));
    core.exportVariable('env', envName);
} catch (e) {
    core.setFailed(e.message);
}
