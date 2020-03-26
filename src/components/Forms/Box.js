import Avatar from '@material-ui/core/Avatar'
import Business from '@material-ui/icons/Business'
import Photo from '@material-ui/icons/Photo'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import TextField from 'rmw-shell/lib/components/ReduxFormFields/TextField'
import { ImageCropDialog } from 'rmw-shell/lib/containers/ImageCropDialog'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import AvatarImageField from 'rmw-shell/lib/components/ReduxFormFields/AvatarImageField'
import { VirtualizedSelectField } from 'muishift'
import { connect } from 'react-redux'
import { getList } from 'firekit'
import { injectIntl } from 'react-intl'
import { setDialogIsOpen } from 'rmw-shell/lib/store/dialogs/actions'
import { withRouter } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'

class Form extends Component {
  render() {
    const { handleSubmit, intl, initialized, users, setDialogIsOpen, dialogs, match } = this.props

    const uid = match.params.uid;

    return (
      <form
        onSubmit={handleSubmit}
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'stretch',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <button type="submit" style={{ display: 'none' }} />

        <div>
          <div>
            <Field
              name="title"
              disabled={!initialized}
              component={TextField}
              placeholder={intl.formatMessage({ id: 'title_hint' })}
              label={intl.formatMessage({ id: 'title_label' })}
            />
          </div>

          <div>
            <Field
              name="description"
              disabled={!initialized}
              component={TextField}
              multiline
              placeholder={intl.formatMessage({ id: 'description_hint' })}
              label={intl.formatMessage({ id: 'description_label' })}
            />
          </div>

          <br />
          <AvatarImageField
            name="photoURL"
            disabled={!initialized}
            uid={uid}
            change={this.props.change}
            initialized={initialized}
            icon={<Photo fontSize="large" />}
            intl={intl}
            path={'boxes'}
          />
          <ImageCropDialog
            path={`boxes/${uid}`}
            fileName={'photoURL'}
            onUploadSuccess={s => {
              this.handlePhotoUploadSuccess(s)
            }}
            open={dialogs.new_company_photo !== undefined}
            src={dialogs.new_company_photo}
            handleClose={() => {
              setDialogIsOpen('new_company_photo', undefined)
            }}
            title={intl.formatMessage({ id: 'change_photo' })}
          />
          <div>

            <Field
              name="helper"
              rowHeight={54}
              component={VirtualizedSelectField}
              items={users.map(snap => (snap && snap.val ? snap.val : {}))}
              itemToString={item => (item ? item.displayName : '')}
              inputProps={{
                placeholder: intl.formatMessage({ id: 'helper_hint' }),
                label: intl.formatMessage({ id: 'helper_label' })
              }}
              renderSuggestion={({ rootProps, downshiftProps, suggestion, index }) => {
                const { getItemProps, highlightedIndex } = downshiftProps
                const itemProps = getItemProps({ item: suggestion })
                const isHighlighted = highlightedIndex === index

                return (
                  <MenuItem {...itemProps} selected={isHighlighted} key={index}>
                    <Avatar alt="avatar" src={suggestion.photoURL} />
                    <ListItemText primary={suggestion.displayName} />
                  </MenuItem>
                )
              }}
            />
          </div>
        </div>
      </form>
    )
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialized: PropTypes.bool.isRequired,
  setDialogIsOpen: PropTypes.func.isRequired,
  dialogs: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

const selector = formValueSelector('box')

const mapStateToProps = state => {
  const { intl, vehicleTypes, dialogs } = state

  return {
    intl,
    vehicleTypes,
    users: getList(state, 'users'),
    dialogs,
    photoURL: selector(state, 'photoURL')
  }
}

export default connect(
  mapStateToProps,
  { setDialogIsOpen }
)(injectIntl(withRouter(withTheme(reduxForm({ form: 'box' })(Form)))))