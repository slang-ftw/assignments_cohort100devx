/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
if(str1.length !== str2.length){
  
  return false
} 

let n1 = str1.split('').sort().join('')
let n2 = str2.split('').sort().join('')
console.log("N1---",n1+"|||","N2---",n2);

for(let i=0;i<n1.length;i++){
  if(n1[i] != n2[i]){
    return false;
  }
  return true;
}


}

const anagram =isAnagram('abc','nop');
console.log(anagram);