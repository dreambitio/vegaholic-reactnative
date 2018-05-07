import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { likePlace } from '../../actions/places'
import ListItem from '../../components/List/Item'

const mapStateToProps = (state, ownProps) => ({
  record: state.places.byId[ownProps.id]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  likePlace: () => dispatch(likePlace(ownProps.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withNavigation(ListItem)
)