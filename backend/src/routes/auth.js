const express = require('express')
const { Router } = require('express')
const router = Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs')
const jwt= require('jsonwebtoken')
const { JWT_SECRET } = require('../key')

router.post('/register', (req, res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password) {
        return res.status(422).json({error: "todos los campos son requeridos"})
    }
    User.findOne({email:email})
    .then(savedUser => {
        if(savedUser) {
            return res.status(422).json({error: "ya existe un usuario con ese email"})
        }
        bcrypt.hash(password, 12)
        .then(hashedPassword => {
            const user = new User({
                name,
                email,
                password: hashedPassword
            })
            user.save().then(user => {
                res.json({message: "usuario registrado correctamente"})
            })
            .catch(err => {
                console.log(err)
            })
        })
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/login', (req, res) => {
    const { email, password } = req.body
    if(!email || !password) return res.status(422).json({error: 'todos los campos son requeridos'})
    User.findOne({ email:email })
    .then((savedUser) => {
        if(!savedUser) return res.status(422).json({error: 'correo o contraseña incorrectos'})
        bcrypt.compare(password, savedUser.password)
        .then((doMatch) => {
            if(doMatch) {
                res.json({message: 'logueado correctamente'})
                const token = jwt.sign({_id:savedUser._id}, JWT_SECRET)
                res.json({token})
            } else {
                return res.status(422).json({error: 'correo o contraseña incorrectos'})
            }
        })
        .catch(err => console.log(err))
    })
})

module.exports = router