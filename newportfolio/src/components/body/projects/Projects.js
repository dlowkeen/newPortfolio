import React from 'react';
import gift from "../../../assets/images/Gifts.jpg";
import pirateShip from "../../../assets/images/pirate_ship.gif";
import habittack from "../../../assets/images/habittack.jpg";
import socialspaces from "../../../assets/images/socialspaces.png";
import SectionHead from '../../common/SectionHead';
import groupr from '../../../assets/images/groupr.png';


const Projects = () => {
    return <div id="projects">
        <SectionHead name="Projects" />
        <div class="ui three stackable cards">
          <div class="card">
            <div class="image">
              <img src={gift} alt="gifthub" />
            </div>
            <div class="content">
              <a class="header" href="https://ucla-hackers.github.io/twitter-watson-personality-insights/">
                GiftHub
              </a>
              <div class="description">
                <p>
                  Analyze twitter feeds for gift recomendations based on IBM
                  Watson's Personality Insights. Predict personality
                  characteristics, needs and values through twitter feeds.
                </p>
                <p>
                  <strong>Responsible for: </strong>Backend API calls with AJAX, Firebase, JavaScript. Google login.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src={pirateShip} alt="pirateship" />
            </div>
            <div class="content">
              <a class="header" href="https://github.com/ARKrew/workingArgo">
                ARgo
              </a>
              <div class="description">
                <p>
                  ARgo is a mobile application that uses location
                  intelligence and augmented reality to immerse users in a
                  new experience. Users have the ability to enter into new
                  worlds through AR portals and collect badges with their
                  friends.
                </p>
                <p>
                  <strong>Responsible for: </strong>Front end design, Routing, and app structure.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src={habittack} alt="habittack" />
            </div>
            <div class="content">
              <a class="header" href="https://www.kickstarter.com/projects/94978636/the-habittack">
                Habittack
              </a>
              <div class="description">
                <p>
                  Mobile application that uses social accountability and
                  competition help you reach your goals and build new
                  habits.
                </p>
                <p>
                  <strong>Responsible for: </strong>Overseeing entire project from user stories to launch.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="ui three stackable cards">
          <div class="card">
            <div class="image">
              <img src={socialspaces} alt="socialspaces" />
            </div>
            <div class="content">
              <a class="header" href="https://socialspaces.life/">
                Social Spaces
              </a>
              <div class="description">
                <p>
                  Find roommates that match your personal, professional and
                  spiritual goals through a co-living space.
                </p>
                <p>
                  <strong>Responsible for: </strong>Front end development with React.js.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Bamazon" />
            </div>
            <div class="content">
              <a class="header" href="https://github.com/dlowkeen/Amazon-CLI">
                bAmazon
              </a>
              <div class="description">
                <p>
                  Inventory on hand tool that takes in orders from customers
                  and depletes stock on hand.
                </p>
                <p>
                  <strong>Sole developer: </strong>Built with Node.js, MySQL.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <a href="http://www.groupr.tech/">
                <img src={groupr} alt="meetup" />
              </a>
            </div>
            <div class="content">
              <a class="header" href="http://www.groupr.tech/">
                Groupr
              </a>
              <div class="description">
                <p>
                  Hub for high quality tech networking events. Built with
                  MERN stack.
                </p>
                <p>
                  <strong>Responsible for: </strong>Recruiter and Quiz form using Redux-Form, MongoDB CRUD operations using mongoose.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>;
}

export default Projects;
