"use client";

import { useState, useRef, useEffect } from "react";
import { Box, IconButton } from "@willow/ui-kit";
import { Smiley, Paperclip } from "@willow/icons";
import { Send, X, RotateCcw, Loader2 } from "lucide-react";

/**
 * Attachment upload status for tracking file upload state.
 *
 * @integration Ryan — When integrating with the real file upload API:
 *   1. Set status to "uploading" and store the file name when upload starts
 *   2. On success: clear the attachment state and attach the file URL to the message
 *   3. On failure: set status to "error" — the UI will show an error banner with retry
 *
 * The retry enforces a 4-second cooldown to prevent excessive upload attempts.
 *
 * Additional file upload TODOs:
 * - Store the actual File object (not just the name) via a useRef<File | null> for retry attempts
 * - On successful upload, store the returned file URL/ID to attach to the next message
 */
type AttachmentStatus = "uploading" | "error" | null;

const ATTACHMENT_RETRY_COOLDOWN_MS = 4000;

// Design: Students cannot initiate conversations. There is no "New Message" button, no compose
// flow, and no group or blast creation on the student side. Students can only reply to threads
// started by staff.
interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export default function MessageInput({ value, onChange, onSend }: MessageInputProps) {
  const [attachmentStatus, setAttachmentStatus] = useState<AttachmentStatus>(null);
  const [attachmentName, setAttachmentName] = useState<string | null>(null);
  const [retryCooldown, setRetryCooldown] = useState(false);
  const cooldownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Clean up cooldown timer on unmount
  useEffect(() => {
    return () => {
      if (cooldownTimer.current) clearTimeout(cooldownTimer.current);
    };
  }, []);

  // Design: Enter sends the message; Shift+Enter inserts a newline. Matches the chat convention counselors expect.
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  /**
   * Handles file selection from the native file picker.
   *
   * @integration Ryan — Replace the mock upload simulation below with the real
   * file upload API call (e.g. POST /api/uploads with multipart/form-data).
   * On success, store the returned file URL/ID so it can be attached to the message.
   */
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setAttachmentName(file.name);
    setAttachmentStatus("uploading");

    // @integration Ryan — Replace this mock with real upload logic:
    // try {
    //   const uploadedUrl = await uploadFileToAPI(file);
    //   setAttachmentStatus(null);
    //   // Store uploadedUrl to attach to next message
    // } catch {
    //   setAttachmentStatus("error");
    // }

    // Mock: simulate successful upload (remove when integrating)
    setTimeout(() => {
      setAttachmentStatus(null);
      setAttachmentName(null);
    }, 1000);

    // Reset the file input so the same file can be re-selected
    e.target.value = "";
  };

  /**
   * Retries a failed attachment upload with a 4-second cooldown.
   *
   * @integration Ryan — Replace the mock below with the actual re-upload logic.
   * You'll need to store the original File object (not just the name) to retry.
   */
  const handleRetryUpload = () => {
    if (retryCooldown || attachmentStatus !== "error") return;

    setRetryCooldown(true);
    setAttachmentStatus("uploading");

    cooldownTimer.current = setTimeout(() => {
      setRetryCooldown(false);
    }, ATTACHMENT_RETRY_COOLDOWN_MS);

    // @integration Ryan — Replace with real retry logic using the stored File object:
    // try {
    //   const uploadedUrl = await uploadFileToAPI(storedFile);
    //   setAttachmentStatus(null);
    // } catch {
    //   setAttachmentStatus("error");
    // }

    // Mock: simulate successful retry (remove when integrating)
    setTimeout(() => {
      setAttachmentStatus(null);
      setAttachmentName(null);
    }, 800);
  };

  const handleDismissAttachment = () => {
    setAttachmentStatus(null);
    setAttachmentName(null);
    setRetryCooldown(false);
    if (cooldownTimer.current) clearTimeout(cooldownTimer.current);
  };

  return (
    <Box sx={{ borderTop: "1px solid #E5E7EB" }}>
      {/* Attachment status banner */}
      {attachmentStatus && attachmentName && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 2,
            py: 1,
            bgcolor: attachmentStatus === "error" ? "#FEF2F2" : "#F9FAFB",
            borderBottom: "1px solid",
            borderColor: attachmentStatus === "error" ? "#FECACA" : "#E5E7EB",
          }}
        >
          {attachmentStatus === "uploading" && (
            <Loader2
              size={14}
              style={{
                color: "#6B7280",
                animation: "spin 1s linear infinite",
                flexShrink: 0,
              }}
            />
          )}

          <Box
            sx={{
              flex: 1,
              fontSize: "12px",
              color: attachmentStatus === "error" ? "#DC2626" : "#6B7280",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {attachmentStatus === "uploading"
              ? `Uploading ${attachmentName}...`
              : `Failed to upload ${attachmentName}`}
          </Box>

          {attachmentStatus === "error" && (
            <Box
              component="button"
              onClick={handleRetryUpload}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.25,
                border: "none",
                bgcolor: "transparent",
                color: retryCooldown ? "#D1D5DB" : "#DC2626",
                fontSize: "12px",
                fontWeight: 600,
                cursor: retryCooldown ? "not-allowed" : "pointer",
                p: 0,
                flexShrink: 0,
                "&:hover": {
                  color: retryCooldown ? "#D1D5DB" : "#991B1B",
                },
              }}
            >
              <RotateCcw size={11} />
              Retry
            </Box>
          )}

          <Box
            component="button"
            onClick={handleDismissAttachment}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              bgcolor: "transparent",
              color: "#9CA3AF",
              cursor: "pointer",
              p: 0,
              flexShrink: 0,
              "&:hover": { color: "#6B7280" },
            }}
          >
            <X size={14} />
          </Box>
        </Box>
      )}

      {/* Input row */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          gap: 1,
          px: 2,
          py: 1.5,
        }}
      >
        {/* Prototype: Emoji button is rendered but no picker is wired up. */}
        {/* TODO(agent): Integrate an emoji picker (e.g., emoji-mart) that inserts at cursor position. */}
        <IconButton variant="ghost" size="sm" sx={{ flexShrink: 0 }}>
          <Smiley size={20} color="#6B7280" />
        </IconButton>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileSelect}
          style={{ display: "none" }}
        />
        <IconButton
          variant="ghost"
          size="sm"
          onClick={() => fileInputRef.current?.click()}
          sx={{ flexShrink: 0 }}
        >
          <Paperclip size={20} color="#6B7280" />
        </IconButton>

        <Box
          component="input"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          sx={{
            flex: 1,
            border: "1px solid #E5E7EB",
            borderRadius: "20px",
            px: 2,
            py: 1,
            fontSize: "14px",
            outline: "none",
            color: "#1F2937",
            bgcolor: "#F9FAFB",
            "&:focus": {
              borderColor: "#4C6A66",
              bgcolor: "#FFFFFF",
            },
            "&::placeholder": {
              color: "#9CA3AF",
            },
          }}
        />

        <IconButton
          variant="ghost"
          size="sm"
          onClick={onSend}
          sx={{
            flexShrink: 0,
            color: value.trim() ? "#4C6A66" : "#D1D5DB",
          }}
        >
          <Send size={20} />
        </IconButton>
      </Box>
    </Box>
  );
}
