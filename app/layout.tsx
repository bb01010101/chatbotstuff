import './globals.css'
import { cn } from '@/lib/utils'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Virtual Running Coach AI',
  description: 'Your personal AI running coach for customized training plans, workouts, and holistic running advice.',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn('flex min-h-svh flex-col antialiased', inter.className)}
      >
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
      </body>
    </html>
  )
}



import './globals.css'