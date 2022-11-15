let column1 = 0
let column2 = 0
let column3 = 0
let column4 = 0
let column5 = 0

var table = document.getElementById('question5')

for (var i = 1; i < 7; i++) {
  if ((table[i] = 'column 1')) {
    column1++
  } else if (table[i] === 'column 2') {
    column2++
  } else if (table[i] === 'column 3') {
    column3++
  } else if (table[i] === 'column 4') {
    column4++
  } else if (table[i] === 'column 5') {
    column5++
  }
}
var table = document.getElementById('question6')

for (var i = 1; i < 7; i++) {
  if ((table[i] = 'column 1')) {
    column1++
  } else if ((table[i] = 'column 2')) {
    column2++
  } else if ((table[i] = 'column 3')) {
    column3++
  } else if ((table[i] = 'column 4')) {
    column4++
  } else if (table[i] === 'column 5') {
    column5++
  }
}
if (column5 >= 10 || (column5 >= 8 && column4 >= 2)) {
  alert('very nice')
} else if (column4 >= 10 || (column4 >= 8 && column3 >= 2)) {
  alert('nice')
} else if (column3 >= 10 || (column3 >= 8 && column2 >= 2)) {
  alert('not bad')
} else if (column2 >= 10 || (column2 >= 8 && column1 >= 2)) {
  alert('bad')
}
