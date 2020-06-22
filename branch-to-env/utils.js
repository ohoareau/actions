function filterVarsWithPrefix(vars, prefix) {
    const n = prefix.length;
    return Object.keys(vars).reduce((acc, k) => {
        (k.slice(0, n) === prefix) && (acc[k.slice(n)] = vars[k]);
        return acc;
    }, {});
}

module.exports = {
    filterVarsWithPrefix,
};