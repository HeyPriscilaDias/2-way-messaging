import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgAlma = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: [_jsx("path", { stroke: "currentColor", strokeWidth: 2, d: "m11.085 4.385.361 1.085a11.25 11.25 0 0 0 7.084 7.084h.001l1.34.446-.256.085-1.085.361a11.25 11.25 0 0 0-7.084 7.084v.001L11 21.871l-.085-.256-.361-1.085-.109-.31a11.25 11.25 0 0 0-6.975-6.774h-.001L2.129 13l.256-.085 1.085-.361a11.25 11.25 0 0 0 7.084-7.084v-.001L11 4.129z" }), _jsx("path", { fill: "currentColor", d: "m22.775 4.188-.529-.176a3.59 3.59 0 0 1-2.258-2.258l-.176-.53a.329.329 0 0 0-.624 0l-.176.53a3.59 3.59 0 0 1-2.258 2.258l-.53.176a.329.329 0 0 0 0 .624l.53.176a3.59 3.59 0 0 1 2.258 2.258l.176.53a.329.329 0 0 0 .624 0l.176-.53a3.59 3.59 0 0 1 2.258-2.258l.53-.176a.329.329 0 0 0 0-.624" })] }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgAlma.displayName = "SvgAlma";
export default SvgAlma;
