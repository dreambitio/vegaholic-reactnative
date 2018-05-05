import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { fetchPlace, likePlace } from '../../actions/places'
import ListItem from '../../components/ListItem/index'

const mapStateToProps = (state, ownProps) => ({
  record: state.places.byId[ownProps.id]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlace: () => dispatch(fetchPlace(ownProps.id)),
  likePlace: () => dispatch(likePlace(ownProps.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withNavigation(ListItem)
)