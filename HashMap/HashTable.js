class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      // set the array at that index to an empty array
      this.keyMap[index] = [];
    }
    // push the key and value into the array
    this.keyMap[index].push([key, value]);

    return this.keyMap;
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        // [["darkBlue","#ff2300"], ["darkBlue","#ff2300"],....[currentKey,currentValue]]
        const currentKey = this.keyMap[index][i][0];
        const currentValue = this.keyMap[index][i][1];
        if (currentKey === key) {
          // return key value pair
          return [currentKey, currentValue];
        }
      }
    }
    return undefined;
  }

  keys() {
    let length = this.keyMap.length;
    let keys = [];

    for (let i = 0; i < length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keys.includes(this.keyMap[i][j][0]))
            keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }

  values() {
    let length = this.keyMap.length;
    let values = [];

    for (let i = 0; i < length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!values.includes(this.keyMap[i][j][1]))
            values.push(this.keyMap[i][j][1]);
        }
      }
    }
    return values;
  }
}

const hashtable = new HashTable();
hashtable.set("salmon", "#ff2300");
hashtable.set("darkBlue", "#bbf2323");
hashtable.set("salmon", "#ff2300");
hashtable.set("darkBlue", "#bbf2323");
console.log(hashtable.keys());
console.log(hashtable.values());
