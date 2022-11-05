// Write your tests here!
const expect = require("chai").expect;
const substitutionModule = require("../src/substitution.js");

describe("substitutionModule.substitution", () => {
  it("all characters in alphabet must be unique", () => {
    const noRepeats = false;
    const noRepeatsActual = substitutionModule.substitution(
      "crazy",
      "mxxxtvrlowdybqgfkeacphuns",
      (encode = true)
    );
    expect(noRepeatsActual).to.equal(noRepeats);
  });
  it("maintain spaces.", () => {
    const keepSpaces = "jemsn doi";
    const keepSpacesActual = substitutionModule.substitution(
      "crazy kid",
      "mxjitvrlowdybqgfkeacpzhuns",
      (encode = true)
    );
    expect(keepSpacesActual).to.equal(keepSpaces);
  });
  it("if no alphabet parameter return false", () => {
    const ifEmpty = false;
    const ifEmptyActual = substitutionModule.substitution(
      "crazy",
      "",
      (encode = true)
    );
    expect(ifEmptyActual).to.equal(ifEmpty);
  });
  it("ignor capital letters.", () => {
    const capital = "jemsn";
    const capitalActual = substitutionModule.substitution(
      "cRaZy",
      "mxjitvrlowdybqgfkeacpzhuns",
      (encode = true)
    );
    expect(capital).to.equal(capitalActual);
  });
  it("alphabet parameter must be exactly 26 characters", () => {
    const length = false;
    const lengthActual = substitutionModule.substitution(
      "abc",
      "mxjitvrlowdybqgfkeacphuns",
      (encode = true)
    );
    expect(lengthActual).to.equal(length);
  });
});
