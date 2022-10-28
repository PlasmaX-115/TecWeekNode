const express = require ('express');
const path = require('path')

const app = express();
const fileUpload = require('express-fileupload')
const modeloIARoutes = require('./routes/modeloIA')

const ejemploBDRoutes = require('./routes/ejemploBD')

const sequelize = require('./utils/database')

//Se usa para poder hacer un request desde el puerto 3000, para que el puerto 8081 haga el response.
const cors = require('cors')

//middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true})) //Para que sepa leer los formularioS.
app.use(express.static(path.join(__dirname, 'public'))); //Todo lo que está en public estára disponible.
app.use(fileUpload());

app.use(modeloIARoutes); //Toma el router dentro del archivo y lo acopla a la aplicación
app.use('/usuario', ejemploBDRoutes);



app.get('/', (req, res) => {
    res.send('Servidor funcional')
})

sequelize.sync()
    .then(resultado=>{
        console.log("Conexion exitosa")
        app.listen(8081, () => {
            console.log("Servidor en línea")
        })
        
    })
    .catch(error=>console.log(error))

