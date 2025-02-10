const obj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}
console.log(obj);

for (const key in obj) {
    console.log(`${key} : ${obj[key]}`);
    
    }

    //for in for array

    const arr=["a","b","c","d"]

    for(const i in arr)
    {
        console.log(i);//print index
        
        console.log(arr[i]);//print value
        
    }