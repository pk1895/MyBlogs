import classes from './Input.module.css';

const Input = ({ label, register, required }) => (
    <div className={classes.Input}>
        <label className={classes.label}>{label}</label>
        <input className={classes.input} {...register(label, { required })} />
    </div>
);

export default Input;