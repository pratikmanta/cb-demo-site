import React from 'react';
import './profile.css';
// import '../Root/sidebar.css';
// import '../Root/root.css';
import { profData } from '../../data';
import { Sidebar } from '../../components';
import ReactCardFlip from 'react-card-flip';

class Profile extends React.Component {
	constructor() {
		super();
		this.state = {
			isOpen: false,
			isFlipped: false
		};
		this.handleFlip = this.handleFlip.bind(this);
	}

	toggleSidebar = (event) => {
		var body = document.getElementsByTagName('body')[0];
		event.preventDefault();
		body.classList.toggle('nav-open');
	};

	toggleExperience = () => {
		var exp_trigger = document.getElementById('experience-open');
		exp_trigger.classList.toggle('active');
		this.setState({ isOpen: !this.state.isOpen });
	};

	handleFlip = (e) => {
		this.setState({ isFlipped: !this.state.isFlipped });
	};

	renderWorkExp = () => {
		return profData.map((data, index) => {
			return (
				<li
					key={index}
					className={`animated delay-${index}s bounceIn`}
				>
					<div className='exp-main-icon'>
						<i className='faPra fa fa-briefcase'></i>
					</div>
					<div className='exp-content'>
						<h3>{data.cmp_name}</h3>
						<div className='date'>
							<i className='fa fa-calendar'></i>
							{data.date}
						</div>
						<h4>
							<i className='fa fa-flag'></i>
							{data.position}
						</h4>
						<p className='projectParagraph'>{data.description}</p>
					</div>
				</li>
			);
		});
	};

	render() {
		const { isOpen, isFlipped } = this.state;
		return (
			<div className='container'>
				<a
					style={
						isOpen
							? { visibility: 'hidden' }
							: { visibility: 'visible' }
					}
					onClick={this.toggleSidebar}
					className='nav-trigger'
				>
					<span></span>
				</a>
				<Sidebar />
				<main className='content'>
					<div className='wrapper'>
						<section className='grid-unit top-left'>
							<div className='swing-panel'>
								<span className='desc'>Coming Soon..!</span>
							</div>
							<div className='sphere'></div>
							<span className='icon fa fa-book'></span>
							<h4 className='label'>Portfolio</h4>
						</section>
						{/* Work Exp Section  */}

						<section
							id='experience-open'
							className='grid-unit top-right'
						>
							{isOpen ? (
								<div>
									<a
										onClick={this.toggleExperience}
										className='nav-trigger'
									>
										<span></span>
									</a>
									<div className='row'>
										<ul className='work-exp-list'>
											{this.renderWorkExp()}
										</ul>
									</div>
								</div>
							) : (
								<>
									<div
										onClick={this.toggleExperience}
										className='swing-panel'
									>
										<span className='desc'>Check out my profile..!</span>
										<div
											className='overlay'
											onClick={this.toggleExperience}
										></div>
									</div>
									<div className='sphere'></div>
									<span
										style={{ marginLeft: '20px' }}
										className='icon fa fa-user'
									></span>
									<h4 className='label'>Experience</h4>
								</>
							)}
						</section>

						<section
							className='grid-unit bottom'
							onClick={this.handleFlip}
						>
							<div className='swing-panel'>
								<span
									style={!isFlipped ? { opacity: 1 } : { opacity: 0 }}
									className='desc'
								>
									Let me introduce myself !!!
								</span>
							</div>
							<ReactCardFlip isFlipped={isFlipped}>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column'
									}}
								>
									<div className='bottom-icon fa fa-bullseye'></div>
									<h4
										style={{
											display: !isFlipped ? 'flex' : 'none'
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
											visibility: isFlipped ? 'visible' : 'hidden'
										}}
									>
										About Me
									</h2>
									<div className='profile-content'>
										<p>
											Hello! My name is <strong>Pratik Manta</strong>.
											I am a Front End Developer & coding has changed
											my world . It's not just about apps & websites
											though! Learning to code helped me develop my
											problem-solving skills & a way to communicate
											with others on a technical level. Not only can I
											create static websites & CSS animations, but I
											can also develop Web & Mobile Applications using
											React/React-Native following the latest coding
											standards.Join me in this rewarding journey.
											Let's have fun , crush projects and learn along
											the way while we're at it!
										</p>
									</div>
								</>
							</ReactCardFlip>
						</section>
					</div>
				</main>
				<div className='overlay'></div>
			</div>
		);
	}
}

export default Profile;
