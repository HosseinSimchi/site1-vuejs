const { Router } = require('express')
const router = Router()

const User = require('../model/model')



router.post('/', async (req, res) => {
    console.log(req.method);
    const newUser = new User(req.body)
    console.log(newUser);
    // try {
    //     const user = await newUser.save()
    //     if (!user) throw new Error('Something went wrong saving the user')
    //     res.status(200).json(user)
    // } catch (error) {
    //     res.status(500).json({ message: error.message })
    // }
})

router.get('/', async (req, res) => {
    res.send("successfully logged in!")
})

module.exports = router