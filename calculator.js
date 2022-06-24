 function calculator(a, b, op){
            switch (op){
              case '+':
                alert(a + b);
                
                 case '-':
       alert(a - b);
       break;
       
       case '*':
       alert(a*b);
       break;
       
       case '/':
       alert(a / b);
       break;
       
       default:
       alert("Invalid input");
            }   
     
   }
   let value1 =+prompt("Enter value 1");
   let operation =prompt("Enter operation");
   let value2 =+prompt("Enter value 2");
   calculator(value1,value2, operation);
