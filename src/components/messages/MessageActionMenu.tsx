"use client";

import { useState } from "react";
import { Box, IconButton } from "@willow/ui-kit";
import { OptionsVertical, Trash, Copy } from "@willow/icons";

interface MessageActionMenuProps {
  onDelete: () => void;
  messageText: string;
}

export default function MessageActionMenu({ onDelete, messageText }: MessageActionMenuProps) {
  const [open, setOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setOpen(false);
  };

  const handleDelete = () => {
    onDelete();
    setOpen(false);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        variant="ghost"
        size="sm"
        onClick={() => setOpen(!open)}
        sx={{
          width: 28,
          height: 28,
          bgcolor: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "8px",
          "&:hover": { bgcolor: "#F3F4F6" },
        }}
      >
        <OptionsVertical size={14} color="#6B7280" />
      </IconButton>

      {open && (
        <>
          {/* Backdrop */}
          <Box
            onClick={() => setOpen(false)}
            sx={{ position: "fixed", inset: 0, zIndex: 999 }}
          />
          {/* Menu */}
          <Box
            sx={{
              position: "absolute",
              top: 32,
              right: 0,
              zIndex: 1000,
              bgcolor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              border: "1px solid #E5E7EB",
              minWidth: 140,
              py: 0.5,
            }}
          >
            <Box
              onClick={handleCopy}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 1.5,
                py: 1,
                fontSize: "13px",
                color: "#374151",
                cursor: "pointer",
                "&:hover": { bgcolor: "#F3F4F6" },
              }}
            >
              <Copy size={14} color="#6B7280" />
              Copy
            </Box>
            <Box
              onClick={handleDelete}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 1.5,
                py: 1,
                fontSize: "13px",
                color: "#DC2626",
                cursor: "pointer",
                "&:hover": { bgcolor: "#FEF2F2" },
              }}
            >
              <Trash size={14} color="#DC2626" />
              Delete
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}
