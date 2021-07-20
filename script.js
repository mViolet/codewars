// 2021 07.20

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.Ignore capitalization when determining if a character is a duplicate.

// examples
// "din"      => "((("
// "recede"   => "()()()"
// "Success"  => ")())())"
// "(( @"     => "))(("

//use indexOf and lastIndexOf
//either split string, use for of loop or replace to loop through each character, creating a new string based on whether there are duplicate chars

//split string
function duplicateEncode(word){
    let chars = word.toLowerCase().split('')
    let result = ''

    for (let i = 0; i < chars.length; i++){
        if (chars.indexOf(chars[i]) == chars.lastIndexOf(chars[i])) {
            result += '('
        } else {
            result += ')'
        }
    }

    return result
}

//for ...of
function duplicateEncode(word) {
    const lowercase = word.toLowerCase()
    let result = ''

    for (char of lowercase){
        ( lowercase.indexOf(char) !== lowercase.lastIndexOf(char) ) ? result += ')' : result += '('
    }

//     return result
// }

//replace
const duplicateEncode = word => word.toLowerCase().replace(/./g, (m,i,a) => a.indexOf(m) !== a.lastIndexOf(m) ? ')' : '(')


// console.log(duplicateEncode("din"), "(((")
// console.log(duplicateEncode("recede"), "()()()")
// console.log(duplicateEncode("Success"), ")())())")
// console.log(duplicateEncode("(( @"), "))((")

// 2021 07.19

// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

// function high(x) {
//     //create an array of key/value pairs to track scores
//     let scores = []
//     //split the string into an array (by space), push values for the word and its score to 'scores'
//     x.split(' ').forEach(w => scores.push([w, w.split('').reduce((acc, curr) => acc + (curr.codePointAt() - 96),0)])) //add the value of each char together (this is the word score))
//     //sort the array from highest to lowest score, and return the first element of the first item
//     return scores.sort((a, b) => b[1] - a[1])[0][0]
// }

// const arr = [['first', 3], ['second', 5], ['third', 5], ['fourth', 1]]
// arr.sort((a, b) => b[1] - a[1])   //first one is 'second'

// 'a'.codePointAt() - 96  // for eaach char, this is the score.

//2021 07.16

//random kata
// unsolved
const rot13 = message => {
    // return nums or special chars as they are
    return message.replace(/[a-z]/gi, m => {
        let l = m.codePointAt()
        return (l >= 97 && l <= 122) ? String.fromCharCode(l) : String.fromCharCode(l)
    })
}
// console.log(rot13("z"), 'm')
// console.log(rot13("Grfg"), 'Test')


// const toCamelCase = str => str
//     .replace(/[-_]/g, ' ')
//     .split(' ')
//     .map((word, i) => (i > 0) ? word.replace(/^[a-z]/, c => c.toUpperCase()) : word)
//     .join('')

// console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior")
// console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior")
// console.log(toCamelCase("A B C"), "ABC")
// console.log(toCamelCase(""), "")

// function order(words) {
//     const map = []
//     words.split(' ').forEach(el => map.push([el.match(/\d+/)[0], el]))
//     return map.sort().map(el => el[1]).join(' ')
// }

// function order(words){
//     return words.split(' ').sort((a, b) => +a.match(/\d+/)[0] - +b.match(/\d+/)[0]).join(' ')
// }

// console.log(order("is2 Thi1s T4est 3a"))

// const songDecoder = song => song.replace(/(WUB){1,}/g, ' ').trim()
// console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))

// const uniqueInOrder = iterable => {
//     const unique = []
//     for (let i = 0; i < iterable.length; i++) {
//         if (iterable[i] !== iterable[i+1]) unique.push(iterable[i])
//     }
//     return unique
// }
// console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])

// const twoDecimalPlaces = n => +n.toFixed(2)

//Count characters in your string

// function count(string) {
//     const charCount = {}
//     for (i in string){
//         !charCount[string[i]] ? charCount[string[i]] = 1 : charCount[string[i]]++
//     }
//     return charCount
// }

//or

// function count(string) {
//     const charCount = {}
//     string.split('').forEach(el => (!charCount[el]) ? charCount[el] = 1 : charCount[el]++)
//     return charCount
// }

// console.log(count("aba"), { a: 2, b: 1 })
// console.log(count(""), {})

//Two to One
// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')

// console.log("Test 1:", longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") === "abcdefklmopqwxy" ? 'Passed' : 'Failed')
// console.log("Test 1:", longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz") === "abcdefghijklmnopqrstuvwxyz" ? 'Passed' : 'Failed')
// console.log("Test 1:", longest("", "") === "" ? 'Passed' : 'Failed')

//Meeting
// function meeting(s) {
//     return s.toUpperCase()
//         .split(';')
//         // .sort()
//         .map(el => el.split(':').reverse())
//         .sort()
//         .map(el => `(${el[0]}, ${el[1]})`)
//         .join('')
// }

// console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn") === "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)")

//2021 07.15

//Break camelCase
// const solution = str => str.split('').map(l => l == l.toUpperCase() ? ` ${l}` : l).join('')


// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie.lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
//     Note: You will have to handle multiple spaces, and leading / trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.


// function stringTransformer(str) {
//     return str.split(' ')
//         .map(word => word.replace(/[a-z]/gi, c => c == c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
//         .reverse()
//         .join(' ')
// }

// function stringTransformer(str) {
//     return str.split(' ').map(word => word.replace(/[a-z]/gi, c => {
//         const n = c.codePointAt()
//         return (n >= 97 && n <= 122) ? String.fromCharCode(n - 32) : String.fromCharCode(n + 32)
//     })).reverse().join(' ')
// }

//2021 07.14

// create a function that parses out the domain name

// examples:
// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

//approach - use replace with regular expression to replace beginning of url i.e. 'https://www.' with ''
//split the array at '.' and return the first element as a string

// const domainName = url => url.replace(/(.*:\/\/)|www./gi, '').split('.')[0]


//2021 07.13

// Write a function that returns the greatest common factor of an array of positive integers.Your return value should be a number, you will only receive positive integers.

// Example: [3,6,12] => 6

// function for common factors
// function getFactors(n){
//     const factors = []
//     for (let i = 1; i <= n; i++){
//         if (n % i == 0) factors.push(i)
//     }
//     return factors
// }

// function greatestCommonFactor(array) {
//     //the common factor will never be larger than the smallest number in the array
//     const indexOfSmallest = array.indexOf(Math.min(...array))
//     const factorsArray = array.map(el => getFactors(el))

//     for (let i = factorsArray[indexOfSmallest].length - 1; i >= 0; i--){
//         if (factorsArray.every(el => el.includes(factorsArray[indexOfSmallest][i]))) return factorsArray[indexOfSmallest][i]
//     }
//     return 'no factors in common'
// }

// --

/*
    Given - an integer n
    Return an array including all of the special factors (Ascending order)


    Example1:
    n = 6   factor of n: 1, 2, 3, 6
    convert them to binary string:
    n ==> "110"
    factors: 1 ==> "1"  2 ==> "10"  3 ==> "11"  6 ==> "110"
    sc(6) should return [1, 2, 3, 6]

    Example2:
    n = 15   factor of n: 1, 3, 5, 15
    convert them to binary string:
    n ==> "1111"
    factors: 1 ==> "1"  3 ==> "11"  5 ==> "101"  15 ==> "1111"
    Hmmm... "1", "11", "1111" are special factors, but "101" is not.
    c(15) should return [1, 3, 15]
*/

// function sc(n){
// // find all factors of n, save as an array
//     const factors = []
//     //start at 1, up to n (inclusive)
//     for (let i = 1; i <= n; i++){
//         if (n % i === 0) factors.push(i)
//     }

//     return factors.map(el => el.toString(2))      //convert each to binary strings
//         .filter(el => n.toString(2).includes(el)) // convert n to binary string, filter which are included in n as binary
//         .map(el => parseInt(el, 2))               //convert back to decimal
// }


// --

// function middleMe(n, x, y) {
//     return (n % 2 != 0) ? x : y.repeat(n / 2) + x + y.repeat(n / 2)
// }

// --

// function isLeapYear(y) {
//     return ((y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0))
// }

// --

//remove consecutive strings, return resulting string
//example 'alan alan al alan al al al alan' => 'alan al alan al alan'
// const removeConsecutiveDuplicates = s => s.split(' ').filter((el, i, arr) => el != arr[i + 1])

// console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta alpha beta gamma delta')

// ---

//input: array of ints, within which only two ints occur once
//return: the sum of the two unique integers

// function repeats(arr) {
//     return arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el)).reduce((a,b) => a + b, 0)
// }

// console.log(repeats([4, 5, 7, 5, 4, 8]), 15)

//2021 07.09

// const coffee = str => str.replace(/\bcoffee\b/gi, match => "COFFEE")

// function matrix(array) {
//     return array.map((el, i) => el.map((sub, x) => (i == x) ? (sub < 0) ? 0 : 1 : sub))
// }

// function correctness(bob, expert) {
//     let score = 0
//     bob.forEach((el, i) => {
//         if (el === expert[i]) score++
//         else if (el == '?' || expert[i] == '?') score += .5
//     })
//     return score
// }

// const sumMix = x => x.reduce((acc, curr) => acc + +curr, 0)

//2021 07.08

// const solve = (a, b) => b.map(word => a.filter(el => el === word).length)

/*
PREP
return the number of unique arrays that can be formed by picking one element from each subarray

example: solve([[1,2],[4],[5,6]]) = 4
        because: [1,4,5],[1,4,6],[2,4,5],[2,4,6]

example: solve([[1,2],[4,4],[5,6,6]]) = 4 because duplicates don't count
example: solve([[1,3],[5,7,1],[1,3,5]]) = 18
example: solve([[1],[1,0],[1]]) = 2 

the pattern seems to be the number of unique elements in each array, multiplied together 
input will be an array of arrays              
*/

// function solve(arr) {
//     //for each item in the array, find the number of unique elements
//     //multiply them together (use reduce?)
//     return arr.reduce((acc, curr) => acc * new Set(curr).size, 1)
// }

// console.log(solve([[1,2],[4,4],[5,6,6]]) === 4)
// console.log(solve([[1,2],[4],[5,6]]) === 4)
// console.log(solve([[1,3],[5,7,1],[1,3,5]]) === 18)
// console.log(solve([[1],[1,0],[1]]) === 2)

//2021 07.07
// function squareSum(numbers) {
    // /*
    // PREP
    // We are taking in an array of integers, always a whole number
    // What we are returning is a single integer

    // at the least, we need to loop through the array
    // each time squaring the number in the array
    // then reduce the array, adding all the numbers together
    // or we could create a variable to track the sum. We'll go with that

    // Pseudocode:
    // create a sum variable
    // loop through array
    //     for each number, add the number squared to the sum
    // return the sum

    // Examples:
    // 1,2,2 - 9
    // squareSum([0]) returns 0
    // squareSum([1, 2]) returns 5
    // squareSum([0, 3, 4, 5]) returns 50
    // */
    
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++){
//         sum += numbers[i] ** 2
//     }
//     return sum
// }

// 2021 07.06 - interview question from today!

// const ArrayMaker = require('./ArrayMaker');

// const findMissing = (array) => {
//     // Implement findMissing here
//     //input = an unsorted aray of integers
//     //return = the mising integer

//     //sort array
//     if (array === undefined) return 0
//     array.sort((a, b) => a - b)

//     if (array[0] === 2) return 1

//     //iterate over each item in array
//     for (let i = 0; i < array.length - 1; i++) {
//         //check if the current element is exactly one less than the following element
//         if (array[i] !== array[i + 1] - 1) return array[i] + 1
//     }
//     return array.length + 1


//     // ways to solve this:
//     // sort() (which is very slow)
//     // (sum of items in complete array - sum of items in original array) !!!!
// }

// const test = (size) => {
//     const maker = size == null ? size : new ArrayMaker(size);
//     const expected = size == null ? 0 : maker.missing;
//     const actual = findMissing(maker == null ? maker : maker.array);

//     const passed = expected === actual;

//     console.log(`findMissing() ${size == null ? 'undefined' : `Array(${size})`} -> ${actual} === ${expected}: ${passed ? 'PASSED' : 'FAILED'}`);

//     return passed;
// }

// let allPassed = true;

// allPassed = test(undefined) && allPassed;
// allPassed = test(1) && allPassed;
// allPassed = test(10) && allPassed;
// allPassed = test(100) && allPassed;
// allPassed = test(1000) && allPassed;
// allPassed = test(10000) && allPassed;

// console.log();
// console.log(allPassed ? 'ALL TESTS PASSED' : 'THERE ARE TEST FAILURES');


// 2021 07.03

// unsolved
// var mergeTwoLists = function (l1, l2) {
//
// }

// 2021 07.02

// for use in my color pallette generator

//input: two colors as hex strings (with #)
//return: array of strings - [rgb value, hex value]

// function blendHexColors(c0, c1) { //color 0, color 1
//     const a = c0.slice(1).match(/.{1,2}/g)
//     const b = c1.slice(1).match(/.{1,2}/g)
//     let newColor = []

//     a.forEach((el, i) => {
//         let rgbA = parseInt(el, 16)
//         let rgbB = parseInt(b[i], 16)
//         newColor.push(Math.round((rgbA + rgbB) / 2))
//     })
//     newColor.forEach(el => (el <= 255) ? el : 255) //max is 255

//     function toHex(value){
//         return value.toString(16).padStart(2, '0')
//     }

//     return [`rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`, 
//             `#${toHex(newColor[0])}${toHex(newColor[1])}${toHex(newColor[2])}`]
// }

// console.log(blendHexColors("00ff01", "ffffff"))

// // 2021 06.30

// //this was the top solution. What wizardry is this??!?
// function digital_root(n) {
//     return (n - 1) % 9 + 1;
// }

// // more info here: https://www.sjsu.edu/faculty/watkins/Digitsum00.htm

// function digital_root(n) {

//     while (n.toString().length != 1) {
//         n = n.toString().split('').reduce((a, b) => a + +b, 0)
//     }

//     return n
// }

// 2021 06.29

// //needs to be recursive
// function digital_root(n) {
//     return n.toString().split('').reduce((a,b) => a + +b, 0)
// }

//2021 06.28

// // find the outlier
// // input - an array containing at least three integers - all even or all odd
// // return - the outlier

// // might not look pretty, but it is ~85% faster than the top answer (uses filter)
// // Find The Parity Outlier
// function findOutlier(ints) {
//     // cases:
//     const a = ints[0] % 2 == 0
//     const b = ints[1] % 2 == 0
//     const c = ints[2] % 2 == 0

//     // if (a%2 ==0) == (b%2 == 0) && (a%2 == 0) == true, then find the first odd.
//     if (a === b && a === true && c === a) {
//         for (let i = 3; i < ints.length; i++){
//             if ((ints[i] % 2 === 0) === false) return ints[i]
//         }
//     }
//     // if(a % 2 == 0) == (b % 2 == 0) && (a % 2 == 0) == false, then find the first even num
//     else if (a === b && a === false && c === a) {
//         for (let i = 3; i < ints.length; i++) {
//             if ((ints[i] % 2 === 0) === true) return ints[i]
//         }
//     }
//     // if (a % 2 == 0) != (b % 2 == 0), check (c % 2 == 0)
//     else if (a !== b || a !== c) {
//         // if it equals a, return b. if it equals b, return a.
//         if (a === c) return ints[1]
//         if (a === b) return ints[2]
//         return ints[0]
//     }
//     return 'no outlier found' //base case
// }

//2021 06.27

// unsolved
// function oddCount(n) {
//     // return the number of positive odd numbers below n
//     //   let counter = 0
//     //   for (let i = 1; i < n; i++){
//     //     //push the odd number to the array oddNums
//     //     if (i % 2 !== 0) counter++
//     //   }
//     return Math.floor(n / 2)
// }

// function howMuchILoveYou(nbPetals) {
//     const arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
//     return arr[(nbPetals - 1) % 6]
// }

// function sayHello(name) {
//     return `Hello, ${name}`
// }

// 2021 06.26

// function sayHello(name) {
//     return `Hello, ${name}`
// }

// 2021 06.25

// function alphabetPosition(text){
//     //minus 96 will give position from lowercase letter
//     let str =  text.match(/[a-z]/gi)
//     return (str == null) ? '' : str.map(l => l.toLowerCase().charCodeAt(0) - 96).join(' ')
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."))
// console.log("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")

// 2021 06.24

// // redo using recursion?
// function christmasTree(h) {
//     if (h <= 0) return ''
//     let str = ''
//     let counter = 1
//     let stars = 1

//     for (let i = 0; i < h - 1; i++) {
//         str += ' '.repeat(h - counter) + '*'.repeat(stars) + ' '.repeat(h - counter) + '\n'
//         counter++
//         stars += 2
//     }
//     return str + ' '.repeat(h - counter) + '*'.repeat(stars) + ' '.repeat(h - counter)
// }

// //meeting room can take up to 8 chairs
// // x represents array of ['XXXX', 3] or num of occupants as string, and # of chairs in that room
// //return array of ints (how many chairs taken from each room)

// function meeting(x, need) {
//     if (need <= 0) return "Game On"                 //if chairs not needed, return "Game On"

//     let chairsNeeded = need                         // track total chairs needed
//     const chairsTaken = []                          //create arr to track chairs taken

//     for (let i = 0; i < x.length; i++) {
//         let avail = x[i][1] - x[i][0].length        //how many chairs available (in tuple)
//         if (avail > 0) {
//             if (chairsNeeded - avail >= 0) {         //check if chairs still needed after this loop
//                 chairsTaken.push(avail)
//                 chairsNeeded = chairsNeeded - avail //update chairsNeeded
//             } else {
//                 chairsTaken.push(chairsNeeded)
//                 chairsNeeded = 0
//             }
//         } else {
//             chairsTaken.push(0)                     //no chairs were taken
//         }
//         if (chairsNeeded == 0) return chairsTaken   //return array of chairs Taken
//     }
//     return "Not enough!"
// }


// "HTML dynamic color string generation"
// generate a random hex color string
    //max value for each color is 255
    //Math.random() to find a number - convert to hex base
    //We need three joined as string, so call random func 3x

// Math.random() * (max - min) + min //min inclusive, max excl

function randomHex(){
    return parseInt(Math.random() * (256 - 0)).toString(16).padStart(2, '0') //parseInt to round, padStart for leading zeros
}

function generateColor(){
    return `#${randomHex()}${randomHex()}${randomHex()}`
}

// function animal(obj) {
//     return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
// }

// 2021 06.23

// const remove = s => s.replace(/!*$/, "")

// doesn't need global flag
// const remove = s => s.replace(/!*$/g, "")

// const typeOfTriangle = (a, b, c) => {
//     const arr = [a, b, c].sort((a, b) => a - b)
//     const d = arr[0]
//     const e = arr[1]
//     const f = arr[2]

//     if ((d + e) > f) {
//         return (d == e && d == f) ? "Equilateral" : (d == e || d == f || e == f) ? "Isosceles" : "Scalene"
//     } else {
//         return "Not a valid triangle"
//     }
// }

// needs sorting
// const typeOfTriangle = function (a, b, c) {
//     if ((a + b) > c) {
//         return (a == b && a == c) ? "Equilateral" : (a == b || a == c || b == c) ? "Isosceles" : "Scalene"
//     } else {
//         return "Not a valid triangle"
//     }
// }

// function calculator(a, b, sign) {
//     if (isNaN(a) || isNaN(b)) { return "unknown value" }
//     switch (sign) {
//         case "+": return a + b
//         case "-": return a - b
//         case "*": return a * b
//         case "/": return a / b
//         default: return "unknown value"
//     }
// }

// function calculator(a, b, sign) {
//     if (isNaN(a) || isNaN(b)) { return "unknown value"}
//     switch (sign) {
//         case "+":
//             return a + b
//             break
//         case "-":
//             return a - b
//             break
//         case "*":
//             return a * b
//             break
//         case "/":
//             return a / b
//             break
//         default:
//             return "unknown value"
//     }
// }

// 2021 06.22

// // 6kyu - Disgruntled Employee
// function off(n){
//     const results = [] //for off positions
//     const arr = [] //create 1 to n switches
//     for (let i=0; i<n; i++) {arr.push(1)}
//     let increment = 1 //counter to track the increment
//     while (increment <= n) { //while the increment is less than or equal to n
//         //for the length of the loop, flip every switch. then every 2nd, then every 3rd, etc
//         //increment -1 is the start position for the loop
//         for (let i=increment-1; i < n; i += increment){
//             if (arr[i] === 0) {arr[i] = 1}
//             else {arr[i] = 0}
//         }
//         increment++
//     }
//     //pushing i + 1 because we need the position, not the index!
//     arr.forEach((el, i) => el === 0 && results.push(i + 1))
//     return results
// }

// 2021 06.21

// //interesting pattern
// const overTheRoad = (address, n) => (n * 2) - address + 1

// // 2021 06.20

// function closeCompare(a, b, margin = 0) {
//     return (margin >= Math.abs(a - b)) ? 0 : (a < b) ? -1 : 1
// }

////2021 06.19

// function maxedOut(arr) {
//     let sum = arr.map(n => n ** 3).reduce((a, b) => a + b, 0)
//     return (sum <= Number.MAX_SAFE_INTEGER) ? sum : "You've pushed me to the max!"
// } 

// function generateMenu(menuItems) {
//     let str = ''
//     for (item of menuItems) {
//         str += `<a href=\"${item.url}\">${item.text}</a>`
//     }
//     return str
// }

//2021 06.18

// function hexToDec(hexString) {
//     return parseInt(hexString, 16)
// }

//2021 06.16

// function toBinary(n) {
//     return Number(n.toString(2))
// }

//2021 06.14

// // xor / 'logical or'
// function xor(a, b) {
//     return Boolean(a ^ b)
// }

//2021 06.13

// Training JS #14: Methods of Number object--toString() and toLocaleString()
// interesting one about using the radix parameter (here 16 hexadecimal)

// function colorOf(...args) {
//     const arr = args.map(el => el.toString(16).padStart(2, '0'))
//     return `#${arr.join('')}`
// }

//2021 06.11
//random 8kyu

// function mergeArrays(arr1, arr2) {
//     const arr = []
//     arr1.forEach(el => arr.push(el))
//     arr2.forEach(el => arr.push(el))

//     return [...new Set(arr.sort((a, b) => a - b))]
// }

// function isDivideBy(number, a, b) {
//     return (number % a === 0 && number % b === 0)
// }

// function divisibleBy(numbers, divisor) {
//     return numbers.filter(n => n % divisor === 0)
// }

// function checkAlive(health) {
//     if (health <= 0) return false
//     else return true
// }

// function sumPPG(playerOne, playerTwo) {
//     return playerOne.ppg + playerTwo.ppg
// }

// //2021 06.08

// function i(word) {
//     let numVowels = (word.match(/[aeiou]/gi) || '').length
//     let numCons = (word.match(/[^aeiou]/gi) || '').length

//     return ((/(^[A-Z])|(^[iI])/g).test(word) || numVowels >= numCons) ? 'invalid word' : `i${word[0].toUpperCase() + word.substr(1) || ''}`
// }


// The word should not begin with the letter "I", for example Inspire.
// The number of vowels should not be greater than or equal to the number of consonants,
//    for example East or Peace. ("y" is considered a consonant)
// The first letter is not capital, for example road.
// If the word does not meet the rules, we return "Invalid word".

// //2021 06.07
// //random 8kyus

// function sortVowels(s) {
//     if (typeof s !== 'string') return ''
//     return s.split("").map(c => /[aeiou]/gi.test(c) ? '|' + c : c + '|').join('\n')
// }

// function between(a, b) {
//     const integers = []
//     for (let i = a; i <= b; i++) {
//         integers.push(i)
//     }
//     return integers
// }

// String.prototype.isUpperCase = function () {
//     return this == this.toUpperCase()
// }

//2021 06.06

// function nthEven(n) {
//     return (n !== 1) ? 2 * (n - 1) : 0
// }

// //2021 06.05
// //random 8s

// function distanceBetweenPoints(a, b) {
//     //points are x and y props of Point.
//     //suqare root of ( (x1-x2) ^ 2 + (y1-y2) ^ 2 )
//     return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)
// }

// const areaOrPerimeter = function (l, w) {
//     return (l === w) ? l * w : (l + w) * 2
// }

// //2021 06.04

// //lengthy
// function breakEven(arr, l, last=""){
//     const array = []
//     for (i = 0; i < l; i += 2) {
//         array.push(arr[i].concat(arr[i + 1]))
//     }
//     if (arr.length % 2 !== 0) { array.push(last + '_') }

//     return array
// }

// function solution(str) {
//     const newStr = str.split("")
//     if (!newStr.length) return []
//     else if (newStr.length % 2 === 0) {
//         return breakEven(newStr, newStr.length-1)
//     }
//     else { 
//         return breakEven(newStr, newStr.length - 2, newStr[newStr.length-1])
//     }
// }

//2021 06.01
//random 8kyus

// function multiTable(num) {
//     let table = []
//     for (let i = 1; i <= 10; i++) {
//         table.push(`${i} * ${num} = ${i*num}`)
//     }
//     return table.join('\n')
// }

// function logicalCalc(array, op) {
//     console.log(array, op)
//     if (op === "OR") return array.reduce((a, b) => a || b)
//     else if (op === "AND") return array.reduce((a, b) => a && b)
//     else if (op === "XOR") return Boolean(array.reduce((a, b) => a ^ b))
// }

// const humanYearsCatYearsDogYears = humanYears => {
//     // human, cat, dog
//     const years = [humanYears, 0, 0]
//     for (let i = 1; i <= humanYears; i++){
//         if (i === 1) {
//             years[1] += 15
//             years[2] += 15
//         }
//         else if (i === 2) {
//             years[1] += 9
//             years[2] += 9
//         }
//         else if (i > 2) {
//             years[1] += 4
//             years[2] += 5
//         }
//     }

//     return years
// }


//2021 05.28

// function evenLast(numbers) {
//     const sum = numbers.filter((n, i) => i % 2 === 0).reduce((a, b) => a + b, 0)
//     const last = numbers.pop()
//     return (sum * last) || 0
// }

//2021 05.27

// function spam(number) {
//     return "hue".repeat(number)
// }

// //random 8kyu

// function take(arr, n) {
//     return arr.slice(0, n)
// }

// function spEng(sentence) {
//     return Boolean(sentence.match(/English/gi))
// }

// function howManyLightsabersDoYouOwn(name) {
//     return name !== 'Zach' ? 0 : 18
// }

//2021 05.26
//8kyu strings kata

// //My hacker name is "Malware Bomb"... bahaha!
// function aliasGen(first, last) {
//     console.log(first, last)
//     if (/[a-z]/gi.test(first[0]) && /[a-z]/gi.test(last[0])) {
//         return `${firstName[first[0].toUpperCase()]} ${surname[last[0].toUpperCase()]}`
//     } else {
//         return 'Your name must start with a letter from A - Z.'
//     }
// }

// function sayHello(name, city, state) {
//     console.log(name, city, state)
//     return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
// }

// function lowercaseCount(str) {
//     return (str.match(/[a-z]/g) || []).length
// }

// const ArrowFunc = function (arr) {
//     return arr.map(num => String.fromCharCode(num)).join(''); //Complete this function
// }

// // 2021 05.25
// // Turn String Input into Hash

// function strToHash(str) {
//     let hash = {}
//     str.split(', ').forEach(arr => {
//         let splitArr = arr.split('=')
//         if (!hash[splitArr[0]] && splitArr[0] !== '') return hash[splitArr[0]] = +splitArr[1]
//         // !hash['hi'] ? hash['hi'] = 1 : hash['hi']++
//     })
//     return hash
// }

// // 2021 05.24
// // ROT 13

// function rot13(str) {
//     return str.replace(/[A-Z]/gi, letter => {
//         let charCode = letter.charCodeAt()
//         if (charCode > 64 && charCode < 90) { 
//             return String.fromCodePoint(((charCode - 65 + 13) % 26) + 65)
//         } else {
//             return String.fromCodePoint(((charCode - 97 + 13) % 26) + 97)
//         }
//     })
// }

// //2021 05.23

// // Count characters in your string
// function count(string) {
//     let chars = {}

//     string.split('').forEach(c => {
//         if (!chars[c]) {
//             chars[c] = 1
//         } else {
//             chars[c]++
//         }
//     })
//     return chars
// }

// //Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
// var list1 = [
//     { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
//     { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
//     { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
//     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
// ]

// function findAdmin(list, lang) {
//     return list.filter(el => el.language == lang && el.githubAdmin == 'yes')
// }


//2021 05.22

// //salesman's travel
// //params: r = address list, zipcode to search
// //return: zipcode:street and town,street and town,.../house number,house number,...
// //I have created a monster
// function travel(r, zip) {
//     console.log(`\n\nr: [${r}]\nzip: [${zip}]\n\n`)
//     const list = r.split(',')
//     const adds = []
//     const nums = []
//     let res = '/'
//     if (zip == [] || zip.length !== 8) return zip + ':' + res
//     list.forEach((add, i) => {
//         if (add.includes(zip)) {
//             adds.push(list[i].trim().split(' ').slice(1, -2).join(' '))
//             nums.push(list[i].trim().split(' ')[0])
//         }
//     })
//     res = adds.join(',') + '/' + nums.join(',')
//     // console.log(adds.join(','), nums.join(','))
//     console.log(zip + ':' + res)
//     //       console.log(nums)
//     return zip + ':' + res
// }

// let add = "123 Main Street St.Louisville OH 43071, 432 Main Long Road St.Louisville OH 43071, 786 High Street Pollocksville NY 56432, 54 Holy Grail Street Niagara Town ZP 32908, 3200 Main Rd.Bern AE 56210, 1 Gordon St.Atlanta RE 13000, 10 Pussy Cat Rd.Chicago EX 34342, 10 Gordon St.Atlanta RE 13000, 58 Gordon Road Atlanta RE 13000, 22 Tokyo Av.Tedmondville SW 43098, 674 Paris bd.Abbeville AA 45521, 10 Surta Alley Goodtown GG 30654, 45 Holy Grail Al.Niagara Town ZP 32908, 320 Main Al.Bern AE 56210, 14 Gordon Park Atlanta RE 13000, 100 Pussy Cat Rd.Chicago EX 34342, 2 Gordon St.Atlanta RE 13000, 5 Gordon Road Atlanta RE 13000, 2200 Tokyo Av.Tedmondville SW 43098, 67 Paris St.Abbeville AA 45521, 11 Surta Avenue Goodtown GG 30654, 45 Holy Grail Al.Niagara Town ZP 32918, 320 Main Al.Bern AE 56215, 14 Gordon Park Atlanta RE 13200, 100 Pussy Cat Rd.Chicago EX 34345, 2 Gordon St.Atlanta RE 13222, 5 Gordon Road Atlanta RE 13001, 2200 Tokyo Av.Tedmondville SW 43198, 67 Paris St.Abbeville AA 45522, 11 Surta Avenue Goodville GG 30655, 2222 Tokyo Av.Tedmondville SW 43198, 670 Paris St.Abbeville AA 45522, 114 Surta Avenue Goodville GG 30655, 2 Holy Grail Street Niagara Town ZP 32908, 3 Main Rd.Bern AE 56210, 77 Gordon St.Atlanta RE 13000"


// console.log(travel(add, 'AA 45522'))

//2021 05.21

// //Alphabet Symmetry
// function solve(arr) {
//     const howMany = []
//     arr.forEach(str => {
//         let count = 0
//         str.split('').forEach((l,i) => {
//             if (l.toLowerCase().codePointAt() - 97 == i) count++
//         })
//         howMany.push(count)
//     })
//     return howMany
// }

// console.log(solve(['abc', 'abedg', 'jslmndguis'])) // [3, 3, 2]

//2021 05.09

// function constructSubmatrix(matrix, delRows, delCols) {
//     let arr = matrix.filter((row, i) => {
//         return delRows.includes(i) === false
//     })
//     return arr.map(row => row.filter((el, i) => {
//         return delCols.includes(i) === false
//     }))
// }

//// 
// function reverse(str) {
//     return str.split("").reverse().join("") || ""
// }

// function shorter_reverse_longer(a, b) {
//     return (a.length >= b.length) ? b + reverse(a) + b : a + reverse(b) + a
// }

//2021 05.08

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return (distanceToPump/mpg <= fuelLeft) ? true : false
// }

//2021 05.07

// function getRealFloor(n) {
//     console.log(n)
//     if (n <= 0) return n
//     else if (n > 0 && n < 13) return n - 1
//     else return n - 2
// }

//2021 05.06

// function isVow(a) {
//     return a.map(el => {
//         return /97|101|105|111|117/g.test(el) ? String.fromCharCode(el) : el
//     })
// }

// function first(arr, n = 1) {
//     return (n) ? arr.slice(0, n) : []  //turns out I don't need the ternary!
// }

// function smallEnough(a, limit) {
//     return a.some(el => el > limit) ? false : true
// }

// 2021 05.04
// more kata tagged 'arrays'
// function evenLast(numbers) {          //unsolved
//     const arr = numbers.slice(0, -1)
//     let n = numbers[numbers.length - 1] || 0
//     let sum = 0
//     console.log([numbers, arr, n])

//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             sum += arr[i]
//             for (let j = 0; j < arr[i].length; j++) {
//                 if (j % 2 === 0) {
//                     sum += arr[i][j]
//                 }
//             }
//         }
//     }

//     return sum * n
// }

// console.log(evenLast([1, 3, 3, 1, 10], [1, 3, 3, 1], 10 ))

// learned something new - Rest parameter - unsolved
// function nthSmallest(...args) {    
//     // let arr = [].concat(...args.slice(0, -1)).sort()
//     // let n = args[args.length - 1]
//     // return arr[n - 1]
// }

// sortme = function (names) {
//     return names.sort()
// }

// 2021 05.01
// // blaw's recommended arrays codewars 8kyus

// function addLength(str) {
//     return str.split(' ').map(el => `${el} ${el.length}`)
// }

// function array(arr) {
//     let realArr = arr.split(',') || []
//     if (realArr.length < 3) {
//         return null
//     } else {
//         realArr.pop()
//         realArr.shift()
//         return realArr.join(' ')
//     }
// }
// // meh.

// function multipleOfIndex(array) {
//     return array.filter((el, i) => el % i === 0)
// }

// function grow(x) {
//     return x.sort().reduce((a, b) => a * b, 1)
// }

// function getAverage(marks) {
//     return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length)
// }

// function countSheeps(arrayOfSheep) {
//     let n = 0
//     for (let i = 0; i < arrayOfSheep.length; i++) {
//         if (arrayOfSheep[i]) n++
//     }
//     return n
// }

// // 2021 04.26

// function vowelIndices(word) {
//     let indices = []
//     word.split("").forEach((el, i) => {
//         if (/[aeiouy]/gi.test(el)) indices.push(i + 1) //eyyy sometimes y!
//     })
//     return indices
// }

// //2021 04.24

// function vertMirror(str) {
//     return str.split('\n').map(el => el.split('').reverse().join(''))
// }
// function horMirror(str) {
//     return str.split('\n').reverse()
// }
// function oper(func, s) {
//     return func(s).join('\n')
// }

//2021 04.23
// more of @blawblawLaw's favorite 8kyu string-related Kata!
// // 'Reversing Words in a String'
// function reverse(string) {
//     return string.split(' ').map(w => w.trim()).reverse().join(' ')
// }

// // 'No Loops 2 - You only need one'
// function check(a, x) {
//     return a.includes(x)
// }

// // 'Returning Strings'
// function greet(name) {
//     return `Hello, ${name} how are you doing today?`
// }

// // 'noobCode 01: SUPERSIZE ME.... or rather, this integer!'
// const superSize = num => Number(String(num).split('').map(Number).sort((a,b)=>b-a).join(''))
// //duh could've used reverse!

// // 'Reversed Words'
// const reverseWords = str => str.split(' ').reverse().join(' ')

// // 'Name Shuffler'
// const nameShuffler = str => str.split(" ").reverse().join(" ")

// // 'Sort and Star'
// const twoSort = s => s.sort()[0].split("").join('***')

// 2021 04.22
// @blawblawLaw's favorite 8kyu string-related Kata!

// // 'A Strange Trip to the Market'
// function isLockNessMonster(s) {
//     let str = s.toLowerCase()
//     if (str.includes('3.50') || str.includes('tree fiddy') || str.includes('three fifty')) return true
//     else return false
// }

// // top solution was a nice RegExp
// const isLockNessMonster = s => /tree fiddy|three fifty|3.50/.test(s)

// // 'You Only Need One - Beginner'
// const check = (a, x) => a.includes(x)

// // 'Fake Binary'
// const fakeBin = x => x.split("").map(x => (Number(x) < 5) ? '0' : '1').join("")

// // 'The Feast of Many Beasts'
// function feast(beast, dish) {
//     return ([beast[0], beast.slice(-1)].join("") == [dish[0], dish.slice(-1)].join("")) ? true : false
// }

// 2021 04.21
// more "Training JS" series Kata from myjinxin2015

// // #13 Number object
// function whatNumberIsIt(n) {
//     let word = ''
//     switch (isNaN(n) || Number(n)) {
//         case (true):
//             word = 'Number.NaN'
//             break
//         case (Number.NEGATIVE_INFINITY):
//             word = 'Number.NEGATIVE_INFINITY'
//             break
//         case (Number.POSITIVE_INFINITY):
//             word = 'Number.POSITIVE_INFINITY'
//             break
//         case (Number.MAX_VALUE):
//             word = 'Number.MAX_VALUE'
//             break
//         case (Number.MIN_VALUE):
//             word = 'Number.MIN_VALUE'
//             break
//         default:
//             word += n
//     }
//     return `Input number is ${word}`
// }

// // #12
// function giveMeFive(obj) {
//     const fiveKeys = []
//     for (const key in obj) {
//         if (key.length == 5) fiveKeys.push(key)
//         if (obj[key].length == 5) fiveKeys.push(obj[key])
//     }
//     return fiveKeys
// }


// 2021 04.20
// // String-related problems!

// const isAnagram = (test, original) => {
//     const string = s => s.toLowerCase().split('').sort().join('')
//     return string(test) == string(original)
// }

// const isAnagram = (test, original) => {
//     if (test.length == original.length) {
//         let str1 = test.toLowerCase().split('').sort().join('')
//         let str2 = original.toLowerCase().split('').sort().join('')
//         return str1 == str2
//     } else {
//         return false
//     }
// }

// function broken(x) {
//     return x.split("").map(el => (el == '0') ? '1' : '0').join("")
// }

// function findOddNames(list) {
//     let oddNames = []
//     list.forEach(el => {
//         if (el.firstName.split("").map(l => l.codePointAt(0)).reduce((a,b) => a+b) % 2 !== 0) oddNames.push(el)
//     })
//     return oddNames
// }

// function inArray(array1, array2) {
//     let r = []
//     array1.forEach(word => {
//         array2.forEach(el => {
//             if (new RegExp(word).test(el) && !r.includes(word)) r.push(word)
//         })
//     })
//     return r.sort()
// }

// function spinWords(string) {
//     return string.split(" ").map(word => {
//         return (word.length > 4) ? word.split("").reverse().join("") : word
//     }).join(" ")
// }

// 2021 04.19

// //  #38: Reg Exp - ^ $ . and test()
// function findSimilarity(str, word) {
//     let regxStr = "^" + word[0] + word.replace(/./g, ".").slice(1,-1) + word[word.length - 1] + "$"
//     return str.split(" ").filter(el => new RegExp(regxStr).test(el)).join(" ")
// }

// // #37 - RegExp Object!

// function countAnimals(animals, count) {
//     let arr = []  //or could use map
//     count.forEach(el => arr.push((animals.match(new RegExp(el, "g")) || []).length))
//     return arr
// }

// example:
// countAnimals("dog,cat", ["dog", "cat", "pig"]); //=> [1,1,0]

// // #36 - Math.random()
// function rndCode() {
//     let punct = ['~','!','@','#','$','%','^','&','*']
//     let pass = String.fromCharCode(rand(65,78), rand(65,78))
//     for (let i = 0; i < 4; i++) pass = pass.concat(rand(0,10))
//     for (let i = 0; i < 2; i++) pass = pass.concat(punct[rand(0, punct.length)])

//     return pass

//     function rand(min, max){ //excludes max
//         return Math.floor(Math.random() * (max - min) + min)
// //              or use ~~ instead of Math.floor
//     }
// }

// Coding in function rndCode.Your task is to generate a random verification code.In accordance with the following rules:

// the code length should be 8;

// The 1st and 2nd characters should be two uppercase letters.The range is "ABCDEFGHIJKLM".

//     The 3rd - 6th characters should be four numbers.

//         the 7th and 8th characters should be two symbols.The range is "~!@#$%^&*".

// If Your code runs 100 times, It should generate 100 non duplicate verification codes.

// Some valid verification code examples:

// AB1234#$ MG6145$@ KJ2249@&

// // #33 - max, min, abs
// function maxMin(arr1, arr2) {
//     let diffs = []
//     arr1.forEach((el, i) => diffs.push(Math.abs(el - arr2[i])))
//     return [Math.max(...diffs), Math.min(...diffs)]
// }

// // # 32 - round, ceil, floor
// function roundIt(n) {
//     let leftHalf = n.toString().split('.')[0].length
//     let rightHalf = n.toString().split('.')[1].length

//     if (leftHalf != rightHalf) return (leftHalf < rightHalf) ? Math.ceil(n) : Math.floor(n)
//     else return Math.round(n)
// }

// // # 31
// function blackAndWhite(arr) {
//     let a = Array.isArray(arr)
//     return `It's a ${a ? arr.indexOf(5) >= 0 && arr.indexOf(13) >= 0 ? 'black' : 'white' : 'fake'} array`
// }

// 2021 04.18

// // # 29 concat(), join()

// function bigToSmall(arr) {
//     let newArr = [].concat(...arr)  //chef's kiss
//     // for (let i = 0; i < arr.length; i++){
//     //     newArr = newArr.concat(arr[i])
//     // }

//     return newArr.sort((a,b) => b-a).join(">")
// }

// 2021 04.17

// // #27 - filter

// function countGrade(scores) {
//     const finalScores = {
//         S: scores.filter(el => el == 100).length,
//         A: scores.filter(el => el < 100 && el >= 90).length,
//         B: scores.filter(el => el < 90 && el >= 80).length,
//         C: scores.filter(el => el < 80 && el >= 60).length,
//         D: scores.filter(el => el < 60 && el >= 0).length,
//         X: scores.filter(el => el < 0).length
//     }
//     return finalScores
// }

// function countGrade(scores) {
//     const finalScores = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 }

//     for (let i in scores) {
//         if (scores[i] == 100) finalScores.S++
//         else if (scores[i] < 100 && scores[i] >= 90) finalScores.A++
//         else if (scores[i] < 90 && scores[i] >= 80) finalScores.B++
//         else if (scores[i] < 80 && scores[i] >= 60) finalScores.C++
//         else if (scores[i] < 60 && scores[i] >= 0) finalScores.D++
//         else finalScores.X++
//     }
//     return finalScores
// }
// crap. Didn't use filter..

// // #26
// function isolateIt(arr) {
//     // add | in the middle of each array
//     let thing = arr.map(el => {
//         let l = el.length
//         let start = el.slice(0, Math.floor(l/2))
//         let end = el.slice(Math.ceil(l/2), el.length)
//         return start + "|" + end
//     })
//     return thing
// }

// // #10
// function pickIt(arr) {
//     const odd = [], even = [];
//     for (let i = 0; i < arr.length; i++) {
//         (arr[i] % 2 === 0) ? even.push(arr[i]) : odd.push(arr[i])
//     }
//     return [odd, even];
// }

// // #8
// // Using an object:
// function howManydays(month) {
//     const daysInMonths = {
//         31: [1, 3, 5, 7, 8, 10, 12],
//         30: [4, 6, 9, 11],
//         28: [2]
//     }

//     for (m in daysInMonths) {
//         if (daysInMonths[m].includes(month)) return Number(m)
//     }
// }

// // using a switch statement:
// function howManydays(month) {
//     var days;
//     switch (month) {
//         case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//             days = 31
//             break
//         case 4: case 6: case 9: case 11:
//             days = 30
//             break
//         case 2:
//             days = 28
//             break
//         default:
//             return 'That is not a valid month!'
//     }
//     return days;
// }


// // #7
// function saleHotdogs(n) {
//     if (n < 5) return n * 100
//     else if (n >= 10) return n * 90
//     else return n * 95
// }

// // #6
// const trueOrFalse = val => val ? "true" : "false" //test requires return type string

// // #1
// function helloWorld() {
//     var str = 'Hello World!'  // test requires var!
//     console.log(str)
// }

// // Finally deciding to complete this series of 8s. All the ones I haven't finished yet will be above. I won't post the fill-in-the-blank style ones
// // TRAINING JS SERIES by myjinxin2015

// // for this one, someone used string.split('d').length-1 to count the length! very cool

// function nbDig(n, d) {
//     let arr = []
//     for (let i = 0; i <= n; i++) {
//         arr.push(i ** 2)
//     }
//     return arr.join("").split("").filter(num => num == d).length
// }

// 2021 04.15

// function solution(value) {
//     return "Value is " + `${value}`.padStart(5, '0')
// }

// function twiceAsOld(dadAge, sonAge) {
//     return Math.abs(dadAge - sonAge * 2)
// }

// 2021 04.14

// function squareArea(a) {
//     const r = (a * 4 / Math.PI) / 2
//     const area = r ** 2
//     return +area.toFixed(2)
// }

// a*4 = circumference
// 2pi * r = circumf
// (circumf/pi)/2 = radius
// radius^2 = area

// function periodIsLate(last, today, cycleLength) {
//     msPassed = today.getTime() - last.getTime()
//     msInDay = 8.64e+7
//     return (msPassed / msInDay > cycleLength) ? true : false
// }

// const remove = s => s.replace(/!$/, '')

// const include = (arr, item) => arr.includes(item)

// function correctTail(body, tail) {
//     const sub = body.substr(body.length - tail.length)
//     return (sub == tail) ? true : false
// }

// const nameShuffler = str => str.split(" ").reverse().join(" ")

// const shortcut = string => string.replace(/[aeiou]/gi, "")

// const solution = (a, b) => (a.length < b.length) ? a+b+a : b+a+b

// function greaterThanLessThan(a, b, c) {
//     return a < b < c
// }

// 2021 04.13

// knock out some 8's / 7's

// function yourFutureCareer() {
//     const career = Math.random()
//     if (career <= 0.32) return 'FrontEnd Developer'
//     else if (career <= 0.65) return 'BackEnd Developer'
//     else return 'Full-Stack Developer'
// }

// function gps(s, x) {             // come back to this
//     let ranges = []
//     if (x.length <= 1) 0
//     else  {
//         for (let i = 0; i < s.length - 2; i++){
//             ranges.push(s[i+1] - s[i])
//         }
//     }
//     return Math.floor(Math.max(...ranges.map(n => (n * 3600) / x)))
// }

// function addArrays(array1, array2) {  // ( ◉◞౪◟◉)
//     return (array1.length != array2.length) ? hello : array1.map((n, i) => n + array2[i])
// }

// function filterLongWords(sentence, n) {
//     return sentence.split(" ").filter(word => word.length > n)
// }

// function converter(mpg) {
//     // 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres
//     return +(mpg * 1.609344 / 4.54609188).toFixed(2)
// }

// let friends = [{ id: 92837, name: 'bob', extra: 'yee' }, { id: 92823, name: 'lisa' }, { id: 9287, name: 'nun'}]

// function combineFriends(arr){
//     let newFriends = {}
//     arr.forEach((friend, i) => {
//         if (!newFriends[friend.id]) { newFriends[friend.id] = arr[i]}
//         delete newFriends[friend.id].id
//     })
//     return newFriends
// }

// function powersOfTwo(n) {
//     const powers = []
//     for (let i = 0; i <= n; i++){
//         powers.push(2 ** i)
//     }
//     return powers
// }

// const hoopCount = n => n > 9 ? 'Great, now move on to tricks' : 'Keep at it until you get it'

// const howManySmaller = (arr, n) => arr.filter(num => num.toFixed(2) < n).length

// function howManySmaller(arr, n) {
//     return arr.filter(num => num.toFixed(2) < n).length
// }

// function howManySmaller(arr, n) {
//     return arr.map(num => num.toFixed(2)).filter(num => num < n).length
// }

// 2021 04.12

// function part(x) {
//     let alanTerms = ["Partridge", "PearTree", "Chat", "Dan", "Toblerone", "Lynn", "AlphaPapa", "Nomad"]
//     let count = 0
//     x.forEach(x => count += Number( alanTerms.includes(x)) )
//     return count > 0 ? `Mines a pint${'!'.repeat(count)}` : 'Lynn, I\'ve pierced my foot on a spike!!'
// }

// 2021 04.11

//there is a Math.hypot function!! but we aren't using that here

// const hypotenuse = (a, b) => Math.sqrt(a ** 2 + b ** 2)
// const leg = (c, a) => Math.sqrt(c ** 2 - a ** 2)

// // or we could do
// let hours = Math.floor(seconds / 3600)
// let minutes = Math.floor(seconds % 3600 / 60)

// function toTime(seconds) {
//     let hours = Math.trunc(seconds / 3600)
//     let minutes = Math.trunc(seconds / 60 - hours * 60)
//     return (`${hours} hour(s) and ${minutes} minute(s)`)
// }

// 2021 04.10

// const apple = x => x ** 2 > 1000 ? 'It\'s hotter than the sun!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'

// 2021 04.09

// function updateLight(current) {
//  let lights = {green: 'yellow', yellow: 'red', red: 'green'}
//  return lights[current]
// }

// 2021 04.06

//bunch of 8s

// var TempleStrings = function (obj, feature) {
//     return `${obj} are ${feature}`
// }

//number validation
// function isDigit(s) {
//     return parseFloat(s) === Number(s)
// }

// 2021 04.05

// function multiplyAll(arr) {
//     return n => arr.map(num => num * n)
// }

// function multiplyAll(arr) {
//     const multiplier = n => arr.map(num => num * n)
//     return multiplier
// }

// 2021 04.04

// function swapValues(args) {
//     let temp = args[0]
//     args[0] = args[1]
//     args[1] = temp
// }

// 2021 04.03

// function mango(quantity, price) {
//     return (quantity - Math.floor(quantity / 3)) * price
// }

// 2021 04.02

// function stray(numbers) {
//     if (numbers[0] !== numbers[1] && numbers[1] == numbers[2]) return numbers[0]
//     else if (numbers[1] != numbers[2] && numbers[2] == numbers[0]) return numbers[1]
//     else if (numbers[2] != numbers[0] && numbers[0] == numbers[1]) return numbers[2]
//     else {
//         for (i = 3; i < numbers.length; i++) {
//             if (numbers[i] != numbers[0]) return numbers[i]
//         }
//     }
// }

// 2021 04.01

//much more simple:
// function breakChocolate(n, m){
//     return (n > 0 && m > 0) ? n * m - 1 : 0
// }

// function breakChocolate(n, m) {
//     //the logic here is find the count from n to 1, and then find the count from m to 1 n times, and add together
//     if (n > 0 && m > 0){ //because one dimension of 0 is impossible!
//         let n1 = 0
//         let n2 = 0
//         for (let i = n; i > 1; i--){
//             n1++
//         }
//         for (let i = 0; i < n; i++){
//             for (let j = m; j > 1; j--){
//                 n2++
//             }
//         }
//         return n1 + n2
//     } else {
//         return 0
//     }
// }

// 2021 03.31

// var countSheep = function (num) {
//     let str = ""
//     for (let i = 1; i <= num; i++) {
//         str = str.concat(`${i} sheep...`)
//     }
//     return str
// }

// const rps = (p1, p2) => {
//     const wins = {
//         scissors: 'paper',
//         paper: 'rock',
//         rock: 'scissors'
//     }

//     if (p1 && p2) {
//         return (wins[p1] == p2) ? 'Player 1 wins' : ((p1 !== p2) ? 'Player 2 wins' : 'draw')
//     } else {
//         return 'Please try again'
//     }
// }

// function sumArray(array) {
//     return (!array || array.length < 3) ? 0 : array.sort((a, b) => a - b).slice(1, array.length - 1).reduce((a, b) => a + b)
// }

// gonna take a break and then do some 8's

// function splitAndMerge(string, separator) {
//     return string.split(" ").map(word => word.split("").join(separator)).join(" ")
// }

// function bonusTime(salary, bonus) {
//     return bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`
// }

// function calc(str) {
//     let total1 = str.replace(/[A-Z]/gi, letter => letter.codePointAt())
//     let total2 = total1.replace(/7/g, '1')

//     // console.log(total1 + " : " + total2)
//     return total1.split("").reduce((a, b) => +a + +b) - total2.split("").reduce((a, b) => +a + +b)
// }

// const repeater = (string, n) => string.repeat(n)

// const mouthSize = animal => (animal.toLowerCase() == 'alligator') ? 'small' : 'wide'

// function removeSmallest(numbers) {
//     let minIndex = numbers.indexOf(Math.min(...numbers))
//     return numbers.filter((n, i) => i !== minIndex)
//     // console.log(minIndex)
//     // numbers.forEach((n, i) => console.log(i + ":" + minIndex))
// }
    // return numbers.filter(n => n !== min)

// function reverseWords(str) {
//     return str.replace(/\S+/g, word => word.split("").reverse().join("") )
// }

// function divisors(integer) {
//     //return divisors excl 1 and that int
//     //if arr is empty, return "int is prime"
//     let result = []
//     for (let i = 2; i < integer; i++) {
//         if (integer % i === 0) result.push(i)
//     }
//     return result.length < 1 ? `${integer} is prime` : result
// }

// const binaryArrayToNumber = arr => parseInt(arr.join(""), 2)

// function openOrSenior(data) {
//     return data.map(el => {
//         return (el[0] >= 55 && el[1] > 7) ? 'Senior' : 'Open'
//     })
// }

// 2021 03.30 

// function toLeetSpeak(str){
//     let leet = {
//         A : '@',
//         B : '8',
//         C : '(',
//         D : 'D',
//         E : '3',
//         F : 'F',
//         G : '6',
//         H : '#',
//         I : '!',
//         J : 'J',
//         K : 'K',
//         L : '1',
//         M : 'M',
//         N : 'N',
//         O : '0',
//         P : 'P',
//         Q : 'Q',
//         R : 'R',
//         S : '$',
//         T : '7',
//         U : 'U',
//         V : 'V',
//         W : 'W',
//         X : 'X',
//         Y : 'Y',
//         Z : '2'
//     }

//     const words = str.split(" ").map(el => el.split(""))
//     for (let i = 0; i < words.length; i++){
//         for (let j = 0; j < words[i].length; j++) {
//             words[i][j] = leet[words[i][j]]
//         }
//     }
//     return words.map(arr => arr.join("")).join(" ")
// }

// 2021 03.29

// const splitSentence = s => s.split(" ")

// 2021 03.28

// const removeExclamationMarks = s => s.replace(/!/g, "")

// function getDivisorsCnt(n) {
//     let nums = []
//     for (let i = 1; i <= n; i++){
//         if (n % i === 0) nums.push(i)
//     }
//     return nums.length
// }

// 2021 03.27

// function tapCodeTranslation(text) {
//     const square = [
//         ["a", "b", "c", "d", "e"],
//         ["f", "g", "h", "i", "j"],
//         ["l", "m", "n", "o", "p"],
//         ["q", "r", "s", "t", "u"],
//         ["v", "w", "x", "y", "z"]
//     ]
//     let arr = []

//     // replace all ks with cs in whole string
//     let string = text.replace(/k/gi, 'c')
//     string.split("").map((e, i) => {
//         const row = square.findIndex(el => el.includes(e)) //find the row in square
//         const col = square[row].findIndex(el => el.includes(e)) //find col
//         console.log(row + 1)

//         arr.push(`${'.'.repeat(row + 1)} ${'.'.repeat(col + 1)}`)
//     })

//     return arr.join(" ")
// }

// 2021 03.25

// const twoSort = s => s.sort().shift().split("").join("***")

// const smash = words => words.join(" ")

// 2021 03.24

// function countBy(x, n) {
//     let arr = []

//     for (i = 1; i <= n; i++) {
//         arr.push(x * i)
//     }
//     return arr
// }

// 2021 03.23

// function betterThanAverage(classPoints, yourPoints) {
//     return (yourPoints > (classPoints.reduce((a,b) => a+b) / classPoints.length)) ? true : false
// }

// 2021 03.22
// 7 kyus today

// function printerError(s) {
//     let errs = s.match(/[n-z]/gi)
//     return `${errs ? errs.length : 0}/${s.length}`
// }

// function addBinary(a, b) {
//     return (a + b).toString(2)
// }

// so it turns out that Math.pow(n, 3) works for this one!

// function rowSumOddNumbers(n) {
//     // the row (n) is also equal to the length of row
//     //number at end of row = (n * n) + (n - 1)

//     if (!n) return 0
//     else {
//         let sum = 0
//         let endNum = (n * n) + (n - 1)
//         for (let i = 0; i < n; i++){
//             sum += endNum
//             endNum -= 2 // decrease to next odd int
//         }
//         return sum
//     }
// }

// BUT the square root of a perfect square + 1, and then squared will find the next perfect square!!

// function findNextSquare(sq) {
//     let sqrt = Math.sqrt(sq)
//     return (Number.isInteger(sqrt)) ? (Math.sqrt(sqrt) + 1) ** 2 : -1
// }

// function findNextSquare(sq) {
//     // Return the next square if sq is a perfect square, -1 otherwise
//     if (Number.isInteger(Math.sqrt(sq))) {
//         while (!(Number.isInteger(Math.sqrt(sq + 1)))){
//             sq++
//         }
//         return sq + 1
//     }
//     else return -1
// }

//perfect square has a sqrt that is a whole int

// function findNextSquare(sq) {
//     // Return the next square if sq is a perfect square, -1 otherwise
//     if (Number.isInteger(Math.sqrt(sq))) {
//         while (!(Number.isInteger(Math.sqrt(sq + 1)))){
//             sq++
//         }
//         return sq + 1
//     }
//     else return -1
// }


// function nbYear(p0, percent, aug, p) {
//     let years = 0
//     while (p0 < p) {
//         p0 = p0 + p0 * (percent / 100) + aug
//         years++
//     }
//     return years
// }

// function getSum(a, b) {
//     let min = Math.min(a,b)
//     let max = Math.max(a,b)

//     if (min == max) return max
//     else return max + getSum(min, max - 1)
// }

// String.prototype.toJadenCase = function () {
//   return this.split(" ").map(e => e[0].toUpperCase() + e.slice(1)).join(" ")
// }

// 2021.03.21

// function enough(cap, on, wait) {
//     return (on + wait > cap) ? (on + wait) - cap : 0
// }

// function check(a, x) {
//     return a.includes(x)
// }

// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     // "GCAT"  => "GCAU"
//     return dna.replace(/t/gi, "U")
// }

// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     // "GCAT"  => "GCAU"
//     return dna.split("").map(e => (e == "T" || e == "U") ? ((e == "T") ? "U" : "E") : e).join("")
// }

// function countPositivesSumNegatives(arr) {

//     if (arr && arr.length >= 1) {
//         let positiveCount = arr.filter(e => e > 0).length || 0
//         let sumNegatives = arr.filter(e => e < 0).reduce((a, b) => a + b) || 0

//         return [positiveCount, sumNegatives]
//     }

//     else return []
// }

// 2021.03.19

// function rgb(r, g, b) {
//     let arr = [r,g,b].map(e => (e < 0) ? e = 0 : ((e > 255) ? e = 255 : e)) //clip numbers at 0 or 255
//     return arr.map(e => e.toString(16)).map(e => (e.length < 2) ? '0' + e : e).join("").toUpperCase()
// }

// solution. works but maybe write as switch statement...
// function likes(names) {
//     if (names.length === 0) return 'no one likes this'
//     return (names.length >= 1 && names.length <= 3) ? (names.slice(0, names.length - 2) || "").concat(names.slice(-2).join(" and ")).join(", ") + ` like${names.length == 1 ? 's' : ""} this` : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
// }

// 2021.03.18

// function likes(names) {
//     return names.length == 0 ? 'no one likes this' : (names.slice(0, names.length - 2) || "").concat(names.slice(-2).join(" and ")).join(", ") + ` like${names.length == 1 ? 's' : ""} this`
// } //this one isn't the right format!

// reduce fractions 
// function reduce(fr){
//     let list = []
//     let divisor

//     fr.forEach((e, ind) => {
//         list[ind] = []
//         for (let i = 1; i <= e; i++) {
//             if (e % i === 0) list[ind].push(i)
//         }
//     })

//     list.sort().forEach(e => e.reverse()) //to make sure shortest list is first & reversed
    
//     for (let i = 0; i < list[0].length; i++){
//         if (list[1].includes(list[0][i])){
//             divisor = list[0][i]
//             break
//         }
//     }

//     return [fr[0]/divisor, fr[1]/divisor]
// }

// clever solution using bitwise operator, leaving the odd int out:
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// my solution:
// function findOdd(arr) {
//     let nums = {}
//     arr.forEach(e => nums[e] = (nums[e] || 0) + 1)
//     console.log(nums)
//     for (el in nums){
//         if (nums[el] % 2 !== 0) return Number(el)
//     }
// }

// 2021.03.18

// var list1 = [
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//     { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//     { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//     { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ]

// top solution:
// function countLanguages(list) {
//     var count = {};
//     list.forEach(x => count[x.language] = (count[x.language] || 0) + 1);
//     return count;
// }

// my solution:
// function countLanguages(list) {
//     let result = {}

//     for (person in list){
//         !result[list[person].language] ? result[list[person].language] = 1 : result[list[person].language]++
//     }

//     return result
// }

// 2021.03.17

// function makeAWindow(n) {
//     let window = ""

//     window = window
//         .concat(`${'-'.repeat(n * 2 + 3)}\n`)
//         .concat(`|${'.'.repeat(n)}|${'.'.repeat(n)}|\n`.repeat(n))
//         .concat(`|${'-'.repeat(n)}+${'-'.repeat(n)}|\n`)
//         .concat(`|${'.'.repeat(n)}|${'.'.repeat(n)}|\n`.repeat(n))
//         .concat(`${'-'.repeat(n * 2 + 3)}`)

//     return window
// }

// 2021.03.14
// happy pi day!

// function detect(comment) {
//     return comment.startsWith("Can someone explain")
// }

// function findLongest(str) {
//     const spl = str.split(" ")
//     let longest = 0

//     for (let i = 0; i < spl.length; i++) {
//         if (spl[i].length > longest) {
//             longest = spl[i].length
//         }
//     }
//     return longest
// }

// function sumMix(x) {
//     return x.map(a => +a).reduce((a, b) => a + b);
// }

// function sumMix(x) {
//     return x.reduce((a,b) => a + Number(b), 0)
// }

// class Ball {
//     constructor(ballType = 'regular'){
//         this.ballType = ballType
//     }
// }

// 2021.03.09

//practice:  lookup 'Set' object

// function longest(s1, s2) {
//     let res = []
//     let arr = s1.concat(s2).split("").sort()

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] !== arr[i + 1]) res.push(arr[i])
//     }
//     return res.join("")
// }

// function points(games) {
//     let results = games.map(e => e.split(":"))
//     return results.reduce((a,b) => {
//         if (b[0] > b[1]) return a + 3
//         else if (b[0] === b[1]) return a + 1
//         else return a + 0
//     },0)
// }

// 2021.03.06

// const min = (list) => Math.min(...list)
// const max = (list) => Math.max(...list)

// function arrayPlusArray(arr1, arr2) {
//     return arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0)
// }

// function howMuchWater(water, load, clothes){
//   if (clothes > load * 2) return 'Too much clothes'
//   else if (clothes < load) return 'Not enough clothes'
//   else return Number((water * 1.1 ** (clothes - load)).toFixed(2))
// }

// function sumStr(a,b) {
//   return String(Number(a) + Number(b))
// }

// console.log(sumStr('2','3'))

// let i = 0

// function notepad(){
//   // return (i++ + i--)
//   return i++
// }

// console.log(notepad())
// console.log(i)

// function position(letter){
//   return `Position of alphabet: ${letter.toLowerCase().charCodeAt(0) - 96}`
// }

// console.log(position('a'))

// function getAge(inputString){
//   return parseInt(inputString[0])
// }

// function arr(n) {
//   let array = []
//   for (let i = 0; i < n; i++){
//     array.push(i)
//   }
//   return array
// }

// function lovefunc(a, b){
//   return a % 2 !== b % 2
// }

// function lovefunc(a, b){
//   if (a % 2 == 0) return b % 2 != 0 ? true : false
//   if (a % 2 != 0) return b % 2 == 0 ? true : false
// }

// const cockroachSpeed = (s) => Math.floor((((s * 1000) * 100) / 60) / 60)

// 2021.03.04

// pretty happy with this one:

// moves = ["up", "left", "down", "down", "right", "up", "left", "down", "right"]
// fighters = [
//     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//     ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
//     ['Gandalf', 'Gollum', 'Pip', 'Frodo', 'Sauron', 'Galadriel'] //added a row to see if I can get it to work with any # of rows of fighters
// ]

// // expected:
// // Ryu, Vega, M.Bison, Galadriel, Gandalf, Ken, M.Bison, Galadriel, Gandalf

// function streetFighterSelection(fighters, position, moves) {
//     let x = position[0]
//     let y = position[1]
//     let selections = []

//     moves.forEach(move => {
//         if (move == 'up' && x != 0) x--
//         if (move == 'down' && x != fighters.length - 1) x++
//         else if (move == 'left') y == 0 ? y = fighters[x].length - 1 : y--
//         else if (move == 'right') y == fighters[x].length - 1 ? y = 0 : y++

//         selections.push(fighters[x][y])
//     })

//     return selections
// }


// function fizzbuzz(n) {
//     const arr = []
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 == 0 && i % 5 == 0) arr.push('FizzBuzz')
//         else if (i % 3 == 0) arr.push('Fizz')
//         else if (i % 5 == 0) arr.push('Buzz')
//         else arr.push(i)
//     }
//     return arr
// }

// function sumOfDifferences(arr) {
//     let a = arr.sort((a, b) => b - a)
//     let n = 0
//     for (let i = 0; i < a.length - 1; i++) {
//         n += a[i] - a[i + 1]
//     }
//     return n
// }

// function index(array, n) {
//     return array.length > n ? array[n] ** n : -1
// }

// const quarterOf = month => Math.ceil(month / 3)

// function toCsvText(array) {
//     return array.map(e => e.join(",")).join('\n')
// }

// const odds = values => values.filter(e => e % 2 !== 0)

// const problem = x => (typeof x != 'number') ? 'Error' : x * 50 + 6

// function bmi(weight, height) {
//     let bmi = weight / height ** 2

//     switch (true) {
//         case (bmi <= 18.5):
//             return "Underweight"

//         case (bmi <= 25.0):
//             return "Normal"

//         case (bmi <= 30.0):
//             return "Overweight"

//         case (bmi > 30):
//             return "Obese"
//     }
// }

// const flip = (d, a) => (d == 'R') ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a)

// function firstNonConsecutive(arr) {
//     const num = arr.find((el, i) => el != (i + arr[0]))  //rule of sequential numbers - any # must equal its position - 1 plus the 1st #
//     return (typeof num != 'number') ? null : num
// }

// function firstNonConsecutive(arr) {
//     const min = Math.min(...arr)
//     const num = arr.find((el, i) => el != (arr[i - 1] + 1) && el != min)
//     return (typeof num != 'number') ? null : num
// }

// const fixTheMeerkat = arr => arr.reverse()

// const a = 'dev'
// const b = 'Lab'
// const c = 'd'
// const d = 'e'
// const e = 'v'
// const f = 'L'
// const g = 'a'
// const h = 'b'
// const name = 'devLab' || c + d + e + f + g + h

// function pipeFix(numbers) {
//     const arr = []
//     const min = Math.min(...numbers)
//     const max = Math.max(...numbers)
//     for (let i = min; i <= max; i++) {
//         arr.push(i)
//     }
//     return arr
// }

// function stringy(size) {
//     let s = ""
//     for (let i = 1; i <= size; i++) {
//         s += i % 2
//     }
//     return s
// }

// function stringy(size) {
//     let s = ""
//     for (let i = 0; i < size; i++) {
//         (i % 2 === 0) ? s += '1' : s += '0'
//     }
//     return s
// }

// const gooseFilter = (birds) => {
//     const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(e => geese.indexOf(e) == -1)
// }

// const multiply = (a, b) => a * b

// const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`

// function preFizz(n) {
//     let arr = []
//     for (let i = 1; i <= n; i++) {
//         arr.push(i)
//     }
//     return arr
// }

// function rentalCarCost(d) {
//     const cost = 40
//     let num = 0

//     if (d >= 3 && d < 7) num = 20
//     else if (d >= 7) num = 50

//     return (cost * d) - num
// }

// const grow = x => x.reduce((a, b) => a * b)

// 2021.03.03
// 8kyus today

// function amIWilson(p) {
//     function factorial(n) {
//         return (n != 1) ? n * factorial(n - 1) : 1; //recursion!
//     }
//     return Number.isInteger(((factorial(p - 1) + 1) / (p * p)))
// }

// const findDifference = (a, b) => Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b))

// const makeUpperCase = (str) => str.toUpperCase()

// function uefaEuro2016(team, s) {
//     return `At match ${team[0]} - ${team[1]}, ${s[0] == s[1] ? 'teams played draw.' : `${s[0] > s[1] ? team[0] : team[1]} won!`}`
// }

// refactored. ^^

// function uefaEuro2016(teams, s) {
//     return (s[0] > s[1] || s[0] != s[1]) ? `At match ${teams[0]} - ${teams[1]}, ${s[0] > s[1] ? teams[0] : teams[1]} won!` : `At match ${teams[0]} - ${teams[1]}, teams played draw.`
// }

// uefaEuro2016(['Germany', 'Ukraine'], [2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'], [0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'], [1, 1]) // "At match Portugal - Iceland, teams played draw.

// const solution = (mm1, mm2, gm1, gm2, vol, tmp) => ((gm1 / mm1 + gm2 / mm2) * 0.082 * (tmp + 273.15)) / vol

// function move(position, roll) {
//     return position + roll * 2
// }

// function reverseWords(str) {
//     return str.split(" ").reverse().join(" ")
// }

// function paperwork(n, m) {
//     return (n < 0 || m < 0) ? 0 : n * m
// }

// 2021.03.02

// function validatePIN(pin) {
//     return /(^\d{4}$)|(^\d{6}$)/.test(pin)
// }

// refactored: /^(\d{4}|\d{6})$/.test(pin)

// function padIt(str, n) {
//     //   while :)
//     return str.padStart(str.length + Math.ceil(n / 2), "*").concat('*'.repeat(Math.floor(n / 2)))
// }

// 2021.03.01

// please forgive me 
// function XO(s) {
//     return (/[x]/gi.test(s) && /[o]/gi.test(s)) ? (s.split("").filter(l => l.toLowerCase() == 'x').length == s.split("").filter(l => l.toLowerCase() == 'o').length ? true : false) : (s == '' ? true : false)
// }

// function isTriangle(a, b, c) {
//     let p = (a + b + c) / 2 //perimeter of a triangle. surface area is sqrt(p(p-a)(p-b)(p-c))
//     return (Math.sqrt(p * (p-a) * (p-b) * (p-c)) && ((a+b > c) || (a+c > b) || (b+c > a))) ? true : false
// }

// top solution avoided having to calc area by using &&:
    // return a + b > c && a + c > b && c + b > a


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


// Ctrl+f for unsolved