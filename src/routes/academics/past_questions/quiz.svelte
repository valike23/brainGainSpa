<script lang="ts" context="module">
  // the (optional) preload function takes a
  // `{ path, params, query }` object and turns it into
  // the data we need to render the page
  export async function preload(page, session) {
    // the `slug` parameter is available because this file
    // is called [slug].svelte
    const { slug } = page.params;
    let questions: Iquestion[] = [];
    // `this.fetch` is a wrapper around `fetch` that allows
    // you to make credentialled requests on both
    // server and client
    let type = "past questions";
    let name = page.query.name;
    try {
      console.log(page);

      const res = await this.fetch(
        `api/questions/past?courseid=${page.query.courseid}&year=${page.query.year}`
      );
      let data = await res.json();
      
     
      questions = data;
    } catch (error) {
      questions = [];
    }
    console.log(questions);
    return { questions, type, name};
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import {Db} from "zangodb";
  import type { Iuser } from "../../../Model/accounts";
  import { handleBrowserError, handleNotification } from "../../../Model/browserFunctions";
import type { Irequest } from "../../../Model/public";
export let questions: Iquestion[], name;
  import Swal from "sweetalert2";
  let db = new Db('bgspa',1,{request: ['createdDate']});
  import type {
    Iquestion,
    IquestionReport,
    IquizReport,
    Itopic,
  } from "../../../Model/question";
import axios from "axios";
import {goto} from '@sapper/app';
  let mode = "question";
  let question: Iquestion;
  let questionNumber = 0;
  let topic: Itopic = {};
  let user: Iuser = {};
  console.log("total questions:", questions.length);
  if (questions.length > 0) {
    question = questions[questionNumber];
  } else {
    question = {};
  }
  let resultObject: IquizReport = {};
  let questionResult = "";
  let isOnline = "offline";
  console.log(question);
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

  let TIME_LIMIT = 20 * 60;
  let isTimerPaused = false;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;
  let lastQuestion = false;
  const assignAnswer = (answer: string) => {
    question.choosen = answer;
    question = question;
  };
  const restartTimer = () => {
    TIME_LIMIT = question.duration * 60 || 30;
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
  const toggleStatus = () => {
    isOnline = navigator.onLine ? "online" : "offline";
    console.log(isOnline);
    if (isOnline == "offline") {
      handleNotification("go are now offline", window, "error", "OFFLINE");
    } else {
      handleNotification("go are now online", window, "success", "ONLINE");
    }
  };
  let endQuestion = () => {
    isTimerPaused = true;
    //mode = "result";
    nextQuestion();
  };
  const jumpTo =(index: number)=>{
    question = questions[index];
    questions = questions;
    if (index < questions.length -1) {
      lastQuestion = false;
    } else {
      lastQuestion = true;
    }
    console.log(lastQuestion);
  }
  const nextQuestion = () => {
    mode = "question";
    questionResult = "";
    questionNumber = questionNumber + 1;
    if (questionNumber < questions.length) {
      question = questions[questionNumber];
      lastQuestion = false;
    } else {
      lastQuestion = true;
    }
    questions = questions;
    toggleTimer();
  };
  const submit = async () => {
    resultObject = {};
    resultObject.questions = [];
    let score = 0;
    questions.forEach((question) => {
      let result: IquestionReport = {};
      result.choosen = question.choosen;
      result.correct = question.choosen == question.answer;
      if (result.correct) {
        score = score + 1;
      } else {
       // score = score - 2;
      }
      result.question_id = question._id;
      //result.quizCount
      resultObject.questions.push(result);
    });
    resultObject.score = score;
    //uploading result based on online status
    let request:Irequest ={
        url: `/api/questions/studentQuiz?student_id=${user.id}&topic_id=${topic.topicId}&id={id}`,
        body: JSON.stringify(resultObject),
        createdDate: new Date(),
        isRead: false,
        method: 'put'
      };
    if(isOnline == 'online'){
      let form = new FormData();
      form.append('body',request.body);
      try {
        
     let result = axios["put"](request.url, form);
     if(result){
     let swalresponse = await Swal.fire({title:'sucess',text:'quiz have been uploaded successfully',icon: 'success'});
     if(swalresponse){
       //navigate to result page
       sessionStorage.setItem('result', request.body);
       goto('/academics/skill_pratice/highlight');
     }
     }
      } catch (error) {
        handleBrowserError(error);
      }
     
    }
    else{
      handleNotification('note you are offline', window,'info','note');
    
       db.collection('request').insert(request).then((data)=>{
        Swal.fire({title:'sucess',text:'quiz have been uploaded successfully',icon: 'success'});
       }).then(()=>{

       sessionStorage.setItem('result', request.body);
       goto('/academics/skill_pratice/highlight');
       });
      

    }
    //if online push to server... unless score request
    //should be stored in an array of server objects
  };
  onMount(() => {
    // Credit: Mateusz Rybczonec
    toggleStatus();
    window.addEventListener("online", toggleStatus);
    window.addEventListener("offline", toggleStatus);
    startTimer();


    user = JSON.parse(sessionStorage.getItem("user"));
  });
</script>

<svelte:head >
  <title>Braingainspa:: Past Question Quiz</title>
</svelte:head>
<div class="main">

  <div class="d-flex">
    <div class="content">
      <div class="row">
        <h2 class="intro-y fs-lg fw-medium me-auto mt-2">
          {'Past Questions'}
        </h2>
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
                  <span id="base-timer-label" class="base-timer__label"
                    >{formatTime(timeLeft)}</span
                  >
                </div>
              </div>

              <div class="col-4 pause">
                <!-- <span>
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
                      ><circle cx="12" cy="12" r="10" /><path
                        d="M10 15V9"
                      /><path d="M14 15V9" /></g
                    ></svg
                  >
                </span> -->
              </div>
            </div>
            <div class=" mt-4">
              <div class="col">
                <p style="font-size: 22px;">{name}</p>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col">
                {#each questions as qu, i}
                  <button on:click="{()=>{jumpTo(i)}}" class:answered={qu.choosen} class:active={qu._id == question._id} class="btn btn-sm c-btn mr-2 mb-2">{i + 1}</button>
                {/each}
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-12">
                <p><small>{@html question.instructions}</small></p>
              </div>
              <div class="col-12 question">
                {@html question.question}
              </div>
            </div>
            <div class="row mt-5 mb-4">
              {#each question.options as opt}
                <div class="col-12  opts-container col-sm-6 mb-4">
                  <div
                    on:click={() => {
                      assignAnswer(opt);
                    }}
                    class:opts={opt != question.choosen}
                    class:opts-choosen={opt == question.choosen}
                    class=" ml-n4 ml-sm-0 pt-3 pb-2"
                  >
                    <span>{opt}</span>
                  </div>
                </div>
              {/each}
            </div>
            <div
              class="row mt-2 pt-4  "
            >
            {#if lastQuestion}
              <div class="col-12">
                <button
                on:click={submit}
                style="width: 200px;"
                disabled={!question.choosen}
                class="btn btn-primary float-end">Submit</button
              >
       
       
              </div>
             
            {:else}
               <div class="col-12">
                <button
                on:click={endQuestion}
                style="width: 200px;"
                disabled={!question.choosen}
                class="btn btn-primary float-end">Next</button
              >
               </div>
            {/if}
           
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .answered {
    background-color: rgba(184, 184, 45, 0.877);
    border: 1px solid green;
    color: black
  }
  .active{
    border: 1px solid blue;
  }
  .c-btn {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    background-color: whitesmoke;
  }
  .success {
    border: 2px solid green;
  }
  .failed {
    border: 2px solid red;
  }
  h2 {
    font-family: "Itim", "roboto";
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
