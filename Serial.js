//Async/await makes asynchronous code look and behave like synchronous code
let doJob = async (a, b) => await a + b;

async function SerialFlow(){
    let result1 = await doJob(1,1); //2
    let result2 = await doJob(2,2); //4
    let result3 = await doJob(3,3); //6
    let finalResult = result1+result2+result3; //12
    console.log(finalResult);
    return finalResult; 
}
