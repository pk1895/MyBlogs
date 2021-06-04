import classes from "./Posts.module.css";
import { useHistory } from 'react-router';
import { useDispatch } from "react-redux";
import { PostActions } from "../../store/post-slice";

const Posts = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const id = props.id;
    const { title, section, content } = props.item;

    const onPostDetail = () => {
        dispatch(PostActions.setPosts({
            id, title, section, content
        }));
        history.push('/post-detail');
    }
    return (
        <div className={classes.Post} onClick={onPostDetail}>
            <p><b>{title}</b></p>
            <span>{section}</span>
        </div>
    );
}

export default Posts;