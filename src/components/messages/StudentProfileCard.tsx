"use client";

import {
  useState,
  useRef,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { Box, Avatar, TextButton } from "@willow/ui-kit";
import { ChatCircle } from "@willow/icons";
import type { User } from "./mockData";

const HOVER_DELAY = 600;
const CARD_GAP = 8;

interface StudentProfileCardProps {
  user: User;
  onMessage: (userId: string) => void;
  children: ReactNode;
}

export default function StudentProfileCard({
  user,
  onMessage,
  children,
}: StudentProfileCardProps) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [placementAbove, setPlacementAbove] = useState(false);
  const [mounted, setMounted] = useState(false);

  const triggerRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isOverTrigger = useRef(false);
  const isOverCard = useRef(false);

  const showCard = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const above = spaceBelow < 200;

    setPlacementAbove(above);
    setPosition({
      top: above ? rect.top - CARD_GAP : rect.bottom + CARD_GAP,
      left: rect.left,
    });
    setVisible(true);
  }, []);

  const dismissCard = useCallback(() => {
    // Small delay to allow cursor to move between trigger and card
    setTimeout(() => {
      if (!isOverTrigger.current && !isOverCard.current) {
        setVisible(false);
      }
    }, 30);
  }, []);

  const handleTriggerEnter = useCallback(() => {
    isOverTrigger.current = true;
    hoverTimer.current = setTimeout(showCard, HOVER_DELAY);
  }, [showCard]);

  const handleTriggerLeave = useCallback(() => {
    isOverTrigger.current = false;
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
    dismissCard();
  }, [dismissCard]);

  const handleCardEnter = useCallback(() => {
    isOverCard.current = true;
  }, []);

  const handleCardLeave = useCallback(() => {
    isOverCard.current = false;
    dismissCard();
  }, [dismissCard]);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, []);

  // Reposition card if it would clip off the right edge
  useEffect(() => {
    if (visible && cardRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();
      if (cardRect.right > window.innerWidth - 16) {
        setPosition((prev) => ({
          ...prev,
          left: Math.max(16, window.innerWidth - cardRect.width - 16),
        }));
      }
    }
  }, [visible]);

  const card = visible && mounted
    ? createPortal(
        <Box
          ref={cardRef}
          onMouseEnter={handleCardEnter}
          onMouseLeave={handleCardLeave}
          sx={{
            position: "fixed",
            top: position.top,
            left: position.left,
            transform: placementAbove ? "translateY(-100%)" : undefined,
            zIndex: 1400,
            width: 260,
            bgcolor: "#FFFFFF",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
            border: "1px solid #E5E7EB",
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            animation: "profileCardFadeIn 0.15s ease-out",
            "@keyframes profileCardFadeIn": {
              from: { opacity: 0, transform: placementAbove ? "translateY(calc(-100% + 4px))" : "translateY(-4px)" },
              to: { opacity: 1, transform: placementAbove ? "translateY(-100%)" : "translateY(0)" },
            },
          }}
        >
          {/* Avatar */}
          <Box sx={{ position: "relative" }}>
            <Avatar
              sx={{
                width: 56,
                height: 56,
                bgcolor: user.avatarColor,
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              {user.initials}
            </Avatar>
            {user.online && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 2,
                  right: 2,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor: "#22C55E",
                  border: "2px solid #FFFFFF",
                }}
              />
            )}
          </Box>

          {/* Name */}
          <Box
            sx={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#062F29",
              textAlign: "center",
              lineHeight: 1.3,
            }}
          >
            {user.name}
          </Box>

          {/* Grade */}
          {user.grade && (
            <Box
              sx={{
                fontSize: "13px",
                color: "#6B7280",
                mt: -0.5,
              }}
            >
              {user.grade}
            </Box>
          )}

          {/* Message button */}
          <TextButton
            variant="primary"
            size="sm"
            leadingIcon={<ChatCircle width={16} height={16} />}
            onClick={(e) => {
              e.stopPropagation();
              setVisible(false);
              onMessage(user.id);
            }}
            sx={{ mt: 0.5, width: "100%" }}
          >
            Message
          </TextButton>
        </Box>,
        document.body
      )
    : null;

  return (
    <>
      <Box
        component="span"
        ref={triggerRef}
        onMouseEnter={handleTriggerEnter}
        onMouseLeave={handleTriggerLeave}
        sx={{
          cursor: "default",
          display: "inline",
        }}
      >
        {children}
      </Box>
      {card}
    </>
  );
}
