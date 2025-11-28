"use client";

import { Github, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialIcons() {
  return (
    <div className="flex justify-center gap-3 sm:gap-4">
      <Button variant="outline" size="icon" asChild className="h-9 w-9 sm:h-10 sm:w-10">
        <a href="https://github.com/TheByteArray" target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4 sm:h-4 sm:w-4" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild className="h-9 w-9 sm:h-10 sm:w-10">
        <a href="mailto:contact@thebytearray.org">
          <Mail className="h-4 w-4 sm:h-4 sm:w-4" />
          <span className="sr-only">Email</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild className="h-9 w-9 sm:h-10 sm:w-10">
        <a href="https://t.me/+HO2w1XV6dCE1MmJl" target="_blank" rel="noopener noreferrer">
          <Send className="h-4 w-4 sm:h-4 sm:w-4" />
          <span className="sr-only">Telegram</span>
        </a>
      </Button>
    </div>
  );
} 