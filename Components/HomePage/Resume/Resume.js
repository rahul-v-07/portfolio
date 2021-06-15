import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const Resume = ({ visible }) => {
    if(!visible) {
        return null
    }
    return (
        <embed
            src={'/resume.pdf'}
            width={'100%'}
            height={'100%'}
            className={`${visible && styles.visible}`}
        />
    )
}

export default Resume;