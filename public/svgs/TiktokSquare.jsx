import * as React from "react";
const TiktokSquare = (props) => (
  <svg
    className="rounded bg-teal-500"
    width={props.size}
    height={props.size}
    stroke="black"
    viewBox="0 0 24 24"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.977 15.532a2.79 2.79 0 0 0 2.791 2.792 2.86 2.86 0 0 0 2.9-2.757L12.7 3h2.578A4.8 4.8 0 0 0 19.7 7.288v2.995a5 5 0 0 1-.443.022 4.8 4.8 0 0 1-4.02-2.172v7.4a5.469 5.469 0 1 1-5.469-5.469c.114 0 .226.01.338.017v2.7a3 3 0 0 0-.338-.034 2.79 2.79 0 0 0-2.791 2.785" />
  </svg>
);
export default TiktokSquare;
