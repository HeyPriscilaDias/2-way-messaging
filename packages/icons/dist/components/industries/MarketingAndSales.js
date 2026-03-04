import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgMarketingAndSales = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M13.8 7.5v11.313a.75.75 0 0 0 .334.623l1.03.687a.75.75 0 0 0 1.145-.442L17.549 15M13.8 7.5h3.75a3.75 3.75 0 1 1 0 7.5M13.8 7.5S8.696 7.297 3.784 3.177a.75.75 0 0 0-1.233.573v15a.75.75 0 0 0 1.233.574C8.695 15.202 13.8 15 13.8 15h3.75" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgMarketingAndSales.displayName = "SvgMarketingAndSales";
export default SvgMarketingAndSales;
