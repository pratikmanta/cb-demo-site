import React from 'react';
import './about.css'
import '../Root/sidebar.css';
import '../Root/root.css';
import { profData } from '../../data'
import { Zoom } from 'react-reveal'
import { Sidebar } from '../../components';
import ReactCardFlip from 'react-card-flip';

class About extends React.Component {
  constructor() {
    super()
    this.state = {
      step: 1,
      isFlipped: false
    }
    this.handleFlip = this.handleFlip.bind(this)
  }

  componentDidMount() {
    var navTrigger = document.getElementsByClassName('nav-trigger')[0]
    navTrigger.addEventListener('click', this.toggleNavigation);
  }
  componentWillUnmount() {
    var navTrigger = document.getElementsByClassName('nav-trigger')[0]
    navTrigger.removeEventListener('click', this.toggleNavigation);
  }

  toggleNavigation = (event) => {
    var body = document.getElementsByTagName('body')[0];
    event.preventDefault();
    body.classList.toggle('nav-open');
  }

  handleFlip = (e) => {
    // e.preventDefault()
    this.setState({ isFlipped: !this.state.isFlipped })
  }

  renderWorkExp = () => {
    return (
      profData.map((data, index) => {
        return (
          <li key={index}>
            <div class="cbp_tmicon cbp_tmicon-phone">
              <i class="faPra fa fa-briefcase"></i>
            </div>
            <div class="cbp_tmlabel">
              <h3>{data.position}</h3>
              <div class="date">
                <i class="fa fa-calendar"></i>{data.date}
              </div>
              <h4><i class="fa fa-flag"></i>{data.cmp_name}</h4>
              <p class="projectParagraph">{data.description}</p>
            </div>
          </li>
        )
      })
    )
  }


  render() {
    return (
      <div className="container">
        <Sidebar />
        <main className="content">
          {
            this.state.step === 2 ?
              <div class="row animated zoomIn">
                <ul class="cbp_tmtimeline">
                  {this.renderWorkExp()}
                </ul>
              </div>
              :
              <div className="wrapper">
                <section class="grid-unit top-left">
                  <div class="swing-panel">
                    <span class="desc">Check out my profile..!</span>
                  </div>
                  <div class="sphere"></div>
                  <span class="icon fa fa-book"></span>
                  <h4 class="label">Experience</h4>
                </section>
                <section class="grid-unit top-right" onClick={() => this.setState({step:2})}>
                  <div class="swing-panel">
                    <span class="desc">Check out my work..!</span>
                  </div>
                  <div class="sphere"></div>
                  <span class="icon fa fa-user"></span>
                  <h4 class="label">Portfolio</h4>
                </section>
                <section class="grid-unit bottom" onClick={this.handleFlip}>
                  <div class="swing-panel">
                    <span style={!this.state.isFlipped?{opacity:1}:{opacity:0}} class="desc">Let me introduce myself !!!</span>
                  </div>
                  <ReactCardFlip isFlipped={this.state.isFlipped}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                      <div class="bottom-icon fa fa-bullseye"></div>
                      <h4 style={!this.state.isFlipped?{display:'flex'}:{display:'none'}} class="bottom-label">About</h4>
                    </div>
                    <div>
                      <div class="bottom-icon fa fa-bullseye"></div>
                      <h4>About</h4>
                    </div>
                </ReactCardFlip>
                </section>
              </div>
          }
        </main>
        <div className="overlay"></div>
      </div>
    )
  }
}

export default About;

