import React from "react";
import {
  Wrapper,
  SearchBarContainer,
  Form,
  Input,
  Logo,
} from "./Searchbar.Style.js";
import LogoImage from "../../assets/logo.png";

class Searchbar extends React.Component {
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <>
        <Wrapper>
          <Logo src={LogoImage} alt="logo" />
        </Wrapper>
        <SearchBarContainer>
          <Form onSubmit={this.handleSubmit}>
            <Input
              onChange={this.handleChange}
              name="video-search"
              type="text"
              placeholder="Pesquisar..."
            />
          </Form>
        </SearchBarContainer>
      </>
    );
  }
}

export default Searchbar;
