"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Trash2, Edit } from "lucide-react"
import { EditLinkDialog } from "@/components/edit-link-dialog"

interface Link {
  id: string
  title: string
  url: string
  description?: string
  icon?: string
}

interface LinkCardProps {
  link: Link
  isEditMode: boolean
  onDelete: (id: string) => void
  onEdit: (id: string, updatedLink: Omit<Link, "id">) => void
}

export function LinkCard({ link, isEditMode, onDelete, onEdit }: LinkCardProps) {
  const [showEditDialog, setShowEditDialog] = useState(false)

  const handleClick = () => {
    if (!isEditMode) {
      window.open(link.url, "_blank", "noopener,noreferrer")
    }
  }

  const handleEdit = (updatedLink: Omit<Link, "id">) => {
    onEdit(link.id, updatedLink)
  }

  return (
    <>
      <Card
        className={`p-4 transition-all duration-200 ${
          isEditMode
            ? "bg-card border-border"
            : "bg-card hover:bg-accent/5 hover:border-accent cursor-pointer hover:shadow-md"
        }`}
        onClick={handleClick}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            {link.icon && <div className="text-2xl flex-shrink-0">{link.icon}</div>}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-card-foreground truncate">{link.title}</h3>
              {link.description && <p className="text-sm text-muted-foreground truncate">{link.description}</p>}
            </div>
          </div>

          <div className="flex items-center space-x-2 flex-shrink-0">
            {isEditMode ? (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowEditDialog(true)
                  }}
                  className="h-8 w-8 p-0 hover:bg-accent/10"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    onDelete(link.id)
                  }}
                  className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
        </div>
      </Card>

      <EditLinkDialog open={showEditDialog} onOpenChange={setShowEditDialog} link={link} onEditLink={handleEdit} />
    </>
  )
}
