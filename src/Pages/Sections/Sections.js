import classes from './Sections.module.css';
import { useHistory } from 'react-router';

const Sections = () => {
    
    const history = useHistory();

    const openSection = (section) => {
        history.push('/section/' + section);
    }

    return (
        <>
            <div className={classes.tiles} onClick={openSection.bind(null, "technology")}>
                <h3>Technology</h3>
            </div>
            <div className={classes.tiles} onClick={openSection.bind(null, "psychology")}>
                <h3>Psychology</h3>
            </div>
            <div className={classes.tiles} onClick={openSection.bind(null, "bechnology")}>
                <h3>Books</h3>
            </div>
            <div className={classes.tiles} onClick={openSection.bind(null, "philosophy")}>
                <h3>Philosophy</h3>
            </div>
            <div className={classes.tiles} onClick={openSection.bind(null, "food")}>
                <h3>Food</h3>
            </div>
            <div className={classes.tiles} onClick={openSection.bind(null, "health")}>
                <h3>Health</h3>
            </div>

        </>
    );
}

export default Sections;
