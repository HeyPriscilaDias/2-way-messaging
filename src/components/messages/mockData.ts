/**
 * @integration Ryan — Replace all mock data with real API calls.
 * Keep the type definitions (Message, Thread, Blast, User, etc.) and utility functions.
 * Replace the hardcoded arrays (threads, messages, blasts, users) with API fetches.
 * Components importing from mockData.ts: ChatArea, MessageBubble, ThreadList, ThreadItem,
 * BlastDetailView, NewMessageDialog, Sidebar, page.tsx.
 *
 * File upload additions needed:
 * - Add an `attachments` field to the Message interface
 * - Pass the uploaded file URL/ID from MessageInput to the send handler in page.tsx
 *
 * Student-side messaging decisions:
 * - Students cannot initiate messages (no "New Message" button, no compose dialog)
 * - No blast/DM distinction on the student side — blasts and DMs appear in one inbox
 * - Blast messages should be labeled (e.g. a subtle "Blast" tag) so students know
 *   it was sent to multiple people, but they live in the same list
 * - No read receipts (no "seen" indicators, no read timestamps)
 * - blastReplyMeta on Message already tracks blast-reply context for the counselor side
 *
 * What to build for students:
 * - Student thread list: filtered to threads where the student is a participant.
 *   No category tabs (or minimal: "All" / "Unread"). No archive controls.
 * - Student chat view: same as counselor chat view, minus delete-message capability.
 * - Blasts render as regular incoming messages. Replying creates/opens a DM thread
 *   with the blast sender via blastReplyMeta (already exists).
 * - Empty state: "No messages yet" (no action prompt since students can't initiate).
 */
export interface User {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  grade?: string;
}

export interface Blast {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
  recipientIds: string[];
}

// Design: blastReplyMeta embeds the original blast text directly in each reply message.
// This denormalization simplifies rendering but means blast edits won't propagate to existing replies.
// TODO(agent): In prod, store only the blast ID and fetch text on demand to avoid stale content.
export interface BlastReplyMeta {
  originalBlastId: string;
  originalBlastText: string;
}

/**
 * Message send status for optimistic UI updates.
 * - "sending": Message is in-flight (show spinner/dimmed state)
 * - "failed": Send failed (show retry button)
 * - undefined: Message was sent successfully or is an incoming message
 *
 * @integration Ryan — When integrating with the real API, set sendStatus to "sending"
 * before the API call, then clear it on success or set to "failed" on error.
 * See handleSend and handleRetrySend in messages/page.tsx for the full flow.
 */
export type MessageSendStatus = "sending" | "failed";

export interface Message {
  id: string;
  threadId: string;
  senderId: string;
  text: string;
  timestamp: Date;
  deleted?: boolean;
  blastReplyMeta?: BlastReplyMeta;
  sendStatus?: MessageSendStatus;
  /** System-generated text (e.g. "X was added to this group"). Rendered as a centered annotation, not a bubble. */
  systemText?: string;
}

export type ThreadType = "direct" | "group";

export interface Thread {
  id: string;
  participants: string[];
  groupName?: string;
  type: ThreadType;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  archived?: boolean;
}

export const currentUserId = "user-me";

export const users: Record<string, User> = {
  "user-me": {
    id: "user-me",
    name: "Maya Chen",
    initials: "MC",
    avatarColor: "#062F29",
    grade: "Staff",
  },
  "user-1": {
    id: "user-1",
    name: "Sarah Johnson",
    initials: "SJ",
    avatarColor: "#7C3AED",
    grade: "11th Grade",
  },
  "user-2": {
    id: "user-2",
    name: "James Wilson",
    initials: "JW",
    avatarColor: "#2563EB",
    grade: "12th Grade",
  },
  "user-3": {
    id: "user-3",
    name: "Emily Davis",
    initials: "ED",
    avatarColor: "#DC2626",
    grade: "10th Grade",
  },
  "user-4": {
    id: "user-4",
    name: "Michael Brown",
    initials: "MB",
    avatarColor: "#D97706",
    grade: "11th Grade",
  },
  "user-5": {
    id: "user-5",
    name: "Lisa Anderson",
    initials: "LA",
    avatarColor: "#059669",
    grade: "9th Grade",
  },
  "user-6": {
    id: "user-6",
    name: "David Kim",
    initials: "DK",
    avatarColor: "#4F46E5",
    grade: "12th Grade",
  },
  "user-7": {
    id: "user-7",
    name: "Rachel Torres",
    initials: "RT",
    avatarColor: "#E11D48",
    grade: "10th Grade",
  },
  "user-8": {
    id: "user-8",
    name: "Nathan Lee",
    initials: "NL",
    avatarColor: "#0891B2",
    grade: "9th Grade",
  },
  "user-9": {
    id: "user-9",
    name: "Olivia Martinez",
    initials: "OM",
    avatarColor: "#7C3AED",
    grade: "11th Grade",
  },
  "user-10": {
    id: "user-10",
    name: "Ethan Patel",
    initials: "EP",
    avatarColor: "#CA8A04",
    grade: "12th Grade",
  },
  "user-11": { id: "user-11", name: "Aiden Murphy", initials: "AM", avatarColor: "#6D28D9", grade: "10th Grade" },
  "user-12": { id: "user-12", name: "Chloe Nguyen", initials: "CN", avatarColor: "#DB2777", grade: "11th Grade" },
  "user-13": { id: "user-13", name: "Tyler Brooks", initials: "TB", avatarColor: "#0D9488", grade: "9th Grade" },
  "user-14": { id: "user-14", name: "Sophia Ramirez", initials: "SR", avatarColor: "#EA580C", grade: "12th Grade" },
  "user-15": { id: "user-15", name: "Brandon Scott", initials: "BS", avatarColor: "#4338CA", grade: "10th Grade" },
  "user-16": { id: "user-16", name: "Isabella Thompson", initials: "IT", avatarColor: "#BE185D", grade: "11th Grade" },
  "user-17": { id: "user-17", name: "Mason Rivera", initials: "MR", avatarColor: "#15803D", grade: "9th Grade" },
  "user-18": { id: "user-18", name: "Ava Collins", initials: "AC", avatarColor: "#B91C1C", grade: "12th Grade" },
  "user-19": { id: "user-19", name: "Jayden Foster", initials: "JF", avatarColor: "#1D4ED8", grade: "10th Grade" },
  "user-20": { id: "user-20", name: "Mia Gonzalez", initials: "MG", avatarColor: "#9333EA", grade: "11th Grade" },
  "user-21": { id: "user-21", name: "Caleb Hughes", initials: "CH", avatarColor: "#0F766E", grade: "9th Grade" },
  "user-22": { id: "user-22", name: "Harper Bailey", initials: "HB", avatarColor: "#C2410C", grade: "12th Grade" },
  "user-23": { id: "user-23", name: "Dylan Simmons", initials: "DS", avatarColor: "#7C3AED", grade: "10th Grade" },
  "user-24": { id: "user-24", name: "Ella Wright", initials: "EW", avatarColor: "#E11D48", grade: "11th Grade" },
  "user-25": { id: "user-25", name: "Jordan Cooper", initials: "JC", avatarColor: "#2563EB", grade: "9th Grade" },
  "user-26": { id: "user-26", name: "Lily Morgan", initials: "LM", avatarColor: "#D97706", grade: "12th Grade" },
  "user-27": { id: "user-27", name: "Noah Bennett", initials: "NB", avatarColor: "#059669", grade: "10th Grade" },
  "user-28": { id: "user-28", name: "Zoe Patterson", initials: "ZP", avatarColor: "#DC2626", grade: "11th Grade" },
  "user-29": { id: "user-29", name: "Lucas Reed", initials: "LR", avatarColor: "#4F46E5", grade: "9th Grade" },
  "user-30": { id: "user-30", name: "Grace Sullivan", initials: "GS", avatarColor: "#0891B2", grade: "12th Grade" },
};

function daysAgo(days: number, hours = 10, minutes = 0): Date {
  const d = new Date();
  d.setDate(d.getDate() - days);
  d.setHours(hours, minutes, 0, 0);
  return d;
}

export const threads: Thread[] = [
  {
    id: "thread-1",
    participants: ["user-me", "user-1"],
    type: "direct",
    lastMessage: "Sure, I'll send the report by EOD!",
    lastMessageTime: daysAgo(0, 14, 32),
    unreadCount: 2,
  },
  {
    id: "thread-2",
    participants: ["user-me", "user-2"],
    type: "direct",
    lastMessage: "Can we reschedule the meeting?",
    lastMessageTime: daysAgo(0, 11, 15),
    unreadCount: 0,
  },
  {
    id: "thread-3",
    participants: ["user-me", "user-3"],
    type: "direct",
    lastMessage: "The new designs look great!",
    lastMessageTime: daysAgo(1, 16, 45),
    unreadCount: 1,
  },
  {
    id: "thread-4",
    participants: ["user-me", "user-4", "user-5"],
    groupName: "Project Alpha",
    type: "group",
    lastMessage: "Let's sync tomorrow morning",
    lastMessageTime: daysAgo(1, 9, 20),
    unreadCount: 0,
  },
  {
    id: "thread-5",
    participants: ["user-me", "user-6"],
    type: "direct",
    lastMessage: "Thanks for the help!",
    lastMessageTime: daysAgo(2, 15, 10),
    unreadCount: 0,
  },
  {
    id: "thread-6",
    participants: ["user-me", "user-5"],
    type: "direct",
    lastMessage: "I'll review the PR this afternoon",
    lastMessageTime: daysAgo(3, 13, 0),
    unreadCount: 3,
  },
  {
    id: "thread-7",
    participants: ["user-me", "user-7"],
    type: "direct",
    lastMessage: "Got it, thanks for the update!",
    lastMessageTime: daysAgo(5, 11, 30),
    unreadCount: 0,
    archived: true,
  },
  {
    id: "thread-8",
    participants: ["user-me", "user-8", "user-9"],
    groupName: "Study Group",
    type: "group",
    lastMessage: "See you all next week",
    lastMessageTime: daysAgo(7, 14, 0),
    unreadCount: 0,
    archived: true,
  },
  // Direct thread for Ethan (blast reply destination)
  {
    id: "thread-9",
    participants: ["user-me", "user-10"],
    type: "direct",
    lastMessage: "I have a question about the application deadline — is it Friday at midnight or end of school day?",
    lastMessageTime: daysAgo(0, 9, 15),
    unreadCount: 1,
  },
  // Direct thread for Olivia (blast reply destination)
  {
    id: "thread-10",
    participants: ["user-me", "user-9"],
    type: "direct",
    lastMessage: "I lost my permission slip, can I get another copy?",
    lastMessageTime: daysAgo(0, 10, 30),
    unreadCount: 1,
  },
  // Large group thread: 30 students
  {
    id: "thread-11",
    participants: [
      "user-me",
      "user-1", "user-2", "user-3", "user-4", "user-5",
      "user-6", "user-7", "user-8", "user-9", "user-10",
      "user-11", "user-12", "user-13", "user-14", "user-15",
      "user-16", "user-17", "user-18", "user-19", "user-20",
      "user-21", "user-22", "user-23", "user-24", "user-25",
      "user-26", "user-27", "user-28", "user-29", "user-30",
    ],
    groupName: "Junior Class Advisory",
    type: "group",
    lastMessage: "Please make sure to check your email for the permission slip link.",
    lastMessageTime: daysAgo(0, 8, 45),
    unreadCount: 0,
  },
];

export const messages: Message[] = [
  // Thread 1: Maya & Sarah
  {
    id: "msg-1-1",
    threadId: "thread-1",
    senderId: "user-me",
    text: "Hey Sarah, did you get a chance to look at the quarterly report?",
    timestamp: daysAgo(1, 9, 0),
  },
  {
    id: "msg-1-2",
    threadId: "thread-1",
    senderId: "user-1",
    text: "Hi Maya! Yes, I reviewed it this morning. There are a few numbers that need updating in the financials section.",
    timestamp: daysAgo(1, 9, 15),
  },
  {
    id: "msg-1-3",
    threadId: "thread-1",
    senderId: "user-me",
    text: "Oh okay, which ones specifically?",
    timestamp: daysAgo(1, 9, 20),
  },
  {
    id: "msg-1-4",
    threadId: "thread-1",
    senderId: "user-1",
    text: "The Q3 revenue figure and the year-over-year comparison chart. I'll mark them up and send it back to you.",
    timestamp: daysAgo(1, 9, 45),
  },
  {
    id: "msg-1-5",
    threadId: "thread-1",
    senderId: "user-me",
    text: "Perfect, thanks! Can you send it by end of day?",
    timestamp: daysAgo(0, 14, 10),
  },
  {
    id: "msg-1-6",
    threadId: "thread-1",
    senderId: "user-1",
    text: "Sure, I'll send the report by EOD!",
    timestamp: daysAgo(0, 14, 32),
  },

  // Thread 2: Maya & James
  {
    id: "msg-2-1",
    threadId: "thread-2",
    senderId: "user-2",
    text: "Hey Maya, about our 2pm meeting today...",
    timestamp: daysAgo(0, 10, 30),
  },
  {
    id: "msg-2-2",
    threadId: "thread-2",
    senderId: "user-me",
    text: "What's up?",
    timestamp: daysAgo(0, 10, 45),
  },
  {
    id: "msg-2-3",
    threadId: "thread-2",
    senderId: "user-2",
    text: "Can we reschedule the meeting?",
    timestamp: daysAgo(0, 11, 15),
  },

  // Thread 3: Maya & Emily
  {
    id: "msg-3-1",
    threadId: "thread-3",
    senderId: "user-3",
    text: "I just finished the mockups for the new landing page! Want to take a look?",
    timestamp: daysAgo(1, 15, 0),
  },
  {
    id: "msg-3-2",
    threadId: "thread-3",
    senderId: "user-me",
    text: "Yes please, send them over!",
    timestamp: daysAgo(1, 15, 30),
  },
  {
    id: "msg-3-3",
    threadId: "thread-3",
    senderId: "user-3",
    text: "Here you go 🎨 Let me know what you think!",
    timestamp: daysAgo(1, 16, 0),
  },
  {
    id: "msg-3-4",
    threadId: "thread-3",
    senderId: "user-me",
    text: "The new designs look great!",
    timestamp: daysAgo(1, 16, 45),
  },

  // Thread 4: Group - Project Alpha
  {
    id: "msg-4-1",
    threadId: "thread-4",
    senderId: "user-4",
    text: "Team, we need to finalize the sprint scope for next week.",
    timestamp: daysAgo(1, 8, 30),
  },
  {
    id: "msg-4-2",
    threadId: "thread-4",
    senderId: "user-5",
    text: "I can take the frontend tasks. Maya, are you handling the API integration?",
    timestamp: daysAgo(1, 8, 45),
  },
  {
    id: "msg-4-3",
    threadId: "thread-4",
    senderId: "user-me",
    text: "Yes, I'll own the API work. Let's sync tomorrow morning to align on the details.",
    timestamp: daysAgo(1, 9, 0),
  },
  {
    id: "msg-4-4",
    threadId: "thread-4",
    senderId: "user-4",
    text: "Let's sync tomorrow morning",
    timestamp: daysAgo(1, 9, 20),
  },

  // Thread 5: Maya & David
  {
    id: "msg-5-1",
    threadId: "thread-5",
    senderId: "user-me",
    text: "David, could you help me debug the auth flow? I'm getting a weird redirect loop.",
    timestamp: daysAgo(2, 14, 0),
  },
  {
    id: "msg-5-2",
    threadId: "thread-5",
    senderId: "user-6",
    text: "Sure! Check if the callback URL in your OAuth config matches the one in your .env file.",
    timestamp: daysAgo(2, 14, 30),
  },
  {
    id: "msg-5-3",
    threadId: "thread-5",
    senderId: "user-me",
    text: "That was it! The trailing slash was missing. Thanks for the help!",
    timestamp: daysAgo(2, 15, 10),
  },

  // Thread 6: Maya & Lisa
  {
    id: "msg-6-1",
    threadId: "thread-6",
    senderId: "user-5",
    text: "Maya, I pushed the changes to the feature branch. Can you review when you get a chance?",
    timestamp: daysAgo(3, 11, 0),
  },
  {
    id: "msg-6-2",
    threadId: "thread-6",
    senderId: "user-me",
    text: "Sure thing! I'll look at it after lunch.",
    timestamp: daysAgo(3, 12, 0),
  },
  {
    id: "msg-6-3",
    threadId: "thread-6",
    senderId: "user-5",
    text: "I'll review the PR this afternoon",
    timestamp: daysAgo(3, 13, 0),
  },

  // Thread 7: Maya & Rachel (archived)
  {
    id: "msg-7-1",
    threadId: "thread-7",
    senderId: "user-7",
    text: "Hey Maya, just wanted to let you know I submitted my assignment.",
    timestamp: daysAgo(5, 10, 0),
  },
  {
    id: "msg-7-2",
    threadId: "thread-7",
    senderId: "user-me",
    text: "Got it, thanks for the update!",
    timestamp: daysAgo(5, 11, 30),
  },

  // Thread 8: Study Group (archived)
  {
    id: "msg-8-1",
    threadId: "thread-8",
    senderId: "user-8",
    text: "Are we still meeting this Friday?",
    timestamp: daysAgo(7, 12, 0),
  },
  {
    id: "msg-8-2",
    threadId: "thread-8",
    senderId: "user-9",
    text: "Yes! Same time, same place.",
    timestamp: daysAgo(7, 13, 0),
  },
  {
    id: "msg-8-3",
    threadId: "thread-8",
    senderId: "user-me",
    text: "See you all next week",
    timestamp: daysAgo(7, 14, 0),
  },

  // Thread 9: Ethan replies to a blast (single sentence — no expand icon)
  {
    id: "msg-9-1",
    threadId: "thread-9",
    senderId: "user-10",
    text: "I have a question about the application deadline — is it Friday at midnight or end of school day?",
    timestamp: daysAgo(0, 9, 15),
    blastReplyMeta: {
      originalBlastId: "blast-1",
      originalBlastText: "Don't forget to submit your college applications by Friday!",
    },
  },

  // Thread 10: Olivia replies to a blast (multi-sentence — shows expand icon)
  {
    id: "msg-10-1",
    threadId: "thread-10",
    senderId: "user-9",
    text: "I lost my permission slip, can I get another copy?",
    timestamp: daysAgo(0, 10, 30),
    blastReplyMeta: {
      originalBlastId: "blast-2",
      originalBlastText: "Reminder: Junior class meeting tomorrow at 3pm in the auditorium. Please bring your signed permission slips for the field trip. Let me know if you have any questions!",
    },
  },

  // Thread 11: Junior Class Advisory (30-student group)
  {
    id: "msg-11-1",
    threadId: "thread-11",
    senderId: "user-me",
    text: "Hi everyone! Welcome to the Junior Class Advisory group. I'll be using this thread to share important updates about college prep, field trips, and upcoming deadlines.",
    timestamp: daysAgo(2, 9, 0),
  },
  {
    id: "msg-11-2",
    threadId: "thread-11",
    senderId: "user-me",
    text: "First up — the college fair is next Thursday from 3-5pm in the gym. Attendance is strongly encouraged. Over 40 schools will be represented.",
    timestamp: daysAgo(2, 9, 5),
  },
  {
    id: "msg-11-3",
    threadId: "thread-11",
    senderId: "user-14",
    text: "Do we need to sign up ahead of time or can we just show up?",
    timestamp: daysAgo(2, 9, 30),
  },
  {
    id: "msg-11-4",
    threadId: "thread-11",
    senderId: "user-me",
    text: "Just show up! No sign-up needed. Bring a pen and something to take notes on.",
    timestamp: daysAgo(2, 9, 35),
  },
  {
    id: "msg-11-5",
    threadId: "thread-11",
    senderId: "user-me",
    text: "Please make sure to check your email for the permission slip link.",
    timestamp: daysAgo(0, 8, 45),
  },
];

export const blasts: Blast[] = [
  {
    id: "blast-1",
    senderId: "user-me",
    text: "Don't forget to submit your college applications by Friday!",
    timestamp: daysAgo(1, 8, 0),
    recipientIds: ["user-10", "user-2", "user-6"],
  },
  {
    id: "blast-2",
    senderId: "user-me",
    text: "Reminder: Junior class meeting tomorrow at 3pm in the auditorium. Please bring your signed permission slips for the field trip. Let me know if you have any questions!",
    timestamp: daysAgo(2, 9, 0),
    recipientIds: ["user-9", "user-1", "user-4"],
  },
];

export function getStudents(): User[] {
  return Object.values(users).filter((u) => u.id !== currentUserId);
}

export function getThreadDisplayName(thread: Thread, currentUser: string): string {
  if (thread.groupName) return thread.groupName;
  const otherParticipants = thread.participants.filter((id) => id !== currentUser);
  return otherParticipants.map((id) => users[id]?.name ?? "Unknown").join(", ");
}

export function getThreadAvatar(thread: Thread, currentUser: string): User | undefined {
  if (thread.groupName) return undefined;
  const otherId = thread.participants.find((id) => id !== currentUser);
  return otherId ? users[otherId] : undefined;
}

export function formatMessageTime(date: Date): string {
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
}

export function formatThreadTime(date: Date): string {
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return formatMessageTime(date);
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return date.toLocaleDateString("en-US", { weekday: "short" });
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function getDateLabel(date: Date): string {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const msgDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diffDays = Math.floor((today.getTime() - msgDate.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  return date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}
