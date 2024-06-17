import Image from 'next/image';
import styles from './style.module.scss';
import { ProfileProps } from './profile.config';

export const ProfileComponent = ({src, title, descr}: ProfileProps) => {
    return (
        <div className={styles.profile}>
            <div className={styles.avatar}>
                <Image
                    src={src}
                    width={32}
                    height={32}
                    alt=""
                />
            </div>

            <div className={styles.main}>
                <h4 className={styles.title}>
                    {title}
                </h4>

                <p className={styles.descr}>
                    {descr}
                </p>
            </div>
        </div>
    )
}