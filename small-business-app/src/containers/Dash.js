import { connect } from 'react-redux'
import Dash from '../components/Dash'


const mapStateToProps = (state) => {
    return {
        user: state.user,
        businesses: state.businesses
    }
}

export default connect(mapStateToProps)(Dash)