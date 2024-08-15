import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function MedicalTimeline() {
  return (
    <div className="medical-timeline">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--milestone"
          date="August 24- September 24"
          iconStyle={{
            background: "#00b800",
            color: "#fff",
            width: "20px",
            height: "20px",
            left: "calc(60% - 37.5px)",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Set up the lab, secure samples, and begin initial drug testing.
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--milestone"
          date="October 24 - December 24"
          iconStyle={{
            background: "#00b800",
            color: "#fff",
            width: "20px",
            height: "20px",
            left: "calc(60% - 37.5px)",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Screen drugs in fruit flies and human cells, selecting the most
            promising candidates.
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--milestone"
          date="January 25 - March 25"
          iconStyle={{
            background: "#3e497a",
            color: "#fff",
            width: "20px",
            height: "20px",
            left: "calc(60% - 37.5px)",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Optimize dosages and continue detailed testing in both models.
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default MedicalTimeline;
