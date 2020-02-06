import React from 'react';

import Row from 'react-bootstrap/Row';
import Card from './Card';
import bamazon from '../assets/Images/bamazon.png';
import click from '../assets/Images/click.png';
import scraper from '../assets/Images/scraper.png';
import Container from 'react-bootstrap/Container';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'React Click',
                    subTitle: 'React game hosted on Heroku',
                    imgSrc: click,
                    link: 'https://react-logos.herokuapp.com/',
                    selected: false 
                },
                {
                    id: 1,
                    title: 'MongoWebScrapper',
                    subTitle: 'Real-Time web scrapper for tech news from The Verge',
                    imgSrc: scraper,
                    link: 'https://tech-scrapers.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Bamazon',
                    subTitle: 'ClI demonstrating the integrated use of SQL and Node.js',
                    imgSrc: bamazon,
                    link: 'https://github.com/shumie-code/Bamazon',
                    selected: false
                }
            ]
        }
    }


    handleCardClick = (id, card) => {
        console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return<Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel;