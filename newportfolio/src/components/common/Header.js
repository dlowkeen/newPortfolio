import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import smoothScroll from './smoothScroll';

export default class MenuExampleInverted extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleHomeClick() {
    smoothScroll.scrollTo("landing");
  };
  
  handleBioClick() {
    smoothScroll.scrollTo("bio");
  };

  handleSkillsClick() {
    smoothScroll.scrollTo("skills");
  };

  handleProjectsClick() {
    smoothScroll.scrollTo("projects");
  };

  handlePhotographyClick() {
    smoothScroll.scrollTo("photography");
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div className="smooth-scroll">
        <Menu inverted>
          <Menu.Item
            name="Home"
            href="/" 
            onClick={this.handleHomeClick}
          />
          <Menu.Item
            name="Bio"
            href="#bio"
            onClick={this.handleBioClick}
          />
          <Menu.Item
            name="Skills"
            href="#skills"
            onClick={this.handleSkillsClick}
          />
          <Menu.Item
            name="Projects"
            href="#projects"
            onClick={this.handleProjectsClick}
          />
          <Menu.Menu position="right">
              <Menu.Item
                  name="Thoughts"
                  href="https://medium.com/@dlowkeen"
              />
              <Menu.Item
                  name="Photography"
                  href="#photography"
                  onClick={this.handlePhotographyClick}

              />
              <Menu.Item
                  name="Video"
                  href="https://vimeo.com/user45384519"
              />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
