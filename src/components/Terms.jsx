import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { TermsData } from "../resources/terms";
import Container from "./Container";
import { Slide } from "react-awesome-reveal";
export default function Terms() {
  return (
    <div className="mt-[5rem] pb-10 ">
      <Slide>
        <p className="text-center text-3xl font-semibold text-gray-800">Terms and Conditions</p>
      </Slide>
      <Container>
        <div className="">
          <VerticalTimeline
            lineColor="black"
            layout="1-column-left"
          >
            {TermsData.map((element, index) => {
              return (
                <div key={index}>
                  <VerticalTimelineElement
                    contentStyle={{
                      background: "rgba(62, 78, 89, 0.5)",
                    }}
                    contentArrowStyle={{
                      borderRight: "rgba(62, 78, 89, 0.5)",
                    }}
                    iconStyle={{ background: "black" }}
                  >
                    <h1 className="text-gray-900 text-4xl">{element.title}</h1>
                    <div className="ml-10">
                      <ul className="list-disc">
                        {element.content.map((element, index) => {
                          return (
                            <div key={index}>
                              <li className="text-gray-800 text-xl">
                                {element}
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                  </VerticalTimelineElement>
                </div>
              );
            })}
          </VerticalTimeline>
        </div>
      </Container>
    </div>
  );
}
