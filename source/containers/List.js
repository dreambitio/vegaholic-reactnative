import { connect } from 'react-redux'

import { fetchPlacesList } from '../actions/places'
import List from '../components/List'

const mapStateToProps = state => ({
  byId: state.places.byId,
  allIds: state.places.allIds
})

const mapDispatchToProps = dispatch => ({
  fetchPlacesList: () => dispatch(fetchPlacesList())
})

export default connect(mapStateToProps, mapDispatchToProps)(List)