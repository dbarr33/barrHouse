import React, { Component } from 'react';
import HeaderImage from '../../components/images/headerImage';
import SectionHeaders from '../../components/sections/sectionHeaders';

import Event from '../../assets/event.jpg';
import Patio from '../../assets/patio.jpg';

// Styles
import './events.css';

class Events extends Component {
  render() {
    return (
      <div>
        <HeaderImage image={Patio} className={'headerEventImage'} />
        <SectionHeaders text={eventCopy} value={'Events'} />
        <div className={'eventRow'}>
          <div className={'eventSectionContainer'}>
            <div className={'sectionTitle'} >Type of Events</div>
            <ul className={'list'}>
              <li className={'copy'}>Rehearsal Dinners</li>
              <li className={'copy'}>Alumni Class Reunions</li>
              <li className={'copy'}>Bridal & Baby Showers</li>
              <li className={'copy'}>Birthdays, Anniversaries, & Graduations</li>
              <li className={'copy'}>Christmas and other Holiday Parties</li>
              <li className={'copy'}>Small Parties & Get Togethers</li>
            </ul>
          </div>
          <img
            ref="image"
            src={Event}
            className="eventSmallImage"
            alt="page"
          />
        </div>
        <div className={'eventRow'}>
          <div className={'eventSectionContainer'}>
            <div className={'sectionTitle'} >Food & Drink</div>
            <div className={'copy'}>{foodCopy}</div>
          </div>
          <img
            ref="image"
            src={Event}
            className="eventSmallImage"
            alt="page"
          />
        </div>
        <div className={'eventRow'}>
          <div className={'eventSectionContainer'}>
            <div className={'sectionTitle'} >Rental Fees</div>
            <div className={'copy'}>{feeCopy} </div>
          </div>
          <img
            ref="image"
            src={Event}
            className="eventSmallImage"
            alt="page"
          />
        </div>
      </div>
    );
  }
}

const eventCopy = `The Barr House Inn has had a tradition for over 47 years of hosting wonderful
weddings, parties and other events. With the death of her husband W.J. Barr in
1980, Carolyn Barr, opened up her house to the public and started catering
beautiful events which included weddings, showers, receptions, etc. She named
her 1864 mansion style home “The Barr House”. Carolyn always said, “I want my
house to be a place where people can come and have a good time and enjoy
being in a lovely atmosphere”. Her youngest son, Robert Barr, continued the
tradition at her death in 2011. In June 2017, his two older brothers, Cary and
Jamie Barr took ownership of the Barr House and the name changed to”: The Barr
House Inn”. The Barr brothers have worked in the food business for a number of
years with Cary running Historic Broderick’s Tavern in Washington, Kentucky and
Jamie creating the first TexMex restaurant in Lexington, The Mesa Grill and
Cantina which had a chain of restaurants all over the southern part of the U.S. He
continues in the food business today in Savannah, Georgia with his company, a
wholesale sea food company selling to the finest restaurants in Savannah and
Hilton Head Island. Their experience in the food and restaurant business is
valuable in serving people desiring to host any event at the Barr House Inn.`;

const foodCopy = `The Barr House Inn creates a southern style venue that is appealing to any event
that you may choose to host. The Barr House Inn has very flexible food policy. We can suggest a number of caterers based on your requirements, you can provide
your own caterer, or bring your own food. The house has a commercial kitchen which will accommodate
all of the needs of your caterer. The Barr House Inn is licensed and can provide alcoholic beverages that are priced
based on your desired price point.`;

const feeCopy = `Rental fees include tables, chairs and tablecloths for 50 people. If additional
tables, chairs and tablecloths are needed, you will need to rent those. Pricing is
based on a sliding scale based on the number of guests and the number of hours
desired. Weddings are priced based on the event and services desired. A clean-
up fee will also be included for all events based on the number of guests
attending. The house can accommodate approximately 100 guests inside and
around the pool and for larger events, the yard can accommodate a tent for
approximately 200 guests.`;

export default Events;
