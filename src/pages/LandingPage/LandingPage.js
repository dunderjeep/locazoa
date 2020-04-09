import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
    background: 'white',
    flexGrow: 1
  },
  item: {
    textAlign: 'center',
    width: '100%',
  },
  img: {
    maxWidth: '100%',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto'
    }
  },
  form: {
    display: 'flex',
    alignItems: 'center',
	  display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '160px',
  },
  input: {
    width: '100%'
  },
  submit: {
    marginTop: '0.5rem'
  },

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

  const [ email, setEmail ] = useState('');

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
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} className={classes.item}>
              <img src="/landing-page-iphone-8-1.svg" alt="Material-UI hero" className={classes.img}/>
            </Grid>
          </Grid>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={4} className={classes.item}>
              <img src="/panel-1.svg" alt="create a box"  className={classes.img}/>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.item}>
              <img src="/panel-2.svg" alt="make a box"  className={classes.img}/>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.item}>
              <img src="/panel-3.svg" alt="get a box"  className={classes.img}/>
            </Grid>
            <Grid item xs={12} className={classes.item}>
              <img src="/community-supported-agriculture.svg" alt="community supported agriculture"  className={classes.img}/>
            </Grid>
            <Grid item xs={12} className={classes.item}>
              <div>
                <form action="https://locazoa.us19.list-manage.com/subscribe/post?u=eeaefdd53c9546026e574eeed&amp;id=337e2f4020" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                  {/* <div id="mc_embed_signup_scroll">
                    <input type="email" value={email} name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" onChange={e => setEmail(e.target.value)} required />&nbsp;&nbsp;
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" onChange={() => console.log('submit')}></input>
                  </div> */}
                    <div id="mc_embed_signup_scroll" className={classes.form} >
                      <TextField
                        id="mce-EMAIL"
                        required
                        name="EMAIL"
                        type="email"
                        label='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        helperText="sign up for our newsletter"
                        className={classes.input}
                      />
                      <Button
                        id="mc-embedded-subscribe"
                        name="subscribe"
                        type="submit"
                        color="primary"
                        variant="contained"
                        className={classes.submit}
                        // value="Subscribe"
                      >
                        Subscribe
                      </Button>
                    </div>
                </form>
              </div>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}

export default withRouter(withStyles(styles(_theme), { withTheme: true })(LandingPage))