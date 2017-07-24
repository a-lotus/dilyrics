import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  const doc = state.share.items.find(item => item._id === ownProps.match.params.id)
  return { ...doc }
}

export default connect(mapStateToProps)
