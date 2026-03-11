# Integration TODO for Ryan

All integration points in the codebase are tagged with `@integration Ryan`.
Run this to find them all:

```bash
grep -rn "@integration Ryan" src/
```

---

## Message sending

- [ ] **Replace mock send with real API call** — `src/app/(app)/messages/page.tsx` (`handleSend`)
  - Set `sendStatus: "sending"` before the API call
  - Clear `sendStatus` on success, set to `"failed"` on error
  - The UI (MessageBubble) already handles both states: dimmed + spinner for sending, red bubble + retry button for failed

- [ ] **Replace mock retry with real API retry** — `src/app/(app)/messages/page.tsx` (`handleRetrySend`)
  - 4-second cooldown is already enforced in both the handler (via ref) and the UI (via button state)
  - Uses the same message ID so the UI stays consistent

## File uploads

- [ ] **Replace mock file upload with real API** — `src/components/messages/MessageInput.tsx` (`handleFileSelect`)
  - Currently simulates success after 1s delay
  - Upload banner with spinner is already wired up
  - On success: store the returned file URL/ID to attach to the next message

- [ ] **Store the File object for upload retries** — `src/components/messages/MessageInput.tsx` (`handleRetryUpload`)
  - Currently only the file name is stored; the actual `File` object is needed to re-upload
  - Add a `useRef<File | null>` to hold the original file for retry attempts

- [ ] **Attach uploaded file to sent message** — `src/app/(app)/messages/page.tsx` (`handleSend`)
  - Add an `attachments` field to the `Message` interface in `mockData.ts`
  - Pass the uploaded file URL/ID from MessageInput to the send handler

## Sidebar unread badge

- [ ] **Sidebar badge reads from static mock data** — `src/components/Sidebar.tsx:20,92-94`
  - `totalUnread` is computed from the imported `threads` constant, not from live state
  - It won't update when messages are read or new messages arrive
  - Needs to read from shared state (context, store, or API) instead of the mock import

## Mock data removal

- [ ] **Replace all mock data with real API calls** — `src/components/messages/mockData.ts`
  - Keep the type definitions (`Message`, `Thread`, `Blast`, `User`, etc.) and utility functions
  - Replace the hardcoded arrays (`threads`, `messages`, `blasts`, `users`) with API fetches
  - Components importing from `mockData.ts`: ChatArea, MessageBubble, ThreadList, ThreadItem, BlastDetailView, NewMessageDialog, Sidebar, page.tsx

## Dock / Alma AI

- [ ] **Alma AI chat returns a static placeholder** — `src/components/Dock.tsx:205-208`
  - Currently responds with "Alma AI is not connected in this prototype"
  - Replace with real Alma AI integration

- [ ] **Dock tasks are hardcoded** — `src/components/Dock.tsx:33-52`
  - `mockTasks` array is static; replace with real task API

## Blast icon

- [ ] **Move BlastIcon SVG into @willow/icons package** — `src/components/messages/ThreadList.tsx:5`, `src/components/messages/BlastDetailView.tsx:5`
  - The blast icon is currently inlined as a local component in both files
  - Should be `import { Blast } from "@willow/icons"` for consistency

## Student-side messaging

### Decisions

- **Students cannot initiate messages.** No "New Message" button, no compose dialog, no group creation, no blast creation. They can only view and reply to conversations started by staff.

- **No blast/DM distinction on the student side.** Blasts and direct messages both appear in a single inbox — no separate "Announcements" tab or category. From the student's perspective, the delivery mechanism (one-to-one vs. one-to-many) is a counselor-side workflow concern — the student's interaction is the same either way: read the message, optionally reply (which opens/continues a DM with the sender). Blast messages should be **labeled** (e.g., a subtle "Blast" tag) so students have context that it was sent to multiple people, but they live in the same list. The existing `blastReplyMeta` on the `Message` type already tracks blast-reply context for the counselor side, so no additional data model changes are needed.

- **No read receipts.** We are not tracking whether students have read/seen messages. No "seen" indicators, no read timestamps, no delivery status beyond the existing send/fail states on the counselor side.

### What to build

- Student thread list: filtered to only show threads where the student is a participant. No category tabs (or minimal: "All" / "Unread"). No archive controls.
- Student chat view: same as counselor chat view, minus delete-message capability.
- Blasts render as regular incoming messages in the student's thread list. When a student replies to a blast, it creates (or opens) a DM thread with the blast sender — this flow already exists via `blastReplyMeta`.
- Empty state: "No messages yet" (no action prompt, since students can't initiate).

## Toast notifications

- [ ] **Wire up Toast for messaging events** — `src/components/Toast.tsx`
  - Toast system exists (`useToast` hook) but is never used in messaging
  - Suggested uses: message send failure, archive/unarchive confirmation, upload failure
