"use client";

import { Box, IconButton } from "@willow/ui-kit";
import { Search, Edit, ArrowLeft } from "@willow/icons";
import type { Thread } from "./mockData";
import ThreadItem from "./ThreadItem";
import ThreadOptionsMenu from "./ThreadOptionsMenu";

export type CategoryTab = "direct" | "groups" | "blasts" | "unread" | "archived";

interface ThreadListProps {
  threads: Thread[];
  selectedThreadId: string | null;
  searchQuery: string;
  categoryTab: CategoryTab;
  onSelectThread: (threadId: string) => void;
  onSearchChange: (query: string) => void;
  onCategoryChange: (tab: CategoryTab) => void;
  onMarkAllRead: () => void;
  onNewMessage: () => void;
  onMessage: (userId: string) => void;
  onArchiveThread: (threadId: string) => void;
  onUnarchiveThread: (threadId: string) => void;
}

const tabs: { key: CategoryTab; label: string }[] = [
  { key: "direct", label: "Direct" },
  { key: "groups", label: "Groups" },
  { key: "blasts", label: "Blasts" },
  { key: "unread", label: "Unread" },
];

export default function ThreadList({
  threads,
  selectedThreadId,
  searchQuery,
  categoryTab,
  onSelectThread,
  onSearchChange,
  onCategoryChange,
  onMarkAllRead,
  onNewMessage,
  onMessage,
  onArchiveThread,
  onUnarchiveThread,
}: ThreadListProps) {
  const isArchived = categoryTab === "archived";

  return (
    <Box
      sx={{
        width: 360,
        flexShrink: 0,
        borderRight: "1px solid #E5E7EB",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1.5,
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        {isArchived ? (
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <IconButton
                variant="ghost"
                size="sm"
                onClick={() => onCategoryChange("direct")}
              >
                <ArrowLeft size={18} color="#6B7280" />
              </IconButton>
              <Box sx={{ fontSize: "18px", fontWeight: 600, color: "#062F29" }}>
                Archived
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ fontSize: "18px", fontWeight: 600, color: "#062F29" }}>
              Messages
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <IconButton variant="ghost" size="sm" onClick={onNewMessage}>
                <Edit size={18} color="#6B7280" />
              </IconButton>
              <ThreadOptionsMenu
                onMarkAllRead={onMarkAllRead}
                onViewArchived={() => onCategoryChange("archived")}
              />
            </Box>
          </>
        )}
      </Box>

      {/* Search */}
      <Box sx={{ px: 2, py: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            bgcolor: "#F3F4F6",
            borderRadius: "8px",
            px: 1.5,
            py: 0.75,
          }}
        >
          <Search size={16} color="#9CA3AF" />
          <Box
            component="input"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)}
            placeholder={isArchived ? "Search archived" : "Search messages"}
            sx={{
              flex: 1,
              border: "none",
              outline: "none",
              bgcolor: "transparent",
              fontSize: "13px",
              color: "#1F2937",
              "&::placeholder": { color: "#9CA3AF" },
            }}
          />
        </Box>
      </Box>

      {/* Category tabs — hidden in archived view */}
      {!isArchived && (
        <Box
          sx={{
            display: "flex",
            px: 2,
            gap: 0.5,
            pb: 1,
            overflowX: "auto",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {tabs.map((tab) => (
            <Box
              key={tab.key}
              onClick={() => onCategoryChange(tab.key)}
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: "16px",
                fontSize: "12px",
                fontWeight: 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
                bgcolor: categoryTab === tab.key ? "#062F29" : "#F3F4F6",
                color: categoryTab === tab.key ? "#FFFFFF" : "#6B7280",
                transition: "all 0.15s ease",
                "&:hover": {
                  bgcolor: categoryTab === tab.key ? "#062F29" : "#E5E7EB",
                },
              }}
            >
              {tab.label}
            </Box>
          ))}
        </Box>
      )}

      {/* Thread list */}
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        {threads.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              fontSize: "13px",
              color: "#9CA3AF",
            }}
          >
            {isArchived ? "No archived conversations" : "No conversations found"}
          </Box>
        ) : (
          threads.map((thread) => (
            <ThreadItem
              key={thread.id}
              thread={thread}
              selected={thread.id === selectedThreadId}
              onClick={() => onSelectThread(thread.id)}
              onMessage={onMessage}
              onArchive={() => onArchiveThread(thread.id)}
              onUnarchive={() => onUnarchiveThread(thread.id)}
            />
          ))
        )}
      </Box>
    </Box>
  );
}
