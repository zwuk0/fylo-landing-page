import * as React from "react";

function SvgIconArrow(props) {
  return (
    <svg
      width={16}
      height={16}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <filter
          x="-25%"
          y="-25%"
          width="150%"
          height="150%"
          filterUnits="objectBoundingBox"
          id="icon-arrow_svg__a"
        >
          <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={1}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.239215686 0 0 0 0 0.62745098 0 0 0 0 0.560784314 0 0 0 0.793506567 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <circle id="icon-arrow_svg__b" cx={6} cy={6} r={6} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(2 2)">
          <use
            fill="#000"
            filter="url(#icon-arrow_svg__a)"
            xlinkHref="#icon-arrow_svg__b"
          />
          <use fill="#3DA08F" xlinkHref="#icon-arrow_svg__b" />
        </g>
        <path
          d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
}

export default SvgIconArrow;
