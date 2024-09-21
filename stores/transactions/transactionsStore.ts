import {defineStore} from 'pinia';

export const useTransactionsStore = defineStore('transactionsStore', () => {

    let count = ref(0);

    return {count}
});