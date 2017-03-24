<style scoped lang="less">
	
</style>
<template>
	<a v-link="{path:'/game'}">111111111</a>
</template>
<script>
    export default {
        filters: {

        },
        directives: {

        },
        data () {
            return {
            }
        },
        created() {
            this.$dispatch('isLoading',true)
        },
        ready () {
            this.$dispatch('isLoading',false);
        },
        beforeDestroy () {

        },
        methods: {
            
        }
    }
</script>
