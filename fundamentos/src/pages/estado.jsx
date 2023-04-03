import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado(){
    //destructuring
    const [numero, setNumero] = useState(0) //React Hooks

    //Um array com dois parametros, o valor inicial e uma função

    function incrementar(){
        setNumero(numero+1) //devemos sempre alterar por meio da função
    }

    return(
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}