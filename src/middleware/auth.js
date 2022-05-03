// const auth = async (request, response, next) => {
//     // try {
//     //   const firstName = request.query.firstname;
//     //   if (firstName !== "adam") {
//     //     return response.send({
//     //       status: 404,
//     //       message: "User not found !",
//     //     });
//     //   }
//     //   return next(); // Continue to requested endpoint
//     // } catch (error) {}


//   };
const auth = (req,res,next)=>{
  if(!req.query.age){
    res.send("please provide your age")
}
 else if(req.query.age<18){
  res.send("you are under age") 
}
 else{
  next();
}
}
  
  module.exports = auth;