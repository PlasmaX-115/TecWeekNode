import './App.css';
import React from 'react';

class App extends React.Component{  //Hereda de una súper clase.
  constructor(){
    super(); //Ejecuta el método constructor de la súper clase.
    this.state={
      usuario:'',
      password:''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Recibe un evento que cachará las teclas. Cuando se teclee,
  //dependiendo de cuál de los controles estéa activo, se actualizará el valo de usuario y password
  handleInput(event){
    const {value, name} = event.target
    //console.log(event.target.value)
    this.setState({
      [name]: value 
    })

  }
  
  handleSubmit(event){
    //Evitar que cambie el recurso
    event.preventDefault()
    console.log(this.state)
    fetch("http://localhost:8081/usuario/agregarUsuario",{
      method:'POST',
      body:JSON.stringify({
        usuario: this.state.usuario,
        password:this.state.password
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(()=>{
      console.log('Lo logré')
    })
      

    
  }

  render (){
    console.log(this.state)
    return(
      <div className='App'>
        <div className='card'>
          <div className='card-header'>
            <p>Esto es una prueba cambio</p>
          </div>
          <div className='card-body'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                  <input type="text" name="usuario" onChange={this.handleInput} placeholder='Escribir usuario'/>
              </div>
              <div className='form-group'>
                  <input type="password" name="password" onChange={this.handleInput} placeholder='Escribir password'/>
              </div>
              <button>Agregar</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
