import Navegador from '../components/Navegador'

//Exportando um componente baseado em função
export default function Inicio() {
    return (
        <div style={{ //aqui as propriedades n possuem hífen
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso"/>
            <Navegador texto="Exemplo" destino="/exemplo"/>
            <Navegador texto="JSX" destino="/jsx"/>
        </div>

    )
}