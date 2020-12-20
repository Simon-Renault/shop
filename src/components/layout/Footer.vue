<template>
    <div class="footer">
        <CenteredContainer>
            <div class="grid"></div>
        </CenteredContainer>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 300px;
    border-top: 1px solid var(--accents-2);
    background-color: var(--accents-1);
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 600px) {
        height: 300px;
    }
}
.grid {
    display: grid;
    grid-gap: 30px;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
