import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgWeatherSun = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 3.75V3M6 6l-.75-.75M6 18l-.75.75M18 6l.75-.75M18 18l.75.75M3.75 12H3m9 8.25V21m8.25-9H21m-3.75 0a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgWeatherSun.displayName = "SvgWeatherSun";
export default SvgWeatherSun;
