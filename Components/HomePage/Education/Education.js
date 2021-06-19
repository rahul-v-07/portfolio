import styles from './styles.module.css';

const education = [{
    name: 'University of New South Wales',
    course: 'Masters of IT (Data Science)',
    duration: 'Feb 2020 - Dec 2021',
    wam: '71/100 (Till T1 2021)'
},{
    name: 'Panjab University',
    course: 'Bachelor of Engineering (Computer Science)',
    duration: 'Aug 2013 - June 2017',
    wam: '8.5/10'
}]

const Education = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles['child-wrapper']}>
                {education.map(({ name, course, duration, wam}) => {
                    return (
                        <div className={styles.university}>
                            <div className={styles.name}>{name}</div>
                            <div className={styles.course}>{course}</div>
                            <div className={styles.duration}>{duration}</div>
                            <div className={styles.wam}>{wam}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Education;