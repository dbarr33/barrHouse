import React, { Component } from 'react';
import HeaderImage from '../../components/images/headerImage';
import SectionHeaders from '../../components/sections/sectionHeaders';

import Event from '../../assets/event.jpg';
import DinningTable from '../../assets/dinning_table.png';

// Styles
import './events.css';

class Events extends Component {
  render() {
    return (
      <div>
        <HeaderImage image={DinningTable} className={'headerEventImage'} />
        <SectionHeaders value={'Events'} />
        <div className={'eventRow'}>
          <div className={'eventSectionContainer'}>
            <div className={'sectionTitle'} >Type of Events</div>
            <ul className={'list'}>
              <li className={'copy'}> Rehearsal Dinners</li>
              <li className={'copy'}> Bridal & Baby Showers</li>
              <li className={'copy'}> Birthdays, Anniversaries, Graduations, & More</li>
              <li className={'copy'}> Small Parties & Get Togethers</li>
            </ul>
          </div>
          <img
            ref="image"
            src={Event}
            className="eventImage"
            alt="page"
          />
        </div>
        <div className={'eventRow'}>
          <div className={'eventSectionContainer'}>
            <div className={'sectionTitle'} >Food & Drink</div>
            <div className={'sectionHeader'}>Cash Bar</div>
            <ul className={'list'}>
              <li className={'copy'}> $3 Beer(Domestic)</li>
              <li className={'copy'}> $4 Beer(Craft)</li>
              <li className={'copy'}> $4 Wine(House)</li>
              <li className={'copy'}> TBD Wine (Premium)</li>
              <li className={'copy'}> TBD Mixed Drinks</li>
              <li className={'copy'}> $2 Soft Drinks</li>
              <li className={'copy'}> $1 Bottled Water</li>
            </ul>
          </div>
          <img
            ref="image"
            src={Event}
            className="eventImage"
            alt="page"
          />
        </div>
        <div className={'eventRow'}>
          <div className={'eventSectionContainer'}>
            <div className={'sectionTitle'} >Rental Fees</div>
            <div className={'explanation'}>
              Rental fees include tables, chairs, and tablecloths for 50 people. If additional tables, chairs, and tablecloths are needed, you will need to rent those.
            </div>
            <div className={'sectionHeader'}>0 - 50 People</div>
            <ul className={'list'}>
              <li className={'copy'}> 3 hours or less: $125 per hour</li>
              <li className={'copy'}> 4 hours or more: $100 per hour</li>
              <li className={'copy'}> Cleanup Fee: $100</li>
            </ul>
            <div className={'sectionHeader'} >51 - 75 People</div>
            <ul className={'list'}>
              <li className={'copy'}> 3 hours or less: $150 per hour</li>
              <li className={'copy'}> 4 hours or more: $125 per hour</li>
              <li className={'copy'}> Cleanup Fee: $125</li>
            </ul>
            <div className={'sectionHeader'}>76 or more People</div>
            <ul className={'list'}>
              <li className={'copy'}> 3 hours or less: $200 per hour</li>
              <li className={'copy'}> 4 hours or more: $150 per hour</li>
              <li className={'copy'}> Cleanup Fee: $150</li>
            </ul>
          </div>
          <img
            ref="image"
            src={Event}
            className="eventImage"
            alt="page"
          />
        </div>
      </div>
    );
  }
}

export default Events;
