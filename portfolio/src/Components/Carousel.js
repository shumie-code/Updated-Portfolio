import React from 'react';
import Card from '../Components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Bamazon',
                    subTitle: 'Amazon like application that runs on Node.js',
                    imgSrc: bamazon,
                    link: 'insert link to github here',
                    selected: false
                },
                {
                    id: 0,
                    title: 'Bamazon',
                    subTitle: 'Amazon like application that runs on Node.js',
                    imgSrc: bamazon,
                    link: 'insert link to github here',
                    selected: false
                },
                {
                    id: 0,
                    title: 'Bamazon',
                    subTitle: 'Amazon like application that runs on Node.js',
                    imgSrc: bamazon,
                    link: 'insert link to github here',
                    selected: false                 
                },
                {
                    id: 0,
                    title: 'Bamazon',
                    subTitle: 'Amazon like application that runs on Node.js',
                    imgSrc: bamazon,
                    link: 'insert link to github here',
                    selected: false
                },
                {
                    id: 0,
                    title: 'Bamazon',
                    subTitle: 'Amazon like application that runs on Node.js',
                    imgSrc: bamazon,
                    link: 'insert link to github here',
                    selected: false
                },
            ]
        }
    }
}

handleCardClick = (id, card) => {
    
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
        if(item.id !== id) {
            item.selected = false;
        }
    });

    this.ListeningStateChangedEvent({
        items
    });
}

makeItems = (items) => {
    return items.map(item => {
        return <Card item =
    })
}