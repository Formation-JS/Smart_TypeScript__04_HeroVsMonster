
class RandomHelper {

  static generateDegat() {
    return Math.floor(Math.random() * 4) + 2;
  }

  constructor() {
    throw new Error('On instancie pas le helper (╯°□°）╯︵ ┻━┻')
  }

};

export default RandomHelper;