import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgReorder = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 25 25", ...props, children: _jsx("path", { fill: "currentColor", d: "M8.984 7.031a1.172 1.172 0 1 0 0-2.343 1.172 1.172 0 0 0 0 2.343M16.016 7.031a1.172 1.172 0 1 0 0-2.344 1.172 1.172 0 0 0 0 2.344M8.984 13.672a1.172 1.172 0 1 0 0-2.344 1.172 1.172 0 0 0 0 2.344M16.016 13.672a1.172 1.172 0 1 0 0-2.344 1.172 1.172 0 0 0 0 2.344M8.984 20.313a1.172 1.172 0 1 0 0-2.344 1.172 1.172 0 0 0 0 2.343M16.016 20.313a1.172 1.172 0 1 0 0-2.344 1.172 1.172 0 0 0 0 2.343" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgReorder.displayName = "SvgReorder";
export default SvgReorder;
