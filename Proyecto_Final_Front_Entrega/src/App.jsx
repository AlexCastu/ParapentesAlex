import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CestaDeLaCompra from "./components/CestaDeLaCompra/CestaDeLaCompra";
import P_Accesorios from "./Pages/P_Accesorios";
import P_Paracaidas from "./Pages/P_Paracaidas";
import P_Sillas from "./Pages/P_Sillas";
import P_Parapentes from "./Pages/P_Parapentes";
import { DatosContexto } from "../src/Contexto/ContextoCesta";
import P_inicio from "./Pages/P_Inicio";
import P_Contacto from "./Pages/P_Contacto";
function App() {
   return (
      <div className="App">
         <DatosContexto>
            <Header></Header>
            <Routes>
               <Route path="/" element={<P_inicio></P_inicio>} />
               <Route path="/inicio" element={<P_inicio></P_inicio>} />
               <Route path="/parapentes" element={<P_Parapentes></P_Parapentes>} />
               <Route path="/sillas" element={<P_Sillas></P_Sillas>} />
               <Route path="/paracaidas" element={<P_Paracaidas></P_Paracaidas>} />
               <Route path="/accesorios" element={<P_Accesorios></P_Accesorios>} />
               <Route path="/cesta" element={<CestaDeLaCompra></CestaDeLaCompra>} />
               <Route path="/contacto" element={<P_Contacto></P_Contacto>} />
            </Routes>
         </DatosContexto>
      </div>
   );
}

export default App;
