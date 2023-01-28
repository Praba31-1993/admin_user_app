const admin = require("../Models/adminmodels")
exports.createAdmin = async(req,res)=> {
    
    const {fname,lname, email, address, role, profession} = req.body
 
    try{
        const presuer = await users.findOne({email:email});
       

        if(presuer){
            res.status(400).json({error : "This user Already exist in our db"})
   
        }else{
            const CreateadminData = new users({
                fname,lname, email, address, role, profession
            });
            const storeData = await CreateadminData.save();
            res.status(200). json(storeData)
        }

    }catch(error){
        res.status(400).json({error : "Invalid Detail", error})
    }
}