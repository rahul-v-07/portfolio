import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const getAngle = (cx, cy, ex, ey) => {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    //if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
}

const Name = () => {
    // const [ angle, updateAngle ] = useState(0);
    // const centerPoints = useRef({x: 0, y: 0});
    // const monitorMouse = (event) => {
    //     updateAngle(getAngle(event.screenX,centerPoints.current.x,
    //         centerPoints.current.y, event.screenY))
    // }
    // useLayoutEffect(() => {
    //     window.addEventListener('mousemove', monitorMouse);
    //     const targetNode = document.getElementById('named-div');
    //     const x = targetNode.offsetLeft + targetNode.offsetWidth / 2;
    //     const y = targetNode.offsetTop + targetNode.offsetHeight / 2;
    //     centerPoints.current = {x, y}
    //     console.log(centerPoints.current, "current")
    //     return () => window.removeEventListener('mousemove', monitorMouse);
    // },[])
    // console.log(angle);
    return (
        <div id='named-div'>
            <span className={styles.blue}>RAHUL&nbsp;&nbsp;VASHISHT</span><br/>
            <span className={styles.green}>राहुल&nbsp;&nbsp;वशिष्ठ</span>
        </div>
    )
}

export default Name;