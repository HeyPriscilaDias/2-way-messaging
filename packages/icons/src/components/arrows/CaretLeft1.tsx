import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const SvgCaretLeft1 = React.forwardRef<SVGSVGElement, SVGProps>(({
  size = 24,
  color = 'currentColor',
  ...props
}, ref) => React.cloneElement(<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M15.505 6.044a.57.57 0 0 0-.623.123l-5.715 5.715a.57.57 0 0 0 0 .808l5.715 5.714a.571.571 0 0 0 .976-.404V6.572a.57.57 0 0 0-.353-.528" /></svg>, {
  ...props,
  ref,
  width: size,
  height: size,
  style: {
    ...props.style,
    color: color
  }
}));
SvgCaretLeft1.displayName = "SvgCaretLeft1";
export default SvgCaretLeft1;