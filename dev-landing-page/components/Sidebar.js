import React from 'react';

const Sidebar = () => {
    return (
        <>
            <a href="#navigation" class="nav-trigger">
                Menu <span></span>
            </a>
            <nav class="nav-container" id="navigation">
                <div style={styles.imgContainer}>
                    <img src='/assets/pratik.jpg' className='profile' width='100%'/>
                </div>
                <div style={styles.detailsContainer}>
                    <h2>Front-End Developer</h2>
                </div>
                <ul class="nav">
                    <li style={styles.listStyle}> 
                        <i style={styles.iconStyle} class="fas fa-user"></i><a style={styles.textStyles} href="#0">About</a>
                    </li>
                    <li style={styles.listStyle}>
                        <i style={styles.iconStyle} class="fas fa-bullseye"></i><a style={styles.textStyles} href="#0">Work</a>
                    </li>
                    <li style={styles.listStyle}>
                        <i style={styles.iconStyle} class="fas fa-envelope"></i><a style={styles.textStyles} href="#0">Contact</a>
                    </li>
                    
                </ul>
                <div class="contact-section">
                    <h3 style={styles.contactText}><i class="fas fa-map-marker-alt"> </i> Karnataka, IN</h3>
                    <h3 style={styles.contactText}><i class="fas fa-phone"> </i> +91 8135941990</h3>
                    <h3 style={styles.contactText}><i class="fas fa-envelope"> </i> pratik.manta10@gmail.com</h3>
                </div>
            </nav>
        </>
    )
}

const styles = {
    imgContainer : {
        textAlign:'center',
        margin: '8%',
        
    },
    detailsContainer: {
        display: 'flex',
        color: 'white',
        fontFamily: 'Supermercado One, cursive',
        textAlign: 'center' ,  
    },
    listStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'auto',
    },
    iconStyle: {
        fontSize: '45px', 
        color: 'white'
    },
    textStyles: {
        paddingLeft: '20%',
    },
    contactText: {
        fontSize: '20px',
        marginTop: '8px',
        paddingTop: '5px'
    }
}

export default Sidebar