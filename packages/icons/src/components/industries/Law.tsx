import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const SvgLaw = React.forwardRef<SVGSVGElement, SVGProps>(({
  size = 24,
  color = 'currentColor',
  ...props
}, ref) => React.cloneElement(<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.6 3.75v16.5m-2.25 0h4.5m-9-12 13.5-3m-13.5 3 3 7.5c0 1.657-1.875 2.25-3 2.25s-3-.593-3-2.25zm13.5-3 3 7.5c0 1.657-1.875 2.25-3 2.25s-3-.593-3-2.25z" /></svg>, {
  ...props,
  ref,
  width: size,
  height: size,
  style: {
    ...props.style,
    color: color
  }
}));
SvgLaw.displayName = "SvgLaw";
export default SvgLaw;