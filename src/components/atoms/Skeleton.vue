<template>
    <div class="skeleton" :style="{ width: width, height: height }">
        <slot />
    </div>
</template>

<script>
export default {
    props: ['width', 'height'],
}
</script>

<style></style>
