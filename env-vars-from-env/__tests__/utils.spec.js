const {filterVarsWithPrefix} = require('../utils');

describe('filterVarsWithPrefix', () => {
    [
        ['no vars return empty list', {}, 'my_prefix_', {}],
        ['vars but none with that prefix return empty list', {a: 'b', bc: 'd'}, 'my_prefix_', {}],
        ['vars but not all with that prefix return list with those with that prefix', {a: 'b', a_b: 'c', bc: 'd', a_c: 'd'}, 'a_', {b: 'c', c: 'd'}],
    ]
        .forEach(
            ([name, vars, prefix, expected]) => it(name, () => {
                expect(filterVarsWithPrefix(vars, prefix)).toEqual(expected);
            })
        )
    ;
})