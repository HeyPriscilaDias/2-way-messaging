import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const SvgPoll = React.forwardRef<SVGSVGElement, SVGProps>(({
  size = 24,
  color = 'currentColor',
  ...props
}, ref) => React.cloneElement(<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M1.67 17.5h16.666m-5.833 0v-5.833h5V17.5zm0 0h-5m5 0V3.333h-5V17.5m0 0h-5V8.333h5z" /></svg>, {
  ...props,
  ref,
  width: size,
  height: size,
  style: {
    ...props.style,
    color: color
  }
}));
SvgPoll.displayName = "SvgPoll";
export default SvgPoll;