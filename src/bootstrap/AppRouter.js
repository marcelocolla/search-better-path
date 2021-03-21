import React from 'react'

import Header from 'components/header/Header'
import Maps from 'components/maps/Maps'
import OutputGenerated from 'components/outputGenerated/OutputGenerated'

const AppRouter = () => {
  return (
    <section>
      <Header />
      <Maps />
      <OutputGenerated />
    </section>
  )
}

export default AppRouter
