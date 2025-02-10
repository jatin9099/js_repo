const arr=["a","b","c","d","e"]
for (const i of arr) {
    console.log(i);
    
}

const st="hello world"

for(const i of st)
{
    console.log(i);
    
}

//maps

const map=new Map()

map.set("in","india")
map.set("us","united state")
map.set("uk","united kingdom ")

console.log(map);

// for(const [,value] of map)
// {
//     console.log(value);
    
// }

//no forof in obj
// const obj = {
//     "g" : "f",
//     "b":"f"
// }

// console.log(obj);

// for(const key of obj)
// {
//     console.log(key);
    
// }