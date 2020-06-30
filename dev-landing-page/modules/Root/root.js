import React, { Component } from 'react';
import './root.css';
import './sidebar.css';

import { ActionButton, Sidebar } from '../../components/'

class App extends Component {
    constructor(props){
        super(props)
    }   

    componentDidMount () {
        var navTrigger = document.getElementsByClassName('nav-trigger')[0]
        navTrigger.addEventListener('click', this.toggleNavigation);
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount () {
        var navTrigger = document.getElementsByClassName('nav-trigger')[0]
        navTrigger.removeEventListener('click', this.toggleNavigation);
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleButtonClick = () => {
        this.props.history.push('/about')
    }
    
    handleScroll = event => {
        const { location: {pathname}, history } = this.props;
        const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
        console.log('Bottom',event.target.scrollHeight)
        console.log('Props',this.props.history)
        // if (!bottom) {
        //     history.goBack(-1)
        // }
        // else {
        //     history.push('/about')
        // }
    };

    toggleNavigation= (event) => {
        var body = document.getElementsByTagName('body')[0];
        event.preventDefault();
        body.classList.toggle('nav-open');
    }

    
    render() {
        
        return (
            <>
                <div className="container">
                    <Sidebar/>
                    <main className="content">  
                        <div>
                            <img src='/assets/pratik.jpg' className="profile animated bounceIn" width='400px'/>
                        </div>
                        <div className="intro">
                            <div className="typewriter">
                            Hello, I'm Pratik!
                            </div>
                        </div>
                        <div className="tagline">Upcoming Dev | Code Fanatic | Game enthusiast</div>
                        <div className="icons-social">
                            <a target="_blank" href="https://github.com/pratikmanta"><i className=" animated heartBeat delay-2s fab fa-github"></i></a>
                            <a target="_blank" href="https://in.linkedin.com/in/pratikmanta"><i className=" animated heartBeat delay-3s fab fa-linkedin"></i></a>
                        </div> 
                        <ActionButton name="pulse-button" style="center" handleClick={this.handleButtonClick}/>
                    </main>
                    <div class="overlay"></div>
                </div>
            </>
        ) 

        
        
    }
}

export default App;