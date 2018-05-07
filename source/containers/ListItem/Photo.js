import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import Photo from '../../components/List/Item/Photo'

const mapStateToProps = (state, ownProps) => ({
  record: state.places.byId[ownProps.id]
})

export default connect(mapStateToProps)(
  withNavigation(Photo)
)