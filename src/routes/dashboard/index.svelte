<script lang="ts">
    import { onMount } from "svelte";
    import DesktopSide from "../../components/Nav/DesktopSide.svelte";
    import MobileMenu from "../../components/Nav/MobileMenu.svelte";
    import TopBar from "../../components/Nav/TopBar.svelte";

    let links =[{name: 'dashboard'}];
    let win: any = {};
    onMount(() => {
        win = window;
        console.log(Object.keys(win.window.window));
        try {
            var splide = new win.Splide(".splide", {
                type: "loop",
                perPage: 3,
                perMove: 1,
                arrow: false,
            });

            splide.mount();

            var splideMobile = new win.Splide("#mobile", {
                type: "loop",
                perPage: 1,
                perMove: 1,
            });

            splideMobile.mount();
            var splideTab = new win.Splide("#tab", {
                type: "loop",
                perPage: 2,
                perMove: 1,
            });

            splideTab.mount();
        } catch (error) {
            location.reload();
        }
    });
</script>

<svelte:head>
    <title>Home:: Dashboard</title>
</svelte:head>
<div class="main">
    <MobileMenu />
    <div class="d-flex">
        <DesktopSide dash="dashboard" />
        <div class="content">
            <!-- BEGIN: Top Bar -->
            <TopBar {links}/>
            <!-- END: Top Bar -->
            <div class="grid columns-12 gap-6 mt-8">
                <div class="g-col-12 g-col-lg-3 g-col-xxl-2">
                    <h1>Home</h1>
                   
                </div>
                <div class="g-col-12 ">
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Hold On!!!</strong> You have to make payment here to complete your account
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">x</button>
                      </div>
                    <div class="mflex" style="margin-bottom: 20px;">
                        <span class="h2 float-left">Skill Pratice</span>
                        <button class="see float-right btn">SEE ALL</button>
                    </div>
                    <div>
                        <div
                            id="desktop"
                            class="splide hidden-mobile show-mobile"
                        >
                            <div class="splide__arrows">
                                <button
                                    class="splide__arrow splide__arrow--prev"
                                >
                                    <svg
                                        width="51"
                                        height="51"
                                        viewBox="0 0 51 51"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                    >
                                        <circle
                                            cx="25.5"
                                            cy="25.5"
                                            r="25.5"
                                            fill="#FFAE00"
                                        />
                                        <rect
                                            x="16"
                                            y="15"
                                            width="20"
                                            height="20"
                                            fill="url(#pattern0)"
                                        />
                                        <defs>
                                            <pattern
                                                id="pattern0"
                                                patternContentUnits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                            >
                                                <use
                                                    xlink:href="#image0_27_772"
                                                    transform="scale(0.0333333)"
                                                />
                                            </pattern>
                                            <image
                                                id="image0_27_772"
                                                width="30"
                                                height="30"
                                                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7klEQVRIie3WMUpDQRAG4I+AWNkJgpWFB7DQ0iqVrTZ6B5NLGA9hpVfIARJsAgl4BkHBSuwkIBFj8RT2LSkE2XkJ5Ictl49dZmeHdZYsQ8x/1gRbUfBDAs/RRysC3sNrhvciYDjGRwJ/4SIK76ifeoqjKPwmw1+wGwFv4D7DR9iMwLfxmOF3ETAc4D3DO1H4qaq6f+FPnEThPfVTv2E/Am6pOlmKT/6yaWVzrYGrPlMvrhnapdFFz+myNLqD5wy9LY021jLzT+JJdQNF083QKQ5Lo21V1aaDwHlpdNHoc1UapcFhb5CgY4Hj7Tr/zjfcW2a3eoiKgwAAAABJRU5ErkJggg=="
                                            />
                                        </defs>
                                    </svg>
                                </button>
                                <button
                                    class="splide__arrow splide__arrow--next"
                                >
                                    <svg
                                        width="51"
                                        height="51"
                                        viewBox="0 0 51 51"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                    >
                                        <circle
                                            cx="25.5"
                                            cy="25.5"
                                            r="25.5"
                                            fill="#FFAE00"
                                        />
                                        <rect
                                            x="16"
                                            y="15"
                                            width="20"
                                            height="20"
                                            fill="url(#pattern0)"
                                        />
                                        <defs>
                                            <pattern
                                                id="pattern0"
                                                patternContentUnits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                            >
                                                <use
                                                    xlink:href="#image0_27_772"
                                                    transform="scale(0.0333333)"
                                                />
                                            </pattern>
                                            <image
                                                id="image0_27_772"
                                                width="30"
                                                height="30"
                                                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7klEQVRIie3WMUpDQRAG4I+AWNkJgpWFB7DQ0iqVrTZ6B5NLGA9hpVfIARJsAgl4BkHBSuwkIBFj8RT2LSkE2XkJ5Ictl49dZmeHdZYsQ8x/1gRbUfBDAs/RRysC3sNrhvciYDjGRwJ/4SIK76ifeoqjKPwmw1+wGwFv4D7DR9iMwLfxmOF3ETAc4D3DO1H4qaq6f+FPnEThPfVTv2E/Am6pOlmKT/6yaWVzrYGrPlMvrhnapdFFz+myNLqD5wy9LY021jLzT+JJdQNF083QKQ5Lo21V1aaDwHlpdNHoc1UapcFhb5CgY4Hj7Tr/zjfcW2a3eoiKgwAAAABJRU5ErkJggg=="
                                            />
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                            <div class="splide__track">
                                <ul class="splide__list">
                                    <li class="splide__slide">
                                        <div
                                            class="card"
                                            style="
                                        background-image: url('https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg');"
                                        >
                                            <div class="card-title">
                                                ELECTRICITY & MAGNETISM
                                            </div>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div
                                            class="card"
                                            style="
                                        background-image: url('https://thumbs.dreamstime.com/b/imagination-girl-kiss-lion-love-nature-abstract-concept-young-steals-male-wildlife-children-like-to-imagine-play-129595579.jpg');"
                                        >
                                            <div class="card-title">
                                                ELECTRICITY & MAGNETISM
                                            </div>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div
                                            style="
                                        background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');"
                                            class="card"
                                        >
                                            <div class="card-title">
                                                CHANGES IN NON-LIVING THINGS
                                            </div>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div
                                            style="
                                        background-image: url('https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648?b=1&k=20&m=1279460648&s=170667a&w=0&h=uZa830sWo8hlFN0Y7FnQ14giNC0Z2EBNuTMuNJeJhQg=');"
                                            class="card"
                                        >
                                            <div class="card-title">
                                                CHANGES IN NON-LIVING THINGS
                                            </div>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div
                                            style="
                                        background-image: url('https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270');"
                                            class="card"
                                        >
                                            <div class="card-title">
                                                CHANGES IN NON-LIVING THINGS
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            id="mobile"
                            class="splide show-mobile hidden-mobile"
                        >
                            <div class="splide__arrows">
                                <button
                                    class="splide__arrow splide__arrow--prev"
                                >
                                    <svg
                                        width="51"
                                        height="51"
                                        viewBox="0 0 51 51"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                    >
                                        <circle
                                            cx="25.5"
                                            cy="25.5"
                                            r="25.5"
                                            fill="#FFAE00"
                                        />
                                        <rect
                                            x="16"
                                            y="15"
                                            width="20"
                                            height="20"
                                            fill="url(#pattern0)"
                                        />
                                        <defs>
                                            <pattern
                                                id="pattern0"
                                                patternContentUnits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                            >
                                                <use
                                                    xlink:href="#image0_27_772"
                                                    transform="scale(0.0333333)"
                                                />
                                            </pattern>
                                            <image
                                                id="image0_27_772"
                                                width="30"
                                                height="30"
                                                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7klEQVRIie3WMUpDQRAG4I+AWNkJgpWFB7DQ0iqVrTZ6B5NLGA9hpVfIARJsAgl4BkHBSuwkIBFj8RT2LSkE2XkJ5Ictl49dZmeHdZYsQ8x/1gRbUfBDAs/RRysC3sNrhvciYDjGRwJ/4SIK76ifeoqjKPwmw1+wGwFv4D7DR9iMwLfxmOF3ETAc4D3DO1H4qaq6f+FPnEThPfVTv2E/Am6pOlmKT/6yaWVzrYGrPlMvrhnapdFFz+myNLqD5wy9LY021jLzT+JJdQNF083QKQ5Lo21V1aaDwHlpdNHoc1UapcFhb5CgY4Hj7Tr/zjfcW2a3eoiKgwAAAABJRU5ErkJggg=="
                                            />
                                        </defs>
                                    </svg>
                                </button>
                                <button
                                    class="splide__arrow splide__arrow--next"
                                >
                                    <svg
                                        width="51"
                                        height="51"
                                        viewBox="0 0 51 51"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                    >
                                        <circle
                                            cx="25.5"
                                            cy="25.5"
                                            r="25.5"
                                            fill="#FFAE00"
                                        />
                                        <rect
                                            x="16"
                                            y="15"
                                            width="20"
                                            height="20"
                                            fill="url(#pattern0)"
                                        />
                                        <defs>
                                            <pattern
                                                id="pattern0"
                                                patternContentUnits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                            >
                                                <use
                                                    xlink:href="#image0_27_772"
                                                    transform="scale(0.0333333)"
                                                />
                                            </pattern>
                                            <image
                                                id="image0_27_772"
                                                width="30"
                                                height="30"
                                                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7klEQVRIie3WMUpDQRAG4I+AWNkJgpWFB7DQ0iqVrTZ6B5NLGA9hpVfIARJsAgl4BkHBSuwkIBFj8RT2LSkE2XkJ5Ictl49dZmeHdZYsQ8x/1gRbUfBDAs/RRysC3sNrhvciYDjGRwJ/4SIK76ifeoqjKPwmw1+wGwFv4D7DR9iMwLfxmOF3ETAc4D3DO1H4qaq6f+FPnEThPfVTv2E/Am6pOlmKT/6yaWVzrYGrPlMvrhnapdFFz+myNLqD5wy9LY021jLzT+JJdQNF083QKQ5Lo21V1aaDwHlpdNHoc1UapcFhb5CgY4Hj7Tr/zjfcW2a3eoiKgwAAAABJRU5ErkJggg=="
                                            />
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                            <div class="splide__track">
                                <ul class="splide__list">
                                    <li class="splide__slide">
                                        <div
                                            class="card"
                                            style="
                                        background-image: url('https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg');"
                                        >
                                            <div class="card-title">
                                                ELECTRICITY & MAGNETISM
                                            </div>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div
                                            class="card"
                                            style="
                                        background-image: url('https://thumbs.dreamstime.com/b/imagination-girl-kiss-lion-love-nature-abstract-concept-young-steals-male-wildlife-children-like-to-imagine-play-129595579.jpg');"
                                        >
                                            <div class="card-title">
                                                ELECTRICITY & MAGNETISM
                                            </div>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div
                                            style="
                                        background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');"
                                            class="card"
                                        >
                                            <div class="card-title">
                                                CHANGES IN NON-LIVING THINGS
                                            </div>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div
                                            style="
                                        background-image: url('https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648?b=1&k=20&m=1279460648&s=170667a&w=0&h=uZa830sWo8hlFN0Y7FnQ14giNC0Z2EBNuTMuNJeJhQg=');"
                                            class="card"
                                        >
                                            <div class="card-title">
                                                CHANGES IN NON-LIVING THINGS
                                            </div>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div
                                            style="
                                        background-image: url('https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270');"
                                            class="card"
                                        >
                                            <div class="card-title">
                                                CHANGES IN NON-LIVING THINGS
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="tab" class="splide show-mobile hidden-mobile">
                            <div class="splide__arrows">
                                <button
                                    class="splide__arrow splide__arrow--prev"
                                >
                                    <svg
                                        width="51"
                                        height="51"
                                        viewBox="0 0 51 51"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                    >
                                        <circle
                                            cx="25.5"
                                            cy="25.5"
                                            r="25.5"
                                            fill="#FFAE00"
                                        />
                                        <rect
                                            x="16"
                                            y="15"
                                            width="20"
                                            height="20"
                                            fill="url(#pattern0)"
                                        />
                                        <defs>
                                            <pattern
                                                id="pattern0"
                                                patternContentUnits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                            >
                                                <use
                                                    xlink:href="#image0_27_772"
                                                    transform="scale(0.0333333)"
                                                />
                                            </pattern>
                                            <image
                                                id="image0_27_772"
                                                width="30"
                                                height="30"
                                                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7klEQVRIie3WMUpDQRAG4I+AWNkJgpWFB7DQ0iqVrTZ6B5NLGA9hpVfIARJsAgl4BkHBSuwkIBFj8RT2LSkE2XkJ5Ictl49dZmeHdZYsQ8x/1gRbUfBDAs/RRysC3sNrhvciYDjGRwJ/4SIK76ifeoqjKPwmw1+wGwFv4D7DR9iMwLfxmOF3ETAc4D3DO1H4qaq6f+FPnEThPfVTv2E/Am6pOlmKT/6yaWVzrYGrPlMvrhnapdFFz+myNLqD5wy9LY021jLzT+JJdQNF083QKQ5Lo21V1aaDwHlpdNHoc1UapcFhb5CgY4Hj7Tr/zjfcW2a3eoiKgwAAAABJRU5ErkJggg=="
                                            />
                                        </defs>
                                    </svg>
                                </button>
                                <button
                                    class="splide__arrow splide__arrow--next"
                                >
                                    <svg
                                        width="51"
                                        height="51"
                                        viewBox="0 0 51 51"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                    >
                                        <circle
                                            cx="25.5"
                                            cy="25.5"
                                            r="25.5"
                                            fill="#FFAE00"
                                        />
                                        <rect
                                            x="16"
                                            y="15"
                                            width="20"
                                            height="20"
                                            fill="url(#pattern0)"
                                        />
                                        <defs>
                                            <pattern
                                                id="pattern0"
                                                patternContentUnits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                            >
                                                <use
                                                    xlink:href="#image0_27_772"
                                                    transform="scale(0.0333333)"
                                                />
                                            </pattern>
                                            <image
                                                id="image0_27_772"
                                                width="30"
                                                height="30"
                                                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7klEQVRIie3WMUpDQRAG4I+AWNkJgpWFB7DQ0iqVrTZ6B5NLGA9hpVfIARJsAgl4BkHBSuwkIBFj8RT2LSkE2XkJ5Ictl49dZmeHdZYsQ8x/1gRbUfBDAs/RRysC3sNrhvciYDjGRwJ/4SIK76ifeoqjKPwmw1+wGwFv4D7DR9iMwLfxmOF3ETAc4D3DO1H4qaq6f+FPnEThPfVTv2E/Am6pOlmKT/6yaWVzrYGrPlMvrhnapdFFz+myNLqD5wy9LY021jLzT+JJdQNF083QKQ5Lo21V1aaDwHlpdNHoc1UapcFhb5CgY4Hj7Tr/zjfcW2a3eoiKgwAAAABJRU5ErkJggg=="
                                            />
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                            <div class="splide__track">
                                <ul class="splide__list">
                                    <li class="splide__slide">
                                        <div
                                            class="card"
                                            style="
                                    background-image: url('https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg');"
                                        >
                                            <div class="card-title">
                                                ELECTRICITY & MAGNETISM
                                            </div>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div
                                            class="card"
                                            style="
                                    background-image: url('https://thumbs.dreamstime.com/b/imagination-girl-kiss-lion-love-nature-abstract-concept-young-steals-male-wildlife-children-like-to-imagine-play-129595579.jpg');"
                                        >
                                            <div class="card-title">
                                                ELECTRICITY & MAGNETISM
                                            </div>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div
                                            style="
                                    background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');"
                                            class="card"
                                        >
                                            <div class="card-title">
                                                CHANGES IN NON-LIVING THINGS
                                            </div>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div
                                            style="
                                    background-image: url('https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648?b=1&k=20&m=1279460648&s=170667a&w=0&h=uZa830sWo8hlFN0Y7FnQ14giNC0Z2EBNuTMuNJeJhQg=');"
                                            class="card"
                                        >
                                            <div class="card-title">
                                                CHANGES IN NON-LIVING THINGS
                                            </div>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div
                                            style="
                                    background-image: url('https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270');"
                                            class="card"
                                        >
                                            <div class="card-title">
                                                CHANGES IN NON-LIVING THINGS
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="g-col-12  g-col-xxl-2">
                    <div class="mflex" style="margin-bottom: 20px;">
                        <span class="h2 float-left">Subjects</span>
                        <button class="see float-right btn">SEE ALL</button>
                    </div>
                    <div class="grid columns-12 gap-6 mt-8">
                        <div
                            style="background-color: #CC924D; "
                            class="g-col-sm-6 g-col-12 g-col-lg-4 g-col-xxl-2  note"
                        >
                            <div class="grid columns-2 gap-3">
                                <div class="g-col-1">
                                    <img src="svg/geometry.svg" style="width:46px;height:46px" alt="" srcset="">
                                    
                                </div>
                                <div class="g-col-1">
                                    <p class="note-text">Futher Mathematics</p>
                                </div>
                            </div>
                        </div>
                        <div
                            style="background-color: #406529; "
                            class="g-col-sm-6 g-col-12 g-col-lg-4 g-col-xxl-2  note"
                        >
                            <div class="grid columns-2 gap-3">
                                <div class="g-col-1">
                                    <img src="svg/agric.svg" style="width:46px;height:46px" alt="" srcset="">
                                     
                                </div>
                                <div class="g-col-1">
                                    <p class="note-text">Agricultural Science</p>
                                </div>
                            </div>
                        </div>
                        <div
                            style="background-color: #805DE4; "
                            class="g-col-sm-6 g-col-12 g-col-lg-4 g-col-xxl-2  note"
                        >
                            <div class="grid columns-2 gap-3">
                                <div class="g-col-1">
                                    <img src="svg/computer.svg" style="width:46px;height:46px" alt="" srcset="">
                                    </div>
                                <div class="g-col-1">
                                    <p class="note-text">Data Processing</p>
                                </div>
                            </div>
                        </div>
                        <div
                            style="background-color: #1984C0; "
                            class="g-col-sm-6 g-col-12 g-col-lg-4 g-col-xxl-2  note"
                        >
                            <div class="grid columns-2 gap-3">
                                <div class="g-col-1">
                                   <img src="svg/english.svg" style="width:46px;height:46px" alt="" srcset="">
                                </div>
                                <div class="g-col-1">
                                    <p class="note-text">English Language</p>
                                </div>
                            </div>
                        </div>

                        <div
                        style="background-color:mediumslateblue; "
                        class="g-col-sm-6 g-col-12 g-col-lg-4 g-col-xxl-2  note"
                    >
                        <div class="grid columns-2 gap-3">
                            <div class="g-col-1">
                               <img src="svg/commerce.svg" style="width:46px;height:46px" alt="" srcset="">
                            </div>
                            <div class="g-col-1">
                                <p class="note-text">Business Studies</p>
                            </div>
                        </div>
                    </div>
                    <div
                    style="background-color:lightpink; "
                    class="g-col-sm-6 g-col-12 g-col-lg-4 g-col-xxl-2  note"
                >
                    <div class="grid columns-2 gap-3">
                        <div class="g-col-1">
                           <img src="svg/accounting.svg" style="width:46px;height:46px" alt="" srcset="">
                        </div>
                        <div class="g-col-1">
                            <p class="note-text">Financial Accounting</p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    a{
        text-decoration: underline green;
    }
    @media only screen and (max-width: 600px) {
        #desktop {
            display: none;
        }
        #mobile {
            display: block;
        }
        #tab {
            display: none;
        }
    }
    @media only screen and (min-width: 768px) {
        #desktop {
            display: none;
        }
        #mobile {
            display: none;
        }
        #tab {
            display: block;
        }
    }
    @media only screen and (min-width: 600px) {
        #desktop {
            display: none;
        }
        #mobile {
            display: none;
        }
        #tab {
            display: block;
        }
    }
    @media only screen and (min-width: 992px) {
        #desktop {
            display: block;
        }
        #mobile {
            display: none;
        }
        #tab {
            display: none;
        }
    }

    .h2 {
        font-family: "Itim", "roboto";
        font-size: 1.5em;
    }
    h1 {
        font-size: 2em;
    }
    .content {
        height: 100%;
        overflow: auto;
        background-image: url(images/hand.svg), url(images/right.svg),
            url(images/bottom.svg);
        background-repeat: no-repeat, no-repeat, no-repeat;
        background-position: 0 0, 100%, 0 100%;
    }

    .card {
        width: 271px;
        height: 280px;
        border-radius: 14px;
    }
    .card-title {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        margin-right: 15px;
        margin-left: 15px;
        margin-top: 23px;
        /* or 22px */

        display: flex;
        align-items: center;
        letter-spacing: 0.17em;

        color: #ffffff;
    }
    .see {
        width: 115px;
        height: 23px;
        float: right;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        background: #ffae00;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        color: #ffffff;
    }
    .note {
        height: 104px;
        padding: 6px;
        border-radius: 12px;
    }
    .note-text {
        font-family: "Muli", "Helvetica Neue", "Roboto", sans-serif;
        font-size: 16px;
        font-weight: 600;
        color: white;
        margin-top: 40px;
        text-transform: uppercase;
        text-align: right;
        letter-spacing: 0.6px;
    }
</style>
