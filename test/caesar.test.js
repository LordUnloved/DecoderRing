// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar function", () => {
  it("if shift is equal to 0, return false", () => {
    const input = "et tu brute";
    const shift = 0;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });

  it("if shift is less then -25, return false", () => {
    const input = "et tu brute";
    const shift = -26;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });

  it("if shift is greater then 25 return false", () => {
    const input = "et tu brute";
    const shift = 26;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });

  it("if no shift value is present return false", () => {
    const input = "et tu brute";
    const actual = caesar(input);

    expect(actual).to.be.false;
  });

  it("encode by shifting right", () => {
    const input = "et";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "hw";

    expect(actual).to.equal(expected);
  });

  it("decode by shifting left", () => {
    const input = "hw";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "et";

    expect(actual).to.equal(expected);
  });

  it("ignores capital letters", () => {
    const lowercaseInput = "ET TU BRUTE";
    const uppercaseInput = "et tu brute";
    const shift = 3;
    const lowercaseCall = caesar(lowercaseInput, shift);
    const uppercaseCall = caesar(uppercaseInput, shift);

    expect(lowercaseCall).to.equal(uppercaseCall);
  });

  it("is able to wrap around the alphabet", () => {
    const input = "z";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "c";

    expect(actual).to.equal(expected);
  });

  it("maintains spaces and symbols during encode", () => {
    const input = "et tu brute?";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "hw wx euxwh?";

    expect(actual).to.equal(expected);
  });

  it("maintains spaces and symbols during decode", () => {
    const input = "hw wx euxwh?";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "et tu brute?";

    expect(actual).to.equal(expected);
  });

  it("encodes with negative shift", () => {
    const input = "et tu brute";
    const shift = -3;
    const actual = caesar(input, shift);
    const expected = "bq qr yorqb";

    expect(actual).to.equal(expected);
  });
});