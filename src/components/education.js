import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return(
            <Grid className="all-grids">
                <Cell col={3}>
                <h5>{this.props.startYear} - {this.props.endYear}</h5>
                </Cell>
                <Cell col={9}>
                <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
                <p>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        )
    }
}
export default Education;
