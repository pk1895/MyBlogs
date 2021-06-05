import classes from './Subsection.module.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Posts from '../../components/Post/Posts';

const Subsection = () => {
    const history = useHistory();
    const data = useSelector((state) => state.posts.items);
    const path = history.location.pathname.split('/')[2];
    const section = path.charAt(0).toUpperCase() + path.slice(1);

    const sectionData = data.filter(el => el.section === section);

    return (
        <>
            { sectionData.length !== 0 && <div className={classes.dashboard}>
                {sectionData.map((el, idx) => {
                    return <Posts
                        id={el.id}
                        title={el.title}
                        content={el.content}
                        section={el.section} />
                })}

            </div>}

            { sectionData.length === 0 && <h3 style={{ textAlign: 'center' }}> No Data Found in {section} Section.</h3>}
        </>
    );
}

export default Subsection;