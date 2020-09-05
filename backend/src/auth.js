import mongo from 'mongodb'
import connect from './db.js'
import bcrypt from 'bcrypt'
import jwt, { verify } from 'jsonwebtoken'
import mongose from 'mongoose'

(async () => {
  let db = await connect()
  await db.collection("employees").createIndex({signupEmail: 1}, {unique: true})
})()



export default {
  //REGISTER
  async registerUser(userData) {
        console.log("dodao :" ,userData)
        let db = await connect()
   /*      let salt = bcrypt.hash(userData.signupPassword, 8) */
        let doc = {
          signupEmail: userData.signupEmail,
          signupName: userData.signupName,
          signupSurname: userData.signupSurname,
          signupPassword: await bcrypt.hash(userData.signupPassword,8),
          signupEnterprise: userData.signupEnterprise,
          signupPosition: userData.signupPosition,
          signupAge: userData.signupAge,
          signupSex: userData.signupSex,
          signupEmail: userData.signupEmail,
          signupAddress: userData.signupAddress,
          signupCity: userData.signupCity,
          signupType: userData.signupType,
          signupImage: userData.signupImage
        }

        try {
           let result = await db.collection("employees").insertOne(doc)
           if (result && result.insertedId)
           return result.insertedId
        }
        catch (e) {
            if (e.name == 'MongoError' && e.code == 11000) {
            throw new Error("Email already exists")
          }
        }
    },

    //AUTHENTICATE
    async authenticateUser(signupEmail, signupPassword, signupEnterprise) {
      let db = await connect()
      let user = await db.collection("employees").findOne({  $and: [{signupEmail: signupEmail}, {signupEnterprise: signupEnterprise}]})  

      if(user && user.signupPassword && (await bcrypt.compare(signupPassword, user.signupPassword))) {
        delete user.signupPassword
       
        let token = jwt.sign(user, 'secretkey', {
          algorithm: "HS512",
          expiresIn: "1 week"
        })
        return {
          token, 
          signupEmail: user.signupEmail,
          signupType: user.signupType,
          signupEnterprise: user.signupEnterprise
         
        }
      }
      else {
        throw new Error("No user!")
      }
    },
   
    //VERIFICATION
    async verify(req, res, next) {
      try {
      let authorization = req.headers.authorization.split(' ')
      let type = authorization[0]
      let token = authorization[1]
  
      if(type !== "Bearer") {
        return res.status(401).send()
      }
      else {
          req.jwt = jwt.verify(token, 'secretkey')
          return next()
      }}
      catch(e) {
        return  res.status(401).send() 
      }
    },

 
   /*  async admin(req,res,next) {
      authenticateUser()
      let check = user.signupType
      if(check == "Admin") {
        return next ()
      }
      else {
        return res.status(401).send()
      }
    }  */

}