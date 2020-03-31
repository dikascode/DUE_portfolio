import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={require("../images/Dika_2.png")}
                            alt="Dika"
                            className="my-image"
                        />

                        <div className="banner-text">
                            <h1>Software Engineer</h1>

                            <hr />
                            <p>HTML/CSS | Bootstrap | Javascript | React | Php | MySql</p>

                            <div className="social-links">

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  arai-hidden="true" />{' '}
                                    Linkedin
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  arai-hidden="true" />{' '}
                                    GitHub
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square"  arai-hidden="true" />{' '}
                                    Twitter
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
