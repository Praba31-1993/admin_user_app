const admin = require("../Models/adminmodels")

// Register
exports.createAdmin = async(req,res)=> {
    
    const {fname,lname, email, address, role, profession,password} = req.body
 
    try{
        const presuer = await admin.findOne({email:email});
        console.log("presuer0", presuer);
       

        if(presuer){
            res.status(400).json({error : "This user Already exist in our db"})
            console.log("presuer", presuer);
   
        }else{
            const CreateadminData = new admin({
                fname,lname, email, address, role, profession,password
            });
            const storeData = await CreateadminData.save();
            console.log("storeData", storeData);
            res.status(200). json(storeData)
        }

    }catch(error){
        res.status(400).json({error : "Invalid Detail", error})
    }
}

// Login Api 

exports.Login = async(req,res)=> {
    
    const {email,password} = req.body
 
    try{
        const presuer = await admin.findOne({email:email});
        console.log("presuer0", presuer);
       

        if(!presuer){
            res.status(400).json({error : "This user is not authorized"})
            console.log("presuer", presuer);
   
        }else{
            res.status(200). json({success : "Login Successfully"})
        }

    }catch(error){
        res.status(400).json({error : "Invalid Detail", error})
    }
}

