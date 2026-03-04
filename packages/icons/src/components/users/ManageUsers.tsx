import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const SvgManageUsers = React.forwardRef<SVGSVGElement, SVGProps>(({
  size = 24,
  color = 'currentColor',
  ...props
}, ref) => React.cloneElement(<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}><g clipPath="url(#a)"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.125 15a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25m0 0c-3.229 0-5.948 1.458-7.875 3.75M10.125 15c3.229 0 5.948 1.458 7.875 3.75m3-4.5a1.5 1.5 0 0 0 0-3m0 3a1.5 1.5 0 0 1 0-3m0 3v1.125m0-4.125v-1.125M19.7 12l-.973-.562M19.7 13.5l-.974.563m3.572-.563.974.563M22.3 12l.974-.562" /></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z" /></clipPath></defs></svg>, {
  ...props,
  ref,
  width: size,
  height: size,
  style: {
    ...props.style,
    color: color
  }
}));
SvgManageUsers.displayName = "SvgManageUsers";
export default SvgManageUsers;