import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import Socials from '../Socials'
import Resume from '../Resume'
import Contact from '../Contact'

const media = [{
    name: 'Contact',
    icon: '/mail.svg',
    style: { marginRight: '15px'},
    Component: Contact
},{
    name: 'Resume',
    icon: '/resume.svg',
    style: { marginLeft: '15px'},
    Component: Resume
}]
const BottomBar = ({ squeezeItems }) => {
    const [ currentItem, setCurrentItem ] = useState(-1);
    const [ collapse, toggleCollapse ] = useState(false);
    const setItem = (index) => {
        squeezeItems(index > -1);
        setCurrentItem(index);
        if(index == -1) {
            toggleCollapse(true);
        } else {
            toggleCollapse(false);
        }
    }
    return (
        <div className={`${styles.wrapper} 
        ${currentItem > -1 && styles.expand} ${collapse && styles.collapse}`}>
            {currentItem == -1 && <div className={styles.list}>
                {media.map((item, index) => {
                    return (
                        <img
                            src={item.icon}
                            className={styles.img}
                            onClick={() => setItem(index)}
                        />
                    )
                })}
            </div>}
            {currentItem > -1 && <div className={styles.container}>
                <Socials
                    destroy={() => setItem(-1)}
                    currentItem={currentItem}
                    media={media}
                />
            </div>}
        </div>
    )
}

export default BottomBar;