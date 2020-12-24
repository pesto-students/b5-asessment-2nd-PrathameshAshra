const arrayCubeRootToJson = arr => {
 
  let objResult = {}
    if(typeof arr ==='boolean'){
      throw new Error();
  
    }
  try {
    for(let i = 0; i < arr.length;i++){
        let value = convertIntoCube(arr[i])
        if(arr[i]=== null || arr[i] === false ||isNaN(value)   ){
          throw new Error();
  
        }
        objResult[arr[i]]=convertIntoCube(arr[i])
    }
  }
    catch{
      throw new Error();
  
    }
    return objResult
};

module.exports =  arrayCubeRootToJson ;
const convertIntoCube = (number)=>{
  return Math.cbrt(number)
}

// arr1 = [27, 64, 125]
// arr2 = ['27', '64', '125', 1]
// arr3 =[-1, 1, Infinity, 64, -64]
// arr4 =true
// arr5 =[null, false]
// arr6 =undefined
// arr7 =[1, 2, 4, 'abc']
// arr8 =[1, 2.12, 4.44, 'abc']

// console.log(arrayCubeRootToJson(arr1),"1")
// console.log(arrayCubeRootToJson(arr2),"2")
// console.log(arrayCubeRootToJson(arr3),"3")
// console.log(arrayCubeRootToJson(arr4),"4")
// console.log(arrayCubeRootToJson(arr5),"5")
// console.log(arrayCubeRootToJson(arr6),"6")
// console.log(arrayCubeRootToJson(arr7),"7")
// console.log(arrayCubeRootToJson(arr8),"8")