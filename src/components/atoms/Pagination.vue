<template>
   <Pager class="pager" :info="info"/>
</template>

<script>
import { Pager } from 'gridsome'

export default {
    props : ["info"],
    components: {
        Pager
    }
}
</script>

<style lang="scss"  >
.pager{
    margin:auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 100px;
    a{
        color: var(--black);
        position: relative;
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        height: 100%;
        padding: 0 10px;
        color: #212121;
        font-size: 16px;
        line-height: 24px;
        box-sizing: border-box;
        font-weight: 500;
        padding: 5px 10px;
        &:hover{
            background: var(--accents-2);
            border-radius: 3px;
        }

    }
}
</style>