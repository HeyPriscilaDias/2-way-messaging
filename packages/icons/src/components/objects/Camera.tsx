import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const SvgCamera = React.forwardRef<SVGSVGElement, SVGProps>(({
  size = 24,
  color = 'currentColor',
  ...props
}, ref) => React.cloneElement(<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 19.5h-15A1.5 1.5 0 0 1 3 18V7.5A1.5 1.5 0 0 1 4.5 6h3L9 3.75h6L16.5 6h3A1.5 1.5 0 0 1 21 7.5V18a1.5 1.5 0 0 1-1.5 1.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15.75A3.375 3.375 0 1 0 12 9a3.375 3.375 0 0 0 0 6.75" /></svg>, {
  ...props,
  ref,
  width: size,
  height: size,
  style: {
    ...props.style,
    color: color
  }
}));
SvgCamera.displayName = "SvgCamera";
export default SvgCamera;