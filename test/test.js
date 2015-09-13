var      chai = require('chai'),
strReplaceAll = require('../index');

describe('str replace all', function () {

  it("doesn't break on empty haystack", function () {
    chai.expect(strReplaceAll("a", "b", "")).to.equal("");
  });

  it("doesn't break on empty needle", function () {
    chai.expect(strReplaceAll("", "d", "abc")).to.equal("abc");
  });

  it("doesn't break on empty replace", function () {
    chai.expect(strReplaceAll("a", "", "abc")).to.equal("bc");
  });

  it("works with a haystack that doesn't contain the needle", function () {
    chai.expect(strReplaceAll("x", "y", "abc")).to.equal("abc");
  });

  it('replaces the needle(s) in a haystack that contains the needle once', function () {
    chai.expect(strReplaceAll("a", "d", "abc")).to.equal("dbc");
  });

  it('replaces the needles in a haystack that contains the needle multiple times', function () {
    chai.expect(strReplaceAll("a", "d", "abcabcabc")).to.equal("dbcdbcdbc");
  });

  it('replaces the needles in a haystack that contains only the needle multiple times', function () {
    chai.expect(strReplaceAll("a", "d", "aaaaaa")).to.equal("dddddd");
  });

  it('replaces the needle with a replace equal to needle', function () {
    chai.expect(strReplaceAll("a", "a", "abc")).to.equal("abc");
  });

  it('replaces a needle that contains special regexp characters', function () {
    chai.expect(strReplaceAll("$", "x", "$bc")).to.equal("xbc");
    chai.expect(strReplaceAll(".", "x", "ab.")).to.equal("abx");
    chai.expect(strReplaceAll("^", "x", "a^c")).to.equal("axc");
  });

});
