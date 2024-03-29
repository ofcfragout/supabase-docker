import { CodeEditor } from '@/app/[threadId]/[runId]/[messageId]/CodeEditor'
import { SchemaFlow } from '@/app/[threadId]/[runId]/[messageId]/SchemaFlow'
import GraphLoader from '@/components/Loaders/GraphLoader'
import SchemaLoader from '@/components/Loaders/SchemaLoader'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import { Suspense } from 'react'

interface ThreadPageProps {
  params: {
    threadId: string
    runId: string
    messageId: string
  }
}

export default async function ThreadPage({ params }: ThreadPageProps) {
  return (
    <div className="grow max-h-screen flex flex-row items-center justify-between bg-alternative h-full">
      <Suspense fallback={<SchemaLoader />}>
        <SchemaFlow params={params} />
      </Suspense>

      <Suspense fallback={<GraphLoader />}>
        <CodeEditor params={params} />
      </Suspense>
    </div>
  )
}
