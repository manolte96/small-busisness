import { connect } from 'react-redux'
import Businesses from '../components/Businesses'

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses
    }
}

export default connect(mapStateToProps)(Businesses)