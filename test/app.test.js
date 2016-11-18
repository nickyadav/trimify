const trimify = require('../lib/index');
const expect = require('chai').expect;

describe('TRIM WHITESPACE(S)', () => {
  it('should remove whitespace(s)', function () {
    expect(trimify('  This is a string.  ')).to.equal('This is a string.');
  });
  it('should remove any leading whitespace(s)', function () {
    expect(trimify.lead('  This string only contains leading whitespaces.')).to.equal('This string only contains leading whitespaces.');
  });
  it('should remove any trailing whitespace(s)', function () {
    expect(trimify.trail('  This string only removes any trailing whitespace(s).   ')).to.equal('  This string only removes any trailing whitespace(s).');
  });
});