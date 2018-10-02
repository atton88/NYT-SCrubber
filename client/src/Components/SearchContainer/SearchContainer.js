import React, { Component } from "react";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Input from "../Form/Input";
import FormBtn from "../Form/FormBtn";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";
import SaveBtn from "../SaveBtn/SaveBtn";
import API from "../../utils/API";

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

  loadArticles = () => {
    API.scrape()
  }

  handleSearch = event => {
      event.preventDefault();
    API.search({
        topic: this.state.topic,
        startYear: this.state.startYear,
        endYear: this.state.endYear
    })
    .then(res => this.loadArticles())
    .catch(err => console.log(err));
  }

  saveArticle = event => {
    API.save()
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
          {this.state.results.length ? (
              <List>
                {this.state.results.map(article => {
                  return (
                    <ListItem key={article._id}>
                      <a href={"/article/" + article._id}>
                        <strong>
                          {article.title}
                        </strong>
                      </a>
                      <SaveBtn onClick={()=>{this.saveArticle(article._id)}}/>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Container>
      </div>
    );
  }
}

export default SearchContainer;
