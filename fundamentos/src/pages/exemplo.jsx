import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() { //import de componente jsx
    return (
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Next.js e React" />
            <Cabecalho titulo="Aprenda Next na prática" />
        </Layout>

    )
}