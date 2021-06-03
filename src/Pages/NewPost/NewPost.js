import classes from './NewPost.module.css';
import React, { useState } from 'react';

const NewPost = () => {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    const onAddTitle = (evt) => {
        console.log(evt.target.value);
    }

    const onAddContent = (evt) => {
        console.log(evt.target.value);
    }

    const onSubmit = (data) => {
        alert('test');
    };

    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <div className={classes.title}>
                {/* <label className={classes.label}>Title</label> */}
                <input
                    id='title'
                    onChange={onAddTitle}
                    value={title}
                    placeholder="Title"
                    required />
            </div>
            <div className={classes.content}>
                {/* <label className={classes.label}>Content</label> */}
                <textarea
                    id='content'
                    onChange={onAddContent}
                    value={content}
                    placeholder="Content"
                    required />
            </div>
            <div className={classes.actions}>
                <button >Submit</button>
            </div>
        </form>
    );
}

export default NewPost;