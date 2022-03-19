import React, { Component } from 'react';
import profileImage from '../../assets/pratik.jpg';

import { ActionButton, Sidebar } from '../../components/';

class Root extends Component {
	constructor(props) {
		super(props);
	}

	handleButtonClick = () => {
		this.props.history.push('/profile');
	};

	handleScroll = (event) => {
		const {
			location: { pathname },
			history
		} = this.props;
		const bottom =
			event.target.scrollHeight - event.target.scrollTop ===
			event.target.clientHeight;
		console.log('Bottom', event.target.scrollHeight);
		console.log('Props', this.props.history);
		// if (!bottom) {
		//     history.goBack(-1)
		// }
		// else {
		//     history.push('/about')
		// }
	};

	toggleSidebar = (event) => {
		var body = document.getElementsByTagName('body')[0];
		event.preventDefault();
		body.classList.toggle('nav-open');
	};

	render() {
		return (
			<div className='container'>
				<div className='nav-trigger'>
					<a onClick={this.toggleSidebar}>
						<span></span>
					</a>
				</div>
				<Sidebar profileImage={profileImage}/>
				<main className='content'>
					<div id='intro-img'>
						<img
							src={profileImage}
							className='profile animated bounceIn'
						/>
					</div>

					<div className='intro'>
						<div className='typewriter'>Hey, I'm Pratik!</div>
					</div>
					<div className='tagline'>
						Upcoming Dev | Code Fanatic | Game enthusiast
					</div>
					<div className='icons-social'>
						<a target='_blank' href='https://github.com/pratikmanta'>
							<i className=' animated heartBeat delay-3s fab fa-github'></i>
						</a>
						<a
							target='_blank'
							href='https://in.linkedin.com/in/pratikmanta'
						>
							<i className=' animated heartBeat delay-4s fab fa-linkedin'></i>
						</a>
					</div>
					<ActionButton
						name='pulse-button'
						style='center'
						handleClick={this.handleButtonClick}
					/>
				</main>
				<div className='overlay'></div>
			</div>
		);
	}
}

export default Root;
