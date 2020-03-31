import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import Background from '../images/unilance.jpg';
import Background2 from '../images/youconnect.jpg';
import Background3 from '../images/ourmarket1.jpg';
import Background4 from '../images/portfolio.jpg';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };

    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
            <div className="projects-grid">
            <Grid>
                <Cell col={4}>
                        {/* Php Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'#fff', height: '176px', background: `url(${Background}) center / cover`}}></CardTitle>
                        <CardText>UNILANCERPRO. Built with Php OOP</CardText>
                        <CardActions border>
                                <a href="https://github.com/dikascode/uni-cer" rel="noopener noreferrer" target="_blank">
                                    <Button colored>Github</Button>
                                </a>
                                
                                <a href="https://www.unilancerpro.com" rel="noopener noreferrer" target="_blank"><Button colored>Website</Button></a>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </Cell>

                <Cell col={4}>
                        {/* Php Project 2 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color:'#fff', height: '176px', background: `url(${Background2}) center / cover`}}></CardTitle>
                            <CardText>YouConnect app built with Php OOP/MVC</CardText>
                            <CardActions border>
                                <a href="https://github.com/dikascode/youconnect" rel="noopener noreferrer" target="_blank">
                                    <Button colored>Github</Button>
                                </a>
                                
                                <a href="https://youconnect.herokuapp.com" rel="noopener noreferrer" target="_blank"><Button colored>Website</Button></a>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                </Cell>

                <Cell col={4}>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'#fff', height: '176px', background: `url(${Background3}) center / cover`}}></CardTitle>
                        <CardText>OurMarket eCommerce App</CardText>
                        <CardActions border>
                                <a href="https://github.com/dikascode/ourMarket" rel="noopener noreferrer" target="_blank">
                                    <Button colored>Github</Button>
                                </a>
                                
                                <a href="https://ourmarket-demo-app.herokuapp.com/public/index.php" rel="noopener noreferrer" target="_blank"><Button colored>Website</Button></a>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </Cell>
               </Grid>
            </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div className="project-grid">
                    <Grid>
                        <Cell col={4}>
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color:'#fff', height: '176px', background: `url(${Background4}) center / cover`}}></CardTitle>
                                <CardText>My Portfolio</CardText>
                                <CardActions border>
                                        <a href="https://github.com/dikascode/DUE_portfolio" rel="noopener noreferrer" target="_blank">
                                            <Button colored>Github</Button>
                                        </a>
                                        
                                        <a href="#" rel="noopener noreferrer" target="_blank"><Button colored>Website</Button></a>
                                </CardActions>
                                <CardMenu style={{color:'#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>
                    </Grid>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return(
                <div><h1>Launching Soon</h1></div>
            )
        }
    }



    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Php</Tab>
                    <Tab>React</Tab>
                    <Tab>Laravel</Tab>
                </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
              
            </div>
        )
    }
}

export default Projects;
