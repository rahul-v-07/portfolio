import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const ViewBox = ({ view, items }) => {
    const prev = useRef(view);
    const firstTime = useRef(true);
    const [ current, setCurrent ] = useState(view);
    const [ previous, setPrevious ] = useState(-1);
    useEffect(() => {
        if(firstTime.current) {
            firstTime.current = false;
            return;
        }
        setPrevious(prev.current)
        prev.current = view;
        setTimeout(() => {
            setCurrent(view);
        }, 200);
    }, [view]);
    console.log(previous, current)
    return (
        <>
        {items.map(({ component, id }) => {
            if(id != current) {
                return null;
            }
            return (
                <div className={`${styles.wrapper} ${previous == id && styles.hide}`}>
                    {component}
                </div>
            )
        })}
        </>
    )
}

export default ViewBox;