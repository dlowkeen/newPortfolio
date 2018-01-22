import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class MenuExampleInverted extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted>
        <Menu.Item
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Bio"
          active={activeItem === "Bio"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Projects"
          active={activeItem === "Projects"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
            <Menu.Item
                name="Thoughts"
                active={activeItem === "Thoughts"}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                name="Photography"
                active={activeItem === "Photography"}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                name="Video"
                active={activeItem === "Video"}
                onClick={this.handleItemClick}
            />
        </Menu.Menu>
      </Menu>
    );
  }
}
