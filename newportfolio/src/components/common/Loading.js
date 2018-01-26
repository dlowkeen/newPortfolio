import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const Loading = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader size="big">Loading</Loader>
      </Dimmer>

      {/* <Image src="/assets/images/wireframe/short-paragraph.png" />
      <Image src="/assets/images/wireframe/short-paragraph.png" />
      <Image src="/assets/images/wireframe/short-paragraph.png" /> */}
    </Segment>
  </div>
);

export default Loading;
