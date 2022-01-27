<script lang="ts">
    import { onMount } from "svelte";
    import DesktopSide from "../../components/Nav/DesktopSide.svelte";
    import MobileMenu from "../../components/Nav/MobileMenu.svelte";
    import TopBar from "../../components/Nav/TopBar.svelte";
    import type { IchartConfig, IchartData } from "../../Model/zingchart";
    let win: any = {};
    let links = [
    { name: "accoounts" },
    { name: "referrals and income", url: "accooounts/referrals" },
  ];
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
       
            chartConfig.series = chartData;

            win.zingchart.render({
                id: "chart",
                data: chartConfig,
                height: "95%",
                width: "100%",
                output: "canvas",
            });
        
    });
</script>

<svelte:head>
  
</svelte:head>

<div class="main">
    <MobileMenu />

    <div class="d-flex">
        <DesktopSide dash="accounts" />
        <div class="content">
            <TopBar {links}/>
            <div class="row" style="margin-bottom: 50px;">
                <h2 class="intro-y fs-lg fw-medium me-auto mt-2">referrals</h2>
            </div>
            <div class="container">
            <div class="row intro-y box mt-5 income">
                <div class="col-12">
                    <div class="row">
                        <div class="col-sm-6 col-12">
                            <img src="sv" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row intro-y box mt-5 pt-4">
                <div class="col-12 pt-3 mb-3"><h2>referrals tree</h2></div>
                <div class="col-12">
                    <div id="chart"></div>
                </div>
            </div>
            </div>
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
    #svg {
        width: 60px;
    }
    .cash-big {
        font-size: 30px;
        font-weight: 700;
    }
    .income {
        background-image: url('svg/money.svg');
    }

</style>
