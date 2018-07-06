<template>
    <li 
        class="list-group-item"
        @click="selectedServer"
    >
        Server #{{ server.id }}
    </li>
</template>

<script>
import { eventBus } from "../../main.js";
export default {
    props: ['server'],
    methods: {
        selectedServer() {
            eventBus.$emit('selectedServer', this.server)
        }
    },
    
}
</script>

<style scoped>
    .list-group-item {
     cursor: pointer;
    }
</style>
