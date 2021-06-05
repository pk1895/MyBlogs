import classes from './PostRead.module.css';
import { useSelector } from "react-redux";

const PostRead = () => {

    const { title, section, content } = useSelector((state) => state.post);
    // const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <div className={classes.form}>
                <div className={classes.header}>
                    <h1>{title}</h1>
                </div>
                <div className={classes.content}>
                    <p>{content}</p>
                </div>
            </div>
        </>
    );
}

export default PostRead;