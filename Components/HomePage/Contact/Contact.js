import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const Contact = ({ visible }) => {
    if(!visible) {
        return null
    }
    return (
        <div className={`${styles.wrapper} ${visible && styles.visible}`}>

        </div>
    )
}

export default Contact;