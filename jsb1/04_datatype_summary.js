// primitive

// 7 types : String, Number,Boolean , null, undefined , symbol,BigInt

const score = 100
const scoreValue = 100.3

const inlog =false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const ida = Symbol('123')
 console.log(id==ida);

 const big_no=24223444443343224234n
 console.log(big_no);

//reference (non primitive)
 
// array , object , function

const heros = [1,2,3,4,5]
let my_obj = {
    name:"jatin",
    age:22
}

const my_function = function(){
    console.log(hello);
    
}
console.log(heros);
console.log(my_obj);
console.log ( typeof outsideTemp);

// memory in js
//two types : 1 stack(use by primitive ) 2 Heap(use by non primitive)

let user1={
    name:"hello" , 
     age:21
}
let user2=user1
user1.name="jatin";
console.log(user1);





 
 


