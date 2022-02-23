
function Encabezado(props) {


 
  const cambiarVista = (vista) => {
   props.cambiarVista(vista);
 }



      return (
        <>
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="btn" className="btn btn-primary" onClick={() => cambiarVista("AltaCliente")  }>Registro Usuario</button>
        <button className="btn btn-primary" onClick={() => cambiarVista("RealizarPedidos") }>Realizar Pedido</button>
        <button className="btn btn-primary" onClick={() => cambiarVista("ListaPedidos")  }>Lista de pedidos</button>
        <button className="btn btn-primary" onClick={() => cambiarVista("Principal")  }>Volver</button>
        </div>
        <div className="cajagrande"></div>
        </>
      );


}
  export default Encabezado;


