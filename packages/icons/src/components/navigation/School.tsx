import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const SvgSchool = React.forwardRef<SVGSVGElement, SVGProps>(({
  size = 24,
  color = 'currentColor',
  ...props
}, ref) => React.cloneElement(<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}><g clipPath="url(#a)"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 23v-9H1v9zm0 0V13a5 5 0 0 1 5-5M7 23h5m5 0V13a5 5 0 0 0-5-5m5 15h6v-9h-6zm0 0h-5m0-15V2m0 17v4m0 0h1m4-22h-5v3h5zm-4 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" /></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z" /></clipPath></defs></svg>, {
  ...props,
  ref,
  width: size,
  height: size,
  style: {
    ...props.style,
    color: color
  }
}));
SvgSchool.displayName = "SvgSchool";
export default SvgSchool;