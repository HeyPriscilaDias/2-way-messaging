"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Box } from "@willow/ui-kit";
import { Send, Plus, MessageSquare, ChevronDown, Loader2, PanelRightOpen } from "lucide-react";
import { useDock } from "@/contexts/DockContext";

// Alma sparkle icon
function AlmaSparkle({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      style={{ color }}
    >
      <path
        stroke="currentColor"
        strokeWidth={2}
        d="m11.085 4.385.361 1.085a11.25 11.25 0 0 0 7.084 7.084h.001l1.34.446-.256.085-1.085.361a11.25 11.25 0 0 0-7.084 7.084v.001L11 21.871l-.085-.256-.361-1.085-.109-.31a11.25 11.25 0 0 0-6.975-6.774h-.001L2.129 13l.256-.085 1.085-.361a11.25 11.25 0 0 0 7.084-7.084v-.001L11 4.129z"
      />
      <path
        fill="currentColor"
        d="m22.775 4.188-.529-.176a3.59 3.59 0 0 1-2.258-2.258l-.176-.53a.329.329 0 0 0-.624 0l-.176.53a3.59 3.59 0 0 1-2.258 2.258l-.53.176a.329.329 0 0 0 0 .624l.53.176a3.59 3.59 0 0 1 2.258 2.258l.176.53a.329.329 0 0 0 .624 0l.176-.53a3.59 3.59 0 0 1 2.258-2.258l.53-.176a.329.329 0 0 0 0-.624"
      />
    </svg>
  );
}

/**
 * @integration Ryan — Dock tasks are hardcoded.
 * Replace this `mockTasks` array with a real task API.
 */
const mockTasks = [
  { id: "1", title: "Follow up on Maya's recommendation letters", studentName: "Maya Chen", status: "open" as const },
  { id: "2", title: "Review Tyler's safety school list", studentName: "Tyler Brooks", status: "open" as const },
  { id: "3", title: "Check FAFSA submission for Jordan", studentName: "Jordan Davis", status: "open" as const },
  { id: "4", title: "Schedule meeting with Olivia's family", studentName: "Olivia Díaz", status: "open" as const },
  { id: "5", title: "Confirm transcript request sent", studentName: "Maya Chen", status: "completed" as const },
  { id: "6", title: "Email coach about Marcus's recruitment", studentName: "Marcus Johnson", status: "completed" as const },
];

// Prototype: Alma suggestion chips are hardcoded.
// TODO(agent): Generate contextually from student caseload data.
const almaSuggestions = [
  "Which students need my attention most?",
  "How are we doing on FAFSA completion?",
  "Who has deadlines coming up?",
  "Show me students behind on applications",
];

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function TaskItem({ task }: { task: (typeof mockTasks)[number] }) {
  const isCompleted = task.status === "completed";
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 1.5,
        py: 1.5,
        borderBottom: "1px solid #E5E7EB",
        "&:last-child": { borderBottom: "none" },
      }}
    >
      <Box
        sx={{
          width: 18,
          height: 18,
          borderRadius: "4px",
          border: isCompleted ? "none" : "1.5px solid #D1D5DB",
          bgcolor: isCompleted ? "#22C55E" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          mt: "1px",
        }}
      >
        {isCompleted && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Box
          sx={{
            fontSize: "14px",
            color: isCompleted ? "#9CA3AF" : "#062F29",
            textDecoration: isCompleted ? "line-through" : "none",
            lineHeight: 1.4,
          }}
        >
          {task.title}
        </Box>
        <Box sx={{ fontSize: "12px", color: "#9CA3AF", mt: 0.25 }}>
          {task.studentName}
        </Box>
      </Box>
    </Box>
  );
}

export default function Dock() {
  const dock = useDock();
  const activeTab = dock.activeTab;
  const setActiveTab = dock.setActiveTab;
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const openTasks = mockTasks.filter((t) => t.status === "open");
  const completedTasks = mockTasks.filter((t) => t.status === "completed");

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Resize drag logic
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      isDraggingRef.current = true;
      const startX = e.clientX;
      const startWidth = dock.width;

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const delta = startX - moveEvent.clientX;
        const newWidth = startWidth + delta;

        if (newWidth < dock.MIN_WIDTH - 50) {
          dock.collapse();
          cleanup();
          return;
        }

        dock.setWidth(newWidth);
      };

      const cleanup = () => {
        isDraggingRef.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      };

      const handleMouseUp = () => cleanup();

      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [dock],
  );

  // Collapsed state: show reopen button
  if (dock.collapsed) {
    return (
      <Box
        sx={{
          position: "fixed",
          right: 12,
          top: 52,
          zIndex: 10,
        }}
      >
        <Box
          component="button"
          onClick={() => dock.expand()}
          sx={{
            width: 36,
            height: 36,
            borderRadius: "8px",
            border: "1px solid #E5E7EB",
            bgcolor: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            transition: "all 0.15s",
            "&:hover": { bgcolor: "#F9FAFB", borderColor: "#D1D5DB" },
          }}
        >
          <PanelRightOpen size={18} color="#374151" />
        </Box>
      </Box>
    );
  }

  function handleSendMessage(text?: string) {
    const messageText = text || inputValue.trim();
    if (!messageText || isLoading) return;

    setInputValue("");
    const userMsg: ChatMessage = { role: "user", content: messageText };
    setMessages((prev) => [...prev, userMsg]);

    /**
     * Prototype: Alma AI chat returns a static placeholder response after 500ms.
     *
     * @integration Ryan — Replace with real Alma AI integration.
     */
    const assistantMsg: ChatMessage = {
      role: "assistant",
      content: "Alma AI is not connected in this prototype. This is a placeholder response.",
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, assistantMsg]);
    }, 500);
  }

  return (
    <>
      <Box
        sx={{
          width: dock.width,
          flexShrink: 0,
          height: "calc(100vh - 40px)",
          position: "fixed",
          right: 0,
          top: 40,
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          py: 1.5,
          pr: 1.5,
        }}
      >
        {/* Drag handle */}
        <Box
          onMouseDown={handleMouseDown}
          sx={{
            width: 12,
            flexShrink: 0,
            cursor: "col-resize",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 4,
              borderRadius: 2,
              bgcolor: "transparent",
              transition: "background-color 0.15s",
            },
            "&:hover::after": {
              bgcolor: "#ACF7B2",
            },
            "&:active::after": {
              bgcolor: "#ACF7B2",
            },
          }}
        />
        <Box
          sx={{
            flex: 1,
            bgcolor: "#FFFFFF",
            borderRadius: "12px",
            border: "1px solid transparent",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            transition: "border-color 0.15s",
            "&:hover": {
              border: "1px solid #E5E7EB",
            },
          }}
        >
          {/* Tabs */}
          <Box
            sx={{
              display: "flex",
              borderBottom: "1px solid #E5E7EB",
              position: "relative",
            }}
          >
            {(["alma", "tasks"] as const).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <Box
                  key={tab}
                  component="button"
                  onClick={() => setActiveTab(tab)}
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    py: 1.25,
                    fontSize: "14px",
                    fontWeight: 500,
                    color: isActive ? "#062F29" : "#6B7280",
                    bgcolor: "transparent",
                    border: "none",
                    borderBottom: isActive ? "2px solid #062F29" : "2px solid transparent",
                    cursor: "pointer",
                    transition: "all 0.15s",
                    minHeight: 44,
                    "&:hover": {
                      color: "#062F29",
                    },
                  }}
                >
                  {tab === "alma" ? "Alma" : "Tasks"}
                </Box>
              );
            })}
          </Box>

          {/* Alma Tab Content */}
          {activeTab === "alma" && (
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
              {/* Chat thread selector */}
              <Box
                sx={{
                  px: 2,
                  py: 1.5,
                  borderBottom: "1px solid #E5E7EB",
                  bgcolor: "#F9FAFB",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <MessageSquare size={16} color="#6B7280" />
                  <Box
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#374151",
                      flex: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    New chat
                  </Box>
                  <ChevronDown size={16} color="#6B7280" />
                </Box>
              </Box>

              {/* Chat area */}
              <Box sx={{ flex: 1, overflowY: "auto", px: 2, py: 2 }}>
                {messages.length === 0 && (
                  <Box sx={{ fontSize: "14px", color: "#374151", lineHeight: 1.5 }}>
                    Hey there, how can I help you today?
                  </Box>
                )}

                {messages.map((msg, i) => (
                  <Box key={i} sx={{ mb: 2 }}>
                    {msg.role === "user" ? (
                      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Box
                          sx={{
                            bgcolor: "#F3F4F6",
                            color: "text.primary",
                            borderRadius: "12px 12px 4px 12px",
                            px: 1.5,
                            py: 1,
                            fontSize: "13px",
                            lineHeight: 1.5,
                            maxWidth: "85%",
                          }}
                        >
                          {msg.content}
                        </Box>
                      </Box>
                    ) : (
                      <Box sx={{ fontSize: "13px", color: "#374151", lineHeight: 1.5, whiteSpace: "pre-wrap" }}>
                        {msg.content}
                      </Box>
                    )}
                  </Box>
                ))}

                {isLoading && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#6B7280", fontSize: "13px" }}>
                    <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                    Thinking...
                  </Box>
                )}

                <div ref={chatEndRef} />
              </Box>

              {/* Suggestions & input */}
              <Box sx={{ borderTop: "1px solid #E5E7EB", px: 2, py: 2 }}>
                {messages.length === 0 && (
                  <Box sx={{ mb: 2 }}>
                    {almaSuggestions.map((suggestion) => (
                      <Box
                        key={suggestion}
                        onClick={() => handleSendMessage(suggestion)}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1,
                          py: 0.75,
                          cursor: "pointer",
                          borderRadius: "6px",
                          mx: -0.5,
                          px: 0.5,
                          "&:hover": { bgcolor: "#F9FAFB" },
                        }}
                      >
                        <Box sx={{ mt: "2px", flexShrink: 0 }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 256 256" fill="none"><polyline points="176 104 224 152 176 200" fill="none" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M32,56a96,96,0,0,0,96,96h96" fill="none" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                        </Box>
                        <Box sx={{ fontSize: "13px", color: "#374151", lineHeight: 1.4 }}>
                          {suggestion}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                )}

                {/* Input */}
                <Box
                  component="form"
                  onSubmit={(e: React.FormEvent) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #E5E7EB",
                    borderRadius: "24px",
                    bgcolor: "#F9FAFB",
                    px: 2,
                    py: 0.5,
                    gap: 1,
                  }}
                >
                  <Box
                    component="input"
                    type="text"
                    placeholder="Message Alma..."
                    value={inputValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                    disabled={isLoading}
                    sx={{
                      flex: 1,
                      fontSize: "14px",
                      color: "#374151",
                      border: "none",
                      bgcolor: "transparent",
                      outline: "none",
                      "&::placeholder": { color: "#9CA3AF" },
                    }}
                  />
                  <Box
                    component="button"
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      bgcolor: inputValue.trim() && !isLoading ? "#062F29" : "#D1D5DB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      border: "none",
                      cursor: inputValue.trim() && !isLoading ? "pointer" : "default",
                      transition: "background-color 0.15s",
                    }}
                  >
                    <Send size={14} color="#fff" />
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {/* Tasks Tab Content */}
          {activeTab === "tasks" && (
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", overflowY: "auto" }}>
              <Box
                sx={{
                  px: 2,
                  py: 1.5,
                  borderBottom: "1px solid #E5E7EB",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <Plus size={16} color="#062F29" />
                <Box sx={{ fontSize: "14px", fontWeight: 500, color: "#062F29" }}>
                  Add task
                </Box>
              </Box>

              <Box sx={{ flex: 1, px: 2, py: 1, overflowY: "auto" }}>
                {openTasks.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
                <Box sx={{ fontSize: "14px", color: "#4D7CFE", py: 1.5 }}>
                  Show completed ({completedTasks.length})
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
