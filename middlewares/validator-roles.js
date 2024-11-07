const { request, response } = require("express");

const esAdmin = (req = request, res = response, next) => {
    const usuarioAutenticado = req.usuario;
    if(!usuarioAutenticado.estado){
        return res.status(401).json({msg: 'Estas de baja'});
    }
    if(usuarioAutenticado.rol != "ROLE_ADMIN"){
        return res.status(401).json({msg: 'Error, no eres administrador'});
    }
    next();
}

const esUser = (req = request, res = response, next) => {
    const usuarioAutenticado = req.usuario;
    if(!usuarioAutenticado.estado){
        return res.status(401).json({msg: 'Estas de baja'});
    }
    if(usuarioAutenticado.rol != "ROLE_USER"){
        return res.status(401).json({msg: 'Error, no eres USERS'});
    }
    next();
}

const esDeveloper = (req = request, res = response, next) => {
    const usuarioAutenticado = req.usuario;
    if(!usuarioAutenticado.estado){
        return res.status(401).json({msg: 'Estas de baja'});
    }
    if(usuarioAutenticado.rol != "ROLE_DEVELOPER"){
        return res.status(401).json({msg: 'Error, no eres DEVELOPER'});
    }
    next();
}


module.exports = {
    esAdmin,
    esUser,
    esDeveloper
}