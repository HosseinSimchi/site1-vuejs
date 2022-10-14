/*
TODOS : 
    1)Show Password in the SignUP Form
    2)Complement SignIn handler
*/

const bcrypt = require('bcryptjs')
const Yup = require('yup');

const User = require('../model/model')

const sigupSchema = Yup.object().shape({
    username : Yup.string().required("The username is required").min(4,"The username should have more than 4 characters").max(100),
    password : Yup.string().required("The password is required"),
    confirmPassword : Yup.string().required("Please enter yout password again")
    .oneOf([Yup.ref("password"), null], "The password and the Confirm password is not the same!!!") 
})


exports.sigupHandler = async (req, res) => {
    const validationErrors = [];
    try {
        sigupSchema.validate(req.body)
        .then(async () => {
                const hash = await bcrypt.hash(req.body.password, 10)
                const newUser = new User({
                    username: req.body.username,
                    password:hash, 
                    confirmPassword: req.body.confirmPassword})
                const user = await newUser.save()
                if (!user) throw new Error('Something went wrong saving the user')
                res.status(200).json(user)
        })
        .catch(err => {
            err.errors.forEach(error => validationErrors.push(error))
            
        })
    } 
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.signinHandeler = async (req, res) => {
    try {
        const {username, password} = req.body
        const response = await User.findOne({username})
        const passwordCompare = await bcrypt.compare(password, response.password)
        if (passwordCompare){
            res.status(200).json(username)
        }else{
            console.log("The password is Wrong!");
        }
    }catch(err){console.log(err)}
}


exports.logoutHandler = (req, res, next) => {
    if (req.session.loggedin) {
        req.session.loggedin = false;
        res.status(200);
  }
}
