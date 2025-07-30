import styles from "./Heading.module.css";

type HeadingProps = {
    children:React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
    return <h1 className={styles.heading}>{children}</h1>;
    //const classes = `${styles.heading} ${styles.cyan}`; 
    //return <h1 className={classes}>Hello, World!</h1>;
    // or using template literals
    //return <h1 className={`${styles.heading} ${styles.cyan}`}>Hello, World!</h1>;
    // or using the styles object directly
    //return <h1 className={styles.heading}>Hello, World!</h1>;
    // or using a specific style
    //return <h1 className={styles.heading}>Hello, World!</h1>;
}