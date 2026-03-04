import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgPhone = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15.412 13.626a.75.75 0 0 1 .711-.065l4.421 1.98a.75.75 0 0 1 .45.779 4.53 4.53 0 0 1-4.494 3.93A12.75 12.75 0 0 1 3.75 7.5a4.53 4.53 0 0 1 3.93-4.494.75.75 0 0 1 .778.45L10.44 7.88a.75.75 0 0 1-.062.706l-2.003 2.382a.74.74 0 0 0-.05.732c.774 1.587 2.415 3.208 4.007 3.976a.74.74 0 0 0 .734-.056z" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgPhone.displayName = "SvgPhone";
export default SvgPhone;
