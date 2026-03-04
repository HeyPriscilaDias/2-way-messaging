import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const SvgHealthcare = React.forwardRef<SVGSVGElement, SVGProps>(({
  size = 24,
  color = 'currentColor',
  ...props
}, ref) => React.cloneElement(<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.2 15H3.95a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 3.95 9H9.2V3.75A.75.75 0 0 1 9.95 3h4.5a.75.75 0 0 1 .75.75V9h5.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15.2v5.25a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75z" /></svg>, {
  ...props,
  ref,
  width: size,
  height: size,
  style: {
    ...props.style,
    color: color
  }
}));
SvgHealthcare.displayName = "SvgHealthcare";
export default SvgHealthcare;