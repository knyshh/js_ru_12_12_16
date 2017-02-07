import React, { Component, PropTypes } from 'react'

class NewCommentForm  extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        text: ''
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    }
    handleSubmit = ev => {
        ev.preventDefault()
        this.props.addComment(this.state)
        this.setState({
            user: '',
            text: ''
        })
    }

    // handleSubmit = ev => {
    //     ev.preventDefault()
    //     this.props.addComment(this.state)
    //     this.setState({
    //         user: '',
    //         text: ''
    //     })
    // }
}

export default NewCommentForm