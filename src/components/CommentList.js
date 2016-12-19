import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentsList extends Component {

    state = {
        isOpen: false
    };

    toggleOpenComment = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    getBtn = () => {
       return(
           <button onClick = {this.toggleOpenComment}>
               {this.state.isOpen ? "hide" : "show" } comments
           </button>
       )
    };


    getBody(){
        const { comments } = this.props;
        let commentElements;

        if (!this.state.isOpen) return null
        else if (this.state.isOpen && comments)  {
            commentElements =  comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>);
            return (
                <div>
                    <ul>
                        {commentElements}
                    </ul>
                </div>
            )
        }
        else if (this.state.isOpen && !comments) {
            return (
                <p>
                    Nesw doesnt have comments;
                </p>
            )
        }

    }

    render() {
        return (
            <ul className="comments__list">
                {/*<button onClick = {this.toggleOpenComment}>Show Comments</button>*/}
                {this.getBtn()}
                {this.getBody()}
            </ul>
        )
    };





}