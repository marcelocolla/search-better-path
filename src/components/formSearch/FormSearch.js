import React from 'react'

import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import Button from '@material-ui/core/Button'

import cities from 'db/brasil.heuristic.json'

import searchTypes from 'domains/searchTypes'
import useStyles from './FormSearch.styles'

const requiredFields = 'Selecione todos os campos para buscar!'
const selectOldCity = 'Cidade de origem e destino precisam ser diferentes!'

const FormSearch = ({ onSubmitSearch }) => {
  const { root, container, title, submit } = useStyles()

  const [open, setOpen] = React.useState(false)
  const [startCity, setStartCity] = React.useState('')
  const [goalCity, setGoalCity] = React.useState('')
  const [searchType, setSearchType] = React.useState('')

  const toastMessage = open && startCity.id === goalCity.id ? selectOldCity : requiredFields

  const listCitites = Object.keys(cities).map((city, index) => ({
    id: index,
    title: city,
  }))

  const handleClose = () => {
    setOpen(false)
  }

  const onExecuteSearch = (event) => {
    event.preventDefault()

    if (searchType && startCity && goalCity && startCity.id !== goalCity.id) {
      onSubmitSearch(searchType.id, startCity.title, goalCity.title)
    } else {
      setOpen(true)
    }
  }

  return (
    <Paper className={root}>
      <form onSubmit={onExecuteSearch}>
        <Typography className={title} variant="h4" component="h1">
          Olá, faça sua busca!
        </Typography>

        <Typography variant="h5" component="h2">
          <strong>1. Busca</strong>
        </Typography>

        <Box className={container}>
          <Autocomplete
            options={listCitites}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="Origem" variant="outlined" />}
            value={startCity}
            onChange={(_, newValue) => {
              setStartCity(newValue)
            }}
          />

          <Autocomplete
            options={listCitites}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="Destino" variant="outlined" />}
            value={goalCity}
            onChange={(_, newValue) => {
              setGoalCity(newValue)
            }}
          />

          <Autocomplete
            options={searchTypes}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="Tipo de Busca" variant="outlined" />}
            value={searchType}
            onChange={(_, newValue) => {
              setSearchType(newValue)
            }}
          />

          <Button className={submit} type="submit" variant="contained" color="primary">
            Buscar
          </Button>
        </Box>
      </form>

      <Snackbar
        severity="error"
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="error">
          {toastMessage}
        </Alert>
      </Snackbar>
    </Paper>
  )
}

export default FormSearch
