import EventHeader from "../components/organizer/OrganizerHeader";
import HowItWorks from "../components/organizer/HowItWorks";
import JoinNow from "../components/organizer/JoinNow";
import { NavbarEvent } from "../components/organizer/OrganizerNav";
import WhyUs from "../components/WhyUs";

function EventPage() {
   return (
      <>
         <NavbarEvent />
         <EventHeader />
         <WhyUs />
         <HowItWorks />
         <JoinNow />
      </>
   );
}

export default EventPage;
