import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const SvgAdvanced = React.forwardRef<SVGSVGElement, SVGProps>(({
  size = 24,
  color = 'currentColor',
  ...props
}, ref) => React.cloneElement(<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 14h6v7H3zM9 9h6v12H9zM15 4h6v17h-6z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 21H2m7 0v-7H3v7zm0 0h6m-6 0V9h6v12m0 0h6V4h-6z" /></svg>, {
  ...props,
  ref,
  width: size,
  height: size,
  style: {
    ...props.style,
    color: color
  }
}));
SvgAdvanced.displayName = "SvgAdvanced";
export default SvgAdvanced;