'use client'

import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Button } from './ui/button'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from 'next-themes'

interface CodeBlockProps {
  children: React.ReactNode
  title?: string
  language?: string
}

export function CodeBlock({ children, title, language = 'text' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { theme } = useTheme()
  
  // Prevent hydration mismatch by only rendering syntax highlighter on client
  React.useEffect(() => {
    setIsMounted(true)
  }, [])
  
  const copyToClipboard = async () => {
    const textContent = typeof children === 'string' ? children : 
      (children as { props?: { children?: string } })?.props?.children || ''
    
    try {
      await navigator.clipboard.writeText(textContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const codeContent = typeof children === 'string' ? children : 
    (children as { props?: { children?: string } })?.props?.children || ''

  return (
    <div className="my-6 relative rounded-lg border bg-muted/50 overflow-hidden">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted border-b">
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
          {language && (
            <span className="text-xs text-muted-foreground uppercase tracking-wide">
              {language}
            </span>
          )}
        </div>
      )}
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8 bg-background/80 hover:bg-background z-10"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
        {isMounted ? (
          <SyntaxHighlighter
            language={language}
            style={theme === 'dark' ? vscDarkPlus : vs}
            customStyle={{
              margin: 0,
              padding: '1rem',
              background: 'transparent',
              fontSize: '0.875rem',
              lineHeight: '1.5',
            }}
            showLineNumbers={false}
            wrapLongLines={true}
          >
            {codeContent}
          </SyntaxHighlighter>
        ) : (
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed bg-transparent">
            <code className={`language-${language}`}>
              {codeContent}
            </code>
          </pre>
        )}
      </div>
    </div>
  )
} 