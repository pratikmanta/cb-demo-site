import React from 'react';

const Sidebar = (props) => {

	const handleRedirect = () => {
		props.handleButtonClick();
		document.querySelector('body').classList.remove('nav-open');
	}

	return (
		<>
			<nav className='nav-container' id='navigation'>
				<div style={styles.imgContainer}>
					<img
						src={props.profileImage}
						className='profile'
						width='100%'
					/>
				</div>
				<div style={styles.detailsContainer}>
					<h2>Front-End Developer</h2>
				</div>
				<ul className='nav'>
					<li style={styles.listStyle} onClick={handleRedirect}>
						<i
							style={styles.iconStyle}
							className='fas fa-bullseye'
						></i>
						<a style={styles.textStyles}>
							Profile
						</a>
					</li>
				</ul>
				<div className='contact-section'>
					<h3 style={styles.contactText}>
						<i className='fas fa-map-marker-alt'> </i> Karnataka, IN
					</h3>
					<h3 style={styles.contactText}>
						<i className='fas fa-phone'> </i> +91 8135941990
					</h3>
					<h3 style={styles.contactText}>
						<i className='fas fa-envelope'> </i>{' '}
						pratik.manta10@gmail.com
					</h3>
				</div>
			</nav>
		</>
	);
};

const styles = {
	imgContainer: {
		textAlign: 'center',
		margin: '8%'
	},
	detailsContainer: {
		color: 'white',
		fontFamily: 'Supermercado One, cursive',
		textAlign: 'center'
	},
	listStyle: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'auto'
	},
	iconStyle: {
		fontSize: '45px',
		color: 'white'
	},
	textStyles: {
		paddingLeft: '20%'
	},
	contactText: {
		fontSize: '20px',
		marginTop: '8px',
		paddingTop: '5px'
	}
};

export default Sidebar;
