
  function SelectorProduct(props) {

    return <>
      <div className={"productosSeleccionados"}>
          <div><h3>Productos seleccionados</h3></div>
          {props.arrayProductosSeleccionados.map((producto, index)=>{
          return (
            
              <div>
                  <a>{producto.descripcion}{'--------->'}</a><a>{producto.precio} € </a>
                  <button className="btn btn-outline-danger" onClick={()=>props.borrarProducto(producto, index)}>-</button> 
                         
              </div>
              
              
             
          )
          })}

          <div>Total:{' '}{props.precioTotal}€</div>
      </div>

      <div>{props.resultados}</div>
    </>;
  }
  export default SelectorProduct;