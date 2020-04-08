import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
    alignItems: 'center',
    flexDirection: 'column'
  },
  hero: {
    width: '75%'
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
      <main>
        <Container className={classes.container}>
          <img src="/hero.svg" alt="Material-UI hero" className={classes.hero}/>
          <Grid container spacing={2} justify="center">
            <Grid item>
            <Button
                onClick={() => {
                  history.push('/signin')
                }}
                className={classes.button}
                variant="contained"
                color="primary"
              >
                {'Get Started'}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}

export default withRouter(withStyles(styles(_theme), { withTheme: true })(LandingPage))
