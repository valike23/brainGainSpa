<script lang="ts">
    import DesktopSide from "../../components/Nav/DesktopSide.svelte";
    import MobileMenu from "../../components/Nav/MobileMenu.svelte";
    import TopBar from "../../components/Nav/TopBar.svelte";

    const gotoTopic = () => {
        location.href = "academics/topic";
    };
</script>

<svelte:head />

<div class="main">
    <MobileMenu />

    <div class="d-flex">
        <DesktopSide dash="academics" />
        <div class="content">
            <TopBar />
            <div class="row" style="margin-bottom: 50px;">
                <h2 class="intro-y fs-lg fw-medium me-auto mt-2">
                    Skill Pratice
                </h2>
            </div>
            <div class="uk-margin">
                <form class="uk-search uk-search-default rnd">
                    <span class="uk-search-icon-flip" uk-search-icon />
                    <input
                        class="uk-search-input rnd"
                        type="search"
                        placeholder="Search"
                    />
                </form>
            </div>
            <div class="row">
                <div class="col-6 col-sm-3 m2">
                    <div
                        on:click={gotoTopic}
                        class="uk-card uk-card-default uk-card-body "
                    >
                        <div class="svgbody">
                            <img src="svg/chemistry.svg" alt="" srcset="" />

                            <p>Chemistry</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-3 m2">
                    <div class="uk-card uk-card-default uk-card-body ">
                        <div class="svgbody">
                            <img src="svg/physics.svg" alt="" srcset="" />

                            <p>Physics</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-3 m2">
                    <div class="uk-card uk-card-default uk-card-body ">
                        <div class="svgbody">
                            <img src="svg/biology.svg" alt="" srcset="" />

                            <p>Biology</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-3 m2">
                    <div class="uk-card uk-card-default uk-card-body ">
                        <div class="svgbody">
                            <img src="svg/maths.svg" alt="" srcset="" />

                            <p>Mathematics</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-3 m2">
                    <div class="uk-card uk-card-default uk-card-body ">
                        <div class="svgbody">
                            <img src="svg/english.svg" alt="" srcset="" />

                            <p>English</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-3 m2">
                    <div class="uk-card uk-card-default uk-card-body ">
                        <div class="svgbody">
                            <img src="svg/history.svg" alt="" srcset="" />

                            <p>History</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-3 m2">
                    <div class="uk-card uk-card-default uk-card-body ">
                        <div class="svgbody">
                            <img src="svg/commerce.svg" alt="" srcset="" />

                            <p>Commercial</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-3 m2">
                    <div class="uk-card uk-card-default uk-card-body ">
                        <div class="svgbody">
                            <img src="svg/computer.svg" alt="" srcset="" />

                            <p>Computer Sci</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-3 m2">
                    <div class="uk-card uk-card-default uk-card-body ">
                        <div class="svgbody">
                            <img src="svg/accounting.svg" alt="" srcset="" />

                            <p>Accounting</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-3 m2">
                    <div class="uk-card uk-card-default uk-card-body ">
                        <div class="svgbody">
                            <img src="svg/crs.svg" alt="" srcset="" />

                            <p>CRS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .rnd {
        border-radius: 12px;
    }
    .content {
        height: 100%;
        overflow: auto;
        background-image: url(images/hand.svg), url(images/right.svg),
            url(images/bottom.svg);
        background-repeat: no-repeat, no-repeat, no-repeat;
        background-position: 0 0, 100%, 0 100%;
    }
    h2 {
        font-family: "Itim", "roboto";
    }
    .svgbody {
        text-align: center;
        align-items: center;
    }

    .svgbody > img {
        display: inline-block;
        margin: 0 auto;
        width: 50px;
        height: 50px;
        inline-size: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .svgbody > p {
        font-family: "Itim", "roboto";
        font-size: 18px;
        margin-top: 10px;
        padding-top: 10px;
        font-weight: 500;
    }

    .m2 {
        margin-bottom: 7px;
    }
</style>
