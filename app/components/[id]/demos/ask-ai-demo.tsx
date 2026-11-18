"use client";

import { AskAI, type AskAIProps } from "@/components/ui/ask-ai";

/**
 * The pill/blob trigger, the size, and the popover side are all props now: the
 * two inline button groups this demo used to render moved into the props panel,
 * so the preview stays a plain example of the component's API.
 */
export function AskAIDemo({
  size = "default",
  blobOnly = false,
  side = "top",
}: Partial<AskAIProps> = {}) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-6">
      <AskAI
        size={size}
        blobOnly={blobOnly}
        side={side}
        tooltip="ask an ai"
        title="ask an ai about me"
        description="a fresh perspective, from your favorite assistant."
        prompt="Hi! I'm on E Jayanth Madhav's portfolio (https://jayanthmadhav.is-a.dev). Based on this page, introduce him: his role as Associate Software Engineer at Cubic, his work building LLM gateways and autonomous AI PR review agents on NVIDIA H200s, his full-stack platforms, and what he specializes in."
        copySoundSrc="/keyboard-click.mp3"
      />
    </div>
  );
}
