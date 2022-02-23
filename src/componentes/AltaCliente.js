import React from 'react'
 
class AltaCliente extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            telefono:"",
            nombre: "",
            dni: "",
            direccion:"",
            pedidos:[],
 
        };
 
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeDni =  this.handleChangeDni.bind(this);
      this.handleChangeTelefono =  this.handleChangeTelefono.bind(this);
      this.handleChangeDireccion =  this.handleChangeDireccion.bind(this);

    }

    handleChange(event) {
      this.setState({nombre: event.target.value});
    }

    handleSubmit(event) {
      if (this.state.nombre === ""){
        alert("Ingresar Nombre");
        event.preventDefault();
      }
      else if(this.state.telefono === ""){
        alert("Ingresar Telefono");
        event.preventDefault();
      }
 
      else{
      event.preventDefault();
      this.props.addClient(this.state);
      this.reset();
      }
 
    }
 

 

    handleChangeDni(event) {
        this.setState({dni: event.target.value});
    }
    handleChangeTelefono(event) {
        this.setState({telefono: event.target.value});
    }
    handleChangeDireccion(event) {
        this.setState({direccion: event.target.value});
    }
 
    reset = () => {
      this.setState ({
        nombre: "",
        dni:"",
        telefono:"",
        direccion:"",
 
    });

    }
render() {
        return (


          <form className="formu" onSubmit={this.handleSubmit}><hr/>

            <label className="nombres">
              <span>Nombre: </span>
              <input type="text" value={this.state.nombre} onChange={this.handleChange} />
            </label><br/><hr/>

            <label className="nombres">
              <span >dni: </span>
              <input type="text" value={this.state.dni} onChange={this.handleChangeDni} />
            </label><br/><hr/>
            <label className="nombres">
              <span >Telefono: </span>
              <input type="number" value={this.state.telefono} onChange={this.handleChangeTelefono} />
            </label><br/><hr/>
            <label className="nombres">
              <span >Direccion: </span>
              <input type="text" value={this.state.direccion} onChange={this.handleChangeDireccion} />
            </label><br/><hr/>
            <input className="btn btn-success" type="submit" value="Registrar" /><br/>
            <button className="btn btn-primary" type="reset" onClick={() => this.reset()}> resetear</button><br/>

          </form>


        );
      }
    }

    export default AltaCliente;