import Link from 'next/link'

const Tempo = (props) => {
  console.log('> Passando pelo Frontend;')
  const dataDinamica = new Date();
  const textoDataDinamica = dataDinamica.toGMTString();

  return (
    <div>
      <div>{textoDataDinamica} (dinâmica)</div>
      <div>{props.textoDataEstatica} (estático)</div>
      <Link href="/">
        <a>Acessar página Home</a>
      </Link>
    </div>
  )
}

export function getStaticProps() {
  console.log('> Passando pelo getStaticProps();')
  const dataEstatica = new Date();
  const textoDataEstatica = dataEstatica.toGMTString();

  return {
    props: {
      textoDataEstatica
    }
  }
}
 
export default Tempo;