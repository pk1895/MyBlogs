import classes from './Dashboard.module.css';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import { useEffect, useState } from 'react';
import Posts from '../../components/Post/Posts';

const Dashboard = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [postList, setPostList] = useState([]);

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
            {postList.length !== 0 && postList.map((el, ind) => {
                return <Posts id={el.id} item={el.item} />
            })}
            {isLoading && <LoadingSpinner />}
        </div>
    );
}

export default Dashboard;