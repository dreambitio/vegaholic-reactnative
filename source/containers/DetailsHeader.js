import { connect } from 'react-redux'

import { likePlace, dislikePlace } from '../actions/places'
import Header from '../components/Details/Header'

const mapStateToProps = (state, ownProps) => ({
  record: state.places.byId[ownProps.id]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  likePlace: () => dispatch(likePlace(ownProps.id)),
  dislikePlace: () => dispatch(dislikePlace(ownProps.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)