import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title}/>
            <Content>
              <p>I would describe myself as a computer-science enthusiast with a focus on Functional-Programming, primarily as it pertains to JavaScript.
                 I am also familiar with the Object-Oriented-Programming paradigm along with both imperative and declarative programming styles. 
                 Currently, I am focusing on advancing my conceptual & practical ability in JavaScript, JSX, TypeScript along with ML neural networks such as Tensor-Flow.
                 I have written applications in vanilla JavaScript and leveraged frameworks such as React in others. Learning front end frameworks such as Angular for larger-scale enterprise development at the current moment.
                 Day to day I try & challenge myself to create full-stack applications that are deployed using the multitude of dev-op tools available: Docker, Heroku, AWS, MongoDB, SQL & Travis for Continuous Integration. 
                 When im not working on projects or reading, I spend a lot of time reading on Dev-To and Medium to search for new projects to work on & the different directions developers are taking to create new software and cross-platform applications.</p>
            </Content>
        </div>
    );
}

export default AboutPage;