"use client";

import { useState, useCallback } from "react";
import { Box } from "@willow/ui-kit";
import {
  threads as initialThreads,
  messages as initialMessages,
  currentUserId,
  getThreadDisplayName,
} from "@/components/messages/mockData";
import type { Thread, Message } from "@/components/messages/mockData";
import ThreadList from "@/components/messages/ThreadList";
import ChatArea from "@/components/messages/ChatArea";

type FilterTab = "all" | "unread";

export default function MessagesPage() {
  const [threads, setThreads] = useState<Thread[]>(initialThreads);
  const [allMessages, setAllMessages] = useState<Message[]>(initialMessages);
  const [selectedThreadId, setSelectedThreadId] = useState<string | null>(
    initialThreads[0]?.id ?? null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTab, setFilterTab] = useState<FilterTab>("all");
  const [inputValue, setInputValue] = useState("");

  // Filter threads based on search and filter tab
  const filteredThreads = threads
    .filter((thread) => {
      if (filterTab === "unread" && thread.unreadCount === 0) return false;
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
    // Mark thread as read
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

  return (
    <Box
      sx={{
        flex: 1,
        bgcolor: "#FFFFFF",
        borderRadius: "12px",
        display: "flex",
        overflow: "hidden",
        minHeight: 0,
      }}
    >
      <ThreadList
        threads={filteredThreads}
        selectedThreadId={selectedThreadId}
        searchQuery={searchQuery}
        filterTab={filterTab}
        onSelectThread={handleSelectThread}
        onSearchChange={setSearchQuery}
        onFilterChange={setFilterTab}
        onMarkAllRead={handleMarkAllRead}
      />
      <ChatArea
        thread={selectedThread}
        messages={threadMessages}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSend={handleSend}
        onDeleteMessage={handleDeleteMessage}
      />
    </Box>
  );
}
