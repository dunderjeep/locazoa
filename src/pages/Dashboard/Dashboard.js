import { Activity } from 'rmw-shell'
import React  from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { withFirebase } from 'firekit-provider'
import { withTheme, withStyles } from '@material-ui/core/styles'
import Scrollbar from 'rmw-shell/lib/components/Scrollbar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'


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
    width: '75%'
  } 
})

const Dashboard = ({ theme, classes }) => {
    return (
      <Activity>
        <CssBaseline />
        <Scrollbar>
        <Container className={classes.container}>
          <img src="/hero.svg" alt="Material-UI hero" className={classes.hero} />
        </Container>
        </Scrollbar>
      </Activity>
    )
}

export default compose(injectIntl, withRouter, withTheme, withStyles(styles), withFirebase)(Dashboard)