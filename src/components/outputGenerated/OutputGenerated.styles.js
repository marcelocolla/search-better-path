import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    padding: 32,
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  container: {
    margin: '24px 0',
  },
  footerContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
  },
  footerAlert: {
    display: 'flex',
    gap: 10,
    color: '#33a033',
  },
  boxIcons: {
    display: 'flex',
    gap: 10,
  },
})

export default useStyles
