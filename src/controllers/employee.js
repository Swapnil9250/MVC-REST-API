
require("dotenv").config();
const res = require("express/lib/response");
const { updateOne } = require("../Model/Employee");
const Employee = require("../Model/Employee");



const getEmployeeInfo = async (request, response) => {
 
  console.log("Company name",process.env.COMPANY_NAME)
   let data = await Employee.find();
   response.send(data);
};

const searchData = async (req,res)=>{
  let data = await Employee.find(
    {
      "$or":[
        {"firstname":{$regex:req.params.key}}
      ]
    }
  );
  res.send(data)
}
//app.use(express.json());
const saveEmployee = async (req, res) => {
  try{
   const firstName =req.body.firstname;
   const lastName =req.body.lastname;
   const email =req.body.email;
   const salary =req.body.salary;
   
   const employeeObj = {firstname:firstName, lastname:lastName, email: email, salary:salary}
   console.log(employeeObj);

    let data = new Employee(req.body)
    
    let result = await data.save();
   console.log(result)
    res.send(result);
  // const employeeData = {
  //   firstname: "Smith",
  //   lastname: "dven",
  //   email: "smith@gmail.com",
  // };
  // const employee = new Employee(employeeData);

  // try {
  //   await employee.save();
  //   return response.send({
  //     status: "200",
  //     message: "Data is saved Succesfully",
  //   });
  // } catch (error) {
  //   return response.send({
  //     status: "500",
  //     message: "Failed to save !",
  //   });
  // }}
}catch(error){
  console.log(error)
}}
   
const deleteEmployee = async(request, response) => {
  const firstname = request.body.firstname;
  const employee = await Employee.deleteOne({firstname : request.body.firstname})
  .then((data) => {
    if(!data) {
      response.status(404).send({
        message:`can't delete`,
      });
    }else{
      response.send({
        message: `delete successfully :) `,
      });
    }
  })
    .catch((error) => {
      response.status(500).send({
        message: "could not delete employee" + firstname,
      });
    });
};
  

  // const updateEmployee = async (req,res)=>{
  //  try{
  //     const _id = req.params.id;
  //     const updatwStudents = await Employee.findByIdAndUpdate(_id, req.body, {
  //       new: true
  //     })
  //     res.send(updatwStudents);
  //  }catch(e){
  //      res.status(404).send(updatwStudents);
  //  }
  
  // }

   const updateEmployee = async (request, response) => {
    const firstName = request.body.firstname;
    const lastName = request.body.lastname;
    const email = request.body.email;
    const salary = request.body.salary;
    const employeeData = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      salary: salary,
    };
    
    try {
      const result = await Employee.updateOne({firstname: firstName }, employeeData);
      //const result = await Employee.updateOne({_id:"625febc4efb5b6f936b06bf2"}, {$set:  request.body  }, employeeData);
      console.log("result",result);
      return response.send({
        status: "200",
        message: "Data is saved Succesfully",
      });
    } catch (error) {
      return response.send({
        status: "500",
        message: "Failed to save !",
      });
    }
  //   console.log(request.params);
  //   // const salary = request.body.salary;
  //   // console.log(salary)
  //   let data = await Employee.updateOne(
  //     request.params,
  //     {
  //       $set: request.body
  //     }
     
  //   )
  //   response.send(data)
  };

  

  

  module.exports = { getEmployeeInfo, saveEmployee, deleteEmployee, updateEmployee, searchData };
