import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';
import "bootstrap/dist/css/bootstrap.css";
import { NavItem, Nav, Container, Row, Col, Card} from "react-bootstrap";
import cities from '../cities';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div>
      <Card >
        <Card.Header>Simple Weather App</Card.Header>
    </Card>
      <Container  id="left-tabs-example">
          <Row>
            <Col md={2} sm={2}>
              <h3>Select a city</h3>
              <Nav
                variant="pills"
                className="flex-column"
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}
              >
                {cities.map((place, index) => (
                  <NavItem>
                    <Nav.Link eventKey={index}>{place.name}</Nav.Link>
                  </NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={7} sm={1}>
              <WeatherDisplay key={activePlace} zip={cities[activePlace].zip} />
            </Col>
          </Row>
          </Container>
      </div>
    );
  }
}

export default App;
