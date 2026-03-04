import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgSocialServices = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M4.9 19.5h-3a.75.75 0 0 1-.75-.75V15a.75.75 0 0 1 .75-.75h3m0 5.25h6.75l6-1.5 3.64-1.552a1.555 1.555 0 0 0-1.109-2.893L13.9 15h-3 2.625a1.875 1.875 0 1 0 0-3.75H8.837a2.25 2.25 0 0 0-1.593.656L4.9 14.25m0 5.25v-5.25m4.568-3C8.556 10.099 7.9 8.865 7.9 7.5c0-2.033 1.656-3.75 3.7-3.75A3.67 3.67 0 0 1 15.024 6a3.67 3.67 0 0 1 3.426-2.25c2.042 0 3.699 1.717 3.699 3.75 0 2.74-2.642 5.163-4.708 6.686" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgSocialServices.displayName = "SvgSocialServices";
export default SvgSocialServices;
