import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'

class addNew extends Component {
    state = {
        open: false,
        name: '',
        description: '',
        address: '',
        hours: '',
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                description: '',
                address: '',
                hours: ''
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <h1>Add a Business:</h1>
                    <Button
                        variant="contained"
                        className="add-business"
                        onClick={this.toggleDialog}
                    >
                        Add a Business
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add a New Business</DialogTitle>
                        <DialogContent>
                            <form>
                                <TextField />
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default addNew