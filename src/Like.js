import * as React from "react";

const SvgLike = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485.027 485.027"
    style={{
      enableBackground: "new 0 0 485.027 485.027",
    }}
    xmlSpace="preserve"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      style={{
        fill: "#3c92ca",
      }}
      d="M109.4 459.991H13c-2.1 0-3.9-1.8-3.9-3.9v-248.4c0-2.1 1.8-3.9 3.9-3.9h96.4c2.1 0 3.9 1.8 3.9 3.9v248.4c0 2.1-1.7 3.9-3.9 3.9z"
    />
    <path d="M284.6 20.391c-28.2-20.7-67.2-8.8-68.8-8.3-3.8 1.2-6.3 4.7-6.3 8.6v85.8c0 29.1-13.8 53.7-41.1 73.2-21.1 15.1-42.7 21.3-42.9 21.4-.2 0-.3.1-.5.2l-5.1 1.7c-3-4.9-8.3-8.2-14.5-8.2H16.9c-9.3 0-16.9 7.6-16.9 16.9v240.5c0 9.3 7.6 16.9 16.9 16.9h88.6c8 0 14.7-5.6 16.4-13 11.9 12.7 28.8 20.7 47.6 20.7h209.8c44.6 0 73.1-23.3 78.1-64l26.8-170.2c3.9-24.7-6.2-49.7-25.8-63.7-11.1-8-24.2-12.2-37.9-12.2H311.4v-79.6c0-31.2-9-53.6-26.8-66.7zm-180.4 430.5H18.1v-238h86.1v238zm316.3-266.1c9.9 0 19.3 3 27.3 8.8 14 10.1 21.3 28.2 18.4 46.2l-26.7 170.3v.3c-4.9 39.8-35.4 48.2-60.2 48.2H169.5c-26 0-47.1-21.1-47.1-47.1v-190.2l8.3-2.8c2.9-.8 25.2-7.6 47.8-23.7 32.1-22.8 49.1-53.3 49.1-88.2v-78.6c10.4-2 31.3-4 46.4 7.1 12.8 9.4 19.3 26.9 19.3 52v88.7c0 5 4.1 9.1 9.1 9.1h118.1v-.1z" />
  </svg>
);

export default SvgLike;
