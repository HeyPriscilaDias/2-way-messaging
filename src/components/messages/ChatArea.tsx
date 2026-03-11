"use client";

import { useEffect, useRef } from "react";
import { Box, Avatar, IconButton } from "@willow/ui-kit";
import type { Thread, Message } from "./mockData";
import { currentUserId, getThreadDisplayName, getThreadAvatar, getDateLabel } from "./mockData";
import MessageBubble from "./MessageBubble";
import DateSeparator from "./DateSeparator";
import MessageInput from "./MessageInput";
import ArchiveIcon from "./ArchiveIcon";

interface ChatAreaProps {
  thread: Thread | null;
  messages: Message[];
  inputValue: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  onRetrySend: (messageId: string) => void;
  onDeleteMessage: (messageId: string) => void;
  onMessage: (userId: string) => void;
  onArchiveThread: (threadId: string) => void;
  onUnarchiveThread: (threadId: string) => void;
}

export default function ChatArea({
  thread,
  messages,
  inputValue,
  onInputChange,
  onSend,
  onRetrySend,
  onDeleteMessage,
  onMessage,
  onArchiveThread,
  onUnarchiveThread,
}: ChatAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages.length]);

  if (!thread) {
    return (
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#9CA3AF",
          fontSize: "15px",
        }}
      >
        Select a conversation to start messaging
      </Box>
    );
  }

  const displayName = getThreadDisplayName(thread, currentUserId);
  const otherUser = getThreadAvatar(thread, currentUserId);

  // Group messages by date
  const messagesWithSeparators: (Message | { type: "separator"; label: string; key: string })[] = [];
  let lastDateLabel = "";
  for (const msg of messages) {
    const dateLabel = getDateLabel(msg.timestamp);
    if (dateLabel !== lastDateLabel) {
      messagesWithSeparators.push({ type: "separator", label: dateLabel, key: `sep-${dateLabel}` });
      lastDateLabel = dateLabel;
    }
    messagesWithSeparators.push(msg);
  }

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", height: "100%", minWidth: 0 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: 2,
          py: 1.5,
          borderBottom: "1px solid #E5E7EB",
          flexShrink: 0,
        }}
      >
        {otherUser ? (
          <Box sx={{ position: "relative", flexShrink: 0 }}>
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: otherUser.avatarColor,
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              {otherUser.initials}
            </Avatar>
          </Box>
        ) : (
          <Avatar
            sx={{
              width: 36,
              height: 36,
              bgcolor: "#4C6A66",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            {thread.groupName?.[0] ?? "G"}
          </Avatar>
        )}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ fontSize: "15px", fontWeight: 600, color: "#062F29" }}>
            {displayName}
          </Box>
          {thread.groupName && (
            <Box sx={{ fontSize: "12px", color: "#6B7280" }}>
              {thread.participants.length} members
            </Box>
          )}
        </Box>
        <IconButton
          variant="ghost"
          size="sm"
          onClick={() =>
            thread.archived
              ? onUnarchiveThread(thread.id)
              : onArchiveThread(thread.id)
          }
          title={thread.archived ? "Unarchive conversation" : "Archive conversation"}
          sx={{
            flexShrink: 0,
            ...(thread.archived && { transform: "rotate(180deg)" }),
          }}
        >
          <ArchiveIcon size={18} style={{ color: "#6B7280" }} />
        </IconButton>
      </Box>

      {/* Archived banner */}
      {thread.archived && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            px: 2,
            py: 1,
            bgcolor: "#FEF9C3",
            borderBottom: "1px solid #FDE68A",
          }}
        >
          <ArchiveIcon size={14} style={{ color: "#92400E", flexShrink: 0 }} />
          <Box sx={{ fontSize: "12px", color: "#92400E", fontWeight: 500 }}>
            This conversation is archived.
          </Box>
          <Box
            component="button"
            onClick={() => onUnarchiveThread(thread.id)}
            sx={{
              border: "none",
              bgcolor: "transparent",
              color: "#92400E",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "underline",
              p: 0,
              "&:hover": { color: "#78350F" },
            }}
          >
            Unarchive
          </Box>
        </Box>
      )}

      {/* Messages */}
      <Box
        ref={scrollRef}
        sx={{
          flex: 1,
          overflowY: "auto",
          py: 1,
        }}
      >
        {messagesWithSeparators.map((item) => {
          if ("type" in item && item.type === "separator") {
            return <DateSeparator key={item.key} label={item.label} />;
          }
          const msg = item as Message;
          return (
            <MessageBubble
              key={msg.id}
              message={msg}
              onDelete={onDeleteMessage}
              onRetrySend={onRetrySend}
              onMessage={onMessage}
            />
          );
        })}
      </Box>

      {/* Input */}
      <MessageInput
        value={inputValue}
        onChange={onInputChange}
        onSend={onSend}
      />
    </Box>
  );
}
