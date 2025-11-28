'use client'

import { useState } from 'react'
import { Share2, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ShareButtonProps {
  title: string
  className?: string
}

export function ShareButton({ title, className }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const url = window.location.href
    
    // Try to use the native Web Share API first
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        })
        return
      } catch {
        // If sharing fails or is cancelled, fall back to copying
      }
    }
    
    // Fallback to copying URL to clipboard
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy URL:', error)
    }
  }

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className={`gap-2 ${className}`}
      onClick={handleShare}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-green-500" />
          Copied!
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4" />
          Share
        </>
      )}
    </Button>
  )
} 