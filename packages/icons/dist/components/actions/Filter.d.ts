import * as React from 'react';
interface SVGProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}
declare const SvgFilter: React.ForwardRefExoticComponent<Omit<SVGProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default SvgFilter;
