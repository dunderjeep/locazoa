import Button from '@material-ui/core/Button'
import { Activity } from 'rmw-shell'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { withFirebase } from 'firekit-provider'
import { withTheme } from '@material-ui/core/styles'
import Scrollbar from 'rmw-shell/lib/components/Scrollbar'

class Dashboard extends Component {
  componentDidMount() {
    const { watchPath } = this.props
  }

  render() {
    const { theme, intl } = this.props

    return (
      <Activity>
        <Scrollbar>

        </Scrollbar>
      </Activity>
    )
  }
}

const mapStateToProps = state => {

  return {

  }
}

export default connect(mapStateToProps)(injectIntl(withTheme(withFirebase(Dashboard))))
