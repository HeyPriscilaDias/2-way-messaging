"use client";

import { useState, useCallback, useRef } from "react";
import { Box } from "@willow/ui-kit";
import {
  threads as initialThreads,
  messages as initialMessages,
  blasts as initialBlasts,
  currentUserId,
  users,
  getThreadDisplayName,
} from "@/components/messages/mockData";
import type { Thread, Message, Blast } from "@/components/messages/mockData";
import ThreadList from "@/components/messages/ThreadList";
import type { CategoryTab } from "@/components/messages/ThreadList";
import ChatArea from "@/components/messages/ChatArea";
import BlastDetailView from "@/components/messages/BlastDetailView";
import NewMessageDialog from "@/components/messages/NewMessageDialog";

export default function MessagesPage() {
  const [threads, setThreads] = useState<Thread[]>(initialThreads);
  const [allMessages, setAllMessages] = useState<Message[]>(initialMessages);
  const [allBlasts, setAllBlasts] = useState<Blast[]>(initialBlasts);
  const [selectedThreadId, setSelectedThreadId] = useState<string | null>(
    initialThreads[0]?.id ?? null
  );
  const [selectedBlastId, setSelectedBlastId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryTab, setCategoryTab] = useState<CategoryTab>("direct");
  const [inputValue, setInputValue] = useState("");
  const [newMessageOpen, setNewMessageOpen] = useState(false);

  // Filter threads based on search and category tab
  const filteredThreads = threads
    .filter((thread) => {
      // Archived tab shows only archived threads; all other tabs hide archived
      if (categoryTab === "archived") {
        if (!thread.archived) return false;
      } else {
        if (thread.archived) return false;

        if (categoryTab === "unread") {
          if (thread.unreadCount === 0) return false;
        } else if (categoryTab === "direct") {
          if (thread.type !== "direct") return false;
        } else if (categoryTab === "groups") {
          if (thread.type !== "group") return false;
        } else if (categoryTab === "blasts") {
          // Blasts tab is handled separately — no threads shown
          return false;
        }
      }

      // Search filter
      if (searchQuery.trim()) {
        const name = getThreadDisplayName(thread, currentUserId).toLowerCase();
        const lastMsg = thread.lastMessage.toLowerCase();
        const query = searchQuery.toLowerCase();
        return name.includes(query) || lastMsg.includes(query);
      }
      return true;
    })
    .sort((a, b) => b.lastMessageTime.getTime() - a.lastMessageTime.getTime());

  const selectedThread = threads.find((t) => t.id === selectedThreadId) ?? null;
  const selectedBlast = allBlasts.find((b) => b.id === selectedBlastId) ?? null;
  const threadMessages = allMessages.filter((m) => m.threadId === selectedThreadId);

  const handleSelectThread = useCallback((threadId: string) => {
    setSelectedThreadId(threadId);
    setSelectedBlastId(null);
    setInputValue("");
    setThreads((prev) =>
      prev.map((t) => (t.id === threadId ? { ...t, unreadCount: 0 } : t))
    );
  }, []);

  const handleSelectBlast = useCallback((blastId: string) => {
    setSelectedBlastId(blastId);
    setSelectedThreadId(null);
    setInputValue("");
  }, []);

  /**
   * Sends a message with optimistic UI updates and error handling.
   *
   * @integration Ryan — Replace the mock `sendMessageToAPI` call below with the real
   * API call (e.g. POST /api/messages). The optimistic UI pattern:
   *   1. Immediately append the message with sendStatus: "sending"
   *   2. Call the API
   *   3. On success: clear sendStatus (set to undefined)
   *   4. On failure: set sendStatus to "failed" — the UI will show a retry button
   *
   * The retry flow (handleRetrySend) re-uses the same message ID so the UI stays
   * consistent. It enforces a 4-second cooldown between retries to prevent spam.
   */
  const handleSend = useCallback(() => {
    if (!inputValue.trim() || !selectedThreadId) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      threadId: selectedThreadId,
      senderId: currentUserId,
      text: inputValue.trim(),
      timestamp: new Date(),
      // @integration Ryan — Set to "sending" here when making real API calls:
      // sendStatus: "sending",
    };

    setAllMessages((prev) => [...prev, newMessage]);
    setThreads((prev) =>
      prev.map((t) =>
        t.id === selectedThreadId
          ? { ...t, lastMessage: newMessage.text, lastMessageTime: newMessage.timestamp, archived: false }
          : t
      )
    );
    setInputValue("");

    // @integration Ryan — Uncomment and replace with real API call:
    // try {
    //   await sendMessageToAPI(newMessage);
    //   // Success: clear sendStatus
    //   setAllMessages((prev) =>
    //     prev.map((m) => (m.id === newMessage.id ? { ...m, sendStatus: undefined } : m))
    //   );
    // } catch {
    //   // Failure: mark as failed so retry button appears
    //   setAllMessages((prev) =>
    //     prev.map((m) => (m.id === newMessage.id ? { ...m, sendStatus: "failed" } : m))
    //   );
    // }
  }, [inputValue, selectedThreadId]);

  /**
   * Retries sending a failed message. Enforces a 4-second cooldown between retries
   * to prevent excessive API calls. The cooldown is tracked per-message via a ref.
   *
   * @integration Ryan — Replace the mock API call below with the real one.
   * The cooldown logic is ready to use as-is.
   */
  const retryCooldowns = useRef<Record<string, number>>({});

  const handleRetrySend = useCallback((messageId: string) => {
    const now = Date.now();
    const lastRetry = retryCooldowns.current[messageId] ?? 0;

    // Enforce 4-second cooldown between retries
    if (now - lastRetry < 4000) return;
    retryCooldowns.current[messageId] = now;

    // Set status back to "sending"
    setAllMessages((prev) =>
      prev.map((m) => (m.id === messageId ? { ...m, sendStatus: "sending" } : m))
    );

    // @integration Ryan — Replace with real API call:
    // try {
    //   const message = allMessages.find((m) => m.id === messageId);
    //   await sendMessageToAPI(message);
    //   setAllMessages((prev) =>
    //     prev.map((m) => (m.id === messageId ? { ...m, sendStatus: undefined } : m))
    //   );
    //   delete retryCooldowns.current[messageId];
    // } catch {
    //   setAllMessages((prev) =>
    //     prev.map((m) => (m.id === messageId ? { ...m, sendStatus: "failed" } : m))
    //   );
    // }

    // Mock: simulate success after a short delay (remove when integrating)
    setTimeout(() => {
      setAllMessages((prev) =>
        prev.map((m) => (m.id === messageId ? { ...m, sendStatus: undefined } : m))
      );
      delete retryCooldowns.current[messageId];
    }, 800);
  }, []);

  const handleDeleteMessage = useCallback((messageId: string) => {
    setAllMessages((prev) =>
      prev.map((m) => (m.id === messageId ? { ...m, deleted: true } : m))
    );
  }, []);

  const handleMarkAllRead = useCallback(() => {
    setThreads((prev) => prev.map((t) => ({ ...t, unreadCount: 0 })));
  }, []);

  const handleArchiveThread = useCallback(
    (threadId: string) => {
      setThreads((prev) =>
        prev.map((t) => (t.id === threadId ? { ...t, archived: true } : t))
      );
      // If archiving the selected thread, deselect it
      if (selectedThreadId === threadId) {
        setSelectedThreadId(null);
      }
    },
    [selectedThreadId]
  );

  const handleUnarchiveThread = useCallback((threadId: string) => {
    setThreads((prev) =>
      prev.map((t) => (t.id === threadId ? { ...t, archived: false } : t))
    );
  }, []);

  // Select a student → open or create a direct thread
  const handleSelectStudent = useCallback(
    (userId: string) => {
      const existing = threads.find(
        (t) =>
          t.type === "direct" &&
          t.participants.includes(userId) &&
          t.participants.includes(currentUserId) &&
          t.participants.length === 2
      );
      if (existing) {
        handleSelectThread(existing.id);
        setCategoryTab("direct");
        return;
      }

      const newThread: Thread = {
        id: `thread-${Date.now()}`,
        participants: [currentUserId, userId],
        type: "direct",
        lastMessage: "",
        lastMessageTime: new Date(),
        unreadCount: 0,
      };
      setThreads((prev) => [newThread, ...prev]);
      setSelectedThreadId(newThread.id);
      setSelectedBlastId(null);
      setCategoryTab("direct");
      setInputValue("");
    },
    [threads, handleSelectThread]
  );

  // Navigate from blast detail → direct thread with a student
  const handleBlastNavigateToThread = useCallback(
    (userId: string) => {
      handleSelectStudent(userId);
    },
    [handleSelectStudent]
  );

  // Create a group thread
  const handleCreateGroup = useCallback(
    (userIds: string[]) => {
      const memberNames = userIds
        .map((id) => users[id]?.name.split(" ")[0] ?? "Unknown")
        .join(", ");
      const groupName = memberNames;

      const newThread: Thread = {
        id: `thread-${Date.now()}`,
        participants: [currentUserId, ...userIds],
        groupName,
        type: "group",
        lastMessage: "",
        lastMessageTime: new Date(),
        unreadCount: 0,
      };
      setThreads((prev) => [newThread, ...prev]);
      setSelectedThreadId(newThread.id);
      setSelectedBlastId(null);
      setCategoryTab("groups");
      setInputValue("");
    },
    []
  );

  // Create a blast record
  const handleCreateBlast = useCallback(
    (userIds: string[], message: string) => {
      const newBlast: Blast = {
        id: `blast-${Date.now()}`,
        senderId: currentUserId,
        text: message,
        timestamp: new Date(),
        recipientIds: userIds,
      };
      setAllBlasts((prev) => [newBlast, ...prev]);
      setSelectedBlastId(newBlast.id);
      setSelectedThreadId(null);
      setCategoryTab("blasts");
      setInputValue("");
    },
    []
  );

  return (
    <Box
      sx={{
        flex: 1,
        bgcolor: "#FFFFFF",
        borderRadius: "12px",
        display: "flex",
        overflow: "hidden",
        minHeight: 0,
        position: "relative",
      }}
    >
      <ThreadList
        threads={filteredThreads}
        blasts={allBlasts}
        selectedThreadId={selectedThreadId}
        selectedBlastId={selectedBlastId}
        searchQuery={searchQuery}
        categoryTab={categoryTab}
        onSelectThread={handleSelectThread}
        onSelectBlast={handleSelectBlast}
        onSearchChange={setSearchQuery}
        onCategoryChange={setCategoryTab}
        onMarkAllRead={handleMarkAllRead}
        onNewMessage={() => setNewMessageOpen(true)}
        onMessage={handleSelectStudent}
        onArchiveThread={handleArchiveThread}
        onUnarchiveThread={handleUnarchiveThread}
      />
      {selectedBlast ? (
        <BlastDetailView
          blast={selectedBlast}
          allMessages={allMessages}
          onNavigateToThread={handleBlastNavigateToThread}
        />
      ) : (
        <ChatArea
          thread={selectedThread}
          messages={threadMessages}
          inputValue={inputValue}
          onInputChange={setInputValue}
          onSend={handleSend}
          onRetrySend={handleRetrySend}
          onDeleteMessage={handleDeleteMessage}
          onMessage={handleSelectStudent}
          onArchiveThread={handleArchiveThread}
          onUnarchiveThread={handleUnarchiveThread}
        />
      )}
      <NewMessageDialog
        open={newMessageOpen}
        onClose={() => setNewMessageOpen(false)}
        onSelectStudent={handleSelectStudent}
        onCreateGroup={handleCreateGroup}
        onCreateBlast={handleCreateBlast}
      />
    </Box>
  );
}
