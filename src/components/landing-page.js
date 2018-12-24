import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className = "landing-grid">
                    <Cell col={4}>
                    <img
                        src="https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/46175108_10156739215826668_7110658227880067072_n.jpg?_nc_cat=101&_nc_ht=scontent.ftlv5-1.fna&oh=aca8c15c4d41711c46650c16232c360d&oe=5CD0607F"
                        alt="avatar"
                        className="avatar-img"
                    /></Cell>
                    <Cell col={6}>
                   <div className="banner-text">
                        <h1>BATEL SHAFIR</h1>                       
                        <h2>Hi There!</h2>
                        <hr/>
                        <p>Computer Science & Linguistics student at BGU<br/>
                              Creative, Hard Working, Team Player.<br/>
                        </p>   
                        
                    </div>
                        <div className="social-links">
                            {/*LinkedIn*/}
                            <a href="https://www.linkedin.com/in/batel-shafir/" target= "_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                            </a>
                            {/*Facebook*/}
                            <a href="https://www.facebook.com/bshafir" target= "_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-square"></i>
                            </a>
                           
                            
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default LandingPage;