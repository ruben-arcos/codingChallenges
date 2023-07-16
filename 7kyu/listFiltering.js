//In this kata you will create a function that takes a list of non-negative 
//integers and strings and returns a new list with the strings filtered out.

// Example
  // filter_list([1,2,'a','b']) == [1,2]
  // filter_list([1,'a','b',0,15]) == [1,0,15]
  // filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

/*

P: create a function that takes a list of non-negative integers and strings 
R: returns a new list with the strings filtered out
E: see example above
P:

*/

//my solution
function filter_list(l) {
    //using filter method to get rid of strings
    return l.filter((numsOnly) => typeof numsOnly === 'number')
  }

  console.log(filter_list([1,2,'a','b']));
  console.log(filter_list([1,2,'aasf','1','123',123]))

  //other solutions

  //1.
  function filter_list(l) {
    return l.filter(e => Number.isInteger(e));
  }

  //2.
  function filter_list(l) {
    let res = [];
                for(let item=0;item<l.length;item++)
                {
                    if (typeof l[item] === "number")
                    {
                        res.push(l[item]);
                    }
      
                }
                return res;
    }