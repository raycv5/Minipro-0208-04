import EventHeader from "../components/EventHeader";
import HowItWorks from "../components/HowItWorks";
import JoinNow from "../components/JoinNow";
import { Navbar } from "../components/Navbar";
import WhyUs from "../components/WhyUs";

function EventPage() {
  return (
    <>
      <Navbar />
      <EventHeader />
      <WhyUs />
      <HowItWorks />
      <JoinNow />
    </>
  );
}

export default EventPage;
