import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <p>

                </p>

                <p>

                </p>

                <p>

                </p>
            </Content>
        </div>
    );
}

export default AboutPage;