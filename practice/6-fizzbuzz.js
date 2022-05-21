/*
write a function which prints with below formats
if number is divisible by 3 print fizz
if number is divisible by 5 print buzz
if number is divisible by both 3 & 5 print fizzbuzz
otherwise print the number
example
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
12
13
14
fizzbuzz
16
so on
*/

function fizzbuzz() {
  for (let i=1; i<30; i++){
    if (i%3==0 && i%5==0){
      console.log("fizzbuzz")
    }
      else if (i%3==0){
        console.log("fizz")
      }
    else if (i%5==0){
      console.log("buzz")
    } else
    console.log(i)
  }
}
fizzbuzz()