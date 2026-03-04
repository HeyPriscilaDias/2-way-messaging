import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgLego = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7.5 15v6m0-6-6-3m6 3 15-7.5M7.5 21l15-7.5v-6M7.5 21l-6-3v-6m0 0 3.393-1.697M22.5 7.5l-4.572-2.287m-5.535 1.34L9.52 7.99m.979 1.386c0 1.036-1.343 1.875-3 1.875s-3-.84-3-1.875S5.843 7.5 7.5 7.5s3 .84 3 1.875m7.5-3.75C18 6.661 16.657 7.5 15 7.5s-3-.84-3-1.875 1.343-1.875 3-1.875 3 .84 3 1.875" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgLego.displayName = "SvgLego";
export default SvgLego;
