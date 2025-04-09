import Botao from '../Botao/Botao'
import FormsText from '../FormsText'
import ListaSuspensa from '../ListaSuspensa'
import './Forms.css'

const Forms = () => {

    const times = [
        'Programacao',
        'Front-end',
        'DataScience',
        'Devops',
        'ux designer',
        'mobile',
        'inovacao e gestao'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault() //previne o comportamento padrao da pagina, no caso aqui esta sendo usado para a pagina nao atualizar quando clicar no botao
        console.log('form foi submetido')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <FormsText obrigatorio={true} label="Nome" placeholder="digite seu nome" />
                <FormsText obrigatorio={true} label="Cargo" placeholder="digite seu cargo" />
                <FormsText obrigatorio={true} label="Imagem" placeholder="digite o endereco da imagem" />
                <ListaSuspensa obrigatorio={true} label="Times" itens={times}/>
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Forms