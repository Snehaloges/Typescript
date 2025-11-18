//interface
interface User{
    id:number,
    name:string,
    email:string
}
//function return type
function add(a:number, b:number):number{
    return a+b;
}
console.log(add(4,5))


//union types
function id_creation(id:string|number){
    return `ID created ${id}`
}
console.log(id_creation(1))
console.log(id_creation("user1"))

//array
let numbers :number[]=[12,23,4,5,56] 

//array of objects
interface Product {
    id:number;
    price:number;
    size:string;
    description:string;
}

const products : Product[]=[
    {id:1 , price: 100, size:"s",description:"Western wear"},
    {id:2 , price: 200, size:"xs",description:"classicwear"}
]

//void type
function data(s:string):void{
    console.log(s)
}
data("This is a void function does not return a value")

//tuple
let brownie :[string , number] =["sizzlingbrownie" , 250]

//optional
function user(id:number, name:string, dept?:string){
    console.log(`User Data - id :${id}  name:${name} dept:${dept||"none"}`)
}
user(1,"Sathish")

//default
function devemployee(id:number, name:string, dept:string="Developer"){
    console.log(`Employee Data - id :${id}  name:${name} dept:${dept}`)
}

devemployee(101,"Sneha")

//interface-optional
interface Userdata {
    id:number;
    name: string;
    age?:number;
}

function Userdata(user:Userdata){
    console.log(`User data - id:${user.id} ,name:${user.name}`)
}

const user1: Userdata={id:1,name:"Sneha"}
Userdata(user1)

//readonly
interface Client{
    readonly id :number;
    name:string
}

function clientdata(client:Client){
    console.log(`User data - id:${client.id} ,name:${client.name}`)
}

const client1: Client={id:1,name:"Jeni"}
clientdata(client1)
//client1.id =2(cannot asign here it errors)
client1.name= "Gayu"
clientdata(client1)

//interface-extends
interface person{
    name:string;
    age?:number;
}
interface Employee extends person{
    id:number;
    email:string;
}

function employeeData( emp:Employee){
    return `Employee-  name:${emp.name} ,id:${emp.id}, email:${emp.email}`
}

console.log(employeeData({name:"Mary",id:101,email:"mary@gmail.com"}))

//typealias
type Id = string |number;


function showuserdata(userid:Id){
   console.log(`User ID: ${userid}`)
}
const userid1:Id="u1"
const userid2: Id=1
showuserdata(userid1)
showuserdata(userid2)

//wrong type to typed object
function Biriyani(price:number, type:string, quantity:number){
    console.log(`Biriyani - price :${price}  type:${type} quantity:${quantity}`)
}
//Biriyani(150,"thalapakatti", "1") It shows Compile time error and not runs
Biriyani(150,"thalapakatti", 1)//it works good

//generic function
function identity <T> (value:T):T{
    return value
}
 
let uname: string = identity("Loges")
let age: number = identity(25)
let brother:Boolean =identity(true)
console.log(uname)
console.log(age)
console.log(brother)

//specific type
const price:number = 35000
const productname :string ="HP Laptop"
const boolean:Boolean = true

const offercode : any = "OFFER"
const docpages:unknown = 2

console.log(`The ${productname} is in ${offercode} for Rs ${price} is ${boolean} before buy refer these ${docpages} pages`);

