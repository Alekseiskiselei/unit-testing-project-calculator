/**
 * A simple class containing methods for validating and calculating numbers
 *
 * @class Calculator
 */
class Calculator {
  /**
     * Creates an instance of Calculator.
     * @memberof Calculator
     */
  constructor() {}

  /**
     *
     *
     * @param {*} value value to check
     * @return {Number} if entered value is number
     * @memberof Calculator
     */
  checkInput(value) {
    const typeOfVariable = typeof value;
    if (typeOfVariable !== 'number') {
      throw new Error(`Invalid input. Please enter the number`);
    }
    return value;
  }

  /**
     *
     *
     * @param {*} value1
     * @param {*} value2
     * @return {*} sum of value1 and value2
     * @memberof Calculator
     */
  sum(value1, value2) {
    if (this.checkInput(value1) && this.checkInput(value2)) {
      return value1 + value2;
    }
  }

  /**
   *
   *
   * @param {*} value1
   * @param {*} value2
   * @return {*} result of multiplication of value1 and value2
   * @memberof Calculator
   */
  multiply(value1, value2) {
    if (this.checkInput(value1) && this.checkInput(value2)) {
      return value1 * value2;
    }
  }
}

module.exports = Calculator;