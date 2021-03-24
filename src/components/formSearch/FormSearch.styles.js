import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    padding: 32,
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  container: {
    maxWidth: 520,
    display: 'flex',
    flexDirection: 'column',
    gridGap: 20,
    marginTop: 24,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 24,
  },
  submit: {
    borderRadius: 32,
    height: 62,
    fontSize: 18,
    letterSpacing: '0.4rem',
  },
})

export default useStyles
