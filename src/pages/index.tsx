import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const TabFilter = () => {
  return (
    <Tabs.Root defaultValue="all">
      <Tabs.List className="mb-10 flex gap-2" aria-label="Filter todos">
        <Tabs.Trigger
          value="all"
          className="rounded-full border border-gray-300 px-6 py-3 text-sm font-bold data-[state=active]:border-gray-700 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
        >
          All
        </Tabs.Trigger>
        <Tabs.Trigger
          value="pending"
          className="rounded-full border border-gray-300 px-6 py-3 text-sm font-bold data-[state=active]:border-gray-700 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
        >
          Pending
        </Tabs.Trigger>
        <Tabs.Trigger
          value="completed"
          className="rounded-full border border-gray-300 px-6 py-3 text-sm font-bold data-[state=active]:border-gray-700 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
        >
          Completed
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="TabsContent" value="all">
        <TodoList type="all" />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="pending">
        <TodoList type="pending" />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="completed">
        <TodoList type="completed" />
      </Tabs.Content>
    </Tabs.Root>
  )
}

const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className="pt-10">
          <TabFilter />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
