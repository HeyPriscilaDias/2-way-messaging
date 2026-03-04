import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgChatsCircle = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15.37 7.51a6.75 6.75 0 0 1 5.583 9.927l.765 2.603a.75.75 0 0 1-.93.93l-2.6-.767A6.754 6.754 0 0 1 8.63 16.49m-5.584-3.552a6.75 6.75 0 1 1 2.766 2.765l-2.603.765a.75.75 0 0 1-.93-.93z" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgChatsCircle.displayName = "SvgChatsCircle";
export default SvgChatsCircle;
