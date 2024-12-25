import { AIChatHistory } from '@/components/chat-form'

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center p-4 md:p-8 lg:p-12">
      <div className="flex w-full max-w-3xl flex-1 flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-3xl font-bold">Virtual Running Coach AI</h1>
          <p className="text-muted-foreground">
            Get personalized training plans, workout advice, and running expertise tailored to your goals
          </p>
        </div>
        <div className="flex w-full flex-1 flex-col gap-6">
          <AIChatHistory />
        </div>
        <footer className="text-center text-sm text-muted-foreground">
          <p>Ask me about training plans, workouts, nutrition, injury prevention, or any other running-related topics!</p>
          <p className="mt-2">
            Examples:
            - "Create a 16-week marathon training plan for a 4-hour goal time"
            - "What should my long run pace be for a 3:30 marathon goal?"
            - "Give me a track workout to improve 5k speed"
            - "How can I prevent runner's knee?"
          </p>
        </footer>
      </div>
    </main>
  )
}
