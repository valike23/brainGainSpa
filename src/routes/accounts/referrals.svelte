<script context="module">
	// the (optional) preload function takes a
	// `{ path, params, query }` object and turns it into
	// the data we need to render the page
	export async function preload(page, session) {
		// the `slug` parameter is available because this file
		// is called [slug].svelte
		const { slug } = page.params;

		// `this.fetch` is a wrapper around `fetch` that allows
		// you to make credentialled requests on both
		// server and client
		const res = await this.fetch(`api/referral`);
		const referral = await res.json();
        console.log(referral);
		return { referral };
	}
</script>

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
          
            <div class="container">
                <div class="row intro-y box mt-5 income">
                    <div class="col-12 p-sm-l-3 p-sm-r-3">
                       <p><small>TOTAL EARNINGS</small></p>
                       <p class="money">$5,000</p>
                    </div>
                </div>
            <div class="row intro-y box mt-5 income">
                <div class="col-12 p-sm-l-3 p-sm-r-3">
                   <p><small>TOTAL EARNINGS</small></p>
                   <p class="money">$5,000</p>
                </div>
            </div>
            <div class="row box intro-y banner mt-5">

            </div>
            <h2>referrals users</h2>
            <div class="row box mt-5">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="whitespace-nowrap">#</th>
                            <th class="whitespace-nowrap">First Name</th>
                            <th class="whitespace-nowrap">Last Name</th>
                            <th class="whitespace-nowrap">Earning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Angelina</td>
                            <td>Jolie</td>
                            <td>$50</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Brad</td>
                            <td>Pitt</td>
                            <td>$80</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Charlie</td>
                            <td>Hunnam</td>
                            <td>$100</td>
                        </tr>
                    </tbody>
                </table>
            </div>
<h2>referrals Tree</h2>
            <div class="row box mt-5">
                <div id="chart">

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
   
    .income {
        background-image: url('images/ill/earn.png');
        height: 100px;
        background-repeat: no-repeat;
        background-position: right;
        background-size: 150px;
    }
    .banner {
        background-color: green;
        height: 150px;
    }
    .money {
        font-weight: 800;
        font-size: 3rem;
    }
    #chart{
        height: 50vh;
    }
    h2 {
	font-family: 'Itim', 'roboto';
	font-weight: 500;
	font-size: 1.5rem;
}
  

</style>
