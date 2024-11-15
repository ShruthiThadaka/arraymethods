//at()

// let array = [1,2,3,4,5];
// array.at(4);
// console.log(array);          //gives length
// arr = array.at(4);
// console.log(arr);

// arr = array.at(8);
// console.log(arr);

// arr = array.at(-1);
// console.log(arr);

// arr = array.at(-4);
// console.log(arr);

// array.at(-1);
// console.log(array);            //gives length



//concat()

// let arr1 = [1,2,3,4,5];
// let arr2 = [11,12,13,14];
// arr1.concat(arr2);
// console.log(arr1);             //gives original array
// arr3 = arr1.concat(arr2);
// console.log(arr3);

// // console.log(arr1 + arr2);    //1,2,3,4,511,12,13,14

// arr3 = arr2.concat(arr1);
// console.log(arr3);



//includes()

// let arr = [11,12,13,14,15];
// arr.includes(13);
// console.log(arr);    //(5) [11, 12, 13, 14, 15]

// arr1 = arr.includes(11);
// console.log(arr1);

// arr1 = arr.includes(-1);
// console.log(arr1);
// arr1 = arr.includes(24);
// console.log(arr1);
// console.log(arr)


//indexOf()

// let array = [1,2,3,4,5];
// console.log(array.indexOf(5));

// arr = array.indexOf(2);
// console.log(arr);

// console.log(array.indexOf(8));

// arr = [1,2,3,1,4,1];
// console.log(arr.indexOf(1));



//lastIndexOf()

// let arr = [1,2,3,1,5];
// arr.lastIndexOf(1);
// console.log(arr);

// arr1 = arr.lastIndexOf(1);
// console.log(arr1);

// console.log(arr.lastIndexOf(1));



//join()

// let arr1 = ["Shruthi"];
// let arr2= ["Thadaka"];
// console.log(arr1.concat(arr2).join(" "));

// console.log(arr1+arr2);

// arr3 = ['S','h','r','u','t','h','i'];
// console.log(arr3.join(""));


//reverse()

// let array = ["Hello","World"];
// array.reverse();
// console.log(array);

// arr = [1,2,3,4,5];
// arr1 = arr.reverse().join("")
// console.log(arr1);


//sort()

// arr = [11,6,3,9,10];
// arr.sort();
// console.log(arr);

// arr1 = arr.sort();
// console.log(arr1);
// console.log(arr);

// arr.sort((a,b) => a - b);
// console.log(arr);

// arr.sort((a,b) => b-a);
// console.log(arr);

// arr.sort(function(a,b){
//     return a-b;
// })
// console.log(arr);

// arr.sort(function(a,b) {
//     return b-a;
// })
// console.log(arr);

// arr = [11,6,3,9,10];

// arr.sort(function(a,b){
//     console.log(a-b);
// })
// console.log(arr);

// arr.sort(function(a,b){
//     console.log(b-a);
// })
// console.log(arr);


//foreach()

// arr = [1,2,3,4,5];
// arr1 = [];
// for(i=0;i<arr.length;i++){
//     console.log(arr1.push(arr[i]*2));
// }
// console.log(arr1);
// console.log(arr);


// //map

// arr = [1,2,3,4,5].forEach;

// for(i=0;i<arr.length;i++){
//     // console.log(mapArr.push(arr[i]*2));
//     return arr[i]*2;
// }
// console.log(mapArr);
// console.log(arr);


//filter

// function canVote(age) {
//     return age >= 18;
// }
// let filtered = [24, 33, 16, 40].filter(canVote);
// console.log(filtered);

// let arr = [1,2,3,4,4].filter(function even(num){
//     console.log( num % 2==0);
// });
// console.log(arr);

//find

// let arr = [1,2,3,4,4].find(function even(num){
//     return num % 2==0;
// });
// console.log(arr);

// let arr1=[12,1,2,4,5].find(function greatest(num){
//     return num > 2;
// })
// console.log(arr1);

























