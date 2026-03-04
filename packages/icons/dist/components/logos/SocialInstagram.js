import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgSocialInstagram = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { fill: "currentColor", d: "M15.75 12H15a3 3 0 0 1-3 3v1.5a4.5 4.5 0 0 0 4.5-4.5zM12 15.75V15a3 3 0 0 1-3-3H7.5a4.5 4.5 0 0 0 4.5 4.5zM8.25 12H9a3 3 0 0 1 3-3V7.5A4.5 4.5 0 0 0 7.5 12zM12 8.25V9a3 3 0 0 1 3 3h1.5A4.5 4.5 0 0 0 12 7.5zM7.5 3v.75h9v-1.5h-9zm9 0v.75a3.75 3.75 0 0 1 3.75 3.75h1.5c0-2.9-2.35-5.25-5.25-5.25zM21 7.5h-.75v9h1.5v-9zm0 9h-.75a3.75 3.75 0 0 1-3.75 3.75v1.5c2.9 0 5.25-2.35 5.25-5.25zM16.5 21v-.75h-9v1.5h9zm-9 0v-.75a3.75 3.75 0 0 1-3.75-3.75h-1.5c0 2.9 2.35 5.25 5.25 5.25zM3 16.5h.75v-9h-1.5v9zm0-9h.75A3.75 3.75 0 0 1 7.5 3.75v-1.5A5.25 5.25 0 0 0 2.25 7.5zM16.875 8.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgSocialInstagram.displayName = "SvgSocialInstagram";
export default SvgSocialInstagram;
