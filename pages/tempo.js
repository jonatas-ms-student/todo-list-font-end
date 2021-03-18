import Link from 'next/link'

const Tempo = (props) => {
  console.log('> Passando pelo Frontend;')
  const dataDinamica = new Date();
  const textoDataDinamica = dataDinamica.toGMTString();

  return (
    <div>
      <div>{textoDataDinamica} (dinâmica)</div>
      <div>{props.textoDataEstatica} (estático -- com delay)</div>
      <Link href="/">
        <a>Acessar página Home</a>
      </Link>
    </div>
  )
}

export const getStaticProps = async () => {
  console.log('> Passando pelo getStaticProps();')
  console.log('> Adicionando delay de 5 segundos;')

  await delay(5000)
  const dataEstatica = new Date();
  const textoDataEstatica = dataEstatica.toGMTString();

  return {
    props: {
      textoDataEstatica
    }
  }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
 
export default Tempo;