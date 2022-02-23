import React from "react";

class Buscador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
      resultBusqueda: [],
      nombres:[],
      
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.nombres = this.nombres.bind(this);
    
  }

  updateSearch(event) {
    console.log(event);
    event.preventDefault(); // no funciona

    let arrayPedidos = this.props.arrayPedidos;
    console.log(arrayPedidos);

    const resultBusqueda = arrayPedidos.filter(function (cliente) {
      if (cliente.clientDni.toLowerCase().includes(event.target.value)){
        return cliente;
      }
    });
    this.setState({
        busqueda: event.target.value,
        resultBusqueda: resultBusqueda,
    });
  }

  nombres(){ //seguir con esta cosa copiar linea 24 metodo filter
    let clientes = this.props.clientes;
    clientes = clientes.map((cliente) =>{
        return cliente.nombre;
    });
    this.setState({
       nombres: clientes
    });


  }

 

  render() {

    

      
    return (
      <div className="App">
        <input
          class="form-control"
          type="text"
          placeholder="Search"
          value={this.state.busqueda}
          onChange={(this.updateSearch)}
        />
    
        {this.state.resultBusqueda.map((client) => {
          return <>
          
          <div className="card text-white bg-info mb-3">
                
                <div>Dni:{' '}{client.clientDni}</div>
                {client.productos.map((product) => {
                    return(
                        <>
                        <div>{product.descripcion}{"---------->"}{product.precio}</div>
                        </>
                    )
                })}
                <div>Total:{' '}{client.precioTotal}€</div>
                <div>
                {client.fecha.getDate()}
                {"/"}
                {client.fecha.getMonth()}
                {"/"}
                {client.fecha.getFullYear()}
                {"---"}
                {client.fecha.getHours()}
                {":"}
                {client.fecha.getMinutes()}
                </div>
    
            </div> 
          </>
        })}
      </div>
    );
  }
}

export default Buscador;
