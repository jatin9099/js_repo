const obj = new Object()//it is singleton obj 

// const obj={}  it is same as 1st line but it is not singleton obj

console.log(obj)// = {} bcoz it contain null 

// obj.id="123abc"
// obj.name="sole"
// console.log(obj);

//object inside object 

const obj2 = {
    email:"123@gmail.com",
    fname:{
        userfullname:{
            firstname : "jatin",
            lastname: "kishor"
        }
    }
}
console.log(obj2.fname.userfullname.firstname);

// to merge object 
const ob={1:"a",2:"b"}
const ob1={3:"c",4:"d"}

const ob2=Object .assign({},ob,ob1)

//spread method which is most use for merge 
//const ob2={...ob,...ob1}

console.log(ob2);

const arr=[{id:1,roll:1},
    {id:2,roll:3},
    {id:3,roll:3}
]
console.log(arr);
console.log("hello ");

console.log(Object.keys(obj2));

const course = {
    coursename : "javascript",
    courseprice : "9999",
    courseinstructor : "jatin"
}
console.log(course.courseinstructor);
//if i want to write multiple time 

const {courseinstructor}=course
console.log(courseinstructor);


