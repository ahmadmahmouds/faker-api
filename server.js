const express = require("express");
const faker = require('faker');
const app = express();
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
class Company{
  constructor(){
    this.id=faker.random.number();
    this.name=faker.company.companyName();
    this.address={"streetName":faker.address.streetName(),"city":faker.address.city(),"state":faker.address.state(),"zipCode":faker.address.zipCode(), "country":faker.address.country()};

  }
}
console.log(new Company());
class User{
  constructor(){
    this.firstName=faker.name.findName();
    this.lastName=faker.name.lastName();
    this.phoneNumber=faker.phone.phoneNumber();
    this.email=faker.internet.email();
    this.password=faker.internet.password();

  }
}
app.get("/api/company/new",(req,res)=>{
  company =new Company();
  res.json(company);

})
app.get("/api/user/new",(req,res)=>{
  user =new User();
  res.json(user);
  
})
app.get("/api/company/user",(req,res)=>{
  user =new User();
  company =new Company();
  ob={"user":user,"company":company}
  res.json(ob);
  
})
app.listen( port, () => console.log(`Listening on port: ${port}`) );

