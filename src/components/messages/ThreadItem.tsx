"use client";

import { useState } from "react";
import { Box, Avatar, IconButton } from "@willow/ui-kit";
import { OptionsVertical } from "@willow/icons";
import type { Thread } from "./mockData";
import { currentUserId, getThreadDisplayName, getThreadAvatar, formatThreadTime } from "./mockData";

interface ThreadItemProps {
  thread: Thread;
  selected: boolean;
  onClick: () => void;
  onMessage: (userId: string) => void;
  onArchive: () => void;
  onUnarchive: () => void;
  onDelete: () => void;
  onMarkUnread: () => void;
}

export default function ThreadItem({ thread, selected, onClick, onMessage, onArchive, onUnarchive, onDelete, onMarkUnread }: ThreadItemProps) {
  const [menuOpen, setMenuOpen] = useState(false);
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
        "&:hover .archive-btn": {
          opacity: 1,
        },
        position: "relative",
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, flexShrink: 0 }}>
            <Box
              sx={{
                fontSize: "12px",
                color: thread.unreadCount > 0 ? "#4C6A66" : "#9CA3AF",
                whiteSpace: "nowrap",
              }}
            >
              {timeLabel}
            </Box>
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, flexShrink: 0 }}>
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
                }}
              >
                {thread.unreadCount}
              </Box>
            )}
            <Box sx={{ position: "relative" }}>
              <IconButton
                className="archive-btn"
                variant="ghost"
                size="sm"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  setMenuOpen(!menuOpen);
                }}
                sx={{
                  opacity: menuOpen ? 1 : 0,
                  transition: "opacity 0.15s ease",
                  width: 24,
                  height: 24,
                  minWidth: 24,
                }}
                title="Options"
              >
                <OptionsVertical size={14} color="#6B7280" />
              </IconButton>

              {menuOpen && (
                <>
                  <Box
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      setMenuOpen(false);
                    }}
                    sx={{ position: "fixed", inset: 0, zIndex: 999 }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 28,
                      right: 0,
                      zIndex: 1000,
                      bgcolor: "#FFFFFF",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                      border: "1px solid #E5E7EB",
                      minWidth: 160,
                      py: 0.5,
                    }}
                  >
                    {[
                      {
                        label: thread.archived ? "Unarchive" : "Archive",
                        onClick: () => { thread.archived ? onUnarchive() : onArchive(); setMenuOpen(false); },
                      },
                      {
                        label: "Delete",
                        onClick: () => { onDelete(); setMenuOpen(false); },
                      },
                      {
                        label: "Mark unread",
                        onClick: () => { onMarkUnread(); setMenuOpen(false); },
                      },
                    ].map((item) => (
                      <Box
                        key={item.label}
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          item.onClick();
                        }}
                        sx={{
                          px: 1.5,
                          py: 1,
                          fontSize: "13px",
                          color: item.label === "Delete" ? "#DC2626" : "#374151",
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
