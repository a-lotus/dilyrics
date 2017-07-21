import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => state.share

const mapDispatchToProps = (dispatch, ownProps) => ({
  setDate: date => dispatch({ type: 'SHARE_SET_DATE', date }),
  setDescription: description => dispatch({ type: 'SHARE_SET_DESCRIPTION', description }),
  setText: text => dispatch({ type: 'SHARE_SET_TEXT', text }),
  submit: doc => dispatch({ type: 'SHARE_SUBMIT_REQUEST', doc })
})

export default connect(mapStateToProps, mapDispatchToProps)
