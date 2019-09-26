import { information } from '../fixtures/information'

export async function getGithubProfile () {
  const url = [information.projects.gitHubUserPath, information.projects.githubProfile].join('/')
  const response = await fetch(url, {
    headers: {
      Accept: information.projects.token
    }
  })
  return await response.json()
}

export async function getRepo (repository) {
  const url = [information.projects.gitHubRepositoryPath, information.projects.githubProfile, repository].join('/')
  const response = await fetch(url, {
    headers: {
      Accept: information.projects.token
    }
  })
  return await response.json()
}

export async function getFeaturedRepos () {
  const promises = information.projects.featured.map((r) => getRepo(r))
  return Promise.all(promises).then((data) => {
    return data
  }).catch((err) => {
    throw err
  })
}