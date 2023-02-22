const express  = require('express')
const router = express.Router()

const authcontroller = require ('../Controllers/authcontroller') 
// const authofroutes = require ('../Controllers/authofroutes')

router.post('/register', authcontroller.register)
router.post('/login', authcontroller.login)

module.exports = router
export const authentificationroutes = express.router();

