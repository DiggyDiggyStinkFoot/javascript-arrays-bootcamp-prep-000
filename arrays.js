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
  return array[index]
  
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
}

function removeElementFromBeginningOfArray(array){
  array.slice()
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
}

function RemoveElementFromEndOfArray(Array){
  array.slice(array.length-1)
}





