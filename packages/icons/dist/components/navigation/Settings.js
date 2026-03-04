import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgSettings = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: [_jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5" }), _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M3.884 16.696a9.3 9.3 0 0 1-.944-2.277l1.573-1.969a8 8 0 0 1 0-.904L2.941 9.578a9.3 9.3 0 0 1 .942-2.279l2.504-.28q.3-.34.639-.64l.28-2.502a9.3 9.3 0 0 1 2.275-.937l1.969 1.573a8 8 0 0 1 .904 0l1.968-1.572a9.3 9.3 0 0 1 2.279.942l.28 2.504q.34.3.64.639l2.502.28a9.3 9.3 0 0 1 .944 2.278l-1.573 1.969q.027.451 0 .904l1.573 1.968a9.3 9.3 0 0 1-.938 2.278l-2.504.282a8 8 0 0 1-.639.638l-.28 2.503a9.3 9.3 0 0 1-2.278.944l-1.969-1.573a8 8 0 0 1-.903 0l-1.97 1.572a9.3 9.3 0 0 1-2.277-.937l-.282-2.504a8 8 0 0 1-.638-.639z" })] }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgSettings.displayName = "SvgSettings";
export default SvgSettings;
