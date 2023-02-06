let a=[12,14,15,23,36,46]
for(let i=0;i<=a.length;i++){
  if((a[i]%2==0 ||a[i]%3==0)&&a[i]<=40){
    console.log(a[i])
  }
}