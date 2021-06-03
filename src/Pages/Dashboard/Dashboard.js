import classes from './Dashboard.module.css';
import {useHistory} from 'react-router';

const Dashboard = (props) => {
    const history = useHistory();
    const handleNewBlog = () => {
        history.push('/new-post');
    }

    return (
        <>
            <h3>Hello World</h3>
            <button onClick={handleNewBlog}>Add New Blog</button>
        </>
    );
}

export default Dashboard;