'use client'

import { cn } from '@/lib/utils'
import { useChat } from 'ai/react'
import { ArrowUpIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { AutoResizeTextarea } from '@/components/autoresize-textarea'

export function ChatForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const { messages, input, setInput, append } = useChat({
    api: '/api/chat',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    void append({ content: input, role: 'user' })
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
    }
  }

  const header = (
    <header className="m-auto flex max-w-[600px] flex-col gap-5 text-center">
      <h1 className="text-2xl font-semibold leading-none tracking-tight">
        Your AI Running Coach
      </h1>
      <div className="space-y-4">
        <p className="text-muted-foreground">
          I'm here to help you achieve your running goals. Ask me about:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="font-medium mb-2">Training Plans</h3>
            <ul className="text-muted-foreground text-left space-y-1">
              <li>• Custom marathon/half plans</li>
              <li>• Weekly training blocks</li>
              <li>• Race-specific workouts</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="font-medium mb-2">Performance</h3>
            <ul className="text-muted-foreground text-left space-y-1">
              <li>• Pacing strategies</li>
              <li>• Form & technique</li>
              <li>• Race preparation</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="font-medium mb-2">Recovery & Health</h3>
            <ul className="text-muted-foreground text-left space-y-1">
              <li>• Injury prevention</li>
              <li>• Recovery strategies</li>
              <li>• Runner's nutrition</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="font-medium mb-2">Mental Game</h3>
            <ul className="text-muted-foreground text-left space-y-1">
              <li>• Race day mindset</li>
              <li>• Goal setting</li>
              <li>• Mental toughness</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Start by telling me about your running experience and goals!
        </p>
      </div>
    </header>
  )

  const messageList = (
    <div className="my-4 flex h-fit min-h-full flex-col gap-4">
      {messages.map((message, index) => (
        <div
          key={index}
          data-role={message.role}
          className="max-w-[80%] whitespace-pre-wrap rounded-xl px-4 py-2 text-sm data-[role=assistant]:self-start data-[role=user]:self-end data-[role=assistant]:bg-gray-100 data-[role=user]:bg-blue-500 data-[role=assistant]:text-black data-[role=user]:text-white"
        >
          {message.content}
        </div>
      ))}
    </div>
  )

  return (
    <main
      className={cn(
        'ring-none mx-auto flex h-svh max-h-svh w-full max-w-[800px] flex-col items-stretch border-none',
        className
      )}
      {...props}
    >
      <div className="flex-1 content-center overflow-y-auto px-6">
        {messages.length ? messageList : header}
      </div>
      <form
        onSubmit={handleSubmit}
        className="border-input bg-background focus-within:ring-ring/10 relative mx-6 mb-6 flex items-center rounded-[16px] border px-3 py-1.5 pr-8 text-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0"
      >
        <AutoResizeTextarea
          onKeyDown={handleKeyDown}
          onChange={v => setInput(v)}
          value={input}
          placeholder="Ask about training plans, workouts, or running advice..."
          className="placeholder:text-muted-foreground flex-1 bg-transparent focus:outline-none"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="absolute bottom-1 right-1 size-6 rounded-full"
            >
              <ArrowUpIcon size={16} />
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={12}>Send message</TooltipContent>
        </Tooltip>
      </form>
    </main>
  )
}

export { ChatForm as AIChatHistory }
