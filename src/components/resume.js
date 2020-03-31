import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div className="resume-body">
                <Grid className="resume-grid">
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}} >
                        <img 
                            src={require("../images/Dika_2.png")}
                            alt="Dika"
                            style={{height: '200px', borderRadius:'50%'}}
                        />
                        </div>
                        
                        <h3 style={{paddingTop:'2em'}}>Dika Ututu Emmanuel</h3>
                        <h5 style={{color:'grey'}}>Software Engineer</h5>
                        <hr style={{width: '50%', borderTop: '2px solid #833fb2'}} />

                        <p style={{margin:'auto', paddingTop:'1em' }}>
                        Software developer passionate about web architecture. Constantly learning, unlearning and relearning the best practices of web technologies. 

                        </p>

                        <hr style={{width: '50%', borderTop: '2px solid #833fb2'}} />

                        <h6>Address: Lagos, Nigeria.</h6>
                        <p style={{margin:'auto'}}>
                        </p>

                        <h6>Phone: +234 813 5081 549</h6>
                        <p></p>

                        <h6>Email: emmanuelututu27@gmail.com</h6>
                        <hr style={{width: '50%', borderTop: '2px solid #833fb2'}} />
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education 
                        
                            startYear={2012}
                            endYear = {2017} 
                            schoolName = "Federal University of Techonology, Minna"
                            schoolDescription = "One of the few Universities in Nigeria focused on Tech oriented courses. Founded in 1983."
                        
                        />

                        <hr style={{borderTop: '2px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience 
                            startYear = {2019}
                            endYear = {2020}
                            jobName = "Freelance Editor"
                            jobDescription = "Edited Tech articles for Swiss Entrepreneur Magazine, Switzerland and increased its readership and featured articles by over 20% in 3 months."
                        />

                        <Experience 
                            startYear = {2020}
                            endYear = ""
                            jobName = "Freelance Developer"
                            jobDescription = "Developed an eCommerce app for OurMarket"
                        />

                        <Experience 
                            startYear = {2020}
                            endYear = ""
                            jobName = "Freelance Developer"
                            jobDescription = "Developed an Event Ticketing App for YouConnect"
                        />

                        <hr style={{borderTop: '2px solid #e22947'}} />
                        <h2>Skills</h2>

                        <Skills 
                            skill="HTML"
                            progress={90}
                        />

                        <Skills 
                            skill="CSS"
                            progress={80}
                        />

                        <Skills 
                            skill="Javascript"
                            progress={50}
                        />

                        <Skills 
                            skill="Php"
                            progress={60}
                        />

                        <Skills 
                            skill="MySql"
                            progress={70}
                        />

                        <Skills 
                            skill="React"
                            progress={40}
                        />

                        <Skills 
                            skill="Laravel"
                            progress={40}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
