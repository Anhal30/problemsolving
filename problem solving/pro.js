//Q1: User should enter array of numbers and you are giving thr number, one of the two numbers 
//that equals the sum of the given number
var numbers = [1,2,3,4,5,6,7,8,9,10]
function adding(x,y){
return (x+y)

}
console.log(adding(6,6));



//Q2: find the cone volume using hight(h) and radius(r)
// v= 1/3*(3.14)*r2*h
function getVolum(h , r)
{
let radius = r * r
console.log(`The radius is ${radius}`)
let hight = h
console.log(`The hight is ${hight}`)
let v = 0.3 * 3.14 * radius * h
console.log(`The volum is ${v}`)
}
console.log(5,6);



//Q3: Write a program that comapring three numbers and get the largest number , user should enter the numbers
function getLargest(a,b,c)
{
if(a>b && a>c && b>c){
console.log(a + " is Max " + c +"  is min")  
}
else if(b>a && b>c && a>c){
console.log (b+ " is Max " + c + " is min")
}
else if(c>a && c>b && a>c){
console.log (c + " C is Max " + b + " is min")
}

else {
console.log (c+ " is Max "+ a +" is min")
}    
}
console.log(getLargest(100,66,4))



//Q4: Mohammed wanted to find out if the person he was talking to online 
//was a girl or a boy by their username by this method : 
//characters in the username is single --> user is boy otherwise it is girl

function getCher(a)
{
if(a % 2 === 0 ){
console.log("  is a boy")  
}
else{
console.log (" is girl")
}

}
console.log(getCher(5))

//Q5 :Give a list of N fraction, represented as two lists numerator
// and denominator the task is to determine the count of fractions whose sum equals 1


function f(){
const numerator=[1,2,2,8]
const denominator=[2,4,6,12]
const L1=numerator[0]/denominator[0]+numerator[1]/denominator[1]
const L2=numerator[2]/denominator[2]+numerator[3]/denominator[3]
console.log(L1)
console.log(L2)

}

f()



//Q6:Chef and Chefina are playing with dice in one turn both of them roll their dice at once. They consider a
//turn to be good if the sum of the numbers on their dice id greater than 6 given that in 
//a particular turn chef and Chefinagot x and y on their respective dice, find whether the turn was good

function checkSum(x,y){


const dice=[1,2,3,4,5,6]
const sum =x+y

if(x+y <= 6){


console.log("it is = "+sum+" ,the turn is not good")


}
else{

console.log("it is = "+sum+" ,the turn is good")

}}

checkSum(1,2)
checkSum(1,5)
checkSum(5,3)

//Q7:Given an array a of positive integers your task is to find the leader in the array an element of array is
//leader if it is greater than or equal to all the elements to its right side. The right most element is always a leader?

const leaders=(array)=>{

const l= [];

let rightNums = array[array.length-1];

lead.push(rightNums);

for(let i = array.length-2; i>=0; i--){

if(array[i] >= rightNums){

rightNums=array[i];

l.push(rightNums);

}}

return lead.reverse();

}

const inputArray = [16,17,4,3,5,2];

const output = leaders(inputArray);

console.log("The leaders are ",output);

//Q8:

class ListNode{
constructor(data){
this.data = data;
this.next = null;
}
}

function reverseLinkedList(head,k)
{
if(!head || !head.next ||k===0)
{
return head;
}
let curr =head;
let prev =null;
let next = null;
let count =0;

while(curr && count<k)
{
next =curr.next;
curr.next = prev;
prev=curr;
curr =next;
count++;
}

if(next)
{
head.next = reverseLinkedList(next,k);
}

return prev;
}

const head =new ListNode(1);
head.next =new ListNode(2);
head.next.next =new ListNode(3);
head.next.next.next =new ListNode(4);
head.next.next.next.next =new ListNode(5);

const k=2;
const reversHead = reverseLinkedList(head,k);

let current = reversHead;
while (current)
{
console.log(current.data);
current=current.next;
}


//Q9:


function countEqualSubstrings(s) {

let count = 0;

for (let i = 0; i < s.length; i++) {

for (let j = i + 1; j <= s.length; j++) {

let substring = s.substring(i, j);
let lowercaseCount = 0;

let uppercaseCount = 0;

for (let k = 0; k < substring.length; k++) {

if (substring[k] >= 'a' && substring[k] <= 'z') {

lowercaseCount++;

} else if (substring[k] >= 'A' && substring[k] <= 'Z') {

uppercaseCount++;

}}

if (lowercaseCount === uppercaseCount) {

count++;

}

}

}

return count;

}




const s = "women's day";

const result = countEqualSubstrings(s);

console.log(result);




//Q10:given on array arr[ ] containing positive element A and B are two numbers defining a range .
//the task is to check if the array contains all elements in the given range ,Input : N=7,A=2,B=5 ,arr[ ]={1,4,5,2,7,8,3}

function isRangeContained(arr, A, B) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < A || arr[i] > B) {
            return false;
        }
    }
    return true;
}
const N = 7;
const A = 2;
const B = 5;
const arr = [1, 4, 5, 2, 7, 8, 3];


const result = isRangeContained(arr, A, B);

if (result) {
    console.log("All elements are within the specified range.");
} else {
    console.log("Not all elements are within the specified range.");
}
