const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user')

/* router.get('/signup',function (req,res) {
    console.log("entrou");
    res.send('api works');
}); */

router.get('/users', function (req, res) {
    //res.send('api works');
    console.log('Get request for all users');
    console.log('API works');
    User.find({})
        .exec(function (err, users) {
            if (err) {
                console.log("error retrieving all users")
            } else {
                res.json(users);
            }
        })
});

router.get('/user/:email', function (req, res) {
    //res.send('api works');
    console.log(req.params.email);
    console.log('Get request for a single email');
    User.findOne({ 'email': req.params.email }, 'email role',
        (err, user) => {
            if (err) {
                console.log("error retrieving");
            } else {
                res.json(user);
            }
        })
});

router.post('/user/signup', (req, res, next) => {
    User.find({ username: req.body.email })
        .exec()
        .then(result => {
            if (result.length >= 1) {
                return res.status(409).json({
                    message: 'user already exists'
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            message: "erro hash function",
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            username: req.body.email,
                            password: hash,
                            role: 'USER' //standard USER... ADMIN is for admin
                        });
                        user
                            .save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: 'User created'
                                })
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({ error: err })
                            });

                    }
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
});
///// login
router.post('/user/login', (req, res, next) => {
    console.log(req.body.email);
    User.find({ username: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Autenticacao no servidor  falhou devo erro interno. tenta mais tarde'
                });
            }
            bcrypt.compare(req.body.password,
                user[0].password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: 'Autenticacao no servidor  falhou devo erro interno. tenta mais tarde'
                        });
                    }
                    if (result) {
                        // sign asynchronously
                        const token = jwt.sign(
                            {
                                email: user[0].username,
                                userId: user[0]._id
                            },
                            process.env.JWT_KEY,
                            {
                                expiresIn: "1h"
                            }
                        );
                        return res.status(200).json({
                            message: 'Auth sucessful',
                            token: token
                        });
                    }
                    return res.status(401).json({
                        message: 'Autenticacao no servidor  falhou. Favor verificar senha / password '
                    });
                })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
});


module.exports = router;