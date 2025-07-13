import { reactive } from 'vue'

export const cart = reactive({
  items: [],
  add(item) {
    this.items.push(item)
  },
  remove(index) {
    this.items.splice(index, 1)
  },
  clear() {
    this.items = []
  },
  total() {
    return this.items.reduce((sum, item) => sum + item.price, 0)
  }
})
