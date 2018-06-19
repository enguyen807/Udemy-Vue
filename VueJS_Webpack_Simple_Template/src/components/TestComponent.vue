<template>
    <div>
        <h3>Server Status: {{ status }}</h3>
        <hr>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                status: 'False'
            };
        },
        methods: {
            changeStatus: function() {
                this.status = !this.status;
            }
        }
    }
</script>

<style>

</style>