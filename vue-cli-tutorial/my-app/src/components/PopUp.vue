<template>
    <div class="popup ">
        <div>{{ message }}</div>
        <div>
            <a>CLOSE</a>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
name: "a-popup",
methods: {
    ...mapMutations('popup', {
        clear: 'CLEAR_MESSAGE'
    })
},
computed: {
    ...mapState('popup', {
    message: state => state.message
    }),
    ...mapGetters('popup', {
        show: "SHOW_MESSAGE"
    })
}
}
</script>

<style lang="stylus" scoped>
.popup
    position absolute
    background #373748
    color #fff
    padding 1rem 1rem
    display flex
    flex-direction row
    bottom 20px
    left 20px
    transition ease-in 100ms

    &.hidden
        transform translateY(100px)

    div
      margin .5rem

    a
      color #2e8ef1
      font-weight bold

      &:hover
        cursor pointer
        text-decoration underline

</style>

