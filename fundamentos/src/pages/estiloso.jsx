import Layout from '../components/Layout'
import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'

export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de CSS Modularizado">
            <div className={styles.roxo}>
                <h1>Estilo usando css módulos</h1>
            </div>
        </Layout>


    )
}