"use client";

import { Box, Avatar } from "@willow/ui-kit";
import type { Thread } from "./mockData";
import { users, currentUserId, getThreadDisplayName, getThreadAvatar, formatThreadTime } from "./mockData";

interface ThreadItemProps {
  thread: Thread;
  selected: boolean;
  onClick: () => void;
}

export default function ThreadItem({ thread, selected, onClick }: ThreadItemProps) {
  const displayName = getThreadDisplayName(thread, currentUserId);
  const otherUser = getThreadAvatar(thread, currentUserId);
  const timeLabel = formatThreadTime(thread.lastMessageTime);

  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 2,
        py: 1.5,
        cursor: "pointer",
        bgcolor: selected ? "#F0F7F6" : "transparent",
        borderLeft: selected ? "3px solid #4C6A66" : "3px solid transparent",
        transition: "background-color 0.15s ease",
        "&:hover": {
          bgcolor: selected ? "#F0F7F6" : "#F9FAFB",
        },
      }}
    >
      {/* Avatar */}
      {otherUser ? (
        <Box sx={{ position: "relative", flexShrink: 0 }}>
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: otherUser.avatarColor,
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {otherUser.initials}
          </Avatar>
          {otherUser.online && (
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: "#22C55E",
                border: "2px solid #FFFFFF",
              }}
            />
          )}
        </Box>
      ) : (
        <Avatar
          sx={{
            width: 40,
            height: 40,
            bgcolor: "#4C6A66",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          {thread.groupName?.[0] ?? "G"}
        </Avatar>
      )}

      {/* Content */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.25 }}>
          <Box
            sx={{
              fontSize: "14px",
              fontWeight: thread.unreadCount > 0 ? 600 : 400,
              color: "#062F29",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flex: 1,
              mr: 1,
            }}
          >
            {displayName}
          </Box>
          <Box
            sx={{
              fontSize: "12px",
              color: thread.unreadCount > 0 ? "#4C6A66" : "#9CA3AF",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {timeLabel}
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box
            sx={{
              fontSize: "13px",
              color: "#6B7280",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flex: 1,
              mr: 1,
            }}
          >
            {thread.lastMessage}
          </Box>
          {thread.unreadCount > 0 && (
            <Box
              sx={{
                minWidth: 20,
                height: 20,
                borderRadius: "10px",
                bgcolor: "#4C6A66",
                color: "#FFFFFF",
                fontSize: "11px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 0.5,
                flexShrink: 0,
              }}
            >
              {thread.unreadCount}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
