import React, { Component } from 'react'
import { Card, Grid, Container, Image, Label } from 'semantic-ui-react'
import Loader from './Loader'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import JSON from './items.json'
import ItemCard from './ItemCard'

// const _URL = "https://joetm.github.io/yardsale/items.json"
// const catchError = (msg) => { console.error(msg) }




class App extends Component {
  state: {
  	items: [],
  }
  componentWillMount() {
    const { items = [] } = this.state || {}
    if (items.length > 0) {
      return
    }
    this.setState({items: JSON});
    // fetch(_URL, {
    //   // method: 'GET',
    //   // headers: JSON_HEADER,
    // })
    // .then(
    //   response => {
    //     if (response.status === 200) {
    //       return response.json()
    //     }
    //     throw new Error(`==> Something went wrong: [${response.status}] ${response.statusText}`)
    //   }
    // ).then(
    //   data => {
    //     // console.log('ajax success:', data)
    //     this.setState({items: data})
    //   },
    //   error => catchError(error.message || 'Something went wrong')
    // )
  }
  render() {
    const { items = [] } = this.state || {}
    return (
      <div className="App">

        <header className="App-header"></header>
        <header className="App-headerOverlay">
          <h1 className="App-title">Yardsale</h1>
            <Label as='a' color='blue' style={{cursor: 'default'}}>Alles muss raus!</Label>
        </header>

        <Container className="App-intro">
            The following items are for sale. Please contact me if you are interested.
            {/*
            All items are in great condition and as good as new.
            */}
        </Container>

        <Loader hidden={items && items.length} />

        <Grid container={true} columns={2} stackable divided>
          <Grid.Row className="row">
          {
            items.map((item, index) => {
            	if (item.sold === undefined) {
	            	return (
		              <Grid.Column className="col" key={`item_${index}`}>
		                  <ItemCard item={item} index={index+1} />
		              </Grid.Column>
	            	)
            	}
        		return null
            })
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
