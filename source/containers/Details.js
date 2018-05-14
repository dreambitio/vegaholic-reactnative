import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { fetchPlace, likePlace, dislikePlace } from '../actions/places'
import Details from '../components/Details'

const mapStateToProps = (state, ownProps) => ({
  record: state.places.byId[ownProps.id]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlace: () => dispatch(fetchPlace(ownProps.id)),
  likePlace: () => dispatch(likePlace(ownProps.id)),
  dislikePlace: () => dispatch(dislikePlace(ownProps.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withNavigation(Details)
)
