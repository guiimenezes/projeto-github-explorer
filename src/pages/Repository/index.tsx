import React, { useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { Header, Issues, RepositoryInfo } from './styles'
import logoImg from '../../assets/logo.svg'
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

interface RepositoryParams {
  repository: string
}
interface Repository {
  full_name: string
  description: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  owner: {
    login: string
    avatar_url: string
  }
}

interface Issue {
  id: number
  title: string
  html_url: string
  user: {
    login: string
  }
}

const Repository: React.FC = () => {

  const [repository, setRepository] = useState<Repository | null>(null)
  const [issue, setIssue] = useState<Issue[]>([])

  const { params } = useRouteMatch<RepositoryParams>()

  useEffect(() => {
    async function loadData(): Promise<void> {

      const [repositories, issues] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`)
      ])
      if (repositories) {
        setRepository(repositories.data)
      }
      if (issues) {
        setIssue(issues.data)
      }
    }
    loadData()
  }, [params.repository])

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to='/'>
          <FiChevronsLeft size={16} />
          Volar
        </Link>
      </Header>

      {repository && (

        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>

        {issue.map(issue => (
          <a href={issue.html_url} key={issue.id} target='new_blank'>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}

      </Issues>
    </>
  )
}

export default Repository