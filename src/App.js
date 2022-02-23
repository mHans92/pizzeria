import React from "react";
import Encabezado from "./componentes/Encabezado";
import AltaCliente from "./componentes/AltaCliente";
import RealizarPedido from "./componentes/RealizarPedido";
import Buscador from "./componentes/Botonbuscar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vista: "",
      clientes: [],
      arrayPedidos:[],
  
      
    };
    this.cambiarVista = this.cambiarVista.bind(this);
    this.addClient = this.addClient.bind(this);
    this.añadirPedido = this.añadirPedido.bind(this);
  }
  addClient(client) {
    let usuarios = this.state.clientes;
    usuarios.push(client);
    this.setState({
      clientes: usuarios,
    });
    console.log(usuarios);
  }

  cambiarVista(vista) {
    this.setState({
      vista,
    });
  }
  añadirPedido(pedido){
    let pedidos = this.state.arrayPedidos;
    pedidos.push(pedido);
    this.setState({
      arrayPedidos: pedidos,
    });
    console.log(pedidos);
  }

  render() {
    return (
      <>
        <div className="App">
          <Encabezado cambiarVista={this.cambiarVista}/>
          {this.state.vista === "AltaCliente" && (<AltaCliente addClient={this.addClient} />)}
          {this.state.vista === "ListaPedidos" && (<Buscador arrayPedidos={this.state.arrayPedidos}/>)}
          {this.state.vista === "RealizarPedidos" && (<RealizarPedido arrayPedidos={this.state.arrayPedidos} clientes={this.state.clientes} añadirPedido={this.añadirPedido} />)}
        </div>
      </>
    );
  }
}
export default App;