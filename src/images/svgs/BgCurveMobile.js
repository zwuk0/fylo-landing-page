import * as React from "react";

function SvgBgCurveMobile(props) {
  return (
    <svg
      width={375}
      height={53}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path id="bg-curve-mobile_svg__a" d="M0 0h375v53H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="bg-curve-mobile_svg__b" fill="#fff">
          <use xlinkHref="#bg-curve-mobile_svg__a" />
        </mask>
        <path
          d="M0 33.395C83.021 11.132 145.521 0 187.5 0 229.479 0 291.979 11.132 375 33.395V961H0V33.395z"
          fill="#F8F8FE"
          mask="url(#bg-curve-mobile_svg__b)"
        />
      </g>
    </svg>
  );
}

export default SvgBgCurveMobile;
