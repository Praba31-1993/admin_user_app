const user =  require("../Models/Usermodels")
var nodemailer = require('nodemailer');

// UserController
exports.UserData = async(req,res)=> {
    
    const {name,email,address, profile_pic} = req.body
 
    try{
        const presuer = await user.findOne({email:email});
        console.log("presuer0", presuer);
       

        if(presuer){
            res.status(400).json({error : "This user is not authorized"})
            console.log("presuer", presuer);
   
        }else{
            const CreateUserData = new user({
                name, email, address, profile_pic
            });
            console.log("Create",CreateUserData );
            const storeData = await CreateUserData.save();
            console.log("storeData", storeData);
            res.status(200). json(storeData)
        }

    }catch(error){
        res.status(400).json({error : "Invalid Detail", error})
    }
}

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });
  
  var mailOptions = {
    from: 'praba5@yopmail.com',
    to: 'praba1@yopmail.com',
    subject: 'Success Message',
    text: 'User is Successfully Created'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });