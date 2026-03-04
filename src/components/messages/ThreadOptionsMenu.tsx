"use client";

import { useState } from "react";
import { Box, IconButton } from "@willow/ui-kit";
import { OptionsVertical } from "@willow/icons";

interface ThreadOptionsMenuProps {
  onMarkAllRead: () => void;
}

export default function ThreadOptionsMenu({ onMarkAllRead }: ThreadOptionsMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        variant="ghost"
        size="sm"
        onClick={() => setOpen(!open)}
      >
        <OptionsVertical size={20} color="#6B7280" />
      </IconButton>

      {open && (
        <>
          <Box
            onClick={() => setOpen(false)}
            sx={{ position: "fixed", inset: 0, zIndex: 999 }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 36,
              right: 0,
              zIndex: 1000,
              bgcolor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              border: "1px solid #E5E7EB",
              minWidth: 180,
              py: 0.5,
            }}
          >
            {[
              { label: "New group", onClick: () => setOpen(false) },
              { label: "Select chats", onClick: () => setOpen(false) },
              { label: "Mark all as read", onClick: () => { onMarkAllRead(); setOpen(false); } },
            ].map((item) => (
              <Box
                key={item.label}
                onClick={item.onClick}
                sx={{
                  px: 1.5,
                  py: 1,
                  fontSize: "13px",
                  color: "#374151",
                  cursor: "pointer",
                  "&:hover": { bgcolor: "#F3F4F6" },
                }}
              >
                {item.label}
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}
