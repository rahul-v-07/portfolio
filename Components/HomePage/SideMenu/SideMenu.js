import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const SideMenu = ({ updateView, view, items }) => {
    const [ current, setCurrent ] = useState(view);
    const setItem = (id) => {
        setCurrent(id);
        updateView(id);
    }
    return (
        <div className={styles.wrapper}>
            {items.map(({ name, id}) => {
                return (
                    <div
                        className={`${styles.item}`}
                        onClick={() => setItem(id)}
                        style={{ animationDelay: `${(id - 1) * 0.2}s`}}
                        key={id}
                    >
                        <div className={`${styles.text} ${current == id && styles.selected}`}>{name}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default SideMenu;