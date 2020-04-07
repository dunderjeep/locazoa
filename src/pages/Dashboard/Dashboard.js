import { Activity } from 'rmw-shell'
import React  from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { withFirebase } from 'firekit-provider'
import { withTheme } from '@material-ui/core/styles'
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
    width: '100%'
  } 
})

const Dashboard = () => {
    return (
      <Activity>
        <Scrollbar>
        <Container>
          <img src="/hero.svg" alt="Material-UI hero"/>
        </Container>
        </Scrollbar>
      </Activity>
    )
}

export default compose(injectIntl, withRouter, withTheme, withFirebase)(Dashboard)