const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  isChainFinish: false,
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (this.isChainFinish) {
      this.chain = [];
      this.isChainFinish = false;
    }
    if (value === undefined) {
      this.chain.push('(  )');
      return this;
    }
    this.chain.push(`( ${value} )` || '(  )');
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.chain.length || typeof position !== 'number' || isNaN(position)) {
      this.chain = [];
      throw new TypeError("You can\'t remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.isChainFinish = true;
    return this.chain.join('~~');
  }
};

module.exports = {
  chainMaker
};
