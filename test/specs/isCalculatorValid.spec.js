const calculatorValidator = require('../../app/calculator');
const {expect} = require('chai');


describe(`checkValue positive scenarios`, function() {
  let validator;
    
  beforeEach(function() {
    validator = new calculatorValidator();
  });
  afterEach(function() {
    validator = null;
  });
  it(`should return entered value if this value number`, function() {
    expect(validator.checkInput(5)).to.be.equal(5);
  });
  it('should throw an error if provided with not number value', function() {
    let callWithError = () => validator.checkInput('five');
     expect(callWithError).to.throw(`Invalid input. Please enter the number`);
  });
  it(`should return sum of value1 and value2`, function() {
    expect(validator.sum(5,10)).to.be.equal(15);
  });
  // eslint-disable-next-line linebreak-style
  it(`should return the result of multiplication of value1 and value2`, function() {
    expect(validator.multiply(5, 10)).to.be.equal(50);
  });
})
