export interface User {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  online?: boolean;
}

export interface Message {
  id: string;
  threadId: string;
  senderId: string;
  text: string;
  timestamp: Date;
  deleted?: boolean;
}

export interface Thread {
  id: string;
  participants: string[];
  groupName?: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
}

export const currentUserId = "user-me";

export const users: Record<string, User> = {
  "user-me": {
    id: "user-me",
    name: "Maya Chen",
    initials: "MC",
    avatarColor: "#062F29",
    online: true,
  },
  "user-1": {
    id: "user-1",
    name: "Sarah Johnson",
    initials: "SJ",
    avatarColor: "#7C3AED",
    online: true,
  },
  "user-2": {
    id: "user-2",
    name: "James Wilson",
    initials: "JW",
    avatarColor: "#2563EB",
    online: false,
  },
  "user-3": {
    id: "user-3",
    name: "Emily Davis",
    initials: "ED",
    avatarColor: "#DC2626",
    online: true,
  },
  "user-4": {
    id: "user-4",
    name: "Michael Brown",
    initials: "MB",
    avatarColor: "#D97706",
    online: false,
  },
  "user-5": {
    id: "user-5",
    name: "Lisa Anderson",
    initials: "LA",
    avatarColor: "#059669",
    online: true,
  },
  "user-6": {
    id: "user-6",
    name: "David Kim",
    initials: "DK",
    avatarColor: "#4F46E5",
    online: false,
  },
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
    lastMessage: "Sure, I'll send the report by EOD!",
    lastMessageTime: daysAgo(0, 14, 32),
    unreadCount: 2,
  },
  {
    id: "thread-2",
    participants: ["user-me", "user-2"],
    lastMessage: "Can we reschedule the meeting?",
    lastMessageTime: daysAgo(0, 11, 15),
    unreadCount: 0,
  },
  {
    id: "thread-3",
    participants: ["user-me", "user-3"],
    lastMessage: "The new designs look great!",
    lastMessageTime: daysAgo(1, 16, 45),
    unreadCount: 1,
  },
  {
    id: "thread-4",
    participants: ["user-me", "user-4", "user-5"],
    groupName: "Project Alpha",
    lastMessage: "Let's sync tomorrow morning",
    lastMessageTime: daysAgo(1, 9, 20),
    unreadCount: 0,
  },
  {
    id: "thread-5",
    participants: ["user-me", "user-6"],
    lastMessage: "Thanks for the help!",
    lastMessageTime: daysAgo(2, 15, 10),
    unreadCount: 0,
  },
  {
    id: "thread-6",
    participants: ["user-me", "user-5"],
    lastMessage: "I'll review the PR this afternoon",
    lastMessageTime: daysAgo(3, 13, 0),
    unreadCount: 3,
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
];

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
