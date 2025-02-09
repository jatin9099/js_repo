const arr=[1,2,3,4]
const arr1=[5,6,7,8]

//arr.push(arr1); //arr1=[1,2,3,4,[5,6,7,8]]
arr2=arr.concat(arr1)//=[1,2,3,4,5,6,7,8] assign in arr2 but cant change in arr1
console.log(arr2);
arr3=[...arr,...arr1]//spread operator use to merge multiple array
console.log(arr3);

arr4=[1,2,3,[4,5,6],7,[8,8,[9,0]]]
arr5=arr4.flat(Infinity);
console.log(arr5);

console.log(Array.isArray("jatin"));//check variable is array or not
console.log(Array.from("jatin"));//from convet it into array

console.log(Array.from({name:"jatin"}));//object will be [] empty we have to pass key which element we have to convert

console.log(Array.of(1,2,3))//it make array from element
