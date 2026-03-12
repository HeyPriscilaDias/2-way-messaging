"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Box, Avatar, IconButton } from "@willow/ui-kit";
import { X, Edit, Trash, Users, Search, ArrowLeft, Check } from "@willow/icons";
import type { Thread, Message } from "./mockData";
import { currentUserId, users, getStudents, getThreadDisplayName, getThreadAvatar, getDateLabel } from "./mockData";
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
  onDeleteThread: (threadId: string) => void;
  onRenameThread: (threadId: string, newName: string) => void;
  onUpdateMembers: (threadId: string, newParticipantIds: string[]) => void;
}

// Design: Group actions use a multi-view dialog (actions → rename, actions → members) rather than
// separate modals. This keeps the interaction contained and allows back-navigation within one dialog.
type DialogView = "actions" | "rename" | "members";

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
  onDeleteThread,
  onRenameThread,
  onUpdateMembers,
}: ChatAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [actionsOpen, setActionsOpen] = useState(false);
  const [dialogView, setDialogView] = useState<DialogView>("actions");
  const [renameValue, setRenameValue] = useState("");
  const [memberSearch, setMemberSearch] = useState("");
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const allStudents = useMemo(() => getStudents(), []);

  // Prototype: Auto-scroll always jumps to bottom on new messages.
  // TODO(agent): Only auto-scroll if the user is already near the bottom — preserve scroll position when reading history.
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages.length]);

  // Close dialog when thread changes
  useEffect(() => {
    setActionsOpen(false);
    setDialogView("actions");
  }, [thread?.id]);

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
  const isGroup = thread.type === "group";

  // Build comma-separated member names for group threads
  const memberNamesList = isGroup
    ? thread.participants
        .filter((id) => id !== currentUserId)
        .map((id) => users[id]?.name ?? "Unknown")
        .join(", ")
    : "";

  const handleOpenActions = () => {
    setActionsOpen(true);
    setDialogView("actions");
    setRenameValue(thread.groupName || "");
  };

  const handleCloseActions = () => {
    setActionsOpen(false);
    setDialogView("actions");
    setMemberSearch("");
  };

  const handleStartRename = () => {
    setDialogView("rename");
    setRenameValue(thread.groupName || "");
  };

  const handleConfirmRename = () => {
    const trimmed = renameValue.trim();
    if (trimmed && trimmed !== thread.groupName) {
      onRenameThread(thread.id, trimmed);
    }
    handleCloseActions();
  };

  const handleCancelRename = () => {
    setDialogView("actions");
    setRenameValue(thread.groupName || "");
  };

  const handleOpenMembers = () => {
    setDialogView("members");
    setMemberSearch("");
    // Pre-select current members (excluding counselor)
    setSelectedMembers(thread.participants.filter((id) => id !== currentUserId));
  };

  const handleBackFromMembers = () => {
    setDialogView("actions");
    setMemberSearch("");
  };

  const toggleMember = (userId: string) => {
    setSelectedMembers((prev) =>
      prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
    );
  };

  const handleConfirmMembers = () => {
    const newParticipants = [currentUserId, ...selectedMembers];
    onUpdateMembers(thread.id, newParticipants);
    handleCloseActions();
  };

  const filteredStudents = useMemo(() => {
    if (!memberSearch.trim()) return allStudents;
    const query = memberSearch.toLowerCase();
    return allStudents.filter((s) => s.name.toLowerCase().includes(query));
  }, [allStudents, memberSearch]);

  // Check if member selection changed from current state
  const currentMemberSet = new Set(thread.participants.filter((id) => id !== currentUserId));
  const selectedMemberSet = new Set(selectedMembers);
  const membersChanged =
    currentMemberSet.size !== selectedMemberSet.size ||
    [...currentMemberSet].some((id) => !selectedMemberSet.has(id));

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
          // Design: Group conversations display a Users icon rather than initials to visually distinguish them from 1:1 threads.
          <Avatar
            sx={{
              width: 36,
              height: 36,
              bgcolor: "#4C6A66",
            }}
          >
            <Users size={18} color="#FFFFFF" />
          </Avatar>
        )}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {isGroup ? (
            <Box
              onClick={handleOpenActions}
              sx={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#062F29",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {displayName}
            </Box>
          ) : (
            <Box sx={{ fontSize: "15px", fontWeight: 600, color: "#062F29" }}>
              {displayName}
            </Box>
          )}
          {isGroup && (
            <Box
              sx={{
                fontSize: "12px",
                color: "#6B7280",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {thread.participants.length} members &middot; {memberNamesList}
            </Box>
          )}
        </Box>
      </Box>

      {/* Group actions dialog */}
      {actionsOpen && (
        <>
          {/* Backdrop */}
          <Box
            onClick={handleCloseActions}
            sx={{
              position: "fixed",
              inset: 0,
              bgcolor: "rgba(0, 0, 0, 0.3)",
              zIndex: 1200,
            }}
          />
          {/* Dialog */}
          <Box
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: dialogView === "members" ? 400 : 360,
              maxHeight: dialogView === "members" ? 520 : undefined,
              bgcolor: "#FFFFFF",
              borderRadius: "12px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.16)",
              zIndex: 1300,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Dialog header */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                py: 1.5,
                borderBottom: "1px solid #E5E7EB",
                flexShrink: 0,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {dialogView !== "actions" && (
                  <IconButton
                    variant="ghost"
                    size="sm"
                    onClick={dialogView === "members" ? handleBackFromMembers : handleCancelRename}
                  >
                    <ArrowLeft size={18} color="#6B7280" />
                  </IconButton>
                )}
                <Box sx={{ fontSize: "16px", fontWeight: 600, color: "#062F29" }}>
                  {dialogView === "members"
                    ? "Members"
                    : dialogView === "rename"
                    ? "Group options"
                    : "Group options"}
                </Box>
              </Box>
              <IconButton variant="ghost" size="sm" onClick={handleCloseActions}>
                <X size={18} color="#6B7280" />
              </IconButton>
            </Box>

            {/* Dialog body */}
            {dialogView === "actions" && (
              <Box sx={{ py: 0.5 }}>
                {/* Members */}
                <Box
                  onClick={handleOpenMembers}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2,
                    py: 1.25,
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#F9FAFB" },
                  }}
                >
                  <Users size={18} color="#6B7280" />
                  <Box sx={{ fontSize: "14px", color: "#062F29" }}>Members</Box>
                </Box>

                {/* Rename */}
                <Box
                  onClick={handleStartRename}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2,
                    py: 1.25,
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#F9FAFB" },
                  }}
                >
                  <Edit size={18} color="#6B7280" />
                  <Box sx={{ fontSize: "14px", color: "#062F29" }}>Rename group</Box>
                </Box>

                {/* Archive */}
                <Box
                  onClick={() => {
                    if (thread.archived) {
                      onUnarchiveThread(thread.id);
                    } else {
                      onArchiveThread(thread.id);
                    }
                    handleCloseActions();
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2,
                    py: 1.25,
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#F9FAFB" },
                  }}
                >
                  <ArchiveIcon size={18} style={{ color: "#6B7280" }} />
                  <Box sx={{ fontSize: "14px", color: "#062F29" }}>
                    {thread.archived ? "Unarchive thread" : "Archive thread"}
                  </Box>
                </Box>

                {/* Delete */}
                <Box
                  onClick={() => {
                    onDeleteThread(thread.id);
                    handleCloseActions();
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2,
                    py: 1.25,
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#FEF2F2" },
                  }}
                >
                  <Trash size={18} color="#DC2626" />
                  <Box sx={{ fontSize: "14px", color: "#DC2626" }}>Delete group</Box>
                </Box>
              </Box>
            )}

            {dialogView === "rename" && (
              <Box sx={{ px: 2, py: 1.5 }}>
                <Box sx={{ fontSize: "13px", fontWeight: 500, color: "#062F29", mb: 1 }}>
                  Rename group
                </Box>
                <Box
                  component="input"
                  value={renameValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRenameValue(e.target.value)
                  }
                  onKeyDown={(e: React.KeyboardEvent) => {
                    if (e.key === "Enter") handleConfirmRename();
                    if (e.key === "Escape") handleCancelRename();
                  }}
                  autoFocus
                  sx={{
                    width: "100%",
                    border: "1px solid #4C6A66",
                    borderRadius: "8px",
                    px: 1.5,
                    py: 0.75,
                    fontSize: "14px",
                    color: "#1F2937",
                    outline: "none",
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                    "&::placeholder": { color: "#9CA3AF" },
                  }}
                />
                <Box sx={{ display: "flex", gap: 1, mt: 1.5, justifyContent: "flex-end" }}>
                  <Box
                    component="button"
                    onClick={handleCancelRename}
                    sx={{
                      border: "1px solid #E5E7EB",
                      borderRadius: "8px",
                      bgcolor: "#FFFFFF",
                      color: "#6B7280",
                      fontSize: "13px",
                      fontWeight: 500,
                      px: 2,
                      py: 0.5,
                      cursor: "pointer",
                      "&:hover": { bgcolor: "#F9FAFB" },
                    }}
                  >
                    Cancel
                  </Box>
                  <Box
                    component="button"
                    onClick={handleConfirmRename}
                    sx={{
                      border: "none",
                      borderRadius: "8px",
                      bgcolor: "#062F29",
                      color: "#FFFFFF",
                      fontSize: "13px",
                      fontWeight: 500,
                      px: 2,
                      py: 0.5,
                      cursor: "pointer",
                      "&:hover": { bgcolor: "#0A4A3F" },
                    }}
                  >
                    Save
                  </Box>
                </Box>
              </Box>
            )}

            {dialogView === "members" && (
              <>
                {/* Search */}
                <Box sx={{ px: 2, py: 1.5, flexShrink: 0 }}>
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
                      value={memberSearch}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setMemberSearch(e.target.value)
                      }
                      placeholder="Search by name"
                      autoFocus
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

                {/* Student list */}
                <Box sx={{ flex: 1, overflowY: "auto", py: 0.5 }}>
                  {/* Counselor row (non-removable) */}
                  {(!memberSearch.trim() ||
                    users[currentUserId].name.toLowerCase().includes(memberSearch.toLowerCase())) && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        px: 2,
                        py: 1,
                        bgcolor: "transparent",
                        opacity: 0.6,
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 36,
                          height: 36,
                          bgcolor: users[currentUserId].avatarColor,
                          fontSize: "13px",
                          fontWeight: 500,
                        }}
                      >
                        {users[currentUserId].initials}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ fontSize: "14px", color: "#062F29" }}>
                          {users[currentUserId].name}
                        </Box>
                        <Box sx={{ fontSize: "11px", color: "#9CA3AF" }}>Organizer</Box>
                      </Box>
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "4px",
                          bgcolor: "#4C6A66",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Check size={14} color="#FFFFFF" />
                      </Box>
                    </Box>
                  )}

                  {/* Student rows */}
                  {filteredStudents.map((student) => {
                    const isSelected = selectedMembers.includes(student.id);
                    return (
                      <Box
                        key={student.id}
                        onClick={() => toggleMember(student.id)}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          px: 2,
                          py: 1,
                          cursor: "pointer",
                          bgcolor: isSelected ? "#F0F7F6" : "transparent",
                          transition: "background-color 0.15s ease",
                          "&:hover": { bgcolor: isSelected ? "#F0F7F6" : "#F9FAFB" },
                        }}
                      >
                        <Avatar
                          sx={{
                            width: 36,
                            height: 36,
                            bgcolor: student.avatarColor,
                            fontSize: "13px",
                            fontWeight: 500,
                          }}
                        >
                          {student.initials}
                        </Avatar>
                        <Box sx={{ flex: 1, fontSize: "14px", color: "#062F29" }}>
                          {student.name}
                        </Box>
                        <Box
                          sx={{
                            width: 20,
                            height: 20,
                            borderRadius: "4px",
                            border: isSelected ? "none" : "1.5px solid #D1D5DB",
                            bgcolor: isSelected ? "#4C6A66" : "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            transition: "all 0.15s ease",
                          }}
                        >
                          {isSelected && <Check size={14} color="#FFFFFF" />}
                        </Box>
                      </Box>
                    );
                  })}
                </Box>

                {/* Confirm button */}
                <Box
                  sx={{
                    p: 2,
                    borderTop: "1px solid #E5E7EB",
                    flexShrink: 0,
                  }}
                >
                  <Box
                    component="button"
                    onClick={handleConfirmMembers}
                    sx={{
                      width: "100%",
                      py: 1,
                      px: 2,
                      border: "none",
                      borderRadius: "8px",
                      bgcolor: membersChanged ? "#062F29" : "#E5E7EB",
                      color: membersChanged ? "#FFFFFF" : "#9CA3AF",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: membersChanged ? "pointer" : "default",
                      transition: "all 0.15s ease",
                      "&:hover": {
                        bgcolor: membersChanged ? "#0A4A3F" : "#E5E7EB",
                      },
                    }}
                  >
                    {membersChanged
                      ? `Update members (${selectedMembers.length})`
                      : `${selectedMembers.length} members`}
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </>
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

          // Design: System messages (member added/removed) render as centered italic annotations,
          // visually distinct from user message bubbles, similar to date separators.
          if (msg.systemText) {
            return (
              <Box
                key={msg.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  py: 1,
                  px: 2,
                }}
              >
                <Box
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#6B7280",
                    textAlign: "center",
                    fontStyle: "italic",
                  }}
                >
                  {msg.systemText}
                </Box>
              </Box>
            );
          }

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

      {/* Archived banner — shown at bottom instead of input */}
      {/* Design: The message input is hidden entirely when viewing an archived conversation — do not
          show a disabled input, hide it completely. The archived banner (with unarchive option) renders
          at the bottom of the chat area in its place. Users must unarchive before they can send. */}
      {thread.archived ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            px: 2,
            py: 1,
            bgcolor: "#FEF9C3",
            borderTop: "1px solid #FDE68A",
            flexShrink: 0,
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
      ) : (
        <MessageInput
          value={inputValue}
          onChange={onInputChange}
          onSend={onSend}
        />
      )}
    </Box>
  );
}
