import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { JapaneseYen } from "lucide-react";
import Image from "next/image";

export default function SetupPage() {
  return (
    <div className="p-4">
      <p>protected page</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
