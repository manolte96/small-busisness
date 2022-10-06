import { connect } from 'react-redux'
import Final from '../components/Final'

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses
    }
}

export default connect(mapStateToProps)(Final)