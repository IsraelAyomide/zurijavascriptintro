 function calculator(a, b, operation){
            switch (operation){
              case '+':
                console.log(a + b);
                
                 case '-':
       console.log(a - b);
       break;
       
       case '*':
       console.log(a*b);
       break;
       
       case '/':
       console.log(a / b);
       break;
       
       default:
       console.log("Invalid input");
            }   
     
   }
   let value1 =+prompt("Enter value 1");
   let operation =prompt("Enter operation");
   let value2 =+prompt("Enter value 2");
   calculator(value1,value2, operation);
