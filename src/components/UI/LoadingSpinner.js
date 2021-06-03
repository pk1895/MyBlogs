import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div style={{ textAlign:'center' }}>
      <div className={classes.spinner} />
    </div>
  );
}

export default LoadingSpinner;
