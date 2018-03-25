import React, { Component } from 'react'
import { Card, Icon, Grid, Container, Image, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

const _URL = "/static/items.json"

const catchError = (msg) => { console.log(msg) }


class ItemCard extends Component {
  state = {
    detailsVisible: false,
    height: 0,
  }
  switchState = () => {
    this.setState({detailsVisible: !this.state.detailsVisible})
  }
  componentDidMount = () => {
    console.log(this.refs.mainCard)
    this.setState({height: this.cardElement.clientHeight})
  }
  render = () => {
    const { item } = this.props
    const { detailsVisible } = this.state
    // console.log('item', item)
    return (
    <Card centered={true} ref={cardElement => this.cardElement = cardElement} fluid={true} raised={false}
    onClick={this.switchState}>
      <Image
        style={{
          height: '250px',
          width: '100%',
          display: !detailsVisible ? 'block' : 'none',
          backgroundImage: `url(${item.thumb})`,
          backgroundSize: 'cover',
        }}
       />
      <Card.Content style={{display: !detailsVisible ? 'block' : 'none'}}>
        <Card.Header>
          {item.title}
        </Card.Header>
        {/*
        <Card.Meta>
          <span className='date'>
            {item.description}
          </span>
        </Card.Meta>
        */}
      </Card.Content>
      <Card.Content extra style={{
        height: this.state.height,
        display: detailsVisible ? 'block' : 'none'
      }}>
        <Card.Description>
          {item.description}
        </Card.Description>
      </Card.Content>
    </Card>
    )
  }
}


class App extends Component {
  state: {
  	itemsLoaded: false,
  	items: [],
  }
  loadData = () => {
    if (this.itemsLoaded) {
      return
    }
    fetch(_URL, {
      // method: 'GET',
      // headers: JSON_HEADER,
    })
    .then(
      response => {
        console.log('response', response)
        if (response.status === 200) {
          return response.json()
        }
        throw new Error(`Something went wrong: [${response.status}] ${response.statusText}`)
      }
    ).then(
      data => {this.setState({items: data})},
      error => catchError(error.message || 'Something went wrong')
    )
  }
  componentWillMount() {
  	this.loadData();
  }
  render() {
    const { items = [] } = this.state
    return (
      <div className="App">

        <header className="App-header"></header>
        <header className="App-headerOverlay">
          <h1 className="App-title">Yardsale</h1>
            <Label as='a' color='blue'>Alles muss raus!</Label>
        </header>

        <Container className="App-intro">
            The following items are for sale.
            All items are in great condition or as good as new.
            Please contact me if you are interested.
        </Container>

        <Grid container={true} columns={2} stackable divided>
          <Grid.Row className="row">
          {
            items.map(item => (
              <Grid.Column className="col">
                  <ItemCard item={item} />
              </Grid.Column>
            ))
          }
          </Grid.Row>
        </Grid>


        <div className="footer">
        Image credit: <a href="https://www.flickr.com/photos/juhoholmi/21002339685">'Northern Lights in Pateniemi' by Juho Holmi</a> (CC BY-ND 2.0)
        </div>

      </div>
    );
  }
}

export default App;
