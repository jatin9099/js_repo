//object 
//by literals
const sy = Symbol("key1")
//console.log(sy);
const obj={ name:"jatin",
    "full name":"jatin kishor",
    age:12,
    tall:true,
    [sy]:"mykey"// sy:"mykey" if will become string(by obj.sy) instead of symbol so we use [sy]:"mykey"
}

console.log(obj.name);//not good way to access
console.log(obj["name"]);//best way
console.log(obj["full name"]);//it is only access by this not  obj."full name"

console.log(obj[sy]);

//to make change in value of element
obj.age=22
console.log(obj["age"]);

//to freeze object 
// Object.freeze(obj)//after that we can't make changes
// obj.age=12
//console.log(obj[age]);  //we cant make change it show undefined
//console.log(obj);

obj.greeting = function(){
    console.log("i am function"); 
}
obj.greeting2 = function(){console.log(`i am 2nd fn ${this.name}`);
}

console.log(obj.greeting());
console.log(obj.greeting2());











