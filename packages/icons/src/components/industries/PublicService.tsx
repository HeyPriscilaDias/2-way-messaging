import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const SvgPublicService = React.forwardRef<SVGSVGElement, SVGProps>(({
  size = 24,
  color = 'currentColor',
  ...props
}, ref) => React.cloneElement(<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}><g clipPath="url(#a)"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M1.85 6.75V18m19.5-11.25V18M11.6 6.75v6m-11.25-6h22.5m-21 6h19.5m-15.75-3h2.25m7.5 0h2.25" /></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z" /></clipPath></defs></svg>, {
  ...props,
  ref,
  width: size,
  height: size,
  style: {
    ...props.style,
    color: color
  }
}));
SvgPublicService.displayName = "SvgPublicService";
export default SvgPublicService;