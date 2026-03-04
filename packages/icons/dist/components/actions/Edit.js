import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgEdit = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9 20.25H4.5a.75.75 0 0 1-.75-.75v-4.19a.75.75 0 0 1 .22-.53L15.53 3.22a.75.75 0 0 1 1.06 0l4.19 4.186a.75.75 0 0 1 0 1.06zm0 0h11.25M12.75 6 18 11.25" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgEdit.displayName = "SvgEdit";
export default SvgEdit;
