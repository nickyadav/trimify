const trimify = require('../lib/index');
const expect = require('chai').expect;

describe('TRIM WHITESPACE(S)', () => {
  it('should remove whitespace(s)', function () {
    expect(trimify('\t  This is a string.  \t')).to.equal('This is a string.');
  });
  it('should remove any leading whitespace(s)', function () {
    expect(trimify.lead('  This string only contains leading whitespaces.  \t')).to.equal('This string only contains leading whitespaces.  \t');
  });
  it('should remove any trailing whitespace(s)', function () {
    expect(trimify.trail('\t  This string only removes any trailing whitespace(s).   \t')).to.equal('\t  This string only removes any trailing whitespace(s).');
  });
});