//function return type
function add(a, b) {
    return a + b;
}
console.log(add(4, 5));
//union types
function id_creation(id) {
    return "ID created ".concat(id);
}
console.log(id_creation(1));
console.log(id_creation("user1"));
//array
var numbers = [12, 23, 4, 5, 56];
var products = [
    { id: 1, price: 100, size: "s", description: "Western wear" },
    { id: 2, price: 200, size: "xs", description: "classicwear" }
];
//void type
function data(s) {
    console.log(s);
}
data("This is a void function does not return a value");
//tuple
var brownie = ["sizzlingbrownie", 250];
//optional
function user(id, name, dept) {
    console.log("User Data - id :".concat(id, "  name:").concat(name, " dept:").concat(dept || "none"));
}
user(1, "Sathish");
//default
function devemployee(id, name, dept) {
    if (dept === void 0) { dept = "Developer"; }
    console.log("Employee Data - id :".concat(id, "  name:").concat(name, " dept:").concat(dept));
}
devemployee(101, "Sneha");
function Userdata(user) {
    console.log("User data - id:".concat(user.id, " ,name:").concat(user.name));
}
var user1 = { id: 1, name: "Sneha" };
Userdata(user1);
function clientdata(client) {
    console.log("User data - id:".concat(client.id, " ,name:").concat(client.name));
}
var client1 = { id: 1, name: "Jeni" };
clientdata(client1);
//client1.id =2(cannot asign here it errors)
client1.name = "Gayu";
clientdata(client1);
function employeeData(emp) {
    return "Employee-  name:".concat(emp.name, " ,id:").concat(emp.id, ", email:").concat(emp.email);
}
console.log(employeeData({ name: "Mary", id: 101, email: "mary@gmail.com" }));
function showuserdata(userid) {
    console.log("User ID: ".concat(userid));
}
var userid1 = "u1";
var userid2 = 1;
showuserdata(userid1);
showuserdata(userid2);
//wrong type to typed object
function Biriyani(price, type, quantity) {
    console.log("Biriyani - price :".concat(price, "  type:").concat(type, " quantity:").concat(quantity));
}
//Biriyani(150,"thalapakatti", "1") It shows Compile time error and not runs
Biriyani(150, "thalapakatti", 1); //it works good
//generic function
function identity(value) {
    return value;
}
var uname = identity("Loges");
var age = identity(25);
var brother = identity(true);
console.log(uname);
console.log(age);
console.log(brother);
//specific type
var price = 35000;
var productname = "HP Laptop";
var boolean = true;
var offercode = "OFFER";
var docpages = 2;
console.log("The ".concat(productname, " is in ").concat(offercode, " for Rs ").concat(price, " is ").concat(boolean, " before buy refer these ").concat(docpages, " pages"));
