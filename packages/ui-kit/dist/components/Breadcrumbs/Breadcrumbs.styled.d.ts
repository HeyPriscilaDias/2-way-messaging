import React from 'react';
export declare const BreadcrumbsContainer: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
export declare const BreadcrumbItemWrapper: React.ComponentType<React.HTMLAttributes<HTMLSpanElement>>;
export declare const breadcrumbLinkStyles: {
    readonly color: string;
    readonly textDecoration: "none";
    readonly display: "inline-flex";
    readonly alignItems: "center";
    readonly gap: "4px";
    readonly '&:hover': {
        readonly textDecoration: "underline";
    };
    readonly '&:focus-visible': {
        readonly outline: `2px solid ${string}`;
        readonly outlineOffset: "2px";
        readonly borderRadius: "2px";
    };
    readonly fontFamily: string;
    readonly fontSize: string;
    readonly fontWeight: number;
    readonly lineHeight: string;
};
export declare const BreadcrumbLink: React.ComponentType<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
export declare const BreadcrumbText: React.ComponentType<React.HTMLAttributes<HTMLSpanElement>>;
export declare const Separator: React.ComponentType<React.HTMLAttributes<HTMLSpanElement>>;
export declare const EllipsisButton: React.ComponentType<React.ButtonHTMLAttributes<HTMLButtonElement>>;
export declare const HomeIconWrapper: React.ComponentType<React.HTMLAttributes<HTMLSpanElement>>;
//# sourceMappingURL=Breadcrumbs.styled.d.ts.map