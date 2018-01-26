import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class HeaderPhoto extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="smooth-scroll">
        <Menu inverted>
          <Menu.Item name="Home" href="/" onClick={this.handleHomeClick} />
          {/* <Menu.Item name="Bio" href="#bio" onClick={this.handleBioClick} />
          <Menu.Item
            name="Skills"
            href="#skills"
            onClick={this.handleSkillsClick}
          />
          <Menu.Item
            name="Projects"
            href="#projects"
            onClick={this.handleProjectsClick}
          /> */}
          <Menu.Menu position="right">
            <Menu.Item
              name="Thoughts"
              href="#thoughts"
              onClick={this.handleThoughtsClick}
            />
            <Menu.Item
              name="Photography"
              href="#photography"
              onClick={this.handlePhotographyClick}
            />
            <Menu.Item
              name="Video"
              href="https://vimeo.com/user45384519"
              active={activeItem === "Video"}
              onClick={this.handleVidoeClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
