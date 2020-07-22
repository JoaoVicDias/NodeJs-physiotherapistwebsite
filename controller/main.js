const mongoose = require('mongoose')
const {validationResult} = require('express-validator')
require('../models/usuarios')
const usuarios = mongoose.model('usuarios')
const express = require('express')

exports.getMain = (req,res,next)=>{
    res.render('index',{
        success_msg:req.flash('success_msg'),
        error_msg : req.flash('error_msg')
    })
}

exports.postMain = (req,res,next)=>{
    const nome = req.body.nome
    const email = req.body.email
    const numero = req.body.numero
    parseInt(numero)
    const erros = validationResult(req)

    if(!erros.isEmpty()){
        return res.render('index',{
            errormsg : erros.array()[0].msg,
            nome:req.body.nome,
            email:req.body.email,
            numero:req.body.numero
        })
    }

    usuarios.findOne({email:email}).then((usuario)=>{
        if(usuario){
            req.flash('error_msg','Esse e-mail já esta sendo usado!')
            res.redirect('/#orçamento')
        }else{
            const novoUsuario = new usuarios({
                nome:nome,
                email:email,
                numero:numero
            }).save().then(()=>{
                req.flash('success_msg','Enviado com sucesso!')
                res.redirect('/#orçamento')
            })
        }
             
    })


}