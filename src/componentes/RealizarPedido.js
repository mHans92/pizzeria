import React from "react";
import Carta from "./Carta";
import SelectorProduct from "./Selectproduct";



export default class RealizarPedido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientDni: "",
      arrayProductosSeleccionados:[],
      precioTotal: 0,
    };
    this.selectClientDni = this.selectClientDni.bind(this);
    this.añadirProducto = this.añadirProducto.bind(this);
    this.añadirDatos = this.añadirDatos.bind(this);
    this.borrarProducto = this.borrarProducto.bind(this);
    this.reset = this.reset.bind(this);
    
  }

 
  selectClientDni(event) {
    console.log(event.target.value);
    this.setState({ clientDni: event.target.value });
  }
  añadirProducto(producto){
    let productoSeleccionado = this.state.arrayProductosSeleccionados;
    productoSeleccionado.push(producto);
    let total = this.state.precioTotal + producto.precio;
    console.log("total=", total);

    this.setState({
      arrayProductosSeleccionados: productoSeleccionado,
      precioTotal: total,
    });
    console.log(productoSeleccionado);
  }
  
  
  borrarProducto(producto, index){
    console.log(index)
    let productoSeleccionado = this.state.arrayProductosSeleccionados;
    productoSeleccionado.splice(index,1 );
    let total = this.state.precioTotal - producto.precio;
    console.log("total=", total);
    if (producto.descripcion == producto.seleccionado){
      productoSeleccionado.splice(index );
    }

    this.setState({
      arrayProductosSeleccionados: productoSeleccionado,
      precioTotal: total,
    });
    console.log(productoSeleccionado);
  }

  reset = () => {
    this.setState ({
      arrayProductosSeleccionados:[],
      precioTotal: 0,
    });
  }


  añadirDatos(){
    const pedido = {
        clientDni:this.state.clientDni,
        productos:this.state.arrayProductosSeleccionados,
        fecha:new Date(),
        precioTotal: this.state.precioTotal,
    }
     if (this.state.clientDni === "" || this.state.clientDni === "default"){
      alert("Añade un D.N.I")
    }else{
      this.props.añadirPedido(pedido);
      this.reset();
    };
  }




render() {
  console.log("realizar pedido---->clientes");
  console.log(this.props.clientes);
  return (
    <>
      <div className="containerRePed"> 
        <Carta añadirProducto={this.añadirProducto}/>
        <SelectorProduct precioTotal={this.state.precioTotal} arrayProductosSeleccionados={this.state.arrayProductosSeleccionados} borrarProducto={this.borrarProducto}/>
        <div>
          
            
         
          <select value={this.state.clientDni} onChange={this.selectClientDni}>
            <option value={"default"}>Seleccione cliente</option>
            {this.props.clientes.map((client) => {
              return <option value={client.dni}>{client.nombre}</option>;
            })}
          </select>
        </div>
        <div>
            <button className="btn btn-success" onClick={this.añadirDatos}>Confirma pedido</button>
        </div>
      </div>
    </>
  );
}
}

