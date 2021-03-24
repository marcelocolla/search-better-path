import React from 'react'

import Paper from '@material-ui/core/Paper'
import mapSource from 'assets/mapa-brasil.png'
import useStyles from './Maps.styles'

const Maps = () => {
  const { root } = useStyles()

  return (
    <Paper className={root} component="aside">
      <img src={mapSource} alt="Mapa do Brasil" />
    </Paper>
  )
}

export default Maps
