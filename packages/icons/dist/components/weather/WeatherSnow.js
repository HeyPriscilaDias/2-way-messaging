import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgWeatherSnow = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 6v12m0-12L9.75 3.75M12 6l2.25-2.25M12 18l-2.25 2.25M12 18l2.25 2.25M6.803 9l10.394 6M6.803 9l-3.053.75M6.803 9 6 6m11.197 9L18 18m-.803-3 3.053-.75M6.803 15l10.394-6M6.803 15 6 18m.803-3-3.053-.75M17.197 9l3.053.75M17.197 9 18 6" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgWeatherSnow.displayName = "SvgWeatherSnow";
export default SvgWeatherSnow;
