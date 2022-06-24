import styles from "./Background.module.css"

const Background = () => {
    return(
        <div className={styles.Background}>
            <div className={styles.stars}></div>
        <div className={styles.alpha}></div>
        <div className={styles.nebula}></div>
        </div>
    )

}
export default Background;