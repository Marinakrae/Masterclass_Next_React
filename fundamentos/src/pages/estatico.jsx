import Layout from "../components/Layout";

export async function getStaticProps(){ //é possível passar dados de uma api por meio de uma func async
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props){
    return (
        <Layout titulo = "Conteúdo Estático">
            <div>
                {props.numero}
            </div>
        </Layout>
    )
}