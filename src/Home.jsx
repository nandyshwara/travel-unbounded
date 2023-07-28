import Itinerary from "./Sections/Itinerary";
import TourPage from "./Sections/TourPage";
import { Slide } from "react-awesome-reveal";
import CostCards from "./components/CostCards";
import Terms from "./components/Terms";
import DayToDayImages from "./components/DayToDayImages";
export default function Home() {
  return (
    <>
      <Slide>
          <TourPage />
      </Slide>
      <Slide>
          <Itinerary />
      </Slide>
      <DayToDayImages/>
      <CostCards/>
      <Terms/>
    </>
  );
}
