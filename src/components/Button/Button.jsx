import styles from './Button.module.css'
function Button({addClass, children}) {
    return(
        <button className={`${styles.button} ${addClass}`}>
                {children}
        </button>
    )

}


export default Button