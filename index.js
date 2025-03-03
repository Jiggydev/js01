//let firstName = "yasmine";

//console.log(`your name is ${firstName}`);


//let price = 10.99;
//let quantity = 50;
//let total = price * quantity;

//console.log(`your total price is $${total}`);


//console.log(typeof firstName);



//let email = "jeradybrew18@gmail.com";

//console.log(`your email is ${email}`);


//let online = true;

//console.log(online);


//let forSale = true;

//console.log( typeof forSale);


//let isStudent = false;

//console.log(`Enrolled: ${false}`);


//let fullName = "john doe";

//let age= 36;

//let student = true;


//document. getElementById("p1"). textContent = `Hello there ${fullName}`;


//document. getElementById("p2").textContent=age;

//document. getElementById("p3"). textContent = student;



//let pupils=50;
 //pupils=5;


//console.log(`there are ${pupils} students in the class`);




////let results= 5+3*56/2-4**2%4;

//console.log(results);                   




// Easy way to accept user input
//let username=window.prompt("what is your name?");


//console.log(username);


//document.addEventListener("DOMContentLoaded", function() {
  //  document.getElementById("btn").onclick = function() {
    //  let User = document.getElementById("userName").value;
     // let Email = document.getElementById("email").value;
      //console.log(User);
      //console.log(Email);
    //};
  //});



  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn").onclick = function() {
      let User = document.getElementById("userName").value;
      let Email = document.getElementById("email").value;
     

      let userData = {
        name: User,
        email: Email
      };

      console.log(userData);
    };
  });