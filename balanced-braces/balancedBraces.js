
function balancedBraces(args) {
  isBalanced = false
  openStack = []
 for(let i = 0; i < args.length; i ++){
   if((args[i] =="{" )||(args[i] =="[" )||(args[i] == "(")){
     openStack.push(args[i]) 
   }
   if( ( args[i] =="}") || (args[i] =="]" )||(args[i] == ")")){
    if(args[i] ===brackerReverser(openStack[openStack.length-1])){
      openStack.pop()
    }else{
      return isBalanced = false
    }
   }
 }
  if(openStack.length===0){
    isBalanced = true
  }
  return isBalanced;
}
const brackerReverser = (typeOfBracket) =>{
  let closingBracket = ""
if(typeOfBracket == "{"){
  closingBracket = "}"
}
if(typeOfBracket == ")"){
  closingBracket = ")"
}
if(typeOfBracket == "]"){
  closingBracket = "]"
}
if(typeOfBracket == "}"){
  closingBracket = "{"
}
if(typeOfBracket == "("){
  closingBracket = ")"
}
if(typeOfBracket == "["){
  closingBracket = "]"
}

return closingBracket
}
module.exports= balancedBraces;
