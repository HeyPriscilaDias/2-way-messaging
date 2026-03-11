"use client";

import { Box, IconButton } from "@willow/ui-kit";
import { Search, Edit, ArrowLeft } from "@willow/icons";
// TODO: Move blast.svg into @willow/icons and import as `import { Blast } from "@willow/icons"` for final build
const BlastIcon = ({ size = 24, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 14H18M6 14V21.5556C6 21.6734 6.05268 21.7865 6.14645 21.8698C6.24021 21.9532 6.36739 22 6.5 22H17.5C17.6326 22 17.7598 21.9532 17.8536 21.8698C17.9473 21.7865 18 21.6734 18 21.5556V14M6 14L12 18.8889L18 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0503 4.79289L12.1716 2.67157M12.1716 2.67157L14.2929 4.79289M12.1716 2.67157V8.32843" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 7.5L19 7.5M19 7.5L19 10.5M19 7.5L15 11.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 10.5L5 7.5M5 7.5L8 7.5M5 7.5L9 11.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
import type { Thread, Blast } from "./mockData";
import { formatThreadTime } from "./mockData";
import ThreadItem from "./ThreadItem";
import ThreadOptionsMenu from "./ThreadOptionsMenu";

export type CategoryTab = "direct" | "groups" | "blasts" | "unread" | "archived";

interface ThreadListProps {
  threads: Thread[];
  blasts: Blast[];
  selectedThreadId: string | null;
  selectedBlastId: string | null;
  searchQuery: string;
  categoryTab: CategoryTab;
  onSelectThread: (threadId: string) => void;
  onSelectBlast: (blastId: string) => void;
  onSearchChange: (query: string) => void;
  onCategoryChange: (tab: CategoryTab) => void;
  onMarkAllRead: () => void;
  onNewMessage: () => void;
  onMessage: (userId: string) => void;
  onArchiveThread: (threadId: string) => void;
  onUnarchiveThread: (threadId: string) => void;
  onDeleteThread: (threadId: string) => void;
  onMarkThreadUnread: (threadId: string) => void;
}

const tabs: { key: CategoryTab; label: string }[] = [
  { key: "direct", label: "Direct" },
  { key: "groups", label: "Groups" },
  { key: "blasts", label: "Blasts" },
  { key: "unread", label: "Unread" },
];

export default function ThreadList({
  threads,
  blasts,
  selectedThreadId,
  selectedBlastId,
  searchQuery,
  categoryTab,
  onSelectThread,
  onSelectBlast,
  onSearchChange,
  onCategoryChange,
  onMarkAllRead,
  onNewMessage,
  onMessage,
  onArchiveThread,
  onUnarchiveThread,
  onDeleteThread,
  onMarkThreadUnread,
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

      {/* Thread / Blast list */}
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        {categoryTab === "blasts" ? (
          (() => {
            const filteredBlasts = blasts
              .filter((b) => {
                if (!searchQuery.trim()) return true;
                return b.text.toLowerCase().includes(searchQuery.toLowerCase());
              })
              .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

            if (filteredBlasts.length === 0) {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    fontSize: "13px",
                    color: "#9CA3AF",
                    gap: 0.5,
                    px: 3,
                    textAlign: "center",
                  }}
                >
                  {searchQuery.trim() ? (
                    <>
                      <Search size={20} color="#D1D5DB" />
                      No results for &ldquo;{searchQuery}&rdquo;
                    </>
                  ) : (
                    "No blasts sent"
                  )}
                </Box>
              );
            }

            return filteredBlasts.map((blast) => (
                <Box
                  key={blast.id}
                  onClick={() => onSelectBlast(blast.id)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2,
                    py: 1.5,
                    cursor: "pointer",
                    bgcolor: blast.id === selectedBlastId ? "#F0F7F6" : "transparent",
                    borderLeft: blast.id === selectedBlastId ? "3px solid #4C6A66" : "3px solid transparent",
                    transition: "background-color 0.15s ease",
                    "&:hover": {
                      bgcolor: blast.id === selectedBlastId ? "#F0F7F6" : "#F9FAFB",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      bgcolor: "#F0F7F6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <BlastIcon size={16} color="#4C6A66" />
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.25 }}>
                      <Box
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#062F29",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          flex: 1,
                          mr: 1,
                        }}
                      >
                        {blast.recipientIds.length} {blast.recipientIds.length === 1 ? "recipient" : "recipients"}
                      </Box>
                      <Box sx={{ fontSize: "12px", color: "#9CA3AF", whiteSpace: "nowrap", flexShrink: 0 }}>
                        {formatThreadTime(blast.timestamp)}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "13px",
                        color: "#6B7280",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {blast.text}
                    </Box>
                  </Box>
                </Box>
              ));
          })()
        ) : threads.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              fontSize: "13px",
              color: "#9CA3AF",
              gap: 0.5,
              px: 3,
              textAlign: "center",
            }}
          >
            {searchQuery.trim() ? (
              <>
                <Search size={20} color="#D1D5DB" />
                No results for &ldquo;{searchQuery}&rdquo;
              </>
            ) : isArchived ? (
              "No archived conversations"
            ) : (
              "No conversations found"
            )}
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
              onDelete={() => onDeleteThread(thread.id)}
              onMarkUnread={() => onMarkThreadUnread(thread.id)}
            />
          ))
        )}
      </Box>
    </Box>
  );
}
