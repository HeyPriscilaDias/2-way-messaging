import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgReach = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m7.5 12 5.917-5.917c2.251-2.251 4.926-2.39 6.12-2.32a.75.75 0 0 1 .7.7c.07 1.194-.07 3.87-2.32 6.12L12 16.5M7.5 12l4.5 4.5M7.5 12l-3.855-.538a.75.75 0 0 1-.425-1.272l3.22-3.22a.75.75 0 0 1 .53-.22h5.78M12 16.5l.538 3.855a.75.75 0 0 0 1.272.425l3.22-3.22a.75.75 0 0 0 .22-.53v-5.78m-8.385 6.358c-.363.796-1.585 2.642-5.115 2.642 0-3.53 1.846-4.752 2.642-5.115" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgReach.displayName = "SvgReach";
export default SvgReach;
