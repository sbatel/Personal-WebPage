import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import {Layout, Header, Navigation , Content} from 'react-mdl';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className = "header-color" scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
        </Header>
       
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
