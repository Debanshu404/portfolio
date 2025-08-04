// let nums = [1,1,0,1,1,1]

// let n=nums.length;
//     let count=0
//    let  maxCount=0
//     for( let i=0;i<n;i++){
//         if(nums[i]==1){
//             count++
//         }else{
//             maxCount=count;
//             count=0
//         }

//     }
// console.log(count)
// console.log(maxCount)



let k = -5;
let a = [-5, 8, -14, 2, 4, 12];


// console.log(a)
let length=0
let flag = false;
let maxlength=0
let subarray=[]
let sum = 0;
for (let i = 0; i < a.length; i++) {
 
subarray[i]=a[i]
sum+=subarray[i];

if(sum==k){
  maxlength=Math.max(maxlength,i)
  console.log("mil gaya",i)
}


  
}
console.log(maxlength)