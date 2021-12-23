<script lang="ts">
    import { onMount } from "svelte";

    import DesktopSide from "../../components/Nav/DesktopSide.svelte";
    import MobileMenu from "../../components/Nav/MobileMenu.svelte";
    import TopBar from "../../components/Nav/TopBar.svelte";
    let question = {
        subject: "chemistry",
        status: 200,
        data: {
            id: 126,
            question:
                "What volume of gas is evolved at s.t.p. if 2g of calcium trioxocarbonate(IV) is added to a solution of hydrochloric acid    [Ca = 40, C = 12, O = 16, CI = 35.5, H = 1, Molar volume of a gas at s.t.p = 22.4dm3]",
            option: ["112cm3", "224cm3", "448cm3", "223cm3"],
            section: "",
            image: "",
            answer: "c",
            solution: "",
            examtype: "utme",
            examyear: "2004",
            choosen: "",
        },
    };
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 10;
    const ALERT_THRESHOLD = 5;

    const COLOR_CODES = {
        info: {
            color: "green",
        },
        warning: {
            color: "orange",
            threshold: WARNING_THRESHOLD,
        },
        alert: {
            color: "red",
            threshold: ALERT_THRESHOLD,
        },
    };

    let TIME_LIMIT = 20;
    let isTimerPaused = false;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;
    const assignAnswer = (answer: string )=>{
        question.data.choosen = answer  ;
        question = question;
    }
    const restartTimer = () => {
        TIME_LIMIT = 20;
        timeLeft = TIME_LIMIT;
        timePassed = 0;
        startTimer();
    };
    const toggleTimer = () => {
        isTimerPaused = !isTimerPaused;
    };
    function onTimesUp() {
        clearInterval(timerInterval);
        setTimeout(() => {
            restartTimer();
        }, 2000);
    }

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        let seconds: any = time % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }
    function setRemainingPathColor(timeLeft) {
        const { alert, warning, info } = COLOR_CODES;
        if (timeLeft <= alert.threshold) {
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(warning.color);
            document
                .getElementById("base-timer-path-remaining")
                .classList.add(alert.color);
        } else if (timeLeft <= warning.threshold) {
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(info.color);
            document
                .getElementById("base-timer-path-remaining")
                .classList.add(warning.color);
        }
    }
    function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    function setCircleDasharray() {
        const circleDasharray = `${(
            calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        document
            .getElementById("base-timer-path-remaining")
            .setAttribute("stroke-dasharray", circleDasharray);
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            if (isTimerPaused) {
                console.log("paused");
            } else {
                timePassed = timePassed += 1;
                timeLeft = TIME_LIMIT - timePassed;
                document.getElementById("base-timer-label").innerHTML =
                    formatTime(timeLeft);
                setCircleDasharray();
                setRemainingPathColor(timeLeft);
            }

            if (timeLeft === 0) {
                onTimesUp();
            }
        }, 1000);
    }

    onMount(() => {
        // Credit: Mateusz Rybczonec

        startTimer();
    });
</script>

<svelte:head>
  
</svelte:head>
<div class="main">
    <MobileMenu />
    <div class="d-flex">
        <DesktopSide dash="academics" />
        <div class="content">
            <TopBar />
            <div class="row">
                <h2 class="intro-y fs-lg fw-medium me-auto mt-2">Quiz</h2>
            </div>
            <div class="container">
                <div class=" row pt-4 mt-4 ">
                    <div class="col">
                        <div class="row">
                            <div class="col-4 " />
                            <div class="col-4 timer">
                                <div class="base-timer">
                                    <svg
                                        class="base-timer__svg"
                                        viewBox="0 0 100 100"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g class="base-timer__circle">
                                            <circle
                                                class="base-timer__path-elapsed"
                                                cx="50"
                                                cy="50"
                                                r="45"
                                            />
                                            <path
                                                id="base-timer-path-remaining"
                                                stroke-dasharray="283"
                                                class="base-timer__path-remaining {remainingPathColor}"
                                                d="
                                            M 50, 50
                                            m -45, 0
                                            a 45,45 0 1,0 90,0
                                            a 45,45 0 1,0 -90,0
                                          "
                                            />
                                        </g>
                                    </svg>
                                    <span
                                        id="base-timer-label"
                                        class="base-timer__label"
                                        >{formatTime(timeLeft)}</span
                                    >
                                </div>
                            </div>
                            <div class="col-4 pause">
                                <span>
                                    <svg
                                        on:click={toggleTimer}
                                        class="float-end"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        width="1em"
                                        height="1em"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                        ><g
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            ><circle
                                                cx="12"
                                                cy="12"
                                                r="10"
                                            /><path d="M10 15V9" /><path
                                                d="M14 15V9"
                                            /></g
                                        ></svg
                                    >
                                </span>
                            </div>
                        </div>
                        <div class=" mt-4">
                            <div class="col">
                                <p style="font-size: 22px;">{question.subject}</p>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-12 question">
                                <p>
                                    {question.data.question}
                                </p>
                            </div>
                        </div>
                        <div class="row mt-5 mb-4">
                            {#each question.data.option as opt}
                                <div
                                    class="col-12  opts-container col-sm-6 mb-4"
                                >
                                    <div
                                    on:click="{()=>{assignAnswer(opt)}}"
                                        class:opts={opt != question.data.choosen}
                                        class:opts-choosen={opt == question.data.choosen}
                                        class=" ml-n4 ml-sm-0 pt-3 pb-2"
                                    >
                                        <span>{opt}</span>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    h2 {
	font-family: 'Itim', 'roboto';
}
    .timer > div {
        display: inline-block;
        margin: 0 auto;
    }

    @media only screen and (max-width: 360px) {
        .opts {
            min-width: 250px;
            max-width: 75%;
            min-height: 64px;
            background-color: rgb(177, 174, 174);
            border-radius: 12px;
            text-align: center;
            font-family: "Itim", cursive;
            font-size: 15px;

            display: inline-block;
            margin-left: -10px;
        }
        .opts-choosen {
            min-width: 250px;
            max-width: 75%;
            min-height: 64px;
            background-color: rgb(16, 2, 48);
            border-radius: 12px;
            text-align: center;
            font-family: "Itim", cursive;
            font-size: 15px;
            color: white;
            display: inline-block;
            margin-left: -10px;
        }
    }
    @media only screen and (min-width: 360px) {
        .opts {
            min-width: 250px;
            max-width: 75%;
            min-height: 64px;
            background-color: rgb(177, 174, 174);
            border-radius: 12px;
            text-align: center;
            font-family: "Itim", cursive;
            font-size: 15px;

            display: inline-block;
            margin: 0 auto;
        }
        .opts-choosen {
            min-width: 250px;
            max-width: 75%;
            min-height: 64px;
            background-color: rgb(16, 2, 48);
            border-radius: 12px;
            text-align: center;
            font-family: "Itim", cursive;
            font-size: 15px;
            color: white;
            display: inline-block;
            margin: 0 auto;
        }
    }
    .opts-container {
        display: flexbox;
        flex-direction: row;
        align-items: center;
        text-align: center;
    }
    .question {
        text-align: center;
        font-family: "Itim", cursive;
        line-height: 2;
        font-size: 20px;
    }
    .content {
        height: 100%;
        overflow: auto;
        background-image: url(images/hand.svg), url(images/right.svg),
            url(images/bottom.svg);
        background-repeat: no-repeat, no-repeat, no-repeat;
        background-position: 0 0, 100%, 0 100%;
    }
    .timer {
        text-align: center;
        display: flexbox;
        flex-direction: row;
        align-items: center;
    }

    .pause > span > svg {
        background-color: green;
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    .box > .col {
        margin-left: 2.5vw;
        margin-right: 2.5vw;
    }

    .base-timer {
        position: relative;
        width: 70px;
        height: 70px;
    }

    .base-timer__svg {
        transform: scaleX(-1);
    }

    .base-timer__circle {
        fill: none;
        stroke: none;
    }

    .base-timer__path-elapsed {
        stroke-width: 7px;
        stroke: grey;
    }

    .base-timer__path-remaining {
        stroke-width: 7px;
        stroke-linecap: round;
        transform: rotate(90deg);
        transform-origin: center;
        transition: 1s linear all;
        fill-rule: nonzero;
        stroke: currentColor;
    }

    .base-timer__path-remaining.green {
        color: rgb(65, 184, 131);
    }

    .base-timer__path-remaining.orange {
        color: orange;
    }

    .base-timer__path-remaining.red {
        color: red;
    }

    .base-timer__label {
        position: absolute;
        width: 70px;
        height: 70px;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
    }
</style>
