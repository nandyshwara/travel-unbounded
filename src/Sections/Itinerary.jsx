import Container from "../components/Container";
import Accordion from "../components/Accordion";
import { useState } from "react";
import { itineraryData } from "../resources/Itinerary";

export default function Itinerary() {
  const [expandedAccordion, setExpandedAccordion] = useState();

  const handleAccordionClick = (index) => {
    if (index === expandedAccordion) {
      setExpandedAccordion(null);
    } else {
      setExpandedAccordion(index);
    }
  };
  return (
    <div className="mt-[5rem]">
      <p className="text-3xl font-semibold text-gray-800 text-center">
        Itineraries
      </p>
      <Container>
        <div className="mt-[3rem] mx-auto">
          <div className="w-full mt-10 mx-auto">
            {itineraryData.map((curreEle, index) => {
              return (
                <Accordion
                  title={curreEle.date}
                  expanded={expandedAccordion === index}
                  onClick={() => handleAccordionClick(index)}
                >
                  <div className="">
                    {curreEle.answer.map((answwer, index) => {
                      return (
                        <p className="pb-5">
                          {index + 1}. {answwer}
                        </p>
                      );
                    })}
                  </div>
                </Accordion>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
