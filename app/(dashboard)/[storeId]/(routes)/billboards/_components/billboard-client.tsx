"use client";

import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";

type Props = {};

const BillboardClient = (props: Props) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Billboards"
          description="Manage billboards for your store"
        />
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
    </>
  );
};

export default BillboardClient;
