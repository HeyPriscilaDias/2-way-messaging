"use client";

import { Box, Avatar } from "@willow/ui-kit";
import { MessageCircleReply } from "lucide-react";
// TODO: Move blast.svg into @willow/icons and import as `import { Blast } from "@willow/icons"` for final build
const BlastIcon = ({ size = 24, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 14H18M6 14V21.5556C6 21.6734 6.05268 21.7865 6.14645 21.8698C6.24021 21.9532 6.36739 22 6.5 22H17.5C17.6326 22 17.7598 21.9532 17.8536 21.8698C17.9473 21.7865 18 21.6734 18 21.5556V14M6 14L12 18.8889L18 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0503 4.79289L12.1716 2.67157M12.1716 2.67157L14.2929 4.79289M12.1716 2.67157V8.32843" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 7.5L19 7.5M19 7.5L19 10.5M19 7.5L15 11.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 10.5L5 7.5M5 7.5L8 7.5M5 7.5L9 11.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
import type { Blast, Message } from "./mockData";
import { users, formatMessageTime } from "./mockData";

interface BlastDetailViewProps {
  blast: Blast;
  allMessages: Message[];
  onNavigateToThread: (userId: string) => void;
}

export default function BlastDetailView({ blast, allMessages, onNavigateToThread }: BlastDetailViewProps) {
  // Build a set of recipient IDs who have replied to this blast
  const repliedUserIds = new Set(
    allMessages
      .filter((m) => m.blastReplyMeta?.originalBlastId === blast.id)
      .map((m) => m.senderId)
  );

  const timeLabel = formatMessageTime(blast.timestamp);
  const dateLabel = blast.timestamp.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

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
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            bgcolor: "#F0F7F6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <BlastIcon size={18} color="#4C6A66" />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ fontSize: "15px", fontWeight: 600, color: "#062F29" }}>
            Blast details
          </Box>
          <Box sx={{ fontSize: "12px", color: "#6B7280" }}>
            {dateLabel} at {timeLabel}
          </Box>
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1, overflowY: "auto", py: 2 }}>
        {/* Blast message */}
        <Box sx={{ px: 2, mb: 3 }}>
          <Box sx={{ fontSize: "11px", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", mb: 1 }}>
            Message
          </Box>
          <Box
            sx={{
              px: 2,
              py: 1.5,
              borderRadius: "12px",
              bgcolor: "#F9FAFB",
              border: "1px solid #E5E7EB",
              fontSize: "14px",
              lineHeight: 1.6,
              color: "#1F2937",
            }}
          >
            {blast.text}
          </Box>
        </Box>

        {/* Recipients */}
        <Box sx={{ px: 2 }}>
          <Box sx={{ fontSize: "11px", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", mb: 1 }}>
            Recipients ({blast.recipientIds.length})
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {blast.recipientIds.map((userId) => {
              const user = users[userId];
              if (!user) return null;
              const hasReplied = repliedUserIds.has(userId);

              return (
                <Box
                  key={userId}
                  onClick={hasReplied ? () => onNavigateToThread(userId) : undefined}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 1.5,
                    py: 1,
                    borderRadius: "8px",
                    cursor: hasReplied ? "pointer" : "default",
                    transition: "background-color 0.15s ease",
                    "&:hover": {
                      bgcolor: hasReplied ? "#F0F7F6" : "transparent",
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: user.avatarColor,
                      fontSize: "12px",
                      fontWeight: 500,
                      flexShrink: 0,
                    }}
                  >
                    {user.initials}
                  </Avatar>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Box sx={{ fontSize: "13px", fontWeight: 500, color: "#062F29" }}>
                      {user.name}
                    </Box>
                    {user.grade && (
                      <Box sx={{ fontSize: "11px", color: "#9CA3AF" }}>
                        {user.grade}
                      </Box>
                    )}
                  </Box>
                  {hasReplied ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        px: 1,
                        py: 0.25,
                        borderRadius: "12px",
                        bgcolor: "#F0F7F6",
                        fontSize: "11px",
                        fontWeight: 500,
                        color: "#4C6A66",
                        flexShrink: 0,
                      }}
                    >
                      <MessageCircleReply size={12} />
                      Replied
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        fontSize: "11px",
                        color: "#D1D5DB",
                        flexShrink: 0,
                      }}
                    >
                      No reply
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
