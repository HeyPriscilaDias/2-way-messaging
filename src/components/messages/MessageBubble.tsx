"use client";

import { useState } from "react";
import { Box, Avatar } from "@willow/ui-kit";
import type { Message } from "./mockData";
import { users, currentUserId, formatMessageTime } from "./mockData";
import MessageActionMenu from "./MessageActionMenu";
import StudentProfileCard from "./StudentProfileCard";

interface MessageBubbleProps {
  message: Message;
  onDelete: (messageId: string) => void;
  onMessage: (userId: string) => void;
}

export default function MessageBubble({ message, onDelete, onMessage }: MessageBubbleProps) {
  const [hovered, setHovered] = useState(false);
  const isOutgoing = message.senderId === currentUserId;
  const sender = users[message.senderId];
  const timeLabel = formatMessageTime(message.timestamp);

  if (message.deleted) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 1,
          px: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.75,
            fontSize: "13px",
            color: "#9CA3AF",
            fontStyle: "italic",
          }}
        >
          <Box
            sx={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              border: "1.5px solid #9CA3AF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10px",
              lineHeight: 1,
            }}
          >
            ⊘
          </Box>
          This message was deleted
        </Box>
      </Box>
    );
  }

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        display: "flex",
        justifyContent: isOutgoing ? "flex-end" : "flex-start",
        alignItems: "flex-end",
        gap: 1,
        px: 2,
        py: 0.5,
        position: "relative",
      }}
    >
      {/* Avatar for incoming messages */}
      {!isOutgoing && sender && (
        <Avatar
          sx={{
            width: 28,
            height: 28,
            bgcolor: sender.avatarColor,
            fontSize: "11px",
            fontWeight: 500,
            flexShrink: 0,
          }}
        >
          {sender.initials}
        </Avatar>
      )}

      <Box sx={{ maxWidth: "65%", position: "relative" }}>
        {/* Sender name for incoming */}
        {!isOutgoing && sender && (
          <Box sx={{ fontSize: "12px", fontWeight: 500, color: "#6B7280", mb: 0.25, ml: 0.5 }}>
            <StudentProfileCard user={sender} onMessage={onMessage}>
              {sender.name}
            </StudentProfileCard>
          </Box>
        )}

        {/* Bubble */}
        <Box
          sx={{
            px: 1.75,
            py: 1,
            borderRadius: isOutgoing ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
            bgcolor: isOutgoing ? "#4C6A66" : "#F0F1F3",
            color: isOutgoing ? "#FFFFFF" : "#1F2937",
            fontSize: "14px",
            lineHeight: 1.5,
            wordBreak: "break-word",
          }}
        >
          {message.text}
        </Box>

        {/* Time */}
        <Box
          sx={{
            fontSize: "11px",
            color: "#9CA3AF",
            mt: 0.25,
            textAlign: isOutgoing ? "right" : "left",
            px: 0.5,
          }}
        >
          {timeLabel}
        </Box>

        {/* Action menu on hover */}
        {hovered && (
          <Box
            sx={{
              position: "absolute",
              top: isOutgoing ? 0 : 16,
              [isOutgoing ? "left" : "right"]: -36,
            }}
          >
            <MessageActionMenu
              onDelete={() => onDelete(message.id)}
              messageText={message.text}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
