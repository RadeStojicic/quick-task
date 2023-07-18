import {defineStore} from 'pinia'

export const useTodoStore = defineStore('todo', () => {

const client = useSupabaseClient();
const user = useSupabaseUser();

const { data: todos } = useAsyncData("todos", async () => {
  const { data, error } = await client
    .from("todos")
    .select("*")
    .eq("user_id", user.value?.id)
  return data;
});


return {todos}
})