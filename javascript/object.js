let object={
    firstname: "Abhik",
    lastname: "Maji",
    sayhw: function(){ document.write("Hello World");},
    sayaddress: function(){document.write("I am "+this.firstname+" "+this.lastname+" and I live in "+address.state)}
};
let address={
    state: 'West Bengal'
};
document.write(object.firstname+"<br>");
document.write(object['firstname']+"<br>");





object.age=18;
document.write(object['age']+"<br>");





for(let key in object){
    document.write(key+" : "+object[key]+"<br>");
}





object.greet=function(){
    document.write("Hi"+"<br>");
}
object.greet();





function fun(parameter){
    document.write("Hello "+parameter+"<br>");
}
object.hello=fun;
object.hello(object.firstname);
object.hello(object['lastname']);



object.sayhw();
document.write("<br>");



object.sayaddress();