"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Link {
  title: string
  url: string
  description?: string
  icon?: string
}

interface AddLinkDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddLink: (link: Link) => void
}

export function AddLinkDialog({ open, onOpenChange, onAddLink }: AddLinkDialogProps) {
  const [formData, setFormData] = useState<Link>({
    title: "",
    url: "",
    description: "",
    icon: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.title && formData.url) {
      onAddLink(formData)
      setFormData({ title: "", url: "", description: "", icon: "" })
      onOpenChange(false)
    }
  }

  const handleChange = (field: keyof Link, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-popover border-border">
        <DialogHeader>
          <DialogTitle className="text-popover-foreground">Add New Link</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {"Add a new link to your profile. Fill in the details below."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-popover-foreground">
              Title *
            </Label>
            <Input
              id="title"
              placeholder="e.g., My Portfolio"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="bg-input border-border text-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="url" className="text-popover-foreground">
              URL *
            </Label>
            <Input
              id="url"
              type="url"
              placeholder="https://example.com"
              value={formData.url}
              onChange={(e) => handleChange("url", e.target.value)}
              className="bg-input border-border text-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-popover-foreground">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Brief description (optional)"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="bg-input border-border text-foreground resize-none"
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="icon" className="text-popover-foreground">
              Icon
            </Label>
            <Input
              id="icon"
              placeholder="🌐 (emoji or leave empty)"
              value={formData.icon}
              onChange={(e) => handleChange("icon", e.target.value)}
              className="bg-input border-border text-foreground"
              maxLength={2}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="border-border">
              Cancel
            </Button>
            <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Add Link
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
