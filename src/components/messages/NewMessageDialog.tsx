"use client";

import { useState, useMemo } from "react";
import { Box, Avatar, IconButton } from "@willow/ui-kit";
import { Search, X, ArrowLeft, Users, Share, Check } from "@willow/icons";
import { getStudents, type User } from "./mockData";

type DialogStep = "main" | "group-select" | "blast-select" | "blast-compose";

interface NewMessageDialogProps {
  open: boolean;
  onClose: () => void;
  onSelectStudent: (userId: string) => void;
  onCreateGroup: (userIds: string[]) => void;
  onCreateBlast: (userIds: string[], message: string) => void;
}

export default function NewMessageDialog({
  open,
  onClose,
  onSelectStudent,
  onCreateGroup,
  onCreateBlast,
}: NewMessageDialogProps) {
  const [step, setStep] = useState<DialogStep>("main");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [blastMessage, setBlastMessage] = useState("");

  const students = useMemo(() => getStudents(), []);

  const filteredStudents = useMemo(() => {
    if (!searchQuery.trim()) return students;
    const query = searchQuery.toLowerCase();
    return students.filter((s) => s.name.toLowerCase().includes(query));
  }, [students, searchQuery]);

  const handleClose = () => {
    setStep("main");
    setSearchQuery("");
    setSelectedUsers([]);
    setBlastMessage("");
    onClose();
  };

  const handleBack = () => {
    if (step === "blast-compose") {
      setStep("blast-select");
      return;
    }
    setStep("main");
    setSearchQuery("");
    setSelectedUsers([]);
  };

  const toggleUser = (userId: string) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const handleConfirm = () => {
    if (selectedUsers.length === 0) return;
    if (step === "group-select") {
      onCreateGroup(selectedUsers);
      handleClose();
    } else if (step === "blast-select") {
      // Move to compose step instead of creating threads
      setStep("blast-compose");
    }
  };

  const handleSendBlast = () => {
    if (selectedUsers.length === 0 || !blastMessage.trim()) return;
    onCreateBlast(selectedUsers, blastMessage.trim());
    handleClose();
  };

  if (!open) return null;

  const isMultiSelect = step === "group-select" || step === "blast-select";
  const showBackArrow = step !== "main";
  const stepTitle =
    step === "group-select"
      ? "New group"
      : step === "blast-select" || step === "blast-compose"
      ? "New blast"
      : "New message";

  return (
    <>
      {/* Backdrop */}
      <Box
        onClick={handleClose}
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
          width: 400,
          maxHeight: 520,
          bgcolor: "#FFFFFF",
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.16)",
          display: "flex",
          flexDirection: "column",
          zIndex: 1300,
          overflow: "hidden",
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
            flexShrink: 0,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {showBackArrow && (
              <IconButton variant="ghost" size="sm" onClick={handleBack}>
                <ArrowLeft size={18} color="#6B7280" />
              </IconButton>
            )}
            <Box sx={{ fontSize: "16px", fontWeight: 600, color: "#062F29" }}>
              {stepTitle}
            </Box>
          </Box>
          <IconButton variant="ghost" size="sm" onClick={handleClose}>
            <X size={18} color="#6B7280" />
          </IconButton>
        </Box>

        {/* Steps 1 & 2: Search + student list */}
        {step !== "blast-compose" && (
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
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchQuery(e.target.value)
                  }
                  placeholder="Search by name"
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

            {/* Selected chips (multi-select only) */}
            {isMultiSelect && selectedUsers.length > 0 && (
              <Box
                sx={{
                  px: 2,
                  pb: 1,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.5,
                  flexShrink: 0,
                }}
              >
                {selectedUsers.map((userId) => {
                  const user = students.find((s) => s.id === userId);
                  if (!user) return null;
                  return (
                    <Box
                      key={userId}
                      onClick={() => toggleUser(userId)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        bgcolor: "#F0F7F6",
                        border: "1px solid #4C6A66",
                        borderRadius: "16px",
                        px: 1,
                        py: 0.25,
                        fontSize: "12px",
                        color: "#062F29",
                        cursor: "pointer",
                        "&:hover": { bgcolor: "#E5EFEE" },
                      }}
                    >
                      {user.name.split(" ")[0]}
                      <X size={12} color="#6B7280" />
                    </Box>
                  );
                })}
              </Box>
            )}

            {/* Action rows (main step only) */}
            {step === "main" && (
              <Box sx={{ flexShrink: 0 }}>
                <ActionRow
                  icon={<Users size={18} color="#4C6A66" />}
                  label="New group"
                  description="All members see each other's replies"
                  onClick={() => {
                    setStep("group-select");
                    setSearchQuery("");
                  }}
                />
                <ActionRow
                  icon={<Share size={18} color="#4C6A66" />}
                  label="New blast"
                  description="Send the same message individually"
                  onClick={() => {
                    setStep("blast-select");
                    setSearchQuery("");
                  }}
                />
                <Box
                  sx={{
                    height: "1px",
                    bgcolor: "#E5E7EB",
                    mx: 2,
                  }}
                />
              </Box>
            )}

            {/* Student list */}
            <Box sx={{ flex: 1, overflowY: "auto", py: 0.5 }}>
              {filteredStudents.length === 0 ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    py: 4,
                    fontSize: "13px",
                    color: "#9CA3AF",
                  }}
                >
                  No students found
                </Box>
              ) : (
                filteredStudents.map((student) => (
                  <StudentRow
                    key={student.id}
                    student={student}
                    selectable={isMultiSelect}
                    selected={selectedUsers.includes(student.id)}
                    onClick={() => {
                      if (isMultiSelect) {
                        toggleUser(student.id);
                      } else {
                        onSelectStudent(student.id);
                        handleClose();
                      }
                    }}
                  />
                ))
              )}
            </Box>

            {/* Confirm / Next button (multi-select only) */}
            {isMultiSelect && (
              <Box
                sx={{
                  p: 2,
                  borderTop: "1px solid #E5E7EB",
                  flexShrink: 0,
                }}
              >
                <Box
                  component="button"
                  onClick={handleConfirm}
                  sx={{
                    width: "100%",
                    py: 1,
                    px: 2,
                    border: "none",
                    borderRadius: "8px",
                    bgcolor:
                      selectedUsers.length > 0 ? "#062F29" : "#E5E7EB",
                    color:
                      selectedUsers.length > 0 ? "#FFFFFF" : "#9CA3AF",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor:
                      selectedUsers.length > 0 ? "pointer" : "default",
                    transition: "all 0.15s ease",
                    "&:hover": {
                      bgcolor:
                        selectedUsers.length > 0 ? "#0A4A3F" : "#E5E7EB",
                    },
                  }}
                >
                  {step === "group-select"
                    ? `Create group${selectedUsers.length > 0 ? ` (${selectedUsers.length})` : ""}`
                    : `Next${selectedUsers.length > 0 ? ` (${selectedUsers.length})` : ""}`}
                </Box>
              </Box>
            )}
          </>
        )}

        {/* Step 3: Compose blast */}
        {step === "blast-compose" && (
          <>
            {/* Recipient summary */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                py: 1.5,
                bgcolor: "#F9FAFB",
                borderBottom: "1px solid #E5E7EB",
                flexShrink: 0,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{ fontSize: "13px", color: "#6B7280" }}>To:</Box>
                <Box sx={{ fontSize: "13px", fontWeight: 600, color: "#062F29" }}>
                  {selectedUsers.length} {selectedUsers.length === 1 ? "student" : "students"}
                </Box>
              </Box>
              <Box
                onClick={() => setStep("blast-select")}
                sx={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#4C6A66",
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Edit
              </Box>
            </Box>

            {/* Message textarea */}
            <Box sx={{ flex: 1, p: 2, display: "flex", flexDirection: "column" }}>
              <Box
                component="textarea"
                value={blastMessage}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setBlastMessage(e.target.value)
                }
                placeholder="Write a message…"
                sx={{
                  flex: 1,
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                  p: 1.5,
                  fontSize: "14px",
                  color: "#1F2937",
                  resize: "none",
                  outline: "none",
                  fontFamily: "inherit",
                  minHeight: 120,
                  "&::placeholder": { color: "#9CA3AF" },
                  "&:focus": { borderColor: "#4C6A66" },
                }}
              />
            </Box>

            {/* Send button */}
            <Box
              sx={{
                p: 2,
                borderTop: "1px solid #E5E7EB",
                flexShrink: 0,
              }}
            >
              <Box
                component="button"
                onClick={handleSendBlast}
                sx={{
                  width: "100%",
                  py: 1,
                  px: 2,
                  border: "none",
                  borderRadius: "8px",
                  bgcolor:
                    blastMessage.trim() ? "#062F29" : "#E5E7EB",
                  color:
                    blastMessage.trim() ? "#FFFFFF" : "#9CA3AF",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor:
                    blastMessage.trim() ? "pointer" : "default",
                  transition: "all 0.15s ease",
                  "&:hover": {
                    bgcolor:
                      blastMessage.trim() ? "#0A4A3F" : "#E5E7EB",
                  },
                }}
              >
                Send blast
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}

function ActionRow({
  icon,
  label,
  description,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 2,
        py: 1.25,
        cursor: "pointer",
        transition: "background-color 0.15s ease",
        "&:hover": { bgcolor: "#F9FAFB" },
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
        {icon}
      </Box>
      <Box>
        <Box sx={{ fontSize: "14px", fontWeight: 500, color: "#062F29" }}>
          {label}
        </Box>
        <Box sx={{ fontSize: "12px", color: "#6B7280" }}>{description}</Box>
      </Box>
    </Box>
  );
}

function StudentRow({
  student,
  selectable,
  selected,
  onClick,
}: {
  student: User;
  selectable: boolean;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 2,
        py: 1,
        cursor: "pointer",
        bgcolor: selected ? "#F0F7F6" : "transparent",
        transition: "background-color 0.15s ease",
        "&:hover": { bgcolor: selected ? "#F0F7F6" : "#F9FAFB" },
      }}
    >
      <Box sx={{ position: "relative", flexShrink: 0 }}>
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
        {student.online && (
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
      <Box sx={{ flex: 1, fontSize: "14px", color: "#062F29" }}>
        {student.name}
      </Box>
      {selectable && (
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: "4px",
            border: selected ? "none" : "1.5px solid #D1D5DB",
            bgcolor: selected ? "#4C6A66" : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.15s ease",
          }}
        >
          {selected && <Check size={14} color="#FFFFFF" />}
        </Box>
      )}
    </Box>
  );
}
