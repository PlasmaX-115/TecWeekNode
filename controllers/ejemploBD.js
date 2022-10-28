//Definirá qué son las acciones (querys)

const Usuario = require('../models/ejemploBD');



exports.getUsuarios = async(req,res)=>{
    //SELECT * FROM Usuario;
    try {
        registros = await Usuario.findAll()
        res.send(registros)

    } catch(e) {
        console.log(e)
        res.send(e)
    }
}

exports.postAgregarUsuario=(req,res)=>{
    console.log(req.body)
    //INSERT INTO usuario VALUES ()
    Usuario.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso")//Servidor
            res.send("Resgistro exitoso")//Cliente
        })
        .catch(error =>{
            console.log(error)
            res.send("Ocurrió un error")
        })

}