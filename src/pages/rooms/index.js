import React, { Component } from 'react';

// Components
import BookOption from '../../components/book/bookOption';
import BarrHouse from '../../assets/barr-house.jpg';
import HeaderImage from '../../components/images/headerImage';
import SectionHeaders from '../../components/sections/sectionHeaders';

// Assets
import PennRoom from '../../assets/penn_room.png';
import TalbotRoom from '../../assets/talbot_room.png';
import WainWrintRoom from '../../assets/wainwrint_room.png';
import Den from '../../assets/den.png';

// Styles
import './rooms.css';

class Rooms extends Component {
  render() {
    return (
      <div className="roomsContainer">
        <HeaderImage image={BarrHouse} />
        <SectionHeaders value={'Rooms'} text={headerCopy} />
        <BookOption
          image={Den}
          room={{ weekCost: 275, weekendCost: 350, cleaningFee: 150, deposit: 150 }}
          path={'/book/singleBed'}
          text={appartment}
          title="House - 3 Bedrooms and 2 Baths"
        />
        <BookOption
          image={WainWrintRoom}
          room={{ weekCost: 175, weekendCost: 175, cleaningFee: 100, deposit: 100 }}
          path={'/book/singleBed'}
          text={appartment}
          title="Wainwright Apartment - Bedroom, Bath, Kitchen, and Den"
        />
        <BookOption
          image={TalbotRoom}
          room={{ weekCost: 150, weekendCost: 150, cleaningFee: 75, deposit: 75 }}
          path={'/book/singleBed'}
          text={frontRight}
          title="Talbott Room - Bedroom and Bath"
        />
        <BookOption
          image={PennRoom}
          text={frontLeft}
          room={{ weekCost: 100, weekendCost: 100, cleaningFee: 50, deposit: 50 }}
          path={'/book/singleBed'}
          title="Penn Room - Bedroom"
        />
        <div className={'spacer'} />
        <div className="finePrint">
          Taxes will be added and included: 6% sales tax, 1% transient room tax, and 3% tourism tax.
        </div>
        <div className="finePrint">
          Booking will require a deposit with full payment due prior to arrival.
        </div>
        <div className="finePrint">
          No cancellation fee if cancelled greater than 14 days in advance, otherwise deposit will be forfeited.
        </div>
      </div>
    );
  }
}

const headerCopy = `The bedrooms are named for the early owners of the home. William H.
Wainwright constructed the house shortly before the Civil War. He was a
manufacturer of saddles and harnesses and had his business on Main Street. He
sold the property to Jesse H. Talbott in 1861. Washington K. Penn, who was a
farmer, acquired the house in 1877.`;

const appartment = `The Wainwright Apartment is a spacious living quarters that contains a
lovely mauve bedroom with a king size bed and has access to a fully equipped
kitchen, den and bathroom with walk-in shower. The den has a Smart TV with Wi-
Fi access, APPS including NETFLIX and ESPN, and also receives 18 local channels.
Both the den and bedroom have ceiling fans to provide a cooling breeze. The
Wainwright Apartment sits in the back of the house and can be accessed from
both the front stairway and from a private back access. This space would be ideal
for a longer term rental with access to the full size kitchen equipped with stove,
refrigerator and microwave.`;

const frontRight = `The Talbott Room is a beautiful blue bedroom with an en suite bathroom with
walk-in shower and has a queen bed. It also has a ceiling fan and a non-working
fireplace which adds to the elegance of the room. The Talbott Room sits in the
front of the house and overlooks the beautiful entryway of the Barr House Inn
and the beautiful fountain.`;

const frontLeft = `The Penn Room is a beautiful yellow bedroom with a queen bed and also has a
ceiling fan and non-working fireplace. The Penn Room would be used as an
additional room needed by a family as it does not contain a bathroom but would
need to have a shared bathroom. It too sits in the front of the house and across
from the Talbott Room overlooking the beautiful front grounds of the Barr House
Inn.`;

export default Rooms;
