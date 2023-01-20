import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0);

    function increment() {
        count.value += 1;
    }
    const doubleCount = computed(() => count.value * 2);
    return { count, increment, doubleCount };
});
