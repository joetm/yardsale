import React, { Component } from 'react'
import { Card, Image, Label, Reveal } from 'semantic-ui-react'


class ItemCard extends Component {
  state = {
    detailsVisible: false,
    height: 0,
  }
  switchState = () => {
    this.setState({detailsVisible: !this.state.detailsVisible})
  }
  componentDidMount = () => {
    // console.log(this.refs.mainCard)
    this.setState({height: this.cardElement.clientHeight})
  }
  render = () => {
    const { item } = this.props
    const { detailsVisible } = this.state
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
              display: !detailsVisible ? 'block' : 'none',
              backgroundImage: `url(${item.thumb})`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
            }}
           />
        </Reveal.Content>
        <Reveal.Content hidden>
          <Card.Content extra>
            <Card.Description>
                {item.description}
            </Card.Description>
          </Card.Content>
        </Reveal.Content>
      </Reveal>
      <Card.Content style={{display: !detailsVisible ? 'block' : 'none'}}>
        <Card.Header>
          {item.title}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            <div style={{float: 'left'}}>
              Purchased: <span style={{color: 'red'}}>{item.purchase_price === '?' ? '? EUR' : item.purchase_price}</span>
            </div>
            <div style={{float: 'right'}}>
              Asking: <span style={{color: 'green'}}>{item.asking_price}</span>
            </div>
          </span>
        </Card.Meta>
      </Card.Content>
    </Card>
    )
  }
}

export default ItemCard;
