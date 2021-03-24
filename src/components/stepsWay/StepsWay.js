import React from 'react'

import Typography from '@material-ui/core/Typography'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

const StepsWay = ({ path = '' }) => {
  const cities = path.split(' -> ')
  const activeStep = cities.length

  const steps = cities.map((step) => {
    const [label, distance] = step.split(',')

    return { label, distance }
  })

  console.log('::: steps', cities, steps)

  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map(({ label, distance }) => (
        <Step key={label}>
          <StepLabel>
            <Typography>{label}</Typography>
            <Typography color="textSecondary" variant="caption">
              {distance || '0'} KM
            </Typography>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

export default StepsWay
