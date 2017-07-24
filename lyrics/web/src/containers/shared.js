import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  ...state.share,
  canLoadMore: state.share.itemsOnServerCount > state.share.items.length
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  showMoreHandler: () => dispatch({ type: 'SHARE_LOAD_LAST_REQUEST' })
})

export default connect(mapStateToProps, mapDispatchToProps)
