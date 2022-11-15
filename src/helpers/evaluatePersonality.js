let col1 = 0
let col2 = 0
let col3 = 0
let col4 = 0
let col5 = 0
let col6 = 0
let col7 = 0
let col8 = 0
export let msg = ''

export const evaluatePersonality = (obj, recursed = false) => {
    for (let key in obj) {
      const questionNumber = (q) =>
        Number(q.match(/\d+/)) ? Number(q.match(/(\d+)/)[0]) : ''
      if (
        typeof key === 'string' &&
        // below checks if it is the personalite questions
        questionNumber(key) >= 5 &&
        questionNumber(key) <= 24
      ) {
        // below code checks if the property is an object
        if (typeof obj[key] === 'object') {
          // if it is an object it will call the original function recursively to loop over the data again
          evaluatePersonality(obj[key], true)
        }
      }
      if (recursed) {
        // here we are doing some conditional checks to sum the totals to each answer
        if (questionNumber(obj[key]) === 1) col1 = col1 + 1
        if (questionNumber(obj[key]) === 2) col2 = col2 + 1
        if (questionNumber(obj[key]) === 3) col3 = col3 + 1
        if (questionNumber(obj[key]) === 5) col4 = col4 + 1
        if (questionNumber(obj[key]) === 4) col5 = col5 + 1
        if (questionNumber(obj[key]) === 6) col6 = col6 + 1
        if (questionNumber(obj[key]) === 7) col7 = col7 + 1
        if (questionNumber(obj[key]) === 8) col8 = col8 + 1
      }
    }

    if (!recursed) {
      // change the below to set the rating on the personalities
      if (col5 >= 10 || (col5 >= 8 && col4 >= 2)) {
        msg = 'very nice'
      } else if (col4 >= 10 || (col4 >= 8 && col3 >= 2)) {
        msg = 'nice'
      } else if (col3 >= 10 || (col3 >= 8 && col2 >= 2)) {
        msg = 'not bad'
      } else if (col2 >= 10 || (col2 >= 8 && col1 >= 2)) {
        msg = 'bad'
      } else {
        msg = 'not enough answers selected'
      }
      // return (
      console.log(
        'Scores\n',
        'column1:',
        col1,
        '\ncolumn2:',
        col2,
        '\ncolumn3:',
        col3,
        '\ncolumn4:',
        col4,
        '\ncolumn5:',
        col5,
        '\ncolumn6:',
        col6,
        '\ncolumn7:',
        col7,
        '\ncolumn8:',
        col8
      )
      console.log(msg)
      // )
    }
  }