import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import SideMenu from '../SideMenu';
import ViewBox from '../ViewBox';
import Education from '../Education';
import Interests from '../Interests';
import Skills from '../Skills';

const items = [{
    name: 'Skills',
    id: 1,
    component: <Skills />
},{
    name: 'Education',
    id: 2,
    component: <Education />
},{
    name: 'Interests',
    id: 3,
    component: <Interests />
}]

const InfoBox = ({ show }) => {
    const [ destroy, toggleDestroy ] = useState(false);
    const [ showChildren, toggleChildren ] = useState(false);
    const [ view, updateView ] = useState(1)
    const firstIteration = useRef(true);
    useEffect(() => {
        if(firstIteration.current) {
            firstIteration.current = false;
            return;
        }
        if(!show) {
            toggleDestroy(true);
            setTimeout(() => toggleChildren(false), 100);
        } else {
            toggleDestroy(false);
            setTimeout(() => toggleChildren(true), 500);
        }
    },[show])
    return (
        <div className={`${styles.wrapper} ${show && styles.show} ${destroy && styles.hide}`}>
            {showChildren && <div className={styles['child-wrapper']}>
                <SideMenu
                    updateView={updateView}
                    view={view}
                    items={items}
                />
                <ViewBox
                    view={view}
                    items={items}
                />
            </div>}
        </div>
    )
}

export default InfoBox;