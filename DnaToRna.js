const transform = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'G':
        result = result + "C";
        break;
      case 'C':
        result = result + "G";
        break;
      case 'T':
        result = result + "A";
        break;
      case 'A':
        result = result + "U";
        break;
      default: return null;
    }
  }
  return result;
}
let str = 'TTCA';
console.log('результат преобразования ' + str + ' в РНК: ' + transform(str));