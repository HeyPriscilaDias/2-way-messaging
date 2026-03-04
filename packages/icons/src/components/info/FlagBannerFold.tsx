import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const SvgFlagBannerFold = React.forwardRef<SVGSVGElement, SVGProps>(({
  size = 24,
  color = 'currentColor',
  ...props
}, ref) => React.cloneElement(<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m14.25 21 7.5-16.5h-7.5l-3.75 8.25m0 0H18m-7.5 0L9.477 15H2.625l3.75-4.125-3.75-4.125h10.602" /></svg>, {
  ...props,
  ref,
  width: size,
  height: size,
  style: {
    ...props.style,
    color: color
  }
}));
SvgFlagBannerFold.displayName = "SvgFlagBannerFold";
export default SvgFlagBannerFold;