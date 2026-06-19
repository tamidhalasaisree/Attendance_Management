
const age=16
const licence=true
if(age>=18){
    if(licence)
       console.log("You can drive")
    } else if(age>=18&& !licence){
        console.log("You need a valid license to drive")
    }
    else{
      console.log("You are not old enough to drive")
    }

    
  
    const obj={
      name:"Samsung A50",
      disc:"Stlish Phone",
      price:25000
    }
  for(let mobile in obj){
    console.log(obj[mobile])
  }
  const arr2=[{
      name:"Samsung A50",
      disc:"Stylish Phone",
      price:25000
  },
  {
      name:"Google pixel",
      disc:"Stylish Phone",
      price:35000
  },
  {
      name:"One Plus",
      disc:"Stylish Phone",
      price:25000
  }
];
 for(let mobile of arr2){
    //console.log(mobile)
    for(let details in mobile){
      console.log(mobile[details])
    }
}   

  
  


