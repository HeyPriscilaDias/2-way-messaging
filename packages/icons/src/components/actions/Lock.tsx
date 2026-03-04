import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const SvgLock = React.forwardRef<SVGSVGElement, SVGProps>(({
  size = 24,
  color = 'currentColor',
  ...props
}, ref) => React.cloneElement(<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.5 9.75v-3a3.75 3.75 0 0 1 7.5 0v3m-11.25 0h15a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-.75.75h-15A.75.75 0 0 1 4 21V10.5a.75.75 0 0 1 .75-.75" /></svg>, {
  ...props,
  ref,
  width: size,
  height: size,
  style: {
    ...props.style,
    color: color
  }
}));
SvgLock.displayName = "SvgLock";
export default SvgLock;