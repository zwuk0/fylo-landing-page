import * as React from "react";

function SvgBgCurveDesktop(props) {
  return (
    <svg
      width={1440}
      height={114}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path id="bg-curve-desktop_svg__a" d="M0 0h1440v114H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="bg-curve-desktop_svg__b" fill="#fff">
          <use xlinkHref="#bg-curve-desktop_svg__a" />
        </mask>
        <path
          d="M0 72.728C318.801 24.243 558.801 0 720 0c161.199 0 401.199 24.243 720 72.728v765.146H0V72.728z"
          fill="#F8F8FE"
          mask="url(#bg-curve-desktop_svg__b)"
        />
      </g>
    </svg>
  );
}

export default SvgBgCurveDesktop;
