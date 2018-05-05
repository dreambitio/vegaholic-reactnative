import { connect } from 'react-redux'

import { fetchPlace } from '../../actions/places'
import Info from '../../components/ListItem/Info'

const mapStateToProps = (state, ownProps) => ({
  record: state.places.byId[ownProps.id]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlace: () => dispatch(fetchPlace(ownProps.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Info)