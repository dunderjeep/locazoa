
import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { withFirebase } from 'firekit-provider'
import { compose } from 'redux'
import { useSelector } from 'react-redux'
import { injectIntl } from 'react-intl'
import { withRouter } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'


// class Boxes extends Component {

//   render() {
//     return (
//       <h1>Hi there</h1>
//     )
//   }
// }

const Boxes = props => {
  const { boxes }= useSelector(state => state.collections);
  const users = useSelector(state => state.users);
  // const watchList = useSelector(state => state);
  const { watchList, watchCol } = props;
  console.log(boxes);
  useEffect(() => {
    watchCol('boxes');
  }, [])
  return (
    <ul>
      {boxes.map(box => <li key={box.id}>{box.id}</li>)}
    </ul>
  );
} 

// const mapStateToProps = state => {
//   const { lists } = state
//   return {
//     users: lists.users,
//     tasks: lists.tasks, //the data from 'public_tasks' path
//     boxes: lists.boxes
//   }
// }

export default compose(injectIntl, withRouter, withTheme, withFirebase)(Boxes)
