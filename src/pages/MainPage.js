import React from 'react'

import Box from '@material-ui/core/Box'
import searchUseCase from 'usecase/SearchUseCase'
import FormSearch from 'components/formSearch/FormSearch'
import Maps from 'components/maps/Maps'
import OutputGenerated from 'components/outputGenerated/OutputGenerated'

import useStyles from './MainPage.styles'

const initialState = {
  air: {
    path: '',
    pathCost: 0,
  },
  road: {
    path: '',
    pathCost: 0,
  },
}

const MainPage = () => {
  const { root, container } = useStyles()
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState(initialState)

  const onSubmitSearch = (searchType, startCity, goalCity) => {
    setLoading(true)

    const results = searchUseCase(searchType, startCity, goalCity)

    setLoading(false)
    setData(results)
  }

  return (
    <section className={root}>
      <Box className={container}>
        <FormSearch onSubmitSearch={onSubmitSearch} />

        <Maps />
      </Box>

      <OutputGenerated data={data} loading={loading} />
    </section>
  )
}

export default MainPage
