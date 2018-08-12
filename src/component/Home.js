import React from 'react';
import { List, Container, Header } from 'semantic-ui-react'

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header as='h2'>Phone Catalog App</Header>
        <p>Your task is to write a very simple product catalog app.</p>
        <Header as='h2'>Exercise 1. Write a simple REST API</Header>
        <List bulleted>
            <List.Item>Use redux for state management</List.Item>
            <List.Item>* has 1 endpoint /phones</List.Item>
            <List.Item>* Create a `PhoneListContainer` component that shows the phones</List.Item>
            <List.Item>* returns a couple of mobile phones like iPhone 7, Samsung Galaxy S7 etc. with some simple attributes like product image (just take some off of google images), title, description, color, price etc.</List.Item>
            <List.Item>* The data can all be mocked, no need for a persistence layer </List.Item>
        </List>
      <Header as='h2'>Exercise 2. Write a React app that displays the phones from the API</Header>
        <List bulleted>
            <List.Item>Use redux for state management</List.Item>
            <List.Item>* Axios(or similar library) for fetching data from the API</List.Item>
            <List.Item>* Create a `PhoneListContainer` component that shows the phones</List.Item>
            <List.Item>* Create a `PhoneDetailComponent` that shows a few more details about the phone when the user selects it</List.Item>
            <List.Item>* Display a spinner or placeholder component while the API request is ongoing</List.Item>
            <List.Item>* Make it look decent. No need for super sophisticated design, but at a minimum, make it somewhat responsive so that it doesn’t look terrible on a mobile phone</List.Item>
        </List>
      <Header as='h2'>3. Push the code to a public github repo with a README.md that explains how to run A Exercise 1.PI & Frontend app</Header>
      <Header as='h2'>Bonus Points</Header>
      <List bulleted>
            <List.Item>Dockerizing the app.</List.Item>
            <List.Item>Realistic unit/end-to-end tests.</List.Item>
        </List>
      </Container>
    );
  }
}
export default Home;
