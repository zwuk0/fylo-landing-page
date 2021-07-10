import * as React from "react";

function SvgIconQuotes(props) {
  return (
    <svg width={13} height={12} xmlns="http://www.w3.org/2000/svg" {...props}>
      <text
        transform="translate(-34 -25)"
        fill="#07043B"
        fillRule="evenodd"
        fontFamily="Helvetica"
        fontSize={45}
      >
        <tspan x={33} y={56}>
          {"\u201C"}
        </tspan>
      </text>
    </svg>
  );
}

export default SvgIconQuotes;
