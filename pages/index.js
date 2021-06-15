import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css';
import InfoBox from '../Components/HomePage/InfoBox';
import Name from '../Components/HomePage/Name';
import BottomBar from '../Components/HomePage/BottomBar';

const Home = () => {
	const [ menu, toggleMenu ] = useState(false);
	const [ squeze, squeezeItems ] = useState(false)
	return (
		<>
			<div className={`${styles.wrapper} ${squeze && styles.squeze}`}>
				<div
					className={`${styles['menu-bar']} ${menu && styles['no-animation']}`}
					onClick={() => toggleMenu(!menu)}
				>
					<img
						src={'/list-menu.svg'}
						className={`${styles.menu} ${menu && styles.flip}`}
					/>
				</div>
				<InfoBox show={menu}/>
				<div className={`${styles.name} ${menu && styles['fly-down']}`}>
					<Name />
				</div>
			</div>
			<BottomBar
				squeezeItems={squeezeItems}
			/>
		</>
	)
}

export default Home;
