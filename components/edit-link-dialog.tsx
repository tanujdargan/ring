"use client"

import type React from "react"

import { useState, useEffect } from "react"
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
  id: string
  title: string
  url: string
  description?: string
  icon?: string
}

interface EditLinkDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  link: Link
  onEditLink: (updatedLink: Omit<Link, "id">) => void
}

export function EditLinkDialog({ open, onOpenChange, link, onEditLink }: EditLinkDialogProps) {
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    description: "",
    icon: "",
  })

  useEffect(() => {
    if (open && link) {
      setFormData({
        title: link.title,
        url: link.url,
        description: link.description || "",
        icon: link.icon || "",
      })
    }
  }, [open, link])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.title && formData.url) {
      onEditLink(formData)
      onOpenChange(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-popover border-border">
        <DialogHeader>
          <DialogTitle className="text-popover-foreground">Edit Link</DialogTitle>
          <DialogDescription className="text-muted-foreground">{"Update your link details below."}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="edit-title" className="text-popover-foreground">
              Title *
            </Label>
            <Input
              id="edit-title"
              placeholder="e.g., My Portfolio"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="bg-input border-border text-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-url" className="text-popover-foreground">
              URL *
            </Label>
            <Input
              id="edit-url"
              type="url"
              placeholder="https://example.com"
              value={formData.url}
              onChange={(e) => handleChange("url", e.target.value)}
              className="bg-input border-border text-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-description" className="text-popover-foreground">
              Description
            </Label>
            <Textarea
              id="edit-description"
              placeholder="Brief description (optional)"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="bg-input border-border text-foreground resize-none"
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-icon" className="text-popover-foreground">
              Icon
            </Label>
            <Input
              id="edit-icon"
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
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
