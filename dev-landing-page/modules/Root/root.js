import React, { Component } from 'react';
import './root.css';
import './sidebar.css';

import { ActionButton, Sidebar } from '../../components/';

class App extends Component {
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

	toggleSidebar = () => {
		var body = document.getElementsByTagName('body')[0];
		body.classList.toggle('nav-open');
	};

	render() {
		return (
			<div className='container'>
				<Sidebar toggleSidebar={this.toggleSidebar} />
				<main className='content'>
					<div className='img-box'>
						<img
							src='/assets/pratik.jpg'
							className='profile animated bounceIn'
							width='400px'
						/>
						{/* <img
								src='/assets/main-bg-grunge.png'
								className='grunge'
								width='400px'
							/> */}
					</div>

					<div className='intro'>
						<div className='typewriter'>Hello, I'm Pratik!</div>
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

export default App;
