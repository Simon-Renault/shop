<template>
    <div class="centered-container">
        <div class="centered-container__inner">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.centered-container {
    &__inner {
        margin: auto;
        width: 1300px;
        max-width: 100vw;
        min-height: 20px;
        padding: 0 20px;
        @media screen and (min-width: 900px) {
            padding: 0 70px;
        }
    }
}
</style>
