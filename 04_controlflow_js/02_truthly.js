const a=2
const b="2"


if(true && 2==="2")
{
    console.log("yes");
    
}else 
{
    console.log("no");
    
}

//  Nullish colescing operator (??) : null undefined

let value ;
 
value=null ?? 12   // safety check for null and undefined value

console.log(value);

// ternary operator

value >= 10 ? value =20 : value=0

console.log(value);

