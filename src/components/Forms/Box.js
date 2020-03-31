import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Photo from '@material-ui/icons/Photo'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';  
import TextField from 'rmw-shell/lib/components/ReduxFormFields/TextField'
import { ImageCropDialog } from 'rmw-shell/lib/containers/ImageCropDialog'
import { Field, reduxForm, formValueSelector, change } from 'redux-form'
import AvatarImageField from 'rmw-shell/lib/components/ReduxFormFields/AvatarImageField'
import { VirtualizedSelectField } from 'muishift'
import { connect } from 'react-redux'
import { getList } from 'firekit'
import { injectIntl } from 'react-intl'
import { setDialogIsOpen } from 'rmw-shell/lib/store/dialogs/actions'
import { withRouter } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import PublishIcon from '@material-ui/icons/Publish';
import { setSimpleValue } from 'rmw-shell/lib/store/simpleValues/actions'
import QuestionDialog from 'rmw-shell/lib/containers/QuestionDialog'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    change('box', 'status', 'published');
    onClose(selectedValue);
  };

  const handleButtonClick = value => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="alert-dialog-title">{"Ready to Publish?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This means making your box visible to all users of the app.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            autoFocus
          >
            Publish
          </Button>
        </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const Form = props => {
  const { handleSubmit, intl, initialized, users, setDialogIsOpen, dialogs, match, vehicleTypes, status, setSimpleValue } = props;
  const uid = match.params.uid;
  const [open, setOpen] = useState(false);
  // const [selectedValue, setSelectedValue] = useState(emails[1]);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    // setSelectedValue(value);
  };

  const handlePublishBox = () => {
    props.dispatch(change('box', 'status', 'published'))
    setSimpleValue('publish_box', undefined);
  }

  const handleSaveDraft = () => {
    props.dispatch(change('box', 'status', 'draft'))
    setSimpleValue('save_draft', undefined);
  }


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
          <Typography>
            Status: {status}
          </Typography>
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
              name="price"
              disabled={!initialized}
              component={TextField}
              placeholder={intl.formatMessage({ id: 'price_hint' })}
              label={intl.formatMessage({ id: 'price_label' })}
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
            change={props.change}
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
          <div>
            <Field
              name="size"
              disabled={!initialized}
              component={TextField}
              placeholder={intl.formatMessage({ id: 'size_hint' })}
              label={intl.formatMessage({ id: 'size_label' })}
            />
          </div>
          <div>
            <Field
              name="length"
              disabled={!initialized}
              component={TextField}
              placeholder={intl.formatMessage({ id: 'subscription_length_hint' })}
              label={intl.formatMessage({ id: 'subscription_length_label' })}
            />
          </div>
          <div>
            <Field
              name="frequency"
              disabled={!initialized}
              component={TextField}
              placeholder={intl.formatMessage({ id: 'subscription_frequency_hint' })}
              label={intl.formatMessage({ id: 'subscription_frequency_label' })}
            />
          </div>
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
          <div>
            <br/>
            <Button type="button" onClick={() => setSimpleValue('save_draft', true)}>
              Save as Draft
            </Button>
            <Button 
              type="button"
              onClick={() => setSimpleValue('publish_box', true)}
              variant="contained"
              color="primary"
              endIcon={<PublishIcon />}
            >
              Publish
            </Button>
            <SimpleDialog open={open} onClose={handleClose} />
          </div>
        </div>
        <QuestionDialog
            name="publish_box"
            handleAction={handlePublishBox}
            title={intl.formatMessage({ id: 'publish_box_dialog_title' })}
            message={intl.formatMessage({ id: 'publish_box_dialog_message' })}
            action={intl.formatMessage({ id: 'publish' })}
          />
        <QuestionDialog
            name="save_draft"
            handleAction={handleSaveDraft}
            title={intl.formatMessage({ id: 'save_draft_dialog_title' })}
            message={intl.formatMessage({ id: 'save_draft_dialog_message' })}
            action={intl.formatMessage({ id: 'save_draft' })}
          />
      </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialized: PropTypes.bool.isRequired,
  setDialogIsOpen: PropTypes.func.isRequired,
  dialogs: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  setSimpleValue: PropTypes.func.isRequired,
}

const selector = formValueSelector('box')

const mapStateToProps = state => {
  const { intl, vehicleTypes, dialogs, simpleValues, setSimpleValue } = state;
  const publish_box = simpleValues.publish_box;
  const save_draft = simpleValues.save_draft;
  const status = selector(state, 'status');
  return {
    intl,
    vehicleTypes,
    users: getList(state, 'users'),
    dialogs,
    photoURL: selector(state, 'photoURL'),
    status,
    simpleValues,
    publish_box,
    save_draft,
    setSimpleValue
  }
}

const formConfig = { form: 'box', initialValues: { status: 'draft' }, change };

export default connect(
  mapStateToProps,
  { setDialogIsOpen, setSimpleValue }
)(injectIntl(withRouter(withTheme(reduxForm(formConfig)(Form)))))