module.exports = function solveSudoku(arr) {
  mySudoku(arr);
  return arr;
};

function mySudoku(arr) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (arr[i][j] == 0) {
          let possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          for (let z = 0; z < 9; z++) {
          
          let pos = possibilities.shift();
            if (checkPossibilities(i, j, pos, arr)) {
              arr[i][j] = pos;
            
            if (mySudoku(arr)) {
              return true;
            } else {
              arr[i][j] = 0;
            }
          }
        }
        
        return false;
      } 
    }
  }
  return true;
}



function checkPossibilities(x, y, val, array) { 
  
  let arrayOfX = [];
  
  for (let i = 0; i < 9; i++) {
    
      arrayOfX.push(array[x][i]);
        
  }

  let arrayOfY = [];

  for (let i = 0; i < 9; i++) {
    
      arrayOfY.push(array[i][y]);
    
  }

  let arrayOfBlock = [];

  for (let i = Math.floor(x / 3) * 3, u = 0; u < 3; i++, u++) {
    for (let j = Math.floor(y / 3) * 3, p = 0; p < 3; j++, p++) {
      
        arrayOfBlock.push(array[i][j]);
           
    }
  }

  if (arrayOfX.includes(val) || arrayOfY.includes(val) || arrayOfBlock.includes(val)) {
    return false;
  } else {
    return true;
  }

}
