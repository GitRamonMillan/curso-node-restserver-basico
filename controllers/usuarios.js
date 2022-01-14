
const { response } = require('express');

const usuariosGet = (req,res = response) => {

    //si no viene el parametro nombre se le asigna un valor por defecto
    const { q,nombre = 'sin valor'} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre
    }); 
}

const usuariosPut = (req,res = response) => {

const { id } = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    }); 
}

const usuariosPost = (req,res = response) => {

    //desestructurando el body proceso solo los parametros
    //que yo necesito y evito algunos problemas de code injection
    const { nombre,edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    }); 
}

const usuariosDelete = (req,res = response) => {
    res.json({
        msg: 'delete API - controlador'
    }); 
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}