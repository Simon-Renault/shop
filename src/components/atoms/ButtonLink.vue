<template>
  <div class="button" :class="type"
        @click="$emit('click')" 
        @hover="$emit('hover')">

        <g-link v-if="href" :to="href">
            <slot/>
        </g-link>
        <button v-else>
            <slot/>
        </button>
  </div>
</template>

<script>
export default {
    props : [
        "href",
        "type"
    ]
}
</script>

<style lang="scss" scoped>
.button{

    //intents
    .Primary{

    }
    .Secondary{

    }
    .MINIMAL{
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

    }

    //Sizing
    .small{

    }
    .large{

    }


}
</style>