import { cn } from "@renderer/lib/utils"
import React from "react"

export const Control = ({
  label,
  description,
  children,
  className,
}: {
  label: React.ReactNode
  description?: string
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn("flex items-center justify-between gap-5 py-2 px-3", className)}
    >
      <div className="shrink-0">
        <span className="text-sm font-medium">{label}</span>
        {description && (
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>
      <div className="flex max-w-[50%] grow items-center justify-end">
        {children}
      </div>
    </div>
  )
}

export const ControlGroup = ({
  children,
  className,
  title,
  endDescription,
}: {
  children: React.ReactNode
  className?: string
  title?: React.ReactNode
  endDescription?: React.ReactNode
}) => {
  return (
    <div className={className}>
      {title && (
        <div className="mb-3">
          <span className="text-sm font-semibold">{title}</span>
        </div>
      )}
      <div className="divide-y rounded-lg border">{children}</div>
      {endDescription && (
        <div className="mt-2 flex justify-end text-right text-xs text-neutral-500">
          <div className="max-w-[70%]">{endDescription}</div>
        </div>
      )}
    </div>
  )
}
