// javascript is single threaded
// types of execution context -> Global E.C, Functional E.C,Eval E.C .

// code Execution -> Memory Creation Phase And Execution Phase
// *********** Steps ***************
// Step1 -> Global Execution and it is allocated in "this" ( default)
// step2 -> Memory Phase (1st cycle)
// all variables names are written and values are put inside it 
// example -> var1 =undefined , var2->undefined , addnum -> definition ,result1 -> undefined .
let var1 = 10
let var2= 5
function addnum(var1,var2){
    let total = var1+var2;
    return total;
}
let result1 = addnum(val1,val2)
let result2 = addnum(3,5)

// Step3 -> execution Phase
// example -> val1 =10 ,val2 =5 now for addnum(result1) we will have a separate new variable environment and execution thread where we will again create memory phase (val1 =undefined , val2=undefined ,total =undefined) and execution phase (num1 = 10, num2=5 ,total = 15)and the total will return to the global execution , after executing this the seprate variable environment and execution thread will be deleted automatically result1 = 15 . and now again for addnum(result2) same thing happen.

// ------- Call Stack ---------
