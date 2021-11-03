<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "a-sbutton"
}
</script>

<style lang="stylus" scoped>
button
    color white
    background #3794c1
    padding 0.5rem 1rem 
    border none
    box-shadow 0 1px 3px 0 #000
    transition ease-in 150ms
    &:focus
        outline none
    &:hover
        background #429dca
        box-shadow 0 1px 3px 0 #000
        cursor pointer
    &:active
        box-shadow none

</style>
