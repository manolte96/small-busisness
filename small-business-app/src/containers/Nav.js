import { connect } from 'react-redux'
import Nav from '../components/Nav'
import { removeBusiness } from '../redux/actions'


const mapStateToProps = (state) => {
    return {
        user: state.user,
        businesses: state.businesses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Nav)