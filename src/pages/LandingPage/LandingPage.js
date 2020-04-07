import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import React, { useEffect } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const _theme = createMuiTheme({
  shadows: ["none"],
  color: '#000000',
  palette: {
    primary: {
      main: '#ffffff',
    }
  }
})

const styles = theme => ({
  main : {
    background: 'white'
  },
  container: {
    height: '100vh',
	  display: 'flex',
	  justifyContent: 'center',
	  alignItems: 'center'
  },
  hero: {
    width: '100%'
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
      <CssBaseline />
      <Helmet>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="apple-mobile-web-app-status-bar-style" content={theme.palette.primary.main} />
        <meta name="msapplication-navbutton-color" content={theme.palette.primary.main} />
        <title>Locazoa</title>
      </Helmet>
      <AppBar position="static" className={classes.main} elevation={0}>
        <Toolbar disableGutters>
          <div style={{ flex: 1 }} />
          <Tooltip id="tooltip-icon1" title="Sign in">
            <IconButton
              name="signin"
              aria-label="Open Sign In"
              onClick={() => {
                history.push('/signin')
              }}
              rel="noopener"
            >
              <AccountCircle />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.container}>
          <img src="/hero.svg" alt="Material-UI hero" className={classes.hero}/>
        </Container>
      </main>
    </div>
  )
}

export default withRouter(withStyles(styles(_theme), { withTheme: true })(LandingPage))
