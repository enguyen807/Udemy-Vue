<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
        <hr>
        <button @click="resetStatus">Reset Status</button>
    </div>

</template>

<script>
import { eventBus } from "../../main.js";
export default {
    data() {
        return {
            server: null
        }
    },
    created() {
        eventBus.$on('selectedServer', (server) => {
            this.server = server;
        });
    },
    methods: {
        resetStatus() {
            this.server.status = 'Normal'
        }
    },
}
</script>


<style>

</style>
