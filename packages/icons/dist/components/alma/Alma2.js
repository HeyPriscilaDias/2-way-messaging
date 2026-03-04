import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgAlma2 = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { fill: "currentColor", d: "m20.358 12.109-1.511-.504a10.25 10.25 0 0 1-6.452-6.452l-.504-1.51a.94.94 0 0 0-1.783 0l-.503 1.51a10.25 10.25 0 0 1-6.452 6.452l-1.51.503a.94.94 0 0 0 0 1.784l1.51.503a10.25 10.25 0 0 1 6.452 6.452l.503 1.51a.94.94 0 0 0 1.784 0l.503-1.51a10.25 10.25 0 0 1 6.452-6.452l1.51-.503a.94.94 0 0 0 0-1.783M22.775 4.188l-.529-.176a3.59 3.59 0 0 1-2.258-2.258l-.176-.53a.329.329 0 0 0-.624 0l-.176.53a3.59 3.59 0 0 1-2.258 2.258l-.53.176a.329.329 0 0 0 0 .624l.53.176a3.59 3.59 0 0 1 2.258 2.258l.176.53a.329.329 0 0 0 .624 0l.176-.53a3.59 3.59 0 0 1 2.258-2.258l.53-.176a.329.329 0 0 0 0-.624" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgAlma2.displayName = "SvgAlma2";
export default SvgAlma2;
