import React, { Component } from "react";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Input from "../Form/Input";
import FormBtn from "../Form/FormBtn";

class SearchContainer extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    results: [],
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(value);
    this.setState({
      [name]: value
    });
  };

  handleSearch = event => {
      event.preventDefault();
    API.search({
        to
    })
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1>Search</h1>
          </Row>
          <Row>
            <form>
              <Input
                name="topic"
                placeholder="Type here"
                value={this.state.topic}
                onChange={this.handleChange}
              />
              <Input
                name="startYear"
                placeholder="Type start year here"
                value={this.state.startYear}
                onChange={this.handleChange}
              />
              <Input
                name="endYear"
                placeholder="Type end year here"
                value={this.state.endYear}
                onChange={this.handleChange}
              />
              <FormBtn onClick={this.handleSearch}>Search</FormBtn>
            </form>
          </Row>
        </Container>

        <Container>
          <Row>
            <h1>Results</h1>
          </Row>
            
        </Container>
      </div>
    );
  }
}

export default SearchContainer;
