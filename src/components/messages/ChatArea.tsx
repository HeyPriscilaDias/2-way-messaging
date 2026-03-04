"use client";

import { useEffect, useRef } from "react";
import { Box, Avatar } from "@willow/ui-kit";
import type { Thread, Message } from "./mockData";
import { users, currentUserId, getThreadDisplayName, getThreadAvatar, getDateLabel } from "./mockData";
import MessageBubble from "./MessageBubble";
import DateSeparator from "./DateSeparator";
import MessageInput from "./MessageInput";

interface ChatAreaProps {
  thread: Thread | null;
  messages: Message[];
  inputValue: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  onDeleteMessage: (messageId: string) => void;
}

export default function ChatArea({
  thread,
  messages,
  inputValue,
  onInputChange,
  onSend,
  onDeleteMessage,
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
            {otherUser.online && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: 9,
                  height: 9,
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
        <Box>
          <Box sx={{ fontSize: "15px", fontWeight: 600, color: "#062F29" }}>
            {displayName}
          </Box>
          {otherUser?.online && (
            <Box sx={{ fontSize: "12px", color: "#22C55E" }}>Online</Box>
          )}
          {thread.groupName && (
            <Box sx={{ fontSize: "12px", color: "#6B7280" }}>
              {thread.participants.length} members
            </Box>
          )}
        </Box>
      </Box>

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
