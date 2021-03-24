import aStarSearch from 'library/aStarSearch'
import breadthFirstSearch from 'library/breadthFirstSearch'
import depthFirstSearch from 'library/depthFirstSearch'
import uniformCostSearch from 'library/uniformCostSearch'

import cities from 'db/brasil.json'
import citiesHeuristic from 'db/brasil.heuristic.json'

const MAP_PATH_AIR = 'air'
const MAP_PATH_ROAD = 'road'

const searchUseCase = (searchType, startCity, goalCity) => {
  const Entity = new Map()

  const helpers = {
    goalCheck: (state) => state === goalCity,
    findHeuristic: (city) => citiesHeuristic[goalCity][city.name],
    converterCurrentNode: (type, { name, ...rest }) => ({ name, cost: rest[type] }),
    actions: (state) => {
      return Entity.get(state)
    },
    successor: (_, action) => {
      return action.name
    },
  }

  cities.forEach(({ name, nearby }) => {
    Entity.set(name, nearby)
  })

  const executeSearch = getSearchType(searchType)
  const air = executeSearch({ initialState: startCity, pathType: MAP_PATH_AIR, helpers })
  const road = executeSearch({ initialState: startCity, pathType: MAP_PATH_ROAD, helpers })

  return {
    air,
    road,
  }
}

const getSearchType = (searchType) => {
  switch (searchType) {
    case 'DEPTH_FIRST_SEARCH':
      return depthFirstSearch

    case 'BREADTH_FIRST_SEARCH':
      return breadthFirstSearch

    case 'START_SEARCH':
      return aStarSearch

    case 'UNIFORM_COST_SEARCH':
    default:
      return uniformCostSearch
  }
}

export default searchUseCase
