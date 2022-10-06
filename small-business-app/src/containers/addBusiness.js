import { connect } from "react-redux"
import addBusiness from '../components/addBusiness'
import { addBusiness } from "../redux/actions"

const mapDispatchToProps = (dispatch) => {
    return {
        addBusiness: (business) => dispatch(addBusiness(business))
    }
}

export default connect (null, mapDispatchToProps)(addBusiness)