var chocolateBars=['snickers','hundred grand','kitkat','skittles']
chocolateBars()
console.log (chocolateBars)

function addElementToBeginningOfArray(a,b){
return[b,...a]
}

function destructivelyAddElementToBeginningOfArray(a,b){
a.unshift(b)
return a 
}

function addElementToEndOfArray(a,b){
  return[...a,b]
}
function destructivelyAddElementToEndOfArray(a,b){
 a.push(b) 
 return a 
}

function accessElementInArray(array,index){
  array[index]
  
}