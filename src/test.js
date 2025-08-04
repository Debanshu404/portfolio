let  nums = [3,1,2,5,6,7,8,9,10]
let n=nums.length;
let size=n+1
let missing;
let flag=true;
// let ok=true;

for(let i=0;i<size;i++){
    for(let j=0;j<nums.length;j++){
if(i==nums[j]){
//    console.log(i)
    flag=false;
    // ok=false;
    // console.log("true condtion",i,flag,ok)
    break;
    
}else{
    // console.log("false condition",i)
    // ok=true;
    flag=true
}
    
    }
    // console.log(i,flag,ok)

    if(flag==true  ){
        missing=i;
        console.log("missing number",missing)
    }
}