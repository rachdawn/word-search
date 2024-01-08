const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false;
    }
    const transposeArray = transpose(letters)
    const verticalJoin = transposeArray.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    return false
}

const transpose = function (matrix) {

    let numRows = matrix.length;
    let numColum = matrix[0].length;
    let newarray = new Array(numColum);
    for (let i = 0; i < numColum; i++){
      newarray[i] = new Array(numRows);
    }
    for (let i = 0; i < numRows; i++) {      
      for (let j = 0; j < numColum; j++){
        newarray[j][i] = matrix[i][j]
      } 
    }
    return newarray; 
    };

module.exports = wordSearch