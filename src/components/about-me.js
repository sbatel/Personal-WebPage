import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div style={{width: '100%', margin:'auto'}}>
            <Grid className = "about-me-grid">
            <Cell col={6}>
            <div className="about-me-text">
                        <h1>About Me</h1>                       
                        <p> A 27 years old  
                            Computer Science & Linguistics student </p>
                        <p><strong>Passionate</strong> about my degree and looking
                        for the opportunity to expand my knowledge in the field.</p>
                        <p><strong> Excited </strong>to apply all the theoretical tools that
                            I have acquired in my years as a C.S student in my job.</p>
                        <p><strong>I believe</strong> that being deeply invested in my craft,
                            making practical advancements professionally and utilising 
                            creativity in my work will help me grow myself as an individual.</p>
                             
   
            </div>
            </Cell>
            <Cell col={4}>
            <img
                src="https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/47682938_10156801513656668_76530265605799936_n.jpg?_nc_cat=101&_nc_ht=scontent.ftlv5-1.fna&oh=609f16b6a82f16bdeb87e461ae765cdf&oe=5CD67E81"
                alt="avatar"
                className="avatar1-img"
            /></Cell>
            
            </Grid>
            </div>
        )
    }
}
export default About;