const { Router } = require('express')
const router = Router()
const bcrypt = require('bcryptjs')


const User = require('../model/model')



router.post('/signup', async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 10)
    const newUser = new User({
        username: req.body.username,
        password:hash, 
        confirmPassword: req.body.confirmPassword})
    try {
        const user = await newUser.save()
        if (!user) throw new Error('Something went wrong saving the user')
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/', async (req, res) => {
    res.send("successfully logged in!")
})

module.exports = router