import React from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

import cities from 'db/brasil.heuristic.json'

const Header = () => {
  const listCitites = Object.keys(cities).map((city, index) => ({
    id: index,
    title: city,
  }))

  return (
    <header>
      <Typography variant="h3" component="h1">
        Olá faça sua busca!
      </Typography>

      <Autocomplete
        options={listCitites}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Origem:" variant="outlined" />}
      />
    </header>
  )
}

export default Header
