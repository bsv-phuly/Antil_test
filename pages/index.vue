<template>
  <div class="">
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Toaster />
    <Button variant="outline" @click="() => {
      toast('Event has been created', {
        description: 'Sunday, December 03, 2023 at 9:00 AM',
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      })
    }">
      Add to calendar
    </Button>
    <Select>
      <SelectTrigger class="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">
            Apple
          </SelectItem>
          <SelectItem value="banana">
            Banana
          </SelectItem>
          <SelectItem value="blueberry">
            Blueberry
          </SelectItem>
          <SelectItem value="grapes">
            Grapes
          </SelectItem>
          <SelectItem value="pineapple">
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Button @click="toLogin">Login</Button>
    <Button @click="toComment">Comment section</Button>
  </div>
</template>
<script setup lang="ts">
import { toast } from 'vue-sonner'
import { Toaster } from '@/components/ui/sonner'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
useHead({
  title: 'Main',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})

const router = useRouter()
const toLogin = () => {
  router.push({ name: 'login' })
}
const toComment = () => {
  router.push({ name: 'comment' })
}
</script>
