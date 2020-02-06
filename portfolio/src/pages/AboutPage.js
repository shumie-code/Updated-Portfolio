import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title}/>
            <Content>
                <p>Designing powerful, dynamic, data driven & responsive applications. Forward thinking and actively learning new computer languages for future implementation.</p>
                <p>Backed by an active and growing portfolio that demonstrates diligent and astute programming for applications on the modern web. Active communicator and team focused professional.</p>
            </Content>
        </div>
    );
}

export default AboutPage;