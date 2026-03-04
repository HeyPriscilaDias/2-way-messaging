"use client";

import { Box } from "@willow/ui-kit";

interface DateSeparatorProps {
  label: string;
}

export default function DateSeparator({ label }: DateSeparatorProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        py: 1.5,
        px: 2,
      }}
    >
      <Box sx={{ flex: 1, height: "1px", bgcolor: "#E5E7EB" }} />
      <Box
        sx={{
          fontSize: "12px",
          fontWeight: 500,
          color: "#6B7280",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </Box>
      <Box sx={{ flex: 1, height: "1px", bgcolor: "#E5E7EB" }} />
    </Box>
  );
}
