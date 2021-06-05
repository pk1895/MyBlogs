import classes from "./Posts.module.css";
import { useHistory } from 'react-router';
import { useDispatch } from "react-redux";
import { PostActions } from "../../store/post-slice";

const Posts = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const id = props.id;
    const { title, section, content } = props.item;

    const onPostRead = () => {
        dispatch(PostActions.setPosts({
            id, title, section, content
        }));
        history.push('/post-read');
    }

    const onPostDetail = () => {
        dispatch(PostActions.setPosts({
            id, title, section, content
        }));
        history.push('/post-detail');
    }
    return (
        <>
            <div className={classes.Post} onClick={onPostRead}>
                <p><b>{title}</b></p>
                <span>{section}</span>
                <div className={classes.action}>
                    <button onClick={onPostDetail} className={classes.button}>Edit</button>
                </div>
            </div>
        </>
    );
}

export default Posts;