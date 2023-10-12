
import EventHeader from "../components/EventHeader";
import HowItWorks from "../components/HowItWorks";
import { Navbar } from "../components/Navbar";
import WhyUs from "../components/WhyUs";

function EventPage() {
  return (
    <>
      <Navbar />
      <EventHeader />
      <WhyUs />
      <HowItWorks />
    </>
  );
}

export default EventPage;
