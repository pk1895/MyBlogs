import classes from "./PostDetail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import axios from 'axios';
import { PostsAction } from '../../store/posts-slice';
import { useHistory } from 'react-router';

const PostDetail = () => {

    const { id, title, section, content } = useSelector((state) => state.posts.postDetailItem);
    const [updatedTitle, setUpdatedTitle] = useState(title);
    const [updatedSection, setUpdatedSection] = useState(content);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const onAddTitle = (evt) => {
        setUpdatedTitle(evt.target.value);
    }
    const onAddContent = (evt) => {
        setUpdatedSection(evt.target.value);
    }

    const onSubmit = (evt) => {

        evt.preventDefault();
        setIsLoading(true);

        axios.put('https://dashboardcrud-default-rtdb.firebaseio.com/new-post/' + id + ".json", {
            content: updatedSection,
            title: updatedTitle,
            section
        }).then((response) => {
            setIsLoading(false);
            setUpdatedTitle('');
            setUpdatedSection('');
            dispatch(PostsAction.clearPost());

            alert('Post updated successfully!');
            history.replace('/dashboard');

        }).catch((error) => {
            setIsLoading(false);
            alert(error);
        });
    }

    return (
        <>
            {!isLoading && <form onSubmit={onSubmit} className={classes.form}>
                <div className={classes.header}>
                    <div className={classes.title}>
                        <input
                            id='title'
                            onChange={onAddTitle}
                            value={updatedTitle}
                            autoComplete="off"
                            required />
                    </div>
                    <div className={classes.title}>
                        <input
                            id='section'
                            value={section}
                            disabled="true" />
                    </div>
                </div>
                <div className={classes.content}>
                    <textarea
                        id='content'
                        onChange={onAddContent}
                        value={updatedSection}
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

export default PostDetail;