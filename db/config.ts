import { column, defineDb, defineTable } from 'astro:db';

const Messages = defineTable({
  columns: {
    message: column.text(),
    sender: column.text(),
    timestamp: column.date(),
    isOwn: column.boolean()
  }
})

const MyAssistant = defineTable({
  columns: {
    assistant_id: column.text(),
    thread_id: column.text(),
    instructions: column.text(),
  }
})



export default defineDb({
  tables: { Messages, MyAssistant }
});
