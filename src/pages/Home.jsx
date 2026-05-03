import OpeningHero              from '../sections/OpeningHero';
import WhyThisProperty          from '../sections/WhyThisProperty';
import Retail                   from '../sections/Retail';
import Luxury                   from '../sections/Luxury';
import DiningLifestyle          from '../sections/DiningLifestyle';
import AttractionsEntertainment from '../sections/AttractionsEntertainment';
import EventsPlatform           from '../sections/EventsPlatform';
import VenueCapabilities        from '../sections/VenueCapabilities';
import Sponsorship              from '../sections/Sponsorship';
import Leasing                  from '../sections/Leasing';
import Footer                   from '../components/Footer/Footer';

const Divider = () => (
  <div className="w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.12), transparent)' }} />
);

const Home = ({ onEnquire }) => (
  <main>
    <OpeningHero onEnquire={onEnquire} />
    <Divider />
    <WhyThisProperty />
    <Divider />
    <Retail onEnquire={onEnquire} />
    <Divider />
    <Luxury onEnquire={onEnquire} />
    <Divider />
    <DiningLifestyle onEnquire={onEnquire} />
    <Divider />
    <AttractionsEntertainment />
    <Divider />
    <EventsPlatform onEnquire={onEnquire} />
    <Divider />
    <VenueCapabilities onEnquire={onEnquire} />
    <Divider />
    <Sponsorship onEnquire={onEnquire} />
    <Divider />
    <Leasing onEnquire={onEnquire} />
    <Divider />
    <Footer onEnquire={onEnquire} />
  </main>
);

export default Home;
