import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const Socials = ({ destroy, currentItem, media }) => {
    const [ current, setCurent ] = useState(currentItem)
    return (
        <div className={styles.wrapper}>
            <div
                className={styles.close}
                onClick={destroy}
            >
                &#10008;
            </div>
            <div className={styles.tab}>
                {media.map((item, index) => {
                    return (
                        <img
                            src={item.icon}
                            className={`${styles.img} ${current == index && styles.bold}`}
                            onClick={() => setCurent(index)}
                            style={item.style}
                        />
                    )
                })}
            </div>
            <div className={styles['iframe-wrapper']}>
                {media.map((item, index) => {
                    const Element = item.Component;
                    return <Element visible={current == index}/>
                })}
            </div>
        </div>
    )
}

export default Socials;