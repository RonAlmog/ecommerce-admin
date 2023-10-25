"use client";

import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Store } from "@prisma/client";
import { Trash } from "lucide-react";

interface SettingsFormProps {
  initialData: Store;
}

const SettingsForm = ({ initialData }: SettingsFormProps) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Settings" description="Manage store settings" />
        <Button variant="destructive" size="icon" onClick={() => {}}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      <Separator />
    </>
  );
};

export default SettingsForm;
