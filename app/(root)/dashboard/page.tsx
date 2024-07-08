"use client";

import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import TheForm from "@/app/components/dashboard/TheForm";

export default function DashboardHome() {
  const [previewType, setPreviewType] = useState("mobile");

  const handlePreviewTypeChange = (type: string) => {
    setPreviewType(type);
  };
  return (
    <div className="bg-white rounded-lg border shadow-sm p-2">
      <TheForm></TheForm>
    </div>
  );
}
