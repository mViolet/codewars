// 2021.02.23

// function DNAStrand(dna){
//   return dna.replace(/[ATGC]/gi, function(e){
//   	if (e === 'A') return 'T'
//   	else if (e === 'T') return 'A'
//   	else if (e === 'G') return 'C'
//   	else if (e === 'C') return 'G'
//   })
// }

//top solution for that one was this: (uses pairs object)
// function DNAStrand(dna) {
//   return dna.replace(/./g, function(c) {
//     return DNAStrand.pairs[c]
//   })
// }

// DNAStrand.pairs = {
//   A: 'T',
//   T: 'A',
//   C: 'G',
//   G: 'C',
// }

//this one passes tests but times out: revisit later (Sums of Parts)
// function partsSums(ls) {
// 	let len = ls.length
// 	let arr = ls
// 	let sums = []

//     for (let i = 0; i <= len; i++){
//     	sums.push(arr.reduce((a,b) => a + b, 0))
//     	arr.shift()
//     }

//     return sums
// }

// function getGrade (s1, s2, s3) {
//   let score = (s1 + s2 + s3) / 3
  
//   if (score >= 90) return 'A'
//   else if (score >= 80) return 'B'
//   else if (score >= 70) return 'C'
//   else if (score >= 60) return 'D'
//   else if (score >= 0) return 'F'
//   else return 'Please provide three grade scores'
// }

// this one is named after Chuck Norris in the kata, but I think Saitama is a much better name
// function onePunch(items){ return (typeof items === 'string' && items) ? items.split(' ').sort().join(' ').replace(/[ae]/gi, '') : 'Broken!' } //Don't leave this line!!

// const moveZeros = (arr) => {
//   let nums = arr.filter(e => e !== 0)
//   let zeros = arr.filter(e => e === 0)
//   zeros.forEach(e => nums.push(e))

//   return nums
// }

// the top solution for the one above was really good (this one's not mine):
// const moveZeros = function (arr) {
//   return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
// }

// function oddOrEven(array) {
//    return array.reduce((a,b) => a + b, 0) % 2 === 0 ? "even" : "odd"
// }

// 2021.02.20

// function divCon(x){
//  let strings = x.filter(e => typeof e === 'string').map(Number)
//  let nums = x.filter(e => typeof e === 'number')

//  if (strings.length > 0) { strings = strings.reduce((a,b) => a+b) } else {strings = 0}
//  if (nums.length > 0) { nums = nums.reduce((a,b) => a+b) } else {nums = 0}
 
//  return nums - strings
// }

//double trouble
// const x = [1, 3, 5, 6, 7, 4, 3]
// const t = 7

// function trouble(x, t){
// 	for (let i = 0; i < x.length - 1; i++){
// 		if ((x[i] + x[i + 1]) === t) {
//     	  x.splice(i+1, 1)
//     	  i--
//     	}
// 	}
// 	return x
// }

// Expected: '[1, 3, 5, 6, 7, 4]'

// function arrayMadness(a, b) {
//   return (
//     a.reduce((a,b) => {return a + b ** 2}, 0) > b.reduce((a,b) => {return a + b ** 3}, 0))
// }

// function arrayMadness(a, b) {
//   return (
//     a.map(n => n ** 2).reduce((a,b) => a+b) >
//     b.map(n => n ** 3).reduce((a,b) => a+b)) ? true : false
// }

// 2021.02.19
// is it a perfect square?

// const isSquare = (n) => Math.pow(Math.sqrt(n).toFixed(2), 2) == n ? true : false

// //better solution:
// function isSquare(n) {
//   return Math.sqrt(n) % 1 === 0;
// }


// penguins problem!

// const snapshot = `|-~~------------~--p-------|
//     |~~--~p------------~-------|
//     |--------~-p---------------|
//     |--------~-p----~~~--------|`;

// const penguins = ["Joline", "Abigail", "Jane", "Gerry"];


// function calculateWinners(snapshot, penguins){
// 	let snaps = snapshot.split(/\n/).map(e => e.trim()).map(e => e.toLowerCase())  //isolates the snapshot to individual strings
// 	let results ={}  // empty obj to track the scores and names

// 	for (i = 0; i < snaps.length; i++){  //iterate through snaps to tally scores based on reduceRight()
// 		results[`${penguins[i]}`] = reduceRight(snaps[i])
// 	}

// 	results = Object.entries(results).sort((a,b) => a[1] - b[1])  //convert to array & sort names by tallied scores
// 	return `GOLD: ${results[0][0]}, SILVER: ${results[1][0]}, BRONZE: ${results[2][0]}`

// 	function reduceRight(arr){
// 	return arr.split('').slice(arr.indexOf('p') + 1, -1).map(c => c == '~' ? 2 : 1).reduce((a,b) => a+b)
// 	}
// }



// 2021.02.18

// function vowel2index(str) {
//    return str.replace(/[aeiou]/gi, (c,i) => /[aeiou]/gi.test(c) ? i+1 : c)
// }

// console.log(vowel2index('hello'))

// usage:
// vowel2index('this is my string') == 'th3s 6s my str15ng'



// 2021.02.16

// function spoonerize(words) {
//     let arr = words.split(" ").map(e => e.split(""))

//     const temp = arr[0][0]
//     arr[0][0] = arr[1][0]
//     arr[1][0] = temp

//     // return arr.map(e => e.join("")).join(" ")
//     return words
// }

// this one is interesting. doesn't work unless chars are separated. return words works for me, but does not work on codewars!

// function switcheroo(str){
//   return str.replace(/[ab]/gi, e => (e == 'a') ? 'b' : 'a')
// }

// earlier problems:

// function validateCode (code) {
// 	return String(code).match(/^[123]/g) ? true : false
// }

// function abbreviate(s){
// function abbreviator(word){
// 	return (word.length >= 4) ? word[0] + (word.length - 2) + word[word.length - 1] : word
// }
// 	return s.replace(/\w+/gi, abbreviator)
// }

//need magical regexp solution... holy schnikeys!! it's up there ^^
// 2/13/2021 - the day I learned how amazing regExps are and how you can use .replace on a string with a regexp and a function passed into it to do stuff to the string like oMG WTF THAT IS AWESOME

// function shorten(s){
// 	function shorten(s){
// 		return (s.length >= 4) ? s[0] + (s.length - 2) + s[s.length - 1] : s
// 	}

// 	function splitter(str, char){
// 		return str.split(`${char}`).map(e => shorten(e)).join(`${char}`)
// 	}

// 	if (s.includes("-")) return splitter(s, "-")
// 	else if (s.includes(" ")) return splitter(s, " ")
// 	else return shorten(s)
// }

// function createPhoneNumber(numbers) {
//   let arr = []
//   arr.push(numbers.slice(0, 3))
//   arr.push(numbers.slice(3, 6))
//   arr.push(numbers.slice(6, numbers.length))

//   arr = arr.map(String).map(e => e.split(",").join(""))

//     return `(${arr[0]}) ${arr[1]}-${arr[2]}`
// }

// function lifePathNumber(dateOfBirth) {
//   let arr = dateOfBirth.split("-")

//   for (let i = 0; i < arr.length; i++){
//   	arr[i] = arr[i].split("").map(Number).reduce((a,b) => a+b)
//   	if (arr[i] !== (22 || 11) && arr[i].toString().length > 1) {
//   		arr[i] = arr[i].toString().split("").map(Number).reduce((a,b) => a+b)
//   	}
//   }

//   arr = arr.reduce((a,b) => a + b)

//   while (arr.toString().length > 1) {
//   	arr = arr.toString().split("").map(Number).reduce((a,b) => a+b)
//   }
//   return arr
//   // return lifenum;
// }

// Array.prototype.filter = function (func) {
// 	let newArr = []
// 	for (let i = 0; i < this.length; i++){
// 		if (func(this[i])) {
// 			newArr.push(this[i])
// 		}
// 	}
// 	return newArr
// }

// function validISBN10(isbn) {
//     let sum = 0

//     if (isbn.length < 10) return false;

//     for (let i = 1; i <= isbn.length; i++) {
//         if (i == isbn.length) {
//             (isbn[i - 1] == 'X') ? sum += 10 * i : sum += Number(isbn[i - 1]) * i
//         } else {
//             sum += Number(isbn[i - 1]) * i
//         }
//     }

//     return (sum % 11 === 0) ? true : false
// }

// function charDecipher(str){
//     return str.split("-").map(c => String.fromCharCode(c)).join("")
// }

// function doubleChar(str){
//     return [...str].map(c => c + c).join("")
// }

// function changeTime(input, delta) {
//     let nums = input.split(":").map(Number)

//     if (nums[1] + delta <= 59 && nums[1] + delta >= 0) { 
//         nums[1] += delta
//     }
//     else if (nums[1] + delta > 59) { 
//         nums[1] = 0
//         nums[0] += 1
//     } else {
//         nums[1] = 59
//         nums[0] += delta
//     }

//     if (nums[0] > 24) {
//         nums[0] = 0
//     }
//     if (nums[0] < 0) {
//         nums[0] = 24
//     }

//     return nums.map(String).map(n => {
//         return (n.length < 2) ? "0" + n : n
//     }).join(":")
// }

// function twoSum(numbers, target) {
//     let list = []
//     numbers.forEach((n,i) => {
//         numbers.forEach((x,j) => {
//             // console.log(`i: ${i}, ${n} | j:${j}, ${x}`)
//             if (i !== j && n + x === target) {
//                 list[0] = i
//                 list[1] = j
//             }
//         })
//     })
//     return list;
// }

// function highAndLow(numbers) {
//     let arr = numbers.split(" ")
//     return `${Math.max(...arr)} ${Math.min(...arr)}`
// }

// console.log(highAndLow("1 2 3 -4 5"))

// function getCount(str) {
//     return [...str].filter(char => /[aeiou]/.test(char)).length
// }
// .match is probably the better alternative foe this one!

// function solution(num){
// 	let sum = 0
// 	for (let i = 1; i < num; i++){
// 		if (i % 3 === 0 || i % 5 === 0) { sum += i }
// 	}
// 	return sum
// }

// function dbSort(a){
// 	return [].concat.apply([], a).sort()
// }
// //actual solution VVV
// function dbSort(a){
//   let num = a.filter(x => typeof x == 'number').sort((a,b) => a - b)
//   let string = a.filter(x => typeof x == 'string').sort()
//   return num.concat(string)
// }

// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.
// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.
// Note that numbers written as strings are strings and must be sorted with the other strings.

// function moveTen(s){
// 	return [...s].map(c => 
// 		String.fromCharCode(
// 			c.charCodeAt() + 10 > 122 ? ((c.charCodeAt() + 10) - 26) : c.charCodeAt() + 10
// 		)).join("")
// }

// function array(arr){
// 	let newArr = arr.trim().split(",").map(e => e.trim())
// 	return (newArr.length < 3) ? null : newArr.slice(1, -1).join(" ")
// }

//the actual solution for remove the 1st and last chars (given comma separated list): 

// function array(arr){
//   return arr.split(",").slice(1,-1).join(" ") || null;
// }

// function gordon(ramsay) {
//   return ramsay
//     .toUpperCase()
//     .replace(/\w+/g, '$&!!!!')
//     .replace(/[AEIOU]/g, v => v == 'A' ? '@' : '*');
// }

// function warnTheSheep(queue) {
//   let pos = queue.indexOf("wolf") // pos: predator of sheep :)
//   return (queue.length - pos === 1) ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${queue.length - pos - 1}! You are about to be eaten by a wolf!`
// }

// best code ever: https://www.codewars.com/kata/reviews/566770a5e2aefaf7b000002d/groups/5854b1958a5d0c4d21000a2c

// function findNeedle(haystack) {
//   let index;
//   haystack.forEach((e, i) => {
//     if (e === 'needle') index = i
//   })
//   return `found the needle at position ${index}`
// }


//non consecutive array codewars problem
// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

/////************** codewars problem
// function firstNonConsecutive (arr) {
// 	for (let i = 0; i <= arr.length - 1; i++){
//     if (arr[i] !== (arr[i + 1] - 1)) {
//     	console.log(`This: ${arr[i + 1]}`)
//     	return arr[i + 1];
//     }
//   }
//   return null;
// }

// let array = [1,2,3,4,5,6,9,10,11]
// console.log(firstNonConsecutive(array))
//////*****************************
