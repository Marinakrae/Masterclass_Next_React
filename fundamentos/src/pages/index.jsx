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
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
            <Navegador texto="Navegação #02" destino="/cliente/rs/123" cor="yellow"/>
            <Navegador texto="Componente com Estado" destino="/estado" cor="pink"/>
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="orange"/>
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="gray"/>
        </div>

    )
}