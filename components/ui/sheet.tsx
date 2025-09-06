"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type SheetSide = "top" | "right" | "bottom" | "left";

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;
export const SheetTitle = DialogPrimitive.Title;
export const SheetDescription = DialogPrimitive.Description;

export function SheetOverlay({ className = "", ...props }: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={
        "fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=closed]:animate-out " +
        className
      }
      {...props}
    />
  );
}

export function SheetContent({
  side = "right",
  className = "",
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { side?: SheetSide }) {
  const sideClasses: Record<SheetSide, string> = {
    top: "inset-x-0 top-0 h-auto",
    right: "inset-y-0 right-0 h-full",
    bottom: "inset-x-0 bottom-0 h-auto",
    left: "inset-y-0 left-0 h-full",
  };

  return (
    <DialogPrimitive.Portal>
      <SheetOverlay />
      <DialogPrimitive.Content
        {...props}
        data-side={side}
        className={
          `fixed z-50 w-72 max-w-[90%] bg-white text-gray-900 shadow-2xl ring-1 ring-black/10 p-4 ${sideClasses[side]} ` +
          className
        }
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
