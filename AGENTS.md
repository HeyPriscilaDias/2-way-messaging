# AGENTS.md

This is a **prototype** of Willow's 2-way messaging feature, built as a reference for a production implementation. It runs on Next.js with MUI (via `@willow/ui-kit`) and uses entirely local mock data — no backend.

## What this prototype covers

- Counselor-side messaging: direct threads, group threads, blasts, archiving, message deletion, retry on send failure
- Blast system: one-to-many messages where student replies surface as private direct threads
- Group management: rename, add/remove members, system messages for membership changes
- Right-panel dock with Alma AI chat (placeholder) and task list (hardcoded)
- Sidebar navigation (only Messages route is active)

## Roles and permissions

There are two roles: **counselor** (the current user in this prototype) and **student**.

### Counselor can:
- Initiate direct messages, group threads, and blasts
- Delete their own sent messages (not student messages)
- Archive/unarchive threads
- Rename groups and manage group members
- Mark threads as unread

### Student cannot:
- Initiate conversations (no "New Message" button, no compose flow)
- Delete any messages
- See blast/DM distinction (blasts and DMs appear in one unified inbox)
- See read receipts

Student-side views are not built in this prototype. See the header comment in `mockData.ts` for a full spec of what to build for students.

## Data model

| Entity | Key relationships |
|---|---|
| **Thread** | Has participants, type (direct/group), optional groupName, archived flag |
| **Message** | Belongs to a thread. Has optional `deleted`, `sendStatus`, `systemText`, `blastReplyMeta` |
| **Blast** | Standalone record with senderId, text, recipientIds. Not a thread — student replies create/reuse direct threads |
| **BlastReplyMeta** | Embedded in a Message to link a student's reply back to the original blast. Currently denormalized (stores blast text inline) |
| **User** | id, name, initials, avatarColor, grade. `currentUserId` is the counselor |

All data lives in `src/components/messages/mockData.ts`. Types are exported and should be preserved; mock arrays should be replaced with API calls.

## Key design decisions to preserve

These are intentional and should carry over to production:

1. **Blast ≠ thread.** A blast is a single record, not a thread per recipient. Student replies surface as direct messages with `blastReplyMeta` linking back.
2. **Two-step blast flow.** Blasts require select recipients → compose message. Groups create immediately. The extra step prevents accidental blast sends.
3. **Sending auto-unarchives.** If a counselor sends a message in an archived thread, it automatically unarchives.
4. **Archived is not a tab.** It's a separate view accessed via the overflow menu, to prevent idle browsing of archived threads alongside active ones.
5. **Optimistic UI for reads.** Selecting a thread immediately sets `unreadCount: 0` — don't wait for API acknowledgment.
6. **Delete is scoped to counselor's own messages.** Counselors cannot delete student messages. Students cannot delete any messages.
7. **System messages for membership changes.** Adding/removing group members generates centered italic annotations (not chat bubbles). The "added" message uses a +1ms timestamp offset to render after the "removed" message.
8. **4-second retry cooldown.** Prevents spam-clicking on failed messages. Do not reduce for UX reasons.
9. **Enter sends, Shift+Enter newlines.** Standard chat convention.

## Inline comment conventions

This codebase uses structured comment prefixes for agent-readable context:

| Prefix | Meaning |
|---|---|
| `// Design:` | Rationale behind a decision — preserve in production |
| `// Constraint:` | Hard boundary the production app must respect |
| `// TODO(agent):` | Actionable item for the production build |
| `// Prototype:` | Shortcut that needs real implementation in prod |
| `// Avoid:` | Anti-pattern the production agent should not use |
| `@integration Ryan` | Integration point for the backend engineer — marks where mock code should be replaced with real API calls |

## Prototype shortcuts (replace in prod)

- All data is local mock data (`mockData.ts`) — replace with API calls
- Message delete is client-side soft delete — needs server-side enforcement
- Auto-scroll always jumps to bottom — should preserve position when user is reading history
- BlastIcon SVG is duplicated in 3 files — extract to `@willow/icons`
- Emoji button has no picker wired up
- Alma AI returns a static placeholder
- Sidebar unread badge reads from static import, not live state
- User profile is hardcoded to "Maya Chen"
- Thread list width is fixed at 360px
- `blastReplyMeta.originalBlastText` is denormalized — prod should fetch by blast ID

## File map

| File | Role |
|---|---|
| `src/app/(app)/messages/page.tsx` | State orchestrator — all threads, messages, blasts, and handlers live here |
| `src/components/messages/ThreadList.tsx` | Left panel: tabs, search, thread/blast list |
| `src/components/messages/ChatArea.tsx` | Right panel: message display, input, group actions dialog |
| `src/components/messages/MessageBubble.tsx` | Individual message rendering with retry, delete, blast reply context |
| `src/components/messages/MessageInput.tsx` | Text input with emoji/attachment buttons |
| `src/components/messages/NewMessageDialog.tsx` | Modal for creating DMs, groups, and blasts |
| `src/components/messages/BlastDetailView.tsx` | Read-only blast detail with recipient list and reply status |
| `src/components/messages/mockData.ts` | All types, mock data, and utility functions |
| `src/components/Sidebar.tsx` | Left nav with unread badge |
| `src/components/Dock.tsx` | Right panel: Alma AI chat + task list |
