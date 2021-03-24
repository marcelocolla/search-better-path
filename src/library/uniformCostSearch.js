// Uninformed Search Algorithms
// * Uniform Cost Search

import searchNode from './searchNode'

// TODO
// Implement a priority queue for Uniform Cost Search
const uniformCostSearch = ({ initialState, pathType, helpers }) => {
  const { goalCheck, actions, successor } = helpers

  // The fringe is a Priority Queue
  // Actions other than shift() and enqueue() are prohibited.
  let fringe = []

  if (goalCheck(initialState)) {
    console.log('Initial state is the goal state.')
    return [initialState]
  }

  fringe.enqueue = function (item) {
    let added = false
    for (let i = 0; i < fringe.length; i++) {
      // console.log('ITEM: ', fringe[i].state)
      // console.log('COST: ', fringe[i].pathCost())

      if (item.pathCost() < fringe[i].pathCost()) {
        fringe.splice(i, 0, item)
        added = true
        return
      }
    }

    if (!added) {
      fringe.push(item)
    }
  }

  // Add the initialState to the fringe.
  fringe.enqueue(new searchNode(null, initialState, null))

  let expanded = []
  let shortestPath = { state: null, pathCost: null, path: null }

  while (fringe.length !== 0) {
    // console.log(
    //   'Fringe: ' +
    //     fringe.map(function (city) {
    //       return city.state
    //     }),
    // )

    // console.log(':::: fringe', fringe.length)

    // Pop an element out of the queue to expand.
    let parent = fringe.shift()
    // console.log('Popped: ', parent.state)
    let newChildStates = []

    // Child states of the current node
    let actionsList = actions(parent.state)

    // console.log(
    //   'Found ' +
    //     actionsList.length +
    //     ' successors of ' +
    //     parent.state +
    //     ' : ' +
    //     actionsList.map(function (item) {
    //       return item.name
    //     }),
    // )

    // Add the node to the expanded list to prevent re-expansion.
    expanded.push(parent.state)
    // console.log('Expanded list: ', expanded)
    // console.log('\n')

    // Create successors of each node and push them onto the fringe.
    for (let i = 0; i < actionsList.length; i++) {
      const current = helpers.converterCurrentNode(pathType, actionsList[i])

      let newS = successor(parent.state, current)
      let newN = new searchNode(current, newS, parent)

      // If the goal is found,
      // returns the path to the goal.
      if (goalCheck(newS)) {
        console.log('FOUND GOAL!', newS, ' with path cost ', newN.pathCost())
        // console.log('Continuing search to find optimal path.')

        if (newN.pathCost() < shortestPath.pathCost || shortestPath.pathCost === null) {
          shortestPath.pathCost = newN.pathCost()
          shortestPath.path = newN.path()
          shortestPath.state = newS
        }
      }

      // If the successor is already expanded,
      // don't add it to the fringe.
      else if (expanded.indexOf(newS) !== -1) {
        // console.log('Successor ' + newS + ' of ' + parent.state + ' already expanded.')
        // console.log('Not adding ' + newS + ' to the fringe.')
        // console.log('\n')
      }

      // Push new successors to the fringe.
      else {
        // console.log('Discovered ' + newN.state + ' with step cost ' + actionsList[i][pathType] + ' from ' + parent.state)
        // console.log('Pushing to fringe: ' + newS)
        newChildStates.push(newS)
        fringe.enqueue(newN)
        // console.log('Path: ', newN.path())
        // console.log(
        //   'Current fringe: ' +
        //     fringe.map(function (city) {
        //       return city.state
        //     }),
        // )
        // console.log('\n')
      }
    }
  }

  if (shortestPath.pathCost === null) {
    return "Couldn't find path."
  }

  return {
    path: shortestPath.path,
    pathCost: shortestPath.pathCost,
  }
}

export default uniformCostSearch
