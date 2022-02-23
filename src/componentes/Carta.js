const listProductos = [
    { descripcion: "pizza carbonara", precio: 11 },
    { descripcion: "pizza peperoni", precio: 10 },
    { descripcion: "pizza barbacoa", precio: 10 },
    { descripcion: "cocacola", precio: 2 },
    { descripcion: "agua", precio: 1 },
  ];
  function Carta(props) {


    return <>
      <div className={"containerCarta"}>
          <div>Carta</div>
          {listProductos.map((producto,index)=>{
          return (
              <div className={"carta"}>
                  <a>{producto.descripcion}{'--------->'}</a><a>{producto.precio} €     </a>       
                  <button className="btn btn-outline-success" onClick={()=>props.añadirProducto(producto)} key={index} >+</button>
                 
              </div>
          )
          })}
      </div>
    </>;
  }
  export default Carta;
  