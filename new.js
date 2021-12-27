
// var b = 10;

// console.log(typeof b); ///is use to check the data type.

// b.toString(); // is use to convert data type into another data type 


// ///OPERATORS
              

// let y = -2;
// alert( +y );   ///


// let x = 2 * 2 + 1;
// console.log(x);


// /let x = 2 * (2 + 1);
// console.log(x);

// /a = b = c = 2 + 2; assignn 4 from c to a 

// //let n = 2;
//  /n += 5;
//  /console.log(n);
 
// pre and post 

//  let counter = 0;
// counter++;
// alert( counter );

// ++counter;
// alert( counter );



// AND

//  var a = 15;
//  var b =20;

//  if( a > 1 && b < 50){
//      console.log("true");
//  }

//  or

//  var b = 10;
//  var a=12
//  if( a > 10 || b > 8 ){
//      console.log("true");
//  }

//   or

//  var a = 50;
//  if (!a > 12){
//      console.log("true");
//  }

//  concnat

// var a= "meloo";
// var b=1;
// c=a+b;
// console.log(c);

//   /NaN

// var a= "meloo";
// var b=1;
// c=a-b;
// console.log(c);

// var a= "meloo";
// var b=1;
// c=a*b;
// console.log(c);

// var a= "meloo";
// var b=1;
// c=a/b;
// console.log(c);


// let z = 0;
// console.log( Boolean(z) );
// let x = "0";
// console.log( Boolean(x) );
// console.log(z == x); typeof check nai karraha ha 

// console.log(null == undefined); ///typeof is not check here  so it will print true


// alert( null > 0 );  
// alert( null == 0 ); 
// alert( null >= 0 ); //here null is equal to zero so it will print true

// alert( undefined > 0 ); 
// alert( undefined < 0 ); 
// alert( undefined == 0 );



// let firstName = null;
// let lastName = null;
// let nickName = "meloo";
// alert(firstName ?? lastName ?? nickName ?? "Anonymous" );

///adding in arrays

//   var ary =[20, 24, 24];
//   var sum = ary[2] + ary[1];
//   console.log(sum);


/////OBJECT and type of declearation 
  
// 1decleartion using variables

//  let user ={ 
// name:"zamir"
//  };
//  console.log(user.name);
  
//2decleartion using function  

// function makeuser(name, age) {
//     return  {"name":name,
//              "age":age}
// }
//  user = makeuser("zamir",21);
//  console.log(user.name);
//  console.log(user.age);

//3decleartion using function and loop both

// function makeuser(name, age) {
//     return  {"name":name,
//              "age":age}
// }
//  user = makeuser("zamir",21);

// for(value in user){
//     console.log(user[value])
// }

///replaces  

// let obj ={name:"zamir"};
// let newobj  ={name:"ali"};
  
// console.log(obj.name);


///declearation both values


// let obj = {
//     name: "zameer",
// }
// console.log(obj.name);
// let newObj=obj;
// newObj.name="ali";
// console.log(obj.name);




//  let obj={
//     name:'zameer',
//     age:20,
    
//  };
// //  delete obj.age
// let newObj={};
//       newObj=obj
//   for (key in obj){
//     obj[key]=newObj[key];
//   }
//   console.log(newObj.age)



// let obj= {name: 'zameer', age: 20};
// let text = {};
// for(const arr in obj) {
// text += obj[arr] +' ';
// console.log(text)
// }


// let a = 10;
// let b = 20;
// let total='total is $ {a+b}';
// console.log(b.__proto__);


// let a = "zamir";
//  console.log(a.__proto__);
// console.log(a.toUpperCase());
// console.log(a.indexOf());



// let c = true;

// console.log(c.__proto__);

// let user ="zamir";
// let a=indexOf(user)
// console.log(a)







// let varr1 = Number("zamir");      ///it will show NaN
// console.log(varr1, typeof(varr1));


///// boolean to number

// let varr2 = Number(true);
// console.log(varr2, typeof(varr2)); ////the defualt value of true is 1;

// let varr3 = Number(false);  ///the defualt value of true is 0;
// console.log(varr3, typeof(varr3));


      ///array to number

    //   let arr = Number([1,2,3,4]);  ///it will show not a number
    //   console.log(arr, typeof(arr));



    // let vas= Boolean(0);
    // console.log(vas, typeof(vas));



    // let num1 = Number("23");  
    // let num2 =122;  //// javascript will convert string to number 
    // console.log( num1 + num2);



    
   //  let num1 =23;  
   //  let num2 =122;  //// javascript will convert number to string automatically
   //  console.log( num1 + num2);



   // let a = Boolean(2);
   // console.log(a, typeof(a));
    



    

// let arr = [0,0,0,0];
//  console.log(arr.__proto__);

// function makeuser(name, age) {
//        return  {name: "zamir",
//                   age:   20     
//       }
//    }
//    console.log(makeuser.__proto__);



// function myFunction(p1, p2) {
//    return p1 * p2;    
  
//  }
// //  console.log(myFunction().__proto__);
// console.log(toString(myFunction()),typeof(myFunction))
  


// let b ="zamir";

// let a = "sajid";
                      
// let c = a==b;
// console.log(c);


//3 what is assign by value


// let a = "zamir";
// console.log(a);


// let num = 12;
// console.log(num);




//4 what is assign by value?
//primitives are assign by value.they have two differnet adress.and location

// let  nam ="zamir";
 
// newnam="meloo";
// nam=newnam;
// console.log(newnam,typeof(newnam));

//4 what is assign by ref?
//non-primitives are assign  by ref they are store in one location

// let user={
//    name:"zamir"
// }
// let newuser={
//    name:"meloo"
// }
// newuser=user;
// console.log(newuser.name)

  //by value

// let arr =["sajid","zamir"];
// let newarr=["jabbar","burhan"];
// newarr=arr;
// for(arr in newarr){
//    console.log(newarr[0]);
// }



   // alerts
    //shows a message.
      ///if we put data types in alert it will convert one data type to another data type 
      // alert("6"/"12");
      // alert(+true);
   
    //prompt
   //shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.

   //alert
   // alert("you opened the next page");
   

   //confirm
    //shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
   
   //prompt   
    // let age = prompt('How old are you?', 100);

   // alert(`You are ${age} years old!`)


// let name = prompt('what is youn name',"jhon");
// alert(`your name is ${name}`);


// let test = prompt("Test");
// alert(`you entered ${test}`); 

  //confirm
// let age= confirm("Enter your above 18");

// alert( age )


     /*BASIC MATH OPERATORS 
   They are things like addition +, multiplication *, subtraction -,divison/ etc
    An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: 
    the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.
    */

       /*unary operand 
       An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
       */   
      //   let a = 1;
      //    a = +1;
      //    alert(a);
   


      /* binary operator
      An operator is binary if it has two operands.
       */
      // let a =12;
      // let b = 13;
      // alert(a-b);


      // let apple ="2";
      // let banana ="2";
      // alert(+apple+ +banana);
      
     // alert((1*3)+2);
   
     
   //   let n = 2;
   //    n = n + 5;
   //    n = n * 2;
   //    alert(n);  // will  return 14

   // let n = 2;

   // n *= 3 + 5;
   // alert(n);  will return 16 

  
    
 
///write a program to captilize first character of the string

    //  var Name ="zamir";
    //  console.log(Name[0].toUpperCase(),
    //  Name[1].toLowerCase(),
    //  Name[2].toLowerCase(),
    //  Name[3].toLowerCase(),
    //  Name[4].toLowerCase());


    //write a program to generate date:

    // var date = new Date();
    //  document.write(date);


    //write a program to calculate the length of triangle?


    // var p = 10;
    // var b = 10;
    // var h =10; 
    // var sum = p+b-h;
    // console.log(sum);


    // let  str ="abc";
    // console.log(str);
    // srt1=str.slice(0,1);
    // str1.toUpperCase();

// function fun(p1,p2){
//     sum = p1+p2;
//     console.log(sum)
// }
// fun(2,2);

// function fun(p1,p2,p3){
//     sum = p1*p2*p3;
//     console.log(sum)
// }
// fun(2,2,2);

// for (let i = 1; i <= 5; i++) {
//     for(let j=1; j<=i; j++){
//        document.write("*")    
//     }
//     document.write("<br>")
//}


//WHILE LOOP
 

// var a= 1;
// while(a <= 10 ){
//  a++;
//  document.write(a+"<br>"); 
// }


//dowhile
// var a=1;
// do{
//  a++;
//  document.write(a+"<br>");
// }
// while(a <= 10)
 

///for loop

// for(let a = 0 ; a <= 10 ; a++){
//   document.write(a+"<br>")
// }


//for in 

//we can derclear for in loop in arrays and object only

// forin loop in object 
// var obj ={
//   name:"shahzad",
//   age:12
// };
// var x;
// for(x in obj){
//   document.write(obj[x]+"<br>")
// }


//forin loop in array 
// var arr =[12,12,12,12]
// var x;
// for(x in arr){
// document.write(arr[x])
// }



//FOR OF LOOP

// var arr =[12,12,13];
// for(let key of arr){
//   document.write(key)
// }


//  FOREACH LOOP
// var arr = [21,21,"meloo"]
//  arr.forEach((element,index,arr) => {
//    document.write(element+"<br>",index+"<br>")
//  });

  //non-permitives value by reference
// var obj={
//     name:"zamir",
//     age:20
// }
// var newObj={

// }
// newObj=obj;
// newObj.nam="mm";
// for(x in obj){
//     document.write(newObj[x]+"<br>")
// }
