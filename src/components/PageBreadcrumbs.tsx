"use client";

import { Box, Breadcrumbs, BreadcrumbItem } from "@willow/ui-kit";
import SidebarToggle from "@/components/SidebarToggle";

interface PageBreadcrumbsProps {
  children: React.ReactNode;
  sx?: Record<string, unknown>;
}

export default function PageBreadcrumbs({ children, sx }: PageBreadcrumbsProps) {
  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",
        borderRadius: "12px",
        height: 48,
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        pl: 1,
        pr: "40px",
        flexShrink: 0,
        ...sx,
      }}
    >
      <SidebarToggle />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <Breadcrumbs>
        <BreadcrumbItem isHome href="/" />
        {children as any}
      </Breadcrumbs>
    </Box>
  );
}
