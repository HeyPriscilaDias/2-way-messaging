import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgAlma3 = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { fill: "currentColor", d: "m22.261 11.475-1.737-.58a11.79 11.79 0 0 1-7.42-7.419l-.579-1.737a1.08 1.08 0 0 0-2.05 0l-.58 1.737a11.79 11.79 0 0 1-7.419 7.42l-1.737.579a1.08 1.08 0 0 0 0 2.05l1.737.58a11.79 11.79 0 0 1 7.42 7.418l.579 1.738a1.08 1.08 0 0 0 2.05 0l.58-1.737a11.79 11.79 0 0 1 7.419-7.42l1.737-.579a1.08 1.08 0 0 0 0-2.05M21.807 2.733l-.453-.151A3.08 3.08 0 0 1 19.419.646l-.152-.453a.282.282 0 0 0-.534 0l-.152.453a3.08 3.08 0 0 1-1.935 1.935l-.453.152a.282.282 0 0 0 0 .534l.453.151a3.08 3.08 0 0 1 1.935 1.936l.152.453a.282.282 0 0 0 .534 0l.152-.453a3.08 3.08 0 0 1 1.935-1.935l.453-.152a.282.282 0 0 0 0-.534M24 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgAlma3.displayName = "SvgAlma3";
export default SvgAlma3;
