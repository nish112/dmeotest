const sum = require('../src/math');

test('adds 1 + 3 to equal 4', () => {
    expect(sum(1, 3)).toBe(4);
});

test('adds -1 + -1 to equal -2', () => {
    expect(sum(-1, -1)).toBe(-2);
});
