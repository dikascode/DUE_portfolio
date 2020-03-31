import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6} style={{borderLeft:'2px solid black'  }}>
                        <h3>Dika Ututu Emmanuel</h3>
                        <img
                            src={require("../images/Dika_2.png")}
                            alt="Dika's Pic"
                            style={{height: '250px', borderRadius:'5%'}}
                        />
                        <p style={{ width:'75%', margin:'auto', paddingTop:'1em' }}>
                        Software developer passionate about web architecture and cyber security. Seeking mentorship to contribute to a society changing course and to gain significant exposure to unique, social impact adventures while being accountable and imbibing discipline. 

                        </p>
                    </Cell>

                    <Cell style={{backgroundColor: 'black', color: 'white', borderRadius: '0 3% 3% 0'}} col={6}>
                        <h3>Contact Me</h3>
                        <hr />

                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', color:'white', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    +234 813 5081 549
                                </ListItemContent>
                            </ListItem>
                        </List>

                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', color:'white', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    emmanuelututu27@gmail.com
                                </ListItemContent>
                            </ListItem>
                        </List>

                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', color:'white', fontFamily: 'Anton'}}>
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                    @revolutionalife
                                </ListItemContent>
                            </ListItem>
                        </List>

                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', color:'white', fontFamily: 'Anton'}}>
                                <a href="https://www.linkedin.com/in/emmanuel-ututu-due" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  arai-hidden="true" />{' '}
                                    Linkedin
                                </a>
                                    
                                </ListItemContent>
                            </ListItem>
                        </List>

                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
