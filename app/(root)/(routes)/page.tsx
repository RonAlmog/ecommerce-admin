"use client";

import { Button } from "@/components/ui/button";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

export default function SetupPage() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);
  const storeModal = useStoreModal();

  const showModal = () => {
    storeModal.onOpen();
  };

  // useEffect(() => {
  //   if (!isOpen) {
  //     onOpen();
  //   }
  // }, [isOpen, onOpen]);

  return (
    <div className="p-4">
      root page
      <Button onClick={showModal}>open</Button>
    </div>
  );
}
