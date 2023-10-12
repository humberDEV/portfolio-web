/* eslint-disable react/prop-types */
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "../styles/timeline.css";

const TimelineElement = ({ date, icon, title, subtitle, description }) => (
	<VerticalTimelineElement
		contentStyle={{
			background: "var(--background-color-2)",
			color: "var(--text-color)",
		}}
		contentArrowStyle={{
			borderRight: "7px solid var(--text-color)",
		}}
		date={date}
		iconStyle={{
			background: "var(--background-color-2)",
			color: "#007bff",
		}}
		icon={icon}
	>
		<h3>{title}</h3>
		<p>{subtitle}</p>
		<p>{description}</p>
	</VerticalTimelineElement>
);

export default function Timeline({ data, title }) {
	return (
		<div className="timeline-container" id="qualification">
			<h1>{title}</h1>
			<VerticalTimeline lineColor={"grey"}>
				{data.map((item, index) => (
					// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<TimelineElement key={index} {...item} />
				))}
			</VerticalTimeline>
		</div>
	);
}
