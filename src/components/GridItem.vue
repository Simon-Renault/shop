<template>
    <article class="v-grid-item hidden" :class="item.sizing" :style="{ 'animation-delay': delay + 'ms' }">
        <LazyImage class="v-grid-item__img" :shouldLoad="isVisible" :src="item.cover_image" :alt="item.title" />

        <div class="hover-content">
            <div class="inner">
                <span class="title">
                    {{ item.name }}
                </span>
                <span class="subtitle">Category</span>
            </div>
        </div>
    </article>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
    props: {
        item: {
            type: Object,
        },
    },
    data() {
        return {
            isVisible: false,
            delay: 0,
        }
    },
    beforeMount() {
        this.delay = Math.random() * 500
    },
    mounted() {
        if (!process.isClient) return
        gsap.registerPlugin(ScrollTrigger)
        new ScrollTrigger({
            trigger: this.$el,
            toggleActions: 'play none none none',
            toggleClass: 'visible',
            start: 'top bottom',
            end: 'bottom top',
            once: true,
            onToggle: (self) => (this.isVisible = true),
        })
    },
}
</script>

<style lang="scss">
@keyframes appear {
    from {
        opacity: 0;
        transform: scale(0.5);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.v-grid-item {
    overflow: hidden;
    position: relative;
    border-radius: 2px;
    &:not(.special) {
        figure {
            padding-bottom: 100%;
        }
    }
    opacity: 0;
    &.visible {
        animation: appear 0.7s ease-out 0s 1 forwards;
    }

    img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .hover-content {
        opacity: 1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 10px 15px 30px;
        //background: rgba(255,255,255,0.8);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        .inner {
            .title {
                display: block;
                padding: 5px 0;
                font-weight: 800;
                font-size: 25px;
                line-height: 1.2em;
                color: var(--black);
            }
            .subtitle {
                font-size: 15px;
                color: #555;
            }
        }
    }
    &.special {
        padding-bottom: 100%;
        .v-grid-item__img {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
        &:hover {
            .hover-content {
                opacity: 1;
                @supports (backdrop-filter: blur()) {
                    backdrop-filter: blur(18px);
                }
            }
        }
        @media screen and (max-width: 900px) {
            .hover-content {
                opacity: 1;
                @supports (backdrop-filter: blur()) {
                    backdrop-filter: blur(18px);
                }
            }
        }
        .hover-content {
            opacity: 0;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 40px;
            background: rgba(255, 255, 255, 0.8);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
        }
        background: var(--accents-2);
        &.HORIZONTAL {
            padding-bottom: 40%;
            @media screen and (min-width: 600px) {
                grid-column: span 2;
            }
        }
        &.VERTICAL {
            padding-bottom: 100%;
            @media screen and (min-width: 600px) {
                grid-row: span 2;
            }
        }
        &.SQUARE {
            padding-bottom: 50%;
            @media screen and (min-width: 600px) {
                grid-row: span 2;
                grid-column: span 2;
            }
        }
    }
    //
}
</style>
