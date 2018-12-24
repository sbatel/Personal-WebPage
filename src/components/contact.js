import React, { Component } from 'react';
import { Grid, Cell , List , ListItem , ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className= "contact-body">
            <Grid className = "contact-grid" >
            <Cell col={6} >
            <h2>CONTACT ME</h2>
            <hr/>
            
           
            <div className="contact-list" >
                <List >
                    <ListItem >
                        <ListItemContent style = {{fontSize: '30px', fontFamily:'Special Elite'}}>
                            <i className= "fas fa-phone-square" aria-hidden="true"/>
                              (+972) 50-714-6649      
                         </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style = {{fontSize: '30px', fontFamily:'Special Elite'}}>
                            
                            <a href="mailto:batyushafir@gmail.com?subject=Feedback for webdevelopersnotes.com&body=The Tips and Tricks section is great"
                            style={{color:'black',textDecoration: 'none',height:'42px',border:'0'}}>
                            <i className= "fas fa-envelope" aria-hidden="true"/>
                            batyushafir@gmail.com
                            </a>
                         </ListItemContent>                 
                    </ListItem>
                    <ListItem>
                        <ListItemContent style = {{fontSize: '30px', fontFamily:'Special Elite'}}>
                        <a href="https://www.linkedin.com/in/batel-shafir/" target= "_blank" rel="noopener noreferrer"
                        style={{color:'black',textDecoration: 'none',height:'42px',border:'0'}}>
                            <i className= "fab fa-linkedin" aria-hidden="true"/>
                            www.linkedin.com/in/batel-shafir
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