import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    padding: 24,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: 24,
    marginBottom: 24,
  },
})

export default useStyles
