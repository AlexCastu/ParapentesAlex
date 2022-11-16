import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
const Element = ({ data, categoria, comprobarProductosEnLaCesta, eliminando }) => {
   const eliminarDeLaCesta = (id) => {
      eliminando(true);
      axios.get(`https://proyectofinalback-production.up.railway.app/tienda/eliminarDeLaCesta?id=${id}&categoria=${categoria}`).then((response) => {
         comprobarProductosEnLaCesta();
      });
   };

   return (
      <div key={data._id} className="elementoCesta">
         <div className="divImagen">
            <img alt={data.nombre} src={data.img}></img>
         </div>
         <div>
            <p>Categoria</p>
            <p>{categoria}</p>
         </div>
         <div>
            <p>Modelo</p>
            <p>{data.modelo}</p>
         </div>
         <div>
            <p>Marca</p>
            <p>{data.marca.nombre}</p>
         </div>
         <div>
            <p>Precio</p>
            <p className="precioCesta">{data.price} €</p>
         </div>
         <div>
            <Button variant="light" className="BotonCesta" onClick={() => eliminarDeLaCesta(data._id)}>
               Borrar articulo
               <img src="https://img.icons8.com/ios/25/null/trash--v1.png" />
            </Button>
         </div>
      </div>
   );
};

export default Element;
