import Layout from "../components/Layout"

export default function Jsx() {
    //Aqui antes do return temos código js puro, ao contrário do return (mas se colocar {} ele aceita)
    const titulo = <h1> JSX é um conceito central</h1>

    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }
    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
                {subtitulo()}
                <p>
                    {JSON.stringify({ nome: 'Marina', idade: 21 })}
                </p>
            </div>
        </Layout>
    )
}