import { useState } from 'react'
import Botao from '../Botao/Botao'
import FormsText from '../FormsText'
import ListaSuspensa from '../ListaSuspensa'
import './Forms.css'

const Forms = (props) => {

    const times = [
        'Programacao',
        'Front-end',
        'DataScience',
        'Devops',
        'ux designer',
        'mobile',
        'inovacao e gestao'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    
    const aoSalvar = (evento) => {
        evento.preventDefault() //previne o comportamento padrao da pagina, no caso aqui esta sendo usado para a pagina nao atualizar quando clicar no botao
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <FormsText 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <FormsText 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <FormsText 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="digite o endereco da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Times" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao 
                    texto="Criar Card"
                />
            </form>
        </section>
    )
}

export default Forms