import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import TextField from 'rmw-shell/lib/components/ReduxFormFields/TextField'
import { Field, reduxForm, formValueSelector, change, submit } from 'redux-form'
import { connect } from 'react-redux'
import { getList } from 'firekit'
import { injectIntl } from 'react-intl'
import { setDialogIsOpen } from 'rmw-shell/lib/store/dialogs/actions'
import { withRouter } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PublishIcon from '@material-ui/icons/Publish';
import { setSimpleValue } from 'rmw-shell/lib/store/simpleValues/actions'
import QuestionDialog from '../../containers/QuestionDialog'

const Form = props => {
  const { handleSubmit, intl, initialized, match, status, setSimpleValue } = props;
  const uid = match.params.uid;

  const handlePublishBox = () => {
    handleSubmit(values => props.onSubmit({ ...values, status: 'published' }))();
    setSimpleValue('publish_box', undefined);
  }

  const handleSaveDraft = () => {
    handleSubmit(values => props.onSubmit({ ...values, status: 'draft' }))();
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
          {/* <AvatarImageField
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
          /> */}
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
          </div>
        </div>
        <QuestionDialog
            name="publish_box"
            handleAction={handlePublishBox}
            title={intl.formatMessage({ id: 'publish_box_dialog_title' })}
            message={intl.formatMessage({ id: 'publish_box_dialog_message' })}
            action={intl.formatMessage({ id: 'publish' })}
            handleDelete={() => console.log("to satisfy handle delete required prop")}
          />
        <QuestionDialog
            name="save_draft"
            handleAction={handleSaveDraft}
            title={intl.formatMessage({ id: 'save_draft_dialog_title' })}
            message={intl.formatMessage({ id: 'save_draft_dialog_message' })}
            action={intl.formatMessage({ id: 'save_draft' })}
            handleDelete={() => console.log("to satisfy handle delete required prop")}
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
  const { intl, vehicleTypes, dialogs, simpleValues, setSimpleValue,  } = state;
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
    setSimpleValue,
  }
}

const formConfig = { 
  form: 'box'
};

export default connect(
  mapStateToProps,
  { setDialogIsOpen, setSimpleValue, change }
)(injectIntl(withRouter(withTheme(reduxForm(formConfig)(Form)))))