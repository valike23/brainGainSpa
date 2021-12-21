<script lang="ts">
    import { onMount } from "svelte";
    import DesktopSide from "../../components/Nav/DesktopSide.svelte";
    import MobileMenu from "../../components/Nav/MobileMenu.svelte";
    import TopBar from "../../components/Nav/TopBar.svelte";
    import type { IchartConfig, IchartData } from "../../Model/zingchart";
    let win: any = {};
    let chartConfig: IchartConfig = {
        type: "tree",
        backgroundColor: "transparent",
        options: {
            link: {
                aspect: "arc",
            },
            maxSize: 30,
            minSize: 20,
            node: {
                type: "circle",
                tooltip: {
                    padding: "8px 10px",
                    borderRadius: "3px",
                },
            },
        },
    };
    let chartData: IchartData[] = [
        {
            id: "theworld",
            parent: "",
            type: "node",
            name: "Emeka Smith",
            style: {
                "background-fit": "xy",
                backgroundImage:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp4gAct8mXsUK_purhunJBH5baCGdd7j8-MKYs98cnMjWZUniSXBdp9DvzzHmqs_5TyY&usqp=CAU",
                color: "white",
                
            },
        },
        {
            id: "asia",
            parent: "theworld",
            name: "Jibola Daniel",
            value: 4100000000,
            style: {
                "background-fit": "xy",
                backgroundImage:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp4gAct8mXsUK_purhunJBH5baCGdd7j8-MKYs98cnMjWZUniSXBdp9DvzzHmqs_5TyY&usqp=CAU",
                color: "white",
                
            },
        },
        {
            id: "africa",
            parent: "theworld",
            name: "Nora White",
            value: 1260000000,
            style: {
                "background-fit": "xy",
                backgroundImage:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp4gAct8mXsUK_purhunJBH5baCGdd7j8-MKYs98cnMjWZUniSXBdp9DvzzHmqs_5TyY&usqp=CAU",
                color: "white",
                
            },
        },
        {
            id: "america",
            parent: "theworld",
            name: "Rita Smith",
            value: 328000000,
            style: {
                "background-fit": "xy",
                backgroundImage:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp4gAct8mXsUK_purhunJBH5baCGdd7j8-MKYs98cnMjWZUniSXBdp9DvzzHmqs_5TyY&usqp=CAU",
                color: "white",
                
            },
        },
        {
            id: "europe",
            parent: "theworld",
            name: "Oga Matthew",
            value: 741000000,
            style: {
                "background-fit": "xy",
                backgroundImage:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp4gAct8mXsUK_purhunJBH5baCGdd7j8-MKYs98cnMjWZUniSXBdp9DvzzHmqs_5TyY&usqp=CAU",
                color: "white",
                
            },
        },
        {
            id: "ca",
            parent: "america",
            name: "Luka Douglas",
            value: 32000000, style: {
                "background-fit": "xy",
                backgroundImage:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp4gAct8mXsUK_purhunJBH5baCGdd7j8-MKYs98cnMjWZUniSXBdp9DvzzHmqs_5TyY&usqp=CAU",
                color: "white",
                
            },
        },
        {
            id: "ny",
            parent: "america",
            name: "Oyeemeke Danieel",
            value: 19000000, style: {
                "background-fit": "xy",
                backgroundImage:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp4gAct8mXsUK_purhunJBH5baCGdd7j8-MKYs98cnMjWZUniSXBdp9DvzzHmqs_5TyY&usqp=CAU",
                color: "white",
                
            },
        },
        {
            id: "txt",
            parent: "america",
            name: "Nara ChukewuMadu",
            value: 29000000, style: {
                "background-fit": "xy",
                backgroundImage:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp4gAct8mXsUK_purhunJBH5baCGdd7j8-MKYs98cnMjWZUniSXBdp9DvzzHmqs_5TyY&usqp=CAU",
                color: "white",
                
            },
        },
    ];
    onMount(() => {
        win = window;
        setTimeout(() => {
            chartConfig.series = chartData;

            win.zingchart.render({
                id: "chart",
                data: chartConfig,
                height: "95%",
                width: "100%",
                output: "canvas",
            });
        }, 100);
    });
</script>

<svelte:head>
    <script defer src="https://cdn.zingchart.com/zingchart.min.js"></script>
</svelte:head>

<div class="main">
    <MobileMenu />

    <div class="d-flex">
        <DesktopSide dash="accounts" />
        <div class="content">
            <TopBar />
            <div class="row" style="margin-bottom: 50px;">
                <h2 class="intro-y fs-lg fw-medium me-auto mt-2">Referals</h2>
            </div>

            <div id="chart" />
        </div>
    </div>
</div>

<style>
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
</style>
