import React, { Component } from 'react';
import moment from 'moment';
import { Grid, Segment } from 'semantic-ui-react';

// import DayOffCalendar from './DayOffCalendar';

class DayOff extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Grid>
        <Grid.Column>
          <h1>DAY OFF COMPONENT</h1>
        </Grid.Column>
      </Grid>
    );
  }
}

export default DayOff;
