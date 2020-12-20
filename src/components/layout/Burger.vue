<template>
    <div class="burger" @click="$emit('click')">
        <menu-icon v-if="!isOpen" size="1.2x" class="custom-class"></menu-icon>
        <x-icon v-if="isOpen" size="1.2x" class="custom-class"></x-icon>
    </div>
</template>

<script>
import { MenuIcon } from 'vue-feather-icons'
import { XIcon } from 'vue-feather-icons'

export default {
    props: ['isOpen'],
    components: {
        MenuIcon,
        XIcon,
    },
}
</script>

<style lang="scss" scoped>
.burger {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    padding: 0 10px;
    border-radius: 3px;
    &:hover {
        background: var(--light-grey);
    }
}
</style>
