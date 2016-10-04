//create function
  
  
function HelloWorld(){
    var hello;
    while(true === true){
    	
//Prompt user for input and store variable
      hello = prompt('Enter Greeting!');
      
    //control and return statements
	//Alert user results
      if (hello === 'Hello') {
         alert('Hello World!');
         return;
      }else{
      	alert('Incorrect Greeting');
      }
    }
  }
  
 //Call function
 HelloWorld();




