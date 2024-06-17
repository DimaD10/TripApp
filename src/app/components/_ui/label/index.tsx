import { LabelProps } from "./label.config";
import styles from "./style.module.scss";

export const LabelComponent = ({text}: LabelProps) => {
    return (
        <div className={styles.label}>
            { text }
        </div>
    )
}