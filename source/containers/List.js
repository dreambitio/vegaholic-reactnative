import { connect } from 'react-redux'

import { fetchPlaces } from '../actions/places'
import List from '../components/List'

const mapStateToProps = state => ({
  byId: state.places.byId,
  allIds: state.places.allIds
})

const mapDispatchToProps = dispatch => ({
  fetchPlaces: () => dispatch(fetchPlaces()),
})

export default connect(mapStateToProps, mapDispatchToProps)(List)