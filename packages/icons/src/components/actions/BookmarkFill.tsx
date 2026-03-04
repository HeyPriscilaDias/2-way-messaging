import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const SvgBookmarkFill = React.forwardRef<SVGSVGElement, SVGProps>(({
  size = 24,
  color = 'currentColor',
  ...props
}, ref) => React.cloneElement(<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M17 3H6.5A1.5 1.5 0 0 0 5 4.5V21a.75.75 0 0 0 1.148.636l5.602-3.502 5.603 3.502A.75.75 0 0 0 18.5 21V4.5A1.5 1.5 0 0 0 17 3" /></svg>, {
  ...props,
  ref,
  width: size,
  height: size,
  style: {
    ...props.style,
    color: color
  }
}));
SvgBookmarkFill.displayName = "SvgBookmarkFill";
export default SvgBookmarkFill;