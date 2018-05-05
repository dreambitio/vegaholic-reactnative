import { connect } from 'react-redux'

import { fetchPlacePhotos } from '../../actions/places'
import Photo from '../../components/ListItem/Photo'

const mapStateToProps = (state, ownProps) => ({
  record: state.places.byId[ownProps.id]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlacePhotos: () => dispatch(fetchPlacePhotos(ownProps.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Photo)