import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import LockIcon from '@material-ui/icons/Lock'
import React, { useEffect } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { GitHubIcon } from 'rmw-shell/lib/components/Icons'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'

const _theme = createMuiTheme({
  color: green[500],
  palette: {
    primary: {
      main: green[900],
      secondary: red[500]
    }
  }
})

const styles = theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column'
  },
  root: {
    flexGrow: 1,
    flex: '1 0 100%'
  },
  hero: {
    height: '100%',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.type === 'light' ? theme.palette.primary.dark : theme.palette.primary.main
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    letterSpacing: '.7rem',
    textIndent: '.7rem',
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.only('xs')]: {
      fontSize: 24,
      letterSpacing: '.1em',
      textIndent: '.1rem'
    },
    whiteSpace: 'nowrap'
  },
  h5: {
    paddingLeft: theme.spacing(1) * 4,
    paddingRight: theme.spacing(1) * 4,
    marginTop: theme.spacing(1),
    maxWidth: 600,
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      fontSize: 18
    }
  },
  content: {
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(1)
    }
  },
  button: {
    marginTop: theme.spacing(1) * 3,
    color: theme.palette.primary.main
  },
  logo: {
    color: 'red',
    margin: `${theme.spacing(1) * 3}px 0 ${theme.spacing(1) * 4}px`,
    width: '100%',
    height: '40vw',
    maxHeight: 250
  },
  steps: {
    maxWidth: theme.spacing(1) * 130,
    margin: 'auto'
  },
  step: {
    padding: `${theme.spacing(1) * 3}px ${theme.spacing(1) * 2}px`
  },
  stepIcon: {
    marginBottom: theme.spacing(1)
  },
  markdownElement: {},
  cardsContent: {
    padding: 15,
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: 0,
      paddingTop: 15
    }
  },
  appBar: {
    backgroundColor: theme.palette.primary.main
  },
  card: {
    minWidth: 275,
    maxWidth: 350,
    margin: 15,
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      margin: 0,
      marginTop: 7
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  cardTitle: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  main: {
    backgroundColor: theme.palette.primary.main
  }
})

const LandingPage = ({ classes, history, theme }) => {
  const isAuthorised = () => {
    try {
      const key = Object.keys(localStorage).find(e => e.match(/persist:root/))
      const data = JSON.parse(localStorage.getItem(key))
      const auth = JSON.parse(data.auth)

      return auth && auth.isAuthorised
    } catch (ex) {
      return false
    }
  }

  useEffect(() => {
    if (isAuthorised()) {
      history.push('/signin')
    }
  })

  return (
    <div className={classes.main}>
      <Helmet>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="apple-mobile-web-app-status-bar-style" content={theme.palette.primary.main} />
        <meta name="msapplication-navbutton-color" content={theme.palette.primary.main} />
        <title>Locazoa</title>
      </Helmet>
      <AppBar position="static" className={classes.main}>
        <Toolbar disableGutters>
          <div style={{ flex: 1 }} />
          <Tooltip id="tooltip-icon1" title="Sign in">
            <IconButton
              name="signin"
              aria-label="Open Github"
              color="inherit"
              onClick={() => {
                history.push('/signin')
              }}
              rel="noopener"
            >
              <LockIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <div className={classes.root}>
        <div className={classes.hero}>
          <div className={classes.content}>
            <img src="/rmw.svg" alt="Material-UI Logo" className={classes.logo} />
            <div className={classes.text}>
              <Typography
                variant="h3"
                align="center"
                component="h1"
                color="inherit"
                gutterBottom
                className={classes.title}
              > 
                {'Locazoa'}
              </Typography>
              <Typography variant="h5" component="h2" color="inherit" gutterBottom className={classes.h5}>
                {'Community Supported Agriculture (CSA) App'}
              </Typography>
              <Button
                onClick={() => {
                  history.push('/signin')
                }}
                className={classes.button}
                variant="outlined"
                color="primary"
              >
                {'Get Started'}
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(withStyles(styles(_theme), { withTheme: true })(LandingPage))
