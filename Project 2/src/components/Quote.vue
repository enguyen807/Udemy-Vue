<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-defaultdiv">
            <div class="panel-body quote">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      props: ['quotes']  
    }
</script>

<style>
    .panel-body {
        font-family: 'Poor Story', cursive;
        font-size: 24px;
        color: #57A773;
    }

    .quote {
        cursor: pointer;
    }

    .quote:hover {
        background-color: #F2C078;
    }
</style>
