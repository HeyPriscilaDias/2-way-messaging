import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgBookOpen = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 8.25a3 3 0 0 1 3-3h6.75v13.5H15a3 3 0 0 0-3 3m0-13.5v13.5m0-13.5a3 3 0 0 0-3-3H2.25v13.5H9a3 3 0 0 1 3 3" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgBookOpen.displayName = "SvgBookOpen";
export default SvgBookOpen;
