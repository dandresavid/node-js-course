
//**************************************************** */
//*******************META INTERVIEW PREP************** */

//*********************ARRAYS*************************** */

/***************Reverse to Make Equal*****************

Given two arrays A and B of length N, determine if there is a way to make A equal to B by reversing any subarrays from array B any number of times.
Signature
bool areTheyEqual(int[] arr_a, int[] arr_b)
Input
All integers in array are in the range [0, 1,000,000,000].
Output
Return true if B can be made equal to A, return false otherwise.
Example
A = [1, 2, 3, 4]
B = [1, 4, 3, 2]
output = true
After reversing the subarray of B from indices 1 to 3, array B will equal array A.
*/
// -------------------SOLUTION------------------------
/*
function areTheyEqual(array_a, array_b){
  // Write your code here
  let exist = false
  for(let i = 0; i< array_a.length; i ++ ){
    let j = 0
    exist = false
    //console.log('que paso '+ j< array_b.length , !exist)
     while( j< array_b.length && !exist){
      console.log(array_a[i] , array_b[j])
       array_a[i] === array_b[j]? exist = true : j++ 
      }
      if(!exist)
        return false
  }
  return true
}

console.log(areTheyEqual([1, 2, 3, 2, 4],[1, 1, 4, 3, 2]));
*/

/***************Contiguous Subarrays*****************

You are given an array arr of N integers. For each index i, you are required to determine the number of contiguous subarrays that fulfill the following conditions:
The value at index i must be the maximum element in the contiguous subarrays, and
These contiguous subarrays must either start from or end on index i.
Signature
int[] countSubarrays(int[] arr)
Input
Array arr is a non-empty list of unique integers that range between 1 to 1,000,000,000
Size N is between 1 and 1,000,000
Output
An array where each index i contains an integer denoting the maximum number of contiguous subarrays of arr[i]
Example:
arr = [3, 4, 1, 6, 2]
output = [1, 3, 1, 5, 1]
Explanation:
For index 0 - [3] is the only contiguous subarray that starts (or ends) with 3, and the maximum value in this subarray is 3.
For index 1 - [4], [3, 4], [4, 1]
For index 2 - [1]
For index 3 - [6], [6, 2], [1, 6], [4, 1, 6], [3, 4, 1, 6]
For index 4 - [2]
So, the answer for the above input is [1, 3, 1, 5, 1]
*/

// -------------------SOLUTION------------------------

/*
function countSubarrays(arr) {
  let output = [];
  let element;
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    element = arr[i];
    count = 1;
    for (let right = 1; right <= arr.length ; right++){
     if(i+right <= arr.length){
        if(element> arr[i+right]){
          count ++;
        } else {
        break;
        }  
     }
    }

    for(let left = 1; left <= i ; left ++){
      if(element> arr[i-left]){
        count ++;
      } else {
        break;
      }
    }
    output[i] = count;
    console.log(output);
  }
  return output;
}

//let arr = [3, 4, 1, 6, 2]
//let arr2 =[2, 4, 7, 1, 5, 3]
countSubarrays(arr)
*/

/*******************Passing Yearbooks****************
 There are n students, numbered from 1 to n, each with their own yearbook. They would like to pass their yearbooks around and get them signed by other students.
You're given a list of n integers arr[1..n], which is guaranteed to be a permutation of 1..n (in other words, 
it includes the integers from 1 to n exactly once each, in some order). The meaning of this list is described below.
Initially, each student is holding their own yearbook. The students will then repeat the following two steps each minute: 
Each student i will first sign the yearbook that they're currently holding (which may either belong to themselves or to another student), 
and then they'll pass it to student arr[i-1]. It's possible that arr[i-1] = i for any given i, in which case student i will pass their yearbook back to themselves. 
Once a student has received their own yearbook back, they will hold on to it and no longer participate in the passing process.
It's guaranteed that, for any possible valid input, each student will eventually receive their own yearbook back and will never end up holding more than one yearbook at a time.
You must compute a list of n integers output, whose element at i-1 is equal to the number of signatures that will be present in student i's yearbook once they receive it back.
Signature
int[] findSignatureCounts(int[] arr)
Input
n is in the range [1, 100,000].
Each value arr[i] is in the range [1, n], and all values in arr[i] are distinct.
Output
Return a list of n integers output, as described above.
Example 1
n = 2
arr = [2, 1]
output = [2, 2]
Pass 1:
Student 1 signs their own yearbook. Then they pass the book to the student at arr[0], which is Student 2.
Student 2 signs their own yearbook. Then they pass the book to the student at arr[1], which is Student 1.
Pass 2:
Student 1 signs Student 2's yearbook. Then they pass it to the student at arr[0], which is Student 2.
Student 2 signs Student 1's yearbook. Then they pass it to the student at arr[1], which is Student 1.
Pass 3:
Both students now hold their own yearbook, so the process is complete.
Each student received 2 signatures.
Example 2
n = 2
arr = [1, 2]
output = [1, 1]
Pass 1:
Student 1 signs their own yearbook. Then they pass the book to the student at arr[0], which is themself, Student 1.
Student 2 signs their own yearbook. Then they pass the book to the student at arr[1], which is themself, Student 2.
Pass 2:
Both students now hold their own yearbook, so the process is complete.
Each student received 1 signature.
 */

 // -------------------SOLUTION------------------------

// Students 1, 2, 3, 4, 5, ... n
// Array [2, 3, 5, 1, 4, ... n]
 /*
function findSignatureCounts(arr) {
  const signature = Array(arr.length).fill(1);
  for (let i = 0; i < arr.length; i++) {
      k = i;
    while (arr[k] !== i+1) {
       signature[i]++;
       k = arr[k] - 1;
    }
  }
  return signature;
}
let arr = [1, 5, 2, 4, 3]
//let arr = [2, 1]
console.log(findSignatureCounts(arr))
//let students = [1, 2, 3, 4, 5]

*/

// Step 0
// Yearbooks[1, 5, 2, 4, 3]
// Output   [1, 1, 1, 1, 1]

// Step 1
// Yearbooks[1, 2, 3, 4, 5]
// Output   [1, 2, 2, 1, 2]

// Step 3
// Yearbooks[1, 2, 3, 4, 5]
// Output   [1, 3, 3, 1, 3]


//*********************STRINGS*************************** */

/***************Rotational Cipher*****************

/*
One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount. Rotating a character means replacing it with another character that is a certain number of steps away in normal alphabetic or numerical order.
For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?". Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note that the non-alphanumeric characters remain unchanged.
Given a string and a rotation factor, return an encrypted string.
Signature
string rotationalCipher(string input, int rotationFactor)
Input
1 <= |input| <= 1,000,000
0 <= rotationFactor <= 1,000,000
Output
Return the result of rotating input a number of times equal to rotationFactor.
Example 1
input = Zebra-493?
rotationFactor = 3
output = Cheud-726?
Example 2
input = abcdefghijklmNOPQRSTUVWXYZ0123456789
rotationFactor = 39
output = nopqrstuvwxyzABCDEFGHIJKLM9012345678
*/

 // -------------------SOLUTION------------------------
/*
function rotationalCipher(input, rotationFactor) {
  // Write your code here
  const alphabetLower = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const number = '0123456789'
  let output = '' ;
  for(let i=0; i< input.length; i++) {
    var temp = input.charAt(i);
    if(alphabetLower.includes(temp)) {
      output += alphabetLower.charAt((alphabetLower.indexOf(temp) + rotationFactor)%alphabetLower.length) 
    } else 
    if(alphabetUpper.includes(temp)) {
      output += alphabetUpper.charAt((alphabetUpper.indexOf(temp) + rotationFactor)%alphabetUpper.length) 
    } else if(number.includes(temp)){
      output += number.charAt((number.indexOf(temp) + rotationFactor)%number.length) 
    }
    else {
      output += temp;
    }
  }
  return output;

}

console.log(rotationalCipher('abcdefghijklmNOPQRSTUVWXYZ0123456789', 39));

// input = Zebra-493?
// rotationFactor = 3
// output = Cheud-726?

*/


/***************Matching Pairs*****************
Given two strings s and t of length N, find the maximum number of possible matching pairs in strings s and t after swapping exactly two characters within s.
A swap is switching s[i] and s[j], where s[i] and s[j] denotes the character that is present at the ith and jth index of s, respectively. 
The matching pairs of the two strings are defined as the number of indices for which s[i] and t[i] are equal.
Note: This means you must swap two characters at different indices.
Signature
int matchingPairs(String s, String t)
Input
s and t are strings of length N
N is between 2 and 1,000,000
Output
Return an integer denoting the maximum number of matching pairs
Example 1
s = "abcd"
t = "adcb"
output = 4
Explanation:
Using 0-based indexing, and with i = 1 and j = 3, s[1] and s[3] can be swapped, making it  "adcb".
Therefore, the number of matching pairs of s and t will be 4.
Example 2
s = "mno"
t = "mno"
output = 1
Explanation:
Two indices have to be swapped, regardless of which two it is, only one letter will remain the same. If i = 0 and j=1, s[0] and s[1] are swapped, 
making s = "nmo", which shares only "o" with t.
*/
/*
function matchingPairs(s, t) {
  // Write your code here
  let countPairs = 0;
  let maxCountPairs =0;
  const sPermu = permutations(s);
  console.log(sPermu);
  sPermu.forEach(element => {
    for(let k = 0; k< t.length; k++) {
      if(element.charAt(k) === t.charAt(k)){
        countPairs = countPairs + 1;
      }
    }  
    if(countPairs > maxCountPairs){
      maxCountPairs =countPairs;
    }
    countPairs = 0 
    
  });
  return maxCountPairs;  
   
  }

const permutations = function (str) {
  let permu = new Set()
  let temp =[];
    for(let i = 0; i< str.length ; i ++){
      for(let j = 0; j< str.length; j ++) {
        temp = str.split('');
        temp[i] = str.charAt(j);
        temp[j] = str.charAt(i);
        if(temp.join('') !== str)
          permu.add(temp.join(''))
      }
    }
  return permu;
}

console.log(matchingPairs('abcd', 'abdc'));
//console.log(matchingPairs('mno', 'mno'))
*/

/***************Minimum Length Substrings*****************

You are given two strings s and t. You can select any substring of string s and rearrange the characters of the selected substring.
Determine the minimum length of the substring of s such that string t is a substring of the selected substring.
Signature
int minLengthSubstring(String s, String t)
Input
s and t are non-empty strings that contain less than 1,000,000 characters each
Output
Return the minimum length of the substring of s. If it is not possible, return -1
Example
s = "dcbefebce"
t = "fd"
output = 5
Explanation:
Substring "dcbef" can be rearranged to "cfdeb", "cefdb", and so on. String t is a substring of "cfdeb". Thus, the minimum length required is 5.
*/
//FAIL
/*
function minLengthSubstring(s, t) {
  // Write your code here
  let min = Infinity;
  let count =0;
  let tMap = strMap(t);
  let sMap = strMap(s);
  console.log(sMap);
  console.log(tMap);
  for( const [key, value] of tMap){
    if(!sMap.has(key) || sMap.get(key) < tMap.get(key)){
      return -1;
    } 
  }
  for(let i = 0; i < t.length; i++){
    for(let j = 0; j< s.length; j++){
      if(s[i] === t[j]){
        count = count + 1;
        //while(tMap.size !== 0){
            if(tMap.get(s[i]) === 1){
              tMap.delete(s[i]);
            } else {
              tMap.set(s[i], tMap.get(s[i]) -1)
            }
       // }
      }
      count ++;
    }
    if(count<min){
          min = count;
        }
  }
  return min;
  
}

const strMap = function(str){
  let tLetters = new Map()
  for(let i = 0; i< str.length ; i++){
    if(tLetters.has(str[i])){
      tLetters.set(str[i],tLetters.get(str[i]) +1)
    } else{
      tLetters.set(str[i],1)
    }
  }
  return tLetters;
}

console.log(minLengthSubstring('dcbefebce','fd'))
//console.log(minLengthSubstring('bfbeadbcbcbfeaaeefcddcccbbbfaaafdbebedddf','cbccfafebccdccebdd'))

*/

// Internet

/*
var minWindow = function(s, t) {
  if (t.length ===0)
    throw Error `t can't be of length 0`
    if (s.length<t.length)
        return ""
  let minSubString = null
  let currMatchedLetters = 0 
  let targetMap = {}
  let currMap = {}
  for (let ch of t){
    if (targetMap[ch]===undefined){
      targetMap[ch]=1  
      currMap[ch] = 0
    }
    else 
      targetMap[ch]++
  }
  let targetMatchedLetters = Object.keys(targetMap).length
  let start = 0
  let end = -1
  while ( end<s.length){
    if (currMatchedLetters === targetMatchedLetters){
      //update minSubstring
        if(minSubString===null || end-start+1 < minSubString.length){
          minSubString = s.slice(start,end+1)
        }
        //increament start and update
      let startChar = s[start]   
      if (currMap[startChar]!== undefined){
          currMap[startChar]--
          if (currMap[startChar] < targetMap[startChar])
            currMatchedLetters--
      }
      start++
    }
    else {
      end++
      if (end < s.length){
        let endChar = s[end]
        if (currMap[endChar] !== undefined){
          currMap[endChar]++
          if (currMap[endChar] === targetMap[endChar])
            currMatchedLetters++
        }
      }
    }
  }
  return minSubString || ""
}
*/