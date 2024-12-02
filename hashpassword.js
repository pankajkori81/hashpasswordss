import bcrypt from  "bcrypt";

// hash password
 export const hashPassword=async(password)=>{

    const hash=await bcrypt.hash(password , 10);
    return hash;
}



// verify password 

export const verifyPassword=async(password , hash)=>{

    return bcrypt.compare(password , hash);
}


