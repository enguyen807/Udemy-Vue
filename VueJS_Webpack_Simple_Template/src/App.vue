<template>
    <div class="container">
        <As6-Header></As6-Header>
        <hr>
        <div class="row">
            <a-s6-panel></a-s6-panel>
            <a-s6-serv-detail></a-s6-serv-detail>
        </div>
        <hr>
        <As6-Footer></As6-Footer>
    </div>
</template>


<script>

import AS6Panel from './components/AS6-Panel.vue'
import AS6ServDetail from "./components/AS6-ServerDetail.vue"

export default {
  name: 'app',
  data () {
    return {
      greeting: 'Hello'
    }
  },
  components: {
    AS6Panel,
    AS6ServDetail
  },
}
</script>

<style>

</style>
