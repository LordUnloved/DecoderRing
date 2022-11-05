const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("polybiusModule.polybius", () => {
  it("when decoding, numbers should be equal else return false.", () => {
    const expected = false;
    const actual = polybiusModule.polybius("12 11212", false);
    expect(actual).to.equal(expected);
  });
  it("encoding should output a string", () => {
    const expected = "112131";
    const actual = polybiusModule.polybius("abc", true);
    expect(actual).to.equal(expected);
  });
  it("ignore capital letters", () => {
    const expected = "112131";
    const actual = polybiusModule.polybius("ABC", true);
    expect(actual).to.equal(expected);
  });
  it("maintains spaces", () => {
    const expected = "11 21 31";
    const actual = polybiusModule.polybius("a b c", true);
    expect(actual).to.equal(expected);
  });
  it("decoding with i/j, should give both options", () => {
    const expected = "(i/j)(i/j)";
    const actual = polybiusModule.polybius("4242", false);
    expect(actual).to.equal(expected);
  });
});