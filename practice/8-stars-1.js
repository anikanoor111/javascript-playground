/*
process.stdout.write(i + " ")
write a function which prints stars like below

*
* *
* * *
* * * *
* * * * *

*/
let n=6;
function tableStar() {
  for (let i=1; i<=n; i++){
    for (let j=1; j<=i; j++){
    process.stdout.write( "* ")
    }
   console.log()
  }

}
tableStar()