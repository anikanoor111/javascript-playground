/*
write a function which prints numbers like below
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
// 
*/ 

function tablePrint() {
  for (let i=1; i<=30; i++){
    process.stdout.write(i + " ")
    if (i%5==0){
    console.log("\n")
  }
  }
  
}
tablePrint()