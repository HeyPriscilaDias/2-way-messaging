"use client";

import { useState, useCallback } from "react";
import { Box } from "@willow/ui-kit";
import {
  threads as initialThreads,
  messages as initialMessages,
  currentUserId,
  users,
  getThreadDisplayName,
} from "@/components/messages/mockData";
import type { Thread, Message } from "@/components/messages/mockData";
import ThreadList from "@/components/messages/ThreadList";
import type { CategoryTab } from "@/components/messages/ThreadList";
import ChatArea from "@/components/messages/ChatArea";
import NewMessageDialog from "@/components/messages/NewMessageDialog";

export default function MessagesPage() {
  const [threads, setThreads] = useState<Thread[]>(initialThreads);
  const [allMessages, setAllMessages] = useState<Message[]>(initialMessages);
  const [selectedThreadId, setSelectedThreadId] = useState<string | null>(
    initialThreads[0]?.id ?? null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryTab, setCategoryTab] = useState<CategoryTab>("direct");
  const [inputValue, setInputValue] = useState("");
  const [newMessageOpen, setNewMessageOpen] = useState(false);

  // Filter threads based on search and category tab
  const filteredThreads = threads
    .filter((thread) => {
      // Category filter
      if (categoryTab === "unread") {
        if (thread.unreadCount === 0) return false;
      } else if (categoryTab === "direct") {
        if (thread.type !== "direct") return false;
      } else if (categoryTab === "groups") {
        if (thread.type !== "group") return false;
      } else if (categoryTab === "blasts") {
        if (thread.type !== "blast") return false;
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
  const threadMessages = allMessages.filter((m) => m.threadId === selectedThreadId);

  const handleSelectThread = useCallback((threadId: string) => {
    setSelectedThreadId(threadId);
    setInputValue("");
    setThreads((prev) =>
      prev.map((t) => (t.id === threadId ? { ...t, unreadCount: 0 } : t))
    );
  }, []);

  const handleSend = useCallback(() => {
    if (!inputValue.trim() || !selectedThreadId) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      threadId: selectedThreadId,
      senderId: currentUserId,
      text: inputValue.trim(),
      timestamp: new Date(),
    };

    setAllMessages((prev) => [...prev, newMessage]);
    setThreads((prev) =>
      prev.map((t) =>
        t.id === selectedThreadId
          ? { ...t, lastMessage: newMessage.text, lastMessageTime: newMessage.timestamp }
          : t
      )
    );
    setInputValue("");
  }, [inputValue, selectedThreadId]);

  const handleDeleteMessage = useCallback((messageId: string) => {
    setAllMessages((prev) =>
      prev.map((m) => (m.id === messageId ? { ...m, deleted: true } : m))
    );
  }, []);

  const handleMarkAllRead = useCallback(() => {
    setThreads((prev) => prev.map((t) => ({ ...t, unreadCount: 0 })));
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
      setCategoryTab("direct");
      setInputValue("");
    },
    [threads, handleSelectThread]
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
      setCategoryTab("groups");
      setInputValue("");
    },
    []
  );

  // Create blast threads — one per recipient, with the composed message
  const handleCreateBlast = useCallback(
    (userIds: string[], message: string) => {
      const now = Date.now();
      const timestamp = new Date();
      const newThreads: Thread[] = userIds.map((userId, i) => ({
        id: `thread-${now}-${i}`,
        participants: [currentUserId, userId],
        type: "blast" as const,
        lastMessage: message,
        lastMessageTime: timestamp,
        unreadCount: 0,
      }));
      const newMessages: Message[] = newThreads.map((thread) => ({
        id: `msg-${thread.id}`,
        threadId: thread.id,
        senderId: currentUserId,
        text: message,
        timestamp,
      }));
      setThreads((prev) => [...newThreads, ...prev]);
      setAllMessages((prev) => [...prev, ...newMessages]);
      if (newThreads.length > 0) {
        setSelectedThreadId(newThreads[0].id);
      }
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
        selectedThreadId={selectedThreadId}
        searchQuery={searchQuery}
        categoryTab={categoryTab}
        onSelectThread={handleSelectThread}
        onSearchChange={setSearchQuery}
        onCategoryChange={setCategoryTab}
        onMarkAllRead={handleMarkAllRead}
        onNewMessage={() => setNewMessageOpen(true)}
        onMessage={handleSelectStudent}
      />
      <ChatArea
        thread={selectedThread}
        messages={threadMessages}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSend={handleSend}
        onDeleteMessage={handleDeleteMessage}
        onMessage={handleSelectStudent}
      />
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
