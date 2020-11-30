import React from 'react';
import './profile.css';
import '../Root/sidebar.css';
import '../Root/root.css';
import { profData } from '../../data';
import { Zoom } from 'react-reveal';
import { Sidebar } from '../../components';
import ReactCardFlip from 'react-card-flip';

class Profile extends React.Component {
	constructor() {
		super();
		this.state = {
			step: 1,
			isFlipped: false
		};
		this.handleFlip = this.handleFlip.bind(this);
	}

	componentDidMount() {
		// if (this.props.history.action === 'POP') {
		// 	this.setState({ step: 1 });
		// 	// this.props.history.replace(this.props.history.location, );
		// }
		var navTrigger = document.getElementsByClassName(
			'nav-trigger'
		)[0];
		navTrigger.addEventListener('click', this.toggleNavigation);
	}
	componentWillUnmount() {
		var navTrigger = document.getElementsByClassName(
			'nav-trigger'
		)[0];
		navTrigger.removeEventListener('click', this.toggleNavigation);
	}

	toggleNavigation = (event) => {
		var body = document.getElementsByTagName('body')[0];
		event.preventDefault();
		body.classList.toggle('nav-open');
	};

	handleFlip = (e) => {
		this.setState({ isFlipped: !this.state.isFlipped });
	};

	renderWorkExp = (currStep) => {
		console.log(currStep, this.props);
		if (currStep) {
			return profData.map((data, index) => {
				return (
					<li key={index}>
						<div className='cbp_tmicon cbp_tmicon-phone'>
							<i className='faPra fa fa-briefcase'></i>
						</div>
						<div className='cbp_tmlabel'>
							<h3>{data.position}</h3>
							<div className='date'>
								<i className='fa fa-calendar'></i>
								{data.date}
							</div>
							<h4>
								<i className='fa fa-flag'></i>
								{data.cmp_name}
							</h4>
							<p className='projectParagraph'>{data.description}</p>
						</div>
					</li>
				);
			});
		}
	};

	render() {
		return (
			<div className='container'>
				<Sidebar />
				<main className='content'>
					{this.state.step === 2 ? (
						<div className='row animated zoomIn'>
							<ul className='cbp_tmtimeline'>
								{this.renderWorkExp(this.state.step)}
							</ul>
						</div>
					) : (
						<div className='wrapper'>
							<section className='grid-unit top-left'>
								<div className='swing-panel'>
									<span className='desc'>
										Check out my profile..!
									</span>
								</div>
								<div className='sphere'></div>
								<span className='icon fa fa-book'></span>
								<h4 className='label'>Experience</h4>
							</section>
							<section
								className='grid-unit top-right'
								onClick={() => this.setState({ step: 2 })}
							>
								<div className='swing-panel'>
									<span className='desc'>Check out my work..!</span>
								</div>
								<div className='sphere'></div>
								<span
									style={{ marginLeft: '20px' }}
									className='icon fa fa-user'
								></span>
								<h4 className='label'>Portfolio</h4>
							</section>
							<section
								className='grid-unit bottom'
								onClick={this.handleFlip}
							>
								<div className='swing-panel'>
									<span
										style={
											!this.state.isFlipped
												? { opacity: 1 }
												: { opacity: 0 }
										}
										className='desc'
									>
										Let me introduce myself !!!
									</span>
								</div>
								<ReactCardFlip isFlipped={this.state.isFlipped}>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column'
										}}
									>
										<div className='bottom-icon fa fa-bullseye'></div>
										<h4
											style={{
												display: !this.state.isFlipped
													? 'flex'
													: 'none'
											}}
											className='bottom-label'
										>
											Profile
										</h4>
									</div>
									<>
										<div className='bottom-icon fa fa-bullseye'></div>
										<h2
											className='profile-header'
											style={{
												visibility: this.state.isFlipped
													? 'visible'
													: 'hidden'
											}}
										>
											About Me
										</h2>
										<div className='profile-content'>
											<p>
												Hello! My name is{' '}
												<strong>Pratik Manta</strong>. I am a Front
												End Developer & coding has changed my world .
												It's not just about apps & websites though!
												Learning to code gave me complex
												problem-solving skills & a way to communicate
												with others on a technical level. Not only can
												I create static websites & CSS animations, but
												I can also develop Web & Mobile Applications
												using React/React-Native following the latest
												coding standards. My coding, quick learning, &
												soft skills will most definitely benefit your
												company. Since i began my journey I can
												honestly say that I have built my self-esteem
												and have managed to keep more motivated than I
												ever have. Join me in this rewarding journey.
												We'll have fun, crush projects, and we can all
												learn along the way while we're at it!
											</p>
										</div>
									</>
								</ReactCardFlip>
							</section>
						</div>
					)}
				</main>
				<div className='overlay'></div>
			</div>
		);
	}
}

export default Profile;
