import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Military extends Component {
    render() {
        return(
            <Grid className="all-grids">
                <Cell col={3}>
                <h5>{this.props.startYear} - {this.props.endYear}</h5>
                </Cell>
                <Cell col={7}>
                <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
                <p>{this.props.jobDescription}</p>
                </Cell>
                <Cell col={2}>
                <img src={this.props.logo}
                alt="logo"
                className="logo1-img"/>
                </Cell>
            </Grid>
        )
    }
}
export default Military;
