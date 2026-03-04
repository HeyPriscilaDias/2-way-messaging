"use client";

import { Box, IconButton } from "@willow/ui-kit";
import { Smiley, Paperclip } from "@willow/icons";
import { Send } from "lucide-react";

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export default function MessageInput({ value, onChange, onSend }: MessageInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        gap: 1,
        px: 2,
        py: 1.5,
        borderTop: "1px solid #E5E7EB",
      }}
    >
      <IconButton variant="ghost" size="sm" sx={{ flexShrink: 0 }}>
        <Smiley size={20} color="#6B7280" />
      </IconButton>
      <IconButton variant="ghost" size="sm" sx={{ flexShrink: 0 }}>
        <Paperclip size={20} color="#6B7280" />
      </IconButton>

      <Box
        component="input"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        sx={{
          flex: 1,
          border: "1px solid #E5E7EB",
          borderRadius: "20px",
          px: 2,
          py: 1,
          fontSize: "14px",
          outline: "none",
          color: "#1F2937",
          bgcolor: "#F9FAFB",
          "&:focus": {
            borderColor: "#4C6A66",
            bgcolor: "#FFFFFF",
          },
          "&::placeholder": {
            color: "#9CA3AF",
          },
        }}
      />

      <IconButton
        variant="ghost"
        size="sm"
        onClick={onSend}
        sx={{
          flexShrink: 0,
          color: value.trim() ? "#4C6A66" : "#D1D5DB",
        }}
      >
        <Send size={20} />
      </IconButton>
    </Box>
  );
}
