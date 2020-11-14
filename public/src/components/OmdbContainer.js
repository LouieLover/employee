import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import Employee from "./Employee";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: [],
    search: "",
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({ result: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card heading={this.state.result.data || "Search for a Employee"}>
              {this.state.result.length > 0 ? (
                this.state.result
                  .filter((data) => data.gender === this.state.search)
                  .map((user) => (
                    <Employee
                      picture={user.picture.thumbnail}
                      first={user.name.first}
                      last={user.name.last}
                      email={user.email}
                      dob={user.dob.age}
                    />
                  ))
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
