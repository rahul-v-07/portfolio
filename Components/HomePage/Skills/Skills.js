import { useState } from 'react';
import styles from './styles.module.css';

const items = [{
    name: 'JavaScript',
    ico: 'js.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    id: 1
},{
    name: 'Python',
    ico: 'python.png',
    link: 'https://www.python.org/',
    id: 2,
},{
    name: 'React',
    ico: 'react.svg',
    link: 'https://reactjs.org/',
    id: 3
},{
    name: 'Node',
    ico: 'node.svg',
    link: 'https://nodejs.org/en/',
    id: 4,
},{
    name: 'AngularJS',
    ico: 'angular.png',
    link: 'https://angularjs.org/',
    id: 5,
},{
    name: 'CSS',
    ico: 'css.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    id: 6
},{
    name: 'HTML',
    ico: 'html.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    id: 7,
},{
    name: 'PostgreSQL',
    ico: 'postgre.svg',
    link: 'https://www.postgresql.org/',
    id: 8,
},{
    name: 'Flask',
    ico: 'flask.png',
    link: 'https://flask.palletsprojects.com/en/2.0.x/',
    id: 9,
},{
    name: 'AWS',
    ico: 'aws.svg',
    link: 'https://aws.amazon.com/',
    id: 10,
},{
    name: 'C',
    ico: 'c.svg',
    link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    id: 11
},{
    name: 'Git',
    ico: 'git.svg',
    link: 'https://git-scm.com/',
    id: 12
}]



const Skills = () => {
    const [ current, setCurrent ] = useState(-1);
    const [ destroy, setDestroy ] = useState(false);
    const openLink = (id) => {
        setCurrent(id);
        if(id > -1){
            setTimeout(() => setDestroy(true),400)
        } else {
            setDestroy(false);
        }
    }
    return (
        <div className={styles.wrapper}>
            {!destroy && <div className={`${styles['inner-wrapper']} ${current > -1 && styles.contract}`}>
                {items.map(({ name, ico, link, id }) => {
                    const random = Math.floor(Math.random() * 100) + 1
                    return (<div
                            className={styles.item}
                            style={{ animationDelay: `${random/500}s`}}
                        >
                            <img src={'/' + ico} className={styles.image} />
                        <div className={styles.name}>{name}</div>
                        <div
                                className={styles.desc}
                                onClick={() => openLink(id)}
                            >Know more</div>
                    </div>)
                })}    
            </div>}
            {current > -1 && <div className={styles.about}>
                <div className={styles.back} onClick={() => openLink(-1)}>
                    {'<-'}
                </div>
                <div>
                    This is some description
                </div>
            </div>}
        </div>
    )
}

export default Skills;