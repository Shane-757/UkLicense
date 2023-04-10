const driver = require('./license');

describe('Test custom Made Licenses', () => {
  test('Works with Males', () => {
    let data = ['John', 'James', 'Smith', '01-Jan-2000', 'M'];
    let result = driver(data);
    let finalAnswer = 'SMITH001010JJ9AA';

    expect(result).toEqual(finalAnswer);
  });
  test('Works with Females', () => {
    let data = ['Johanna', '', 'Gibbs', '13-Dec-1981', 'F'];
    let result = driver(data);
    let finalAnswer = 'GIBBS862131J99AA';

    expect(result).toEqual(finalAnswer);
  });
  test('Works with multiple versions of date inputs', () => {
    let data = ['Andrew', 'Robert', 'Lee', '02-September-1981', 'M'];
    let result = driver(data);
    let finalAnswer = 'LEE99809021AR9AA';

    expect(result).toEqual(finalAnswer);
  });
});
