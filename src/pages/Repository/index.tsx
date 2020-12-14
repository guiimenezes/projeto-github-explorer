import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { Header, Issues, RepositoryInfo } from './styles'
import logoImg from '../../assets/logo.svg'
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi'

interface RepositoryParams {
  repository: string
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to='/'>
          <FiChevronsLeft size={16} />
          Volar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="" alt="" />
          <div>
            <strong>guiimenezes/grade-api</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to=''>
          <div>
            <strong>aeweaeawe</strong>
            <p>aeaweaweae</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  )
}

export default Repository