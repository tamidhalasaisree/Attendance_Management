// const age=16
// const licence=true
// if(age>=18){
//     if(licence)
//        console.log("You can drive")
//     } else if(age>=18&& !licence){
//         console.log("You need a valid license to drive")
//     }
//     else{
//       console.log("You are not old enough to drive")
//     }



//     const obj={
//       name:"Samsung A50",
//       disc:"Stlish Phone",
//       price:25000
//     }
//   for(let mobile in obj){
//     console.log(obj[mobile])
//   }
//   const arr2=[{
//       name:"Samsung A50",
//       disc:"Stylish Phone",
//       price:25000
//   },
//   {
//       name:"Google pixel",
//       disc:"Stylish Phone",
//       price:35000
//   },
//   {
//       name:"One Plus",
//       disc:"Stylish Phone",
//       price:25000
//   }
// ];
//  for(let mobile of arr2){
//     //console.log(mobile)
//     for(let details in mobile){
//       console.log(mobile[details])
//     }
// }   
// const arr=[10,5,500,602,45,[5,3,25]]
// console.log(arr.push(6))
// console.log(arr)
// console.log(arr.pop())
// console.log(arr)
// console.log(arr.unshift("Arun"))
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)

// const arr2=[10,"Vamshi",500,"Sathi babu"]
// arr2.splice(2,1)
// console.log(arr2)
// arr2.splice(0,2,"karthik")
// console.log(arr2)
//  const arr3=["Arun","Vamshi","Anusha"]
//  console.log(arr3.includes())

//  const  studentreport = arr.find(
//   s => s.name === "Teja"
// )
// console.log(studentreport)

// arr.forEach(student =>{
//   console.log(student)
// })        //for each method is used to iterate each element from an array

// const  modarr = arr.map(student =>console.log(student))
// console.log(modarr)

//  const arrx=[2,50,18]
//  const modarrx = arrx.map(element => element + 5)
//  console.log(modarrx)

//  const filter_arr= arr.filter(student => student.Dept === "CSM")
//  console.log(filter_arr)

//  console.log(filter_arr.length)
//  const marks =[25,75,30,20,82,65]
//  const total= marks.reduce(
//     (sum,sub)=> sum+ sub , 0
//  )
//  console.log(total)
// const arr =[25,750,30,20,82,65]
// const sotedar=arr.sort()
// console.log(sotedar)
// arr.sort(
//   (a,b) => b-a
// )
// console.log(arr)
// arr.sort(
//   (a,b) => a-b
// )
// console.log(arr)

// const students = [
//   { rollNo: 101, name: "Arun", department: "CSE", marks: 85 },
//   { rollNo: 102, name: "Ravi", department: "CSD", marks: 22 },
//   { rollNo: 103, name: "Sita", department: "CSM", marks: 78 },
//   { rollNo: 104, name: "Kiran", department: "IT", marks: 45 },
//   { rollNo: 105, name: "Priya", department: "CSO", marks: 91 },

//   { rollNo: 106, name: "Rahul", department: "CSE", marks: 30 },
//   { rollNo: 107, name: "Sneha", department: "CSD", marks: 67 },
//   { rollNo: 108, name: "Teja", department: "CSM", marks: 55 },
//   { rollNo: 109, name: "Divya", department: "IT", marks: 29 },
//   { rollNo: 110, name: "Ajay", department: "CSO", marks: 72 },

//   { rollNo: 111, name: "Anil", department: "CSE", marks: 95 },
//   { rollNo: 112, name: "Meena", department: "CSD", marks: 41 },
//   { rollNo: 113, name: "Vamsi", department: "CSM", marks: 18 },
//   { rollNo: 114, name: "Nisha", department: "IT", marks: 88 },
//   { rollNo: 115, name: "Kavya", department: "CSO", marks: 36 },

//   { rollNo: 116, name: "Ramesh", department: "CSE", marks: 50 },
//   { rollNo: 117, name: "Pooja", department: "CSD", marks: 93 },
//   { rollNo: 118, name: "Tarun", department: "CSM", marks: 34 },
//   { rollNo: 119, name: "Deepika", department: "IT", marks: 62 },
//   { rollNo: 120, name: "Manoj", department: "CSO", marks: 28 },

//   { rollNo: 121, name: "Lokesh", department: "CSE", marks: 74 },
//   { rollNo: 122, name: "Anusha", department: "CSD", marks: 81 },
//   { rollNo: 123, name: "Sai", department: "CSM", marks: 39 },
//   { rollNo: 124, name: "Harika", department: "IT", marks: 27 },
//   { rollNo: 125, name: "Keerthi", department: "CSO", marks: 58 },

//   { rollNo: 126, name: "Bhanu", department: "CSE", marks: 33 },
//   { rollNo: 127, name: "Mahesh", department: "CSD", marks: 46 },
//   { rollNo: 128, name: "Jyothi", department: "CSM", marks: 87 },
//   { rollNo: 129, name: "Chandu", department: "IT", marks: 53 },
//   { rollNo: 130, name: "Suresh", department: "CSO", marks: 20 }
// ];
// const passedstudents=students.filter(student  => student.marks>=35)
// console.log("Passedstudents")
// console.log(passedstudents)
// const csedept=students.filter(student  => student.department==="CSE")
// console.log(csedept)
// const csddept=students.filter(student  => student.department==="CSD")
// console.log(csddept)
// const csmdept=students.filter(student  => student.department==="CSM")
// console.log(csmdept)
// const itdept=students.filter(student  => student.department==="IT")
// console.log(itdept)
// const csodept=students.filter(student  => student.department==="CSO")
// console.log(csodept)
// const students = [
//   { rollNo: 101, name: "Arun", department: "CSE", marks: 85, placed: true, package: 12 },
//   { rollNo: 102, name: "Ravi", department: "IT", marks: 65, placed: false, package: 0 },
//   { rollNo: 103, name: "Sita", department: "CSD", marks: 92, placed: true, package: 15 },
//   { rollNo: 104, name: "Rahul", department: "CSM", marks: 55, placed: true, package: 6 },
//   { rollNo: 105, name: "Priya", department: "CSO", marks: 88, placed: true, package: 18 },
//   { rollNo: 106, name: "Ajay", department: "CSE", marks: 72, placed: false, package: 0 },
//   { rollNo: 107, name: "Sneha", department: "IT", marks: 81, placed: true, package: 10 },
//   { rollNo: 108, name: "Kiran", department: "CSD", marks: 49, placed: false, package: 0 },
//   { rollNo: 109, name: "Deepika", department: "CSM", marks: 90, placed: true, package: 14 },
//   { rollNo: 110, name: "Manoj", department: "CSO", marks: 76, placed: true, package: 8 }
// ];
//  const placedStudents = students.filter(student => student.placed)
// console.log(placedStudents)
// const  placedStudentNames=placedStudents.map(student =>({
//   name:student.name,
//   package:student.package
// }))
// console.log(placedStudentNames)
// const avgPackage = students.reduce((sum, student) => sum + student.package,0)/placedStudents.length
// console.log(avgPackage);
// const highestoffer = students.sort((a,b) => b.package - a.package)
// console.log(highestoffer[0])
// const moreplaced=placedStudentNames.filter(student => student.package >=10)
// moreplaced.map(student=> console.log(student.name))


