import classes from './Dashboard.module.css';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import { useEffect, useState } from 'react';
import Posts from '../../components/Post/Posts';
import { useDispatch, useSelector } from 'react-redux';
import { PostsAction } from '../../store/posts-slice';

const Dashboard = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [postList, setPostList] = useState([]);
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.posts);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch('https://dashboardcrud-default-rtdb.firebaseio.com/new-post.json');
            const responseData = await response.json();
            let loadedData = [];
            for (let i in responseData) {
                loadedData.push({
                    id: i,
                    item: responseData[i]
                });
                dispatch(PostsAction.setPostData({
                    id: i,
                    item: responseData[i]
                }));
            }
            setPostList(loadedData);
        }
        fetchData().catch((error) => {
            alert(error);
        });
        fetchData().finally(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <div className={classes.dashboard}>
            {items.length !== 0 && items.map((el, ind) => {
                return <Posts
                    id={el.id}
                    title={el.title}
                    content={el.content}
                    section={el.section} />
            })}
            {isLoading && <LoadingSpinner />}
        </div>
    );
}

export default Dashboard;