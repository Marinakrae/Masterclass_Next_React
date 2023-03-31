import Navegador from '../components/Navegador'

//Exportando um componente baseado em função
export default function Inicio() {
    return (
        <div style={{ //aqui as propriedades n possuem hífen
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexwrap: 'wrap'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso"/>
            <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"/>
            <Navegador texto="JSX" destino="/jsx" cor="crimson"/>
        </div>

    )
}