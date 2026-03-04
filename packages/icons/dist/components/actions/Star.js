import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgStar = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m12 17.727 5.13 3.155a.788.788 0 0 0 1.174-.86l-1.395-5.886 4.565-3.938a.792.792 0 0 0-.449-1.386l-5.991-.487-2.308-5.588a.784.784 0 0 0-1.452 0L8.966 8.325l-5.991.487a.793.793 0 0 0-.45 1.39l4.566 3.938-1.395 5.882a.788.788 0 0 0 1.174.86z" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgStar.displayName = "SvgStar";
export default SvgStar;
