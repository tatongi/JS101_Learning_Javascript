let a=["george","mary","oalar","celin"];
let count=0;
for(let i=0;i<=a.length-1;i++){
  let string=a[i];
  if(string[0]!="A" || string[0]!="E" || string[0]!="I"|| string[0]!="O"|| string[0]!="U"){
    count++;
  }
}
console.log(count)