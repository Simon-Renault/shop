<template>
    <Layout>
        <CenteredContainer>
            <div class="top">
                <div class="heading">
                    <span class="indicator" ref="indicator">01 - 10</span>
                    <span class="title-container" ref="title">
                        <h1>The drawing name</h1>
                        <span class="year">2019</span>
                    </span>
                </div>
            </div>
        </CenteredContainer>
        <div class="banner" ref="banner">
            <img
                ref="img"
                height="100%"
                width="100%"
                src="https://cdn.shopify.com/s/files/1/0359/0160/3976/products/mock_drawing_vertical_2000x2000_crop_center.jpg"
                alt=""
            />
        </div>

        <CenteredContainer>
            <main class="main">
                <div class="content" ref="content">
                    <h2>A nice title</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <img
                        height="auto"
                        width="100%"
                        src="https://cdn.shopify.com/s/files/1/0359/0160/3976/products/mock_drawing_vertical_2000x2000_crop_center.jpg"
                        alt=""
                    />
                    <h2>A nice title</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <h2>A nice title</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <aside class="aside" ref="aside">
                    <div class="desc">
                        <p class="title">Buy</p>
                        <p class="desc">All items comes with handmade packaging and a few extras.</p>
                    </div>
                    <ul class="variants">
                        <li class="variant">
                            <span class="name">Original - A3</span>
                            <span class="price">£1,200</span>
                        </li>
                        <li class="variant">
                            <span class="name">Print - A3</span>
                            <span class="price">£200</span>
                        </li>
                    </ul>

                    <div class="bottom">
                        <button>Add to cart</button>
                    </div>
                </aside>
            </main>
        </CenteredContainer>
    </Layout>
</template>

<script>
import gsap from 'gsap'
export default {
    metaInfo: {
        title: 'About us',
    },
    methods: {
        gsapPageTransition({ onComplete, pageEnter }) {
            const tl = gsap.timeline({ onComplete })

            tl.fromTo(this.$refs.indicator, 0.3, { opacity: 1 }, { opacity: 0 }, 0)
                .fromTo(this.$refs.title, 0.3, { opacity: 1 }, { opacity: 0 }, 0.15)
                .fromTo(this.$refs.banner, 0.3, { opacity: 1 }, { opacity: 0 }, 0.3)
                .fromTo(this.$refs.content, 0.3, { opacity: 1 }, { opacity: 0 }, 0.4)
                .fromTo(this.$refs.aside, 0.3, { opacity: 1, y: 0 }, { opacity: 0, y: 100 }, 0.5)

            return pageEnter ? tl.reverse(0) : tl.play()
        },
    },
    mounted() {
        this.gsapPageTransition({ pageEnter: true })

        gsap.fromTo(
            this.$refs.img,
            {
                opacity: 1.5,
                y: '-100px',
            },
            {
                opacity: 0,
                y: '100px',
                ease: 'none',
                scrollTrigger: {
                    trigger: this.$refs.img,
                    start: 'top 300px', // the default values
                    end: 'bottom top',
                    scrub: true,
                },
            }
        )
    },
    beforeRouteLeave(to, from, next) {
        this.gsapPageTransition({ onComplete: next })
    },
}
</script>

<style lang="scss" scoped>
.banner {
    overflow: hidden;
    height: 55vh;
    margin: 0 0 70px;
    img {
        height: calc(100% + 200px);
        transform: translate3d(0 -100px);
    }
}

.main,
.top {
    max-width: var(--content-max-width);
    margin: auto;
    width: 100%;
}
.top {
    margin: 70px auto 70px;
}
.main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5vw;
}

.indicator {
    display: block;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 2.4px;
    margin-bottom: 20px;
}
.title-container {
    display: flex;
    align-items: baseline;
    margin-bottom: 50px;
    .year {
        margin-left: 20px;
        font-size: 22px;
        line-height: 29px;
        color: #979797;
    }
}
.content {
    grid-column: span 2;
    margin-bottom: 130px;
}
.content,
.top {
    h1 {
        font-weight: 600;
        font-size: 80px;
        line-height: 1em;
        letter-spacing: -2px;
        text-transform: capitalize;
        perspective: 600px;
    }
    h2 {
        font-weight: 600;
        font-size: 50px;
        line-height: 1.1em;
        text-transform: capitalize;
        margin: 0 0 30px;
    }
    p {
        font-family: HK Grotesk;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 1.8em;
        margin: 10px 0 30px;
        color: var(--color-text);
        opacity: 0.8;
    }
    img {
        border-radius: 1px;
        margin: 10px 0 30px;
    }
}

.aside {
    border-radius: 5px;
    top: calc(2.5vw + 90px);
    position: sticky;
    border: 1px solid var(--accents-2);
    margin-bottom: auto;
    & > div,
    ul {
        padding: 15px;
    }
    font-size: 18px;
    .title {
        font-weight: 800;
        margin-bottom: 10px;
        color: var(--color-text);
    }
    div.desc {
        line-height: 1.5em;
        color: var(--color-description-full);
        border-bottom: 1px solid var(--accents-2);
    }
    .variants {
        display: flex;
        flex-direction: column;
        list-style: none;
        .variant {
            list-style: none;
            height: 55px;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            border: 1px solid var(--accents-2);
            align-items: center;
            border-radius: 3px;
            cursor: pointer;
            &:not(:last-child) {
                margin-bottom: 10px;
            }
            &:hover {
                background-color: var(--color-lines);
            }
        }
    }
    .bottom {
        border-top: 1px solid var(--accents-2);
        button {
            color: white;
            border-radius: 3px;
            background: black;
            border: none;
            outline: none;
            width: 100%;
            height: 50px;
            cursor: pointer;
            font-size: 16px;
        }
    }
}
</style>
