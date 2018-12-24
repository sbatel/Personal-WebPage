import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Military from './military';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid className="resume-grid">
                    <Cell className="resume-left" col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=fc930c83b5&attid=0.2&permmsgid=msg-f:1588018831965971322&th=1609c6b6c7f6637a&view=att&disp=inline&saddbat=ANGjdJ_R95N-cWzf27DbDOM7nPJONZk5tsvy4blA0H5xQxzUZznToTXimUVLNI-CM8-0ZjL_q82JSn-MmpCZ6KNX6k8VTFg-DUth1bngL_q4IWwGHj2oO00l0wZJdwuL2RDxs0ohYA5h1sbSGIhHp1qAbEDXoQrORtsJitDALGLhClrFl-32OWYnpDeXLappwIaZjt9RiKKdlgTQM3ht7fqXwRczxG3x8s5WF7Gvtc2ibY05GTZ1cE1n0p0VAvz359x3v9Q4yN7r3jm0Bk_Zjs9cS4bxocWqo-9_rwxz4aHnwT8t3n-J_pO-QskRfpoRcvpYiBlOygzLlCb7Qjbycl8LwOKYcWHJ65LIXT01VFzGDuhhgDQWFewaWJglrrH0z5-zEnePLbBtAjRN1H6FfWzOYYfyHWmgTkLclwZMZIFx9n-XL3s-c2Jydivm_3lbpWvIJmDQNgfYk1mYmVQX_rLOf-lGY8zvmckX6jrmaEhWZ7m2bT30cTpkpTZjLFH8ky_DH9yp0W7GiYtnf0Bin2JStzYJTV7hEFKNc5I0OatlHBoS63Zxud6ZqUKnjpABewYl7lFgMZxX8SoZu5Yv09Nk0PD8JEzcWr5KhYqJU5ynawGuQ3D6uMINzfE1MD2FSIKFqN1JCKRW8oyL2xYk"
                                alt="cv-pic"
                                className="cv-pic"/>
                             </div>
                             <h2 style={{color:'grey'}}>Batel Shafir</h2>
                             <h4 style={{color: 'grey'}}>CS Student</h4>
                             <hr style={{borderTop:'2px solid black',width:'100%'}}/>
                             <p style={{color: 'grey'}}>I am creative, hardworking and highly motivated. I have excellent interpersonal skills and a high emotional intelligence, which allow me to perform well both in groups and individually.</p>
                             <hr style={{borderTop:'2px solid black',width:'100%'}}/>
                             
                             <h5 style={{color: 'grey'}}>Ya'akov Avinu 11/5 Beer Sheva</h5>
                             <h5 style={{color: 'grey'}}>(+972)50-714-6649<strong> • </strong>batyushafir@gmail.com</h5>
                             <h5 style={{color: 'grey'}}>www.batyushafir.com</h5>
                             
                    </Cell>
                    <Cell className="resume-right" col={8}>
                    <h2>Education</h2> 
                    <Education
                    startYear={2016}
                    endYear={2019}
                    schoolName="BSc in Computer Science and Linguistics - BGU of the Negev"
                    schoolDescription="Experienced in: Java, C++, C, Python, Assembly, JavaScript, TS, Html, CSS, Scheme, 
                    Prolog, React JS, Ocaml."/>
                     <Education
                    startYear={2003}
                    endYear={2009}
                    schoolName="Mekif 'HaKiria', Ashdod - Full matriculation "
                    schoolDescription=" ▪ Majored in Biotechnology, Physics and Biochemistry.
                    ▪ Graduated with social involvement award of excellence."
                    />
                    <h2>Proffesional Experience</h2> 
                   <Experience
                   startYear="April 2017"
                   endYear="June 2017"
                   jobName="'Emalogic' Software Internship  "
                   jobDescription="Developed a User Interface project using TypeScript, HTML, CSS, Angular 2, Redux. 
                   Self-learned programming languages and web platforms."
                   logo="https://any-app.com/wp-content/uploads/2015/09/emalogic.png"
                   />
                    <Experience
                   startYear="2013"
                   endYear="2014"
                   jobName="Youth Counselor | Informal Education of Kibbutz Sasa "
                   jobDescription="Organized and planned daily activities for Sasa's youth (a total of 34 teenagers).
                    Provided emotional response and a sympathetic ear."
                    logo="https://upload.wikimedia.org/wikipedia/he/thumb/6/6d/Galil_Elyon_Regional_Council.svg/375px-Galil_Elyon_Regional_Council.svg.png"
                   />
                    <h2>Military Experience</h2>
                    <Military
                   startYear="2010"
                   endYear="2012"
                   jobName="Israeli Air Force | Technical English Instructor "
                   jobDescription="Taught vocabulary and improved the reading skills of technical literature to IAF technicians.
                   Received an excellence award from the Base Commander."
                    logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Israeli_Air_Force_-_Coat_of_arms.svg/1200px-Israeli_Air_Force_-_Coat_of_arms.svg.png"
                   /> 
                   <h2>Volunteering</h2>
                   <Experience
                   startYear="2017"
                   endYear="2018"
                   jobName="StandWithUs Fellowship Program"
                   jobDescription="Head of Social Media team."
                    logo="http://www.standwithus.co.il/fellowship/wp-content/uploads/2014/09/logo.png"
                   />
                    <Military
                   startYear="2009"
                   endYear="2010"
                   jobName="Shnat Sherut | JNF "
                   jobDescription="Volunteered in after-school child care facilities in south Tel Aviv.
                   Guided prisoners in the education center of 'Carmel' prison.
                    Graduated JNF's Guidance Course. "
                    logo="http://kibbutzlotan.com/wp-content/uploads/2016/05/JNF-KKL-Israel.png"
                   /> 
                     
                    
                    </Cell>    
                </Grid>
            </div>
        )
    }
}
export default Resume;