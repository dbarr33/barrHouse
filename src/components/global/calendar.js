import React, {
  Component,
} from 'react';

import Moment from 'moment';
import { extendMoment } from 'moment-range';
// import DateRangePicker from 'react-daterange-picker';
const moment = extendMoment(Moment);

import './calendar.css';

const stateDefinitions = {
  available: {
    color: null,
    label: 'Available',
  },
  unavailable: {
    selectable: false,
    color: '#dddddd',
    label: 'Unavailable',
  },
};

class Calendar extends Component{

  getRange() {
    var dateString = '03-9-2017';
    var start = moment(dateString, 'MM-DD-YYYY').add(-1, 'day');
    var end =  moment(dateString, 'MM-DD-YYYY').add(1, 'day');
    var dateString = '03-19-2017';
    var day3 = moment(dateString, 'MM-DD-YYYY');
    var dateString = '03-21-2017';
    var day4 = moment(dateString, 'MM-DD-YYYY');
    return (
      [
        {
          state: 'unavailable',
          range: moment.range(
            start,
            end,
          )
        },
        {
          state: 'unavailable',
          range: moment.range(
            day3,
            day4
          )
        },
      ]
    );
  }

  render() {
    const {
      value,
      handleSelection,
    } = this.props;
    return null;
    // return (
    //   <DateRangePicker
    //     firstOfWeek={1}
    //     numberOfCalendars={2}
    //     selectionType='range'
    //     minimumDate={new Date()}
    //     stateDefinitions={stateDefinitions}
    //     dateStates={this.getRange()}
    //     defaultState="available"
    //     showLegend={true}
    //     value={value}
    //     onSelect={handleSelection} />
    // );
  }
};


export default Calendar;
