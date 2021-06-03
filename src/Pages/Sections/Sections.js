import classes from './Sections.module.css';

const Sections = () => {
    return (
        <>
            <div className={classes.tiles}>
                <h3>Technology</h3>
            </div>
            <div className={classes.tiles}>
                <h3>Psychology</h3>
            </div>
            <div className={classes.tiles}>
                <h3>Books</h3>
            </div>
            <div className={classes.tiles}>
                <h3>Philosophy</h3>
            </div>
            <div className={classes.tiles}>
                <h3>Food</h3>
            </div>
            <div className={classes.tiles}>
                <h3>Health</h3>
            </div>

        </>
    );
}

export default Sections;
