<script lang="ts">
    import { onMount } from "svelte";
    import DashSideBar from "../../../components/DashSideBar.svelte";
    import Title from "../../../components/PageComponents/Title.svelte";
    let win: any = {};
    onMount(() => {
        win = window;
        console.log(Object.keys(win.window.window));
        var splide = new win.Splide(".splide", {
            type: "loop",
            perPage: 3,
            perMove: 1,
        });

        splide.mount();
    });
</script>

<svelte:head>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
    />
    <link rel="stylesheet" href="css/splide-core.min.css" />
    <link rel="stylesheet" href="css/splide-skyblue.min.css" />
    <link
        rel="stylesheet"
        href="https://cdn.metroui.org.ua/v4.3.2/css/metro-all.min.css"
    />
    <script defer src="https://cdn.metroui.org.ua/v4/js/metro.min.js"></script>
</svelte:head>
<div id="main">
    <div class="container">
        <div class="row">
            <DashSideBar />
            <div class="col-9 content">
                <Title title={"Home"} />
                <div style="margin-bottom: 46px;">
                    <select class="dropButton">
                        <option selected value="1">British Circulum</option>
                    </select>
                </div>
                <div id="searchDiv">
                    <form>
                        <input
                            type="text"
                            data-role="input"
                            data-search-button="true"
                        />
                    </form>
                </div>
                <div style="margin-bottom: 20px;">
                    <span class="h1">Skill Pratice</span>
                    <button class="see float-end btn">SEE ALL</button>
                </div>
                <div>
                    <div class="splide">
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
                <div style="margin-bottom: 20px; margin-top: 37px;">
                    <span class="h1">E Library</span>
                </div>
                <div class="row">
                    <div class="col-3 small-card">
                        <div class="row">
                            <div class="col-3" />
                            <div class="col-9">
                                <div class="svg float-end">
                                    <svg
                                        width="69"
                                        height="60"
                                        viewBox="0 0 69 60"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g style="mix-blend-mode:overlay">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M35.9862 4.36475C41.1849 6.06655 44.6235 10.3963 49.4601 12.9328C55.5175 16.1096 64.5646 15.0587 67.7788 21.0379C70.9513 26.9396 67.2978 34.3436 64.1488 40.2575C61.3633 45.4889 56.1717 48.5874 51.288 52.0085C46.4662 55.3863 41.8915 60.2961 35.9862 59.986C30.1378 59.6789 27.0078 53.1496 21.8238 50.4611C15.2383 47.0458 5.58868 48.4835 1.71868 42.2145C-2.14817 35.9506 1.42463 27.8591 3.52848 20.8248C5.69068 13.5953 7.15777 4.75532 13.9527 1.30948C20.7144 -2.11956 28.7702 2.00262 35.9862 4.36475Z"
                                                fill="#3F09D8"
                                                fill-opacity="0.83"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div class="text">Futher Mathematics</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .text {
        width: 119px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        text-align: right;
        letter-spacing: 0.08em;

        color: #ffffff;
    }
    .svg {
        margin-bottom: 7px;
        width: 69px;
        height: 60px;
        mix-blend-mode: overlay;
    }
    .small-card {
        background: #cc924d;
        border-radius: 12px;
        width: 195px;
        height: 104px;
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
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        text-align: center;
        background: #ffae00;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        color: #ffffff;
    }
    .h1 {
        font-family: roboto, sans-serif;
        line-height: 23.44px;
        font-weight: 400;
        font-size: 20px;
    }
    #searchDiv {
        margin-bottom: 65px;
    }
    #main {
        min-height: 100vh;
        width: 100vw;
        background-color: #406529;
    }
    .content {
        height: 100%;
        background-color: white;
        border-radius: 12px;
        margin-top: 2px;
        padding-left: 18px;
    }
    .dropButton {
        width: 205px;
        height: 33px;
        background: #ffae00;
        border-radius: 5px;
        color: white;
    }
</style>
