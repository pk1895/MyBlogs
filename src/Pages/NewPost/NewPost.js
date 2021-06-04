import classes from './NewPost.module.css';
import React, { useState } from 'react';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import { useHistory } from 'react-router';

const NewPost = () => {

    const [title, setTitle] = useState();
    const [section, setSection] = useState("Technology");
    const [content, setContent] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const onAddTitle = (evt) => {
        // console.log(evt.target.value);
        setTitle(evt.target.value);
    }

    const onSectionSelect = (evt) => {
        setSection(evt.target.value);
    }

    const onAddContent = (evt) => {
        setContent(evt.target.value);
    }

    const payload = { title, section, content };

    const onSubmit = (evt) => {
        evt.preventDefault();
        setIsLoading(true);
        fetch('https://dashboardcrud-default-rtdb.firebaseio.com/new-post.json', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }

        }).then((response) => {

            setIsLoading(false);
            setTitle('');
            setSection("Technology");
            setContent('');

            alert('Post created successfully!');
            history.replace('/dashboard');

        }).catch((error) => {
            setIsLoading(false);
            alert(error);
        });
    };

    return (
        <>
            {!isLoading && <form onSubmit={onSubmit} className={classes.form}>
                <div className={classes.header}>
                    <div className={classes.title}>
                        {/* <label className={classes.label}>Title</label> */}
                        <input
                            id='title'
                            onChange={onAddTitle}
                            value={title}
                            placeholder="Title"
                            autoComplete="off"
                            required />
                    </div>
                    <div className={classes.section}>
                        {/* <label className={classes.label}>Title</label> */}
                        <select name="sections" id="sections" onChange={onSectionSelect} value={section}>
                            <option value="Technology">Technology</option>
                            <option value="Psychology">Psychology</option>
                            <option value="Books">Books</option>
                            <option value="Philosophy">Philosophy</option>
                            <option value="Food">Food</option>
                            <option value="Health">Health</option>
                        </select>
                    </div>
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
            </form>}
            {isLoading && <LoadingSpinner />}
        </>
    );
}

export default NewPost;