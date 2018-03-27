import React, { Component } from 'react'
import { Card, Image, Label, Reveal } from 'semantic-ui-react'


const styles = {
  extrapadding: {
    paddingTop: '0.5em',
    paddingBottom: '0.5em',
  },
}


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
    const { item, index } = this.props
    // console.log('item', item)
    return (
    <Card centered={true} ref={cardElement => this.cardElement = cardElement} fluid={true} raised={false}>
      <Reveal animated='move'
       style={{
                height: '250px',
                width: '100%',
             }}
      >
        <Reveal.Content visible style={{width:'100%'}}>
          <Image style={{
                height: '100%',
                width: '100%',
                backgroundImage: `url(${item.thumb})`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
          }}
            label={{ as: 'a', content: index, ribbon: true, size: 'mini' }}
          />
          {/*
          <Label color='yellow' style={{position: 'absolute', top: '10px', left: '10px', cursor: 'default'}}>{index}</Label>
          */}
        </Reveal.Content>
        <Reveal.Content hidden style={{fontSize: '1.2em', padding: '1em', color: 'black', width: '100%'}}>
          {item.description}
        </Reveal.Content>
      </Reveal>
      <Card.Content>
        <Card.Header>
          {item.title}
        </Card.Header>
        <Card.Meta>
          <div className='date' style={styles.extrapadding}>
            <div style={{float: 'left'}}>
              Purchase price: <span style={{color: 'green'}}>{item.purchase_price === '?' ? '? EUR' : item.purchase_price}</span>
            </div>
            <div style={{float: 'right'}}>
              Asking price: <span style={{color: 'red'}}>{item.asking_price}</span>
            </div>
          </div>
        </Card.Meta>
        {
          item.url ? (
            <Card.Meta>
            <div style={{...styles.extrapadding, paddingTop: '1.5em'}}>
              URL: <a href={item.url} target="_blank" style={{color: 'gray'}}>{item.url}</a>
            </div>
            </Card.Meta>
            ) : null
        }
        {
          item.condition && (
            <Card.Meta>
              <div style={{...styles.extrapadding, paddingTop: '0em', paddingBottom: '0em'}}>
                Condition: <span style={{color: 'gray'}}>{item.condition}</span>
              </div>
            </Card.Meta>
          )
        }
      </Card.Content>
    </Card>
    )
  }
}

export default ItemCard;
