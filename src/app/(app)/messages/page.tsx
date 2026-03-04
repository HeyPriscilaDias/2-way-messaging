"use client";

import { BreadcrumbItem } from "@willow/ui-kit";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";

export default function MessagesPage() {
  return (
    <>
      <PageBreadcrumbs>
        <BreadcrumbItem label="Messages" />
      </PageBreadcrumbs>

      {/* Placeholder content */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#6B7280",
        fontSize: "15px",
      }}>
        Messages will go here
      </div>
    </>
  );
}
