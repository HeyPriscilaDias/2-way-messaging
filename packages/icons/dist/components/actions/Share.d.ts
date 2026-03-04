import * as React from 'react';
interface SVGProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}
declare const SvgShare: React.ForwardRefExoticComponent<Omit<SVGProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default SvgShare;
