import React, { Component } from 'react'

export default function Comment(props)  {
    const {comment} = props;

    return (
        <div>
            <p>{comment.user}</p>
            <p>{comment.text}</p>
        </div>
    )

}