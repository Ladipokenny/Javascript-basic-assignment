//FizzBuzz Challenge
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 4 === 0) {
        console.log("Fizz");
    }else if (i % 5 === 0) {
        console.log("Buzz");
    }else {
        console.log(i);
    }
}

//Sample Output:
//1  

//2  

//Fizz  

//4  

//Buzz  

//Fizz  

//7  

//8  

//Fizz  

//Buzz  

//11  

//Fizz  

//13  

//14  

//FizzBuzz

