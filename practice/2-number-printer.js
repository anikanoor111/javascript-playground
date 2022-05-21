// write a function which will take 2 arguments, start and. end and print all the integers in between, including themselves
// example:
// numPrinter(2,5)
// output:
// 2
// 3
// 4
// 5
export function numPrinter(start,end) {
  for (var i = start; i <= end; i++) {
    console.log(i)
  }
}

numPrinter(2,5)