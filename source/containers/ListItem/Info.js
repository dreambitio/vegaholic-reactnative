import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import Info from '../../components/List/Item/Info'

const mapStateToProps = (state, ownProps) => ({
  record: state.places.byId[ownProps.id]
})

export default connect(mapStateToProps)(
  withNavigation(Info)
)