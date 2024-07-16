// let fav="avatar";
// let guess=prompt("enter movie guess");
// while ((fav!=guess) && (guess!="quit")){
//     guess=prompt("enter movie guess");
// }
// if (guess==fav){
//     console.log("congo");
// } else{
//     console.log("u quit");
// }

// let name = prompt("enter name");
// let age = prompt("enter age");
// console.log(`${name} is ${age} years old.`)

// let num = prompt("enter qaurter num.");
// num=parseInt(num);
// switch(num){
//     case 1: console.log("January,February,March");
//     break;
//     case 2: console.log("April,May,June");
//     break;
//     case 3: console.log("July,August,September");
//     break;
//     case 4: console.log("October,November,December");
//     break;
//     default: console.log("NOT A QUARTER");

// }

// let str="asss";
// if (str[0]==='A'|| str[0]==='a' && str.length>5){
//     console.log("golden");
// } else{
//     console.log("not golden");
// }

// let n1= 45;
// let n2= 556;
// if ((n1%10)===(n2%10)){
//     console.log("yes");
// } else{
//     console.log("no")
// }


// let arr=[1,2,3,4,5];
// let item=5;
// if(arr.indexOf(item)!=-1){
//     console.log("it exists")
// } else{
//     console.log("no it doesnt")
// }

// let arr = [1,2,3,4,2,5,2,6,2,6,2];
// let num = 2;
// for(let i=0;i<arr.length;i++){
//     if (arr[i]==num){
//         arr.splice(i,1);
//     }
// }

// console.log(arr);

// let num=98654323577642;
// let count=0;
// let copy=num;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);

// let n=35;
// let s=0;
// while(n!=0){
//     rem=n%10;
//     s=s+rem;
//     n=Math.floor(n/10);
// }
// console.log(s);

// let n=3;
// let fact=1;
// for(let i=1;i<=n;i++){
//     fact=fact*i
// }
// console.log(fact);

// let arr=[1,2,3,4,5,6];
// let max=Math.max(...arr);
// console.log(max);

// let str="adsdsaaa";
// function unique(str){
//     let ans="";
//     for (let i=0;i<str.length;i++){
//         let currChar=str[i];
//         if(ans.indexOf(currChar)==-1){
//             ans+=currChar;
//         }
//     }
//     console.log(ans);
// }
// unique(str);

// let country=['askdks','sdhjedkwjedhW','jhejhe','ewjd'];
// function long(country){
//     let ansIdx=0;
//     for(let i=0;i<country.length;i++){
//         let ansLen=country[ansIdx].length;
//         let currlen= country[i].length;
//         if(currlen>ansLen){
//             ansIdx=i;
//         }
//     }
//     console.log(country[ansIdx]);
// }
// long(country);

// let str= "ifshdjashdu";
// function countVowel (str){
//     let count=0;
//     for (let i=0;i<str.length;i++){
//         if( str.charAt(i)==="a"|| str.charAt(i)==="e" ||  str.charAt(i)==="i"|| str.charAt(i)==="o" ||  str.charAt(i)==="u" ){
// count+=1;}
// }
// return count;
// }

// const rand= Math.floor(Math.random()*100)+100;
// console.log( rand);

