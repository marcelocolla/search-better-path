// Uninformed Search Algorithms
// * Breadth-first Search

import searchNode from './searchNode'

const breadthFirstSearch = ({ initialState, pathType, helpers }) => {
  const { goalCheck, actions, successor } = helpers
  // The fringe is a Queue
  // Actions other than push() and shift() are prohibited.
  let fringe = []
  if (goalCheck(initialState)) {
    console.log('Initial state is the goal state.')
    return [initialState]
  }

  // Add the initialState to the fringe.
  fringe.push(new searchNode(null, initialState, null))
  let expanded = []
  while (fringe.length !== 0) {
    // Pop an element out of the queue to expand.
    let parent = fringe.shift()
    let newChildStates = []

    // Child states of the current node
    let actionsList = actions(parent.state)

    // Add the node to the expanded list to prevent re-expansion.
    expanded.push(parent.state)

    // Create successors of each node and push them onto the fringe.
    for (let i = 0; i < actionsList.length; i++) {
      const current = helpers.converterCurrentNode(pathType, actionsList[i])

      let newS = successor(parent.state, current)
      let newN = new searchNode(current, newS, parent)

      // If the goal is found,
      // returns the path to the goal.
      if (goalCheck(newS)) {
        console.log('FOUND GOAL!', newS)

        return {
          path: newN.path(),
          pathCost: newN.pathCost(),
        }
      }

      // If the successor is already expanded,
      // don't add it to the fringe.
      else if (expanded.indexOf(newS) !== -1) {
        console.log('Successor ' + newS + ' of ' + parent.state + ' already expanded.')
        console.log('Not adding ' + newS + ' to the fringe.')
      }

      // If the successor is already in the fringe,
      // don't add it to the fringe again.
      else if (
        fringe
          .map(function (item) {
            return item.state
          })
          .indexOf(newN.state) !== -1
      ) {
        console.log(newS + ' is already in the fringe.')
      }

      // Push new successors to the fringe.
      else {
        newChildStates.push(newS)
        fringe.push(newN)
      }
    }
  }
}

export default breadthFirstSearch
