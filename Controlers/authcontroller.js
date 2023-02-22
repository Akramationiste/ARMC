const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


///ADMIN///
const user = require('../Models/admin')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err) {
            res.json({
                error: err
            })
        }

        let user = new user ({
            name : req.body.name,
            age : req.body.age,
            phone : req.body.phone,
            email : req.body.email,
            adress : req.body.adress,
            user_name : req.body.user_name,
            password : hashedPass
        })
    
        user.save()
        .then(user => {
            res.json({
                message: 'user ajouté !'
            })
        })
        
        .catch(error => {
            res.json({
                message: 'erreur catché !'
            })
        })
    })

} 


const login = (req, res, next) => {

    user_name : req.body.user_name,
     password = hashedPass

    user.findOne({$or: [{email:user_name},{phone:user_name}]})
     .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err,){
                if(err) {
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Successful',
                        token
                    })
                }else{
                    res.json({
                        message: 'password does not matched !'
                    })
                }
            })
        }
        else{
            res.json({
                message:'no user found !'
            })
        }
     })

}



module.exports = {
    register
}




///////////////////////////////////////////////////////////////////////////////////////////////

const jwt = require('jsonwebtoken')
const authcontroller = (req, res, next) => {
    try {
        const token = req.headers.authorization.split('') [1]
        const decode = jwt.verify(token, 'secretValue')

        req.user = decode
        next()
    }
    catch(error) {
        res.json({
            message: 'authentification failed'
        })
    }
}

module.exports = athentification