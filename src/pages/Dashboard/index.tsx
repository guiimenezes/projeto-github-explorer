import React from 'react'
import logoImg from '../../assets/logo.svg'
import { Title, Form, Repositories } from './styles'
import { FiChevronRight } from 'react-icons/fi'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt='Github Explorer' />
      <Title> Explore repositórios no Github</Title>
      <Form>
        <input placeholder='Digite o nome do repositório' />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href='teste'>
          <img src='https://avatars0.githubusercontent.com/u/5674049?s=460&u=8571c13548ea2f1cdc4ddf38c84a9251e5ae383b&v=4'
            alt='Guilherme Menezes'
          />
          <div>
            <strong>guiimenezes/grade-api</strong>
            <p>Sistema de grade API</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard