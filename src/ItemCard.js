import React, { Component } from 'react'
import { Card, Image, Label, Reveal } from 'semantic-ui-react'


class ItemCard extends Component {
  state = {
    // detailsVisible: false,
    height: 0,
  }
  // switchState = () => {
  //   this.setState({detailsVisible: !this.state.detailsVisible})
  // }
  componentDidMount = () => {
    // console.log(this.refs.mainCard)
    this.setState({height: this.cardElement.clientHeight})
  }
  render = () => {
    const { item } = this.props
    // console.log('item', item)
    return (
    <Card centered={true} ref={cardElement => this.cardElement = cardElement} fluid={true} raised={false}>
      <Reveal animated='move'>
        <Reveal.Content visible
          style={{
              height: '250px',
              width: '100%',
        }}>
          <Image
            style={{
              height: '250px',
              width: '100%',
              backgroundImage: `url(${item.thumb})`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
            }}
           />
        </Reveal.Content>
        <Reveal.Content hidden>
	        <Card.Description>
	            {item.description}
	        </Card.Description>
        </Reveal.Content>
      </Reveal>
      <Card.Content>
        <Card.Header>
          {item.title}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            <div style={{float: 'left'}}>
              Purchase price: <span style={{color: 'red'}}>{item.purchase_price === '?' ? '? EUR' : item.purchase_price}</span>
            </div>
            <div style={{float: 'right'}}>
              Asking price: <span style={{color: 'green'}}>{item.asking_price}</span>
            </div>
          </span>
        </Card.Meta>
        {
          item.url ? (
            <Card.Meta>
              URL: <a href={item.url} target="_blank" style={{color: 'gray'}}>{item.url}</a>
            </Card.Meta>
            ) : null
        }
        <Card.Meta>
          Condition: <span style={{color: 'gray'}}>{item.condition}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
    )
  }
}

export default ItemCard;
