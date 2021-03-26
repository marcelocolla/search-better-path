import React from 'react'

import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import LocalAirportIcon from '@material-ui/icons/LocalAirport'
import StepsWay from 'components/stepsWay/StepsWay'

import useStyles from './OutputGenerated.styles'

const OutputGenerated = ({ data, loading }) => {
  const { root, footerContainer, footerAlert, boxIcons } = useStyles()

  const { air, road } = data
  const shouldDisplay = air.path || road.path
  const hasRoadBestWay = road.pathCost > air.pathCost
  const bestWay = hasRoadBestWay ? road.path : air.path
  const bestWayText = hasRoadBestWay ? 'rodoviário' : 'aéreo'

  if (loading) {
    return 'Carregando ...'
  } else if (!shouldDisplay) {
    return null
  }

  return (
    <Paper className={root} component="main">
      <header>
        <Typography variant="h5" component="h2">
          <strong>2. Resultado</strong>
        </Typography>
      </header>

      <StepsWay path={bestWay} />

      <footer className={footerContainer}>
        <Box className={footerAlert}>
          <CheckCircleIcon />
          <Typography>A viagem mais curta é por meio {bestWayText}!</Typography>
        </Box>

        <Box className={boxIcons}>
          <Box className={boxIcons}>
            <DriveEtaIcon />
            <Typography>{air.pathCost} km</Typography>
          </Box>

          <Box className={boxIcons}>
            <LocalAirportIcon />
            <Typography>{road.pathCost} km</Typography>
          </Box>
        </Box>
      </footer>
    </Paper>
  )
}

export default OutputGenerated
