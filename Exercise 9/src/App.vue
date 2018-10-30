<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selectedComponent = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="selectedComponent = 'appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="selectedComponent = 'appRed'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <component :is="selectedComponent">
                    <p>Default Content</p>
                </component>
                <!-- <app-blue>
                    <h2 slot="blue">Triceratops!</h2>
                </app-blue>
                <app-green>
                    <h2 slot>Dragonzord!</h2>
                </app-green>
                <app-red>
                    <h2 slot="red">Tyrannosaurus!</h2>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: () => {
            return {
                selectedComponent: 'appGreen'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
