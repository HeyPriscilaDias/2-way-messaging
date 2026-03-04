// packages/icons/svgr.template.cjs
function template(
  // The first argument is an object containing the variables for the component.
  // We only need `componentName`, `jsx`, and `exports`.
  { componentName, jsx, exports },
  // The second argument is an object containing options, including the `tpl` helper.
  { tpl }
) {
  // Use the `tpl` helper (a tagged template literal) to create the component.
  return tpl`
      import * as React from 'react';

      // We've added the optional 'color' prop to this interface for type safety.
      interface SVGProps extends React.SVGProps<SVGSVGElement> {
        size?: number | string;
        color?: string;
      }

      const ${componentName} = React.forwardRef<SVGSVGElement, SVGProps>(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(${jsx}, { ...props, ref, width: size, height: size, style: { ...props.style, color: color } }));

      ${componentName}.displayName = '${componentName}';

      ${exports}
    `;
}

module.exports = template;
