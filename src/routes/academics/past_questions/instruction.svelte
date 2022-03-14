<script context="module">
export async function preload(page, session) {
		// the `slug` parameter is available because this file
		// is called [slug].svelte
		const { slug } = page.params;
        let query = page.query;
    console.log('query test again: ',query);
    let  {id, type} = query;
    console.log(id, type);
    const res = await this.fetch(`api/past_questions/faculties?id=${id}`);
		let course = await res.json();
		
		return { id, type, course };
	}
</script>

<script lang="ts">
import { onMount } from "svelte";

    import DesktopSide from "../../../components/Nav/DesktopSide.svelte";
    import MobileMenu from "../../../components/Nav/MobileMenu.svelte";
    import TopBar from "../../../components/Nav/TopBar.svelte";
import type { Icourse, Itopic } from "../../../Model/question";
 export let  id, type, course: Icourse;
 let win: any;
    const next = () =>{
      
        
        location.href = `academics/past_questions/quiz?courseid=${course.courseId}&name=${course.courseName}`;
    } ;
    
    let instruction = true;
    let playInstruction =()=>{
      instruction = !instruction;
        let audio = document.querySelector('audio');
        audio.play();
    }
    let stopInstruction =()=>{
        instruction = !instruction;
        let audio = document.querySelector('audio');
        audio.pause();
    }
    onMount(()=>{
       win = window;
    })
    
let links =[{name: 'academics'},{name: 'past Questions', url: 'academics/past_questions'},{name: 'Instructions', url: `academics/past_questions/instruction?id=${id}&type=${type}`}];
</script>
<svelte:head>
    <title>Braingainspa:: Past Question Instruction page</title>
</svelte:head>
<div class="main">
    <MobileMenu />

    <div class="d-flex">
        <DesktopSide dash="academics" />
        <div class="content">
            <TopBar {links}/>
            <div class="row" style="margin-bottom: 50px;">
                <h2 class="intro-y fs-lg fw-medium me-auto mt-2">
                    {type + ':  '  + course.courseName} - Instructions
                  {#if instruction}
                  <span style="width: 20px; height: 20px" on:click="{playInstruction}" class="float-end"><img src="svg/play/low_speaker.svg" alt=""></span>
                  {:else}
                  <span style="width: 20px; height: 20px" on:click="{stopInstruction}" class="float-end"><img src="svg/play/high_speaker.svg" alt=""></span>
                  {/if}
                </h2>
            </div>

            <div>
                <p id="type">Past Questions <audio style="visibility: hidden;" src="sounds/sub.ogg"></audio></p>
                <p id="topic"><img src="{course.courseImage}" style="width: 70px;" alt=""></p>
                <div class="row ">
                    <div class="col-6 col-sm-3 mbox">
                        <span>Questions</span>
                        <p>
                            <img src="svg/question_mark.svg" alt="" srcset="" />
                            <span>20</span>
                        </p>
                    </div>
                    <div class="col-6 col-sm-3 mbox">
                        <span>Seconds</span>
                        <p>
                            <img src="svg/clock.svg" alt="" srcset="" />
                            <span>20</span>
                        </p>
                    </div>
                </div>
                <h3>Instructions</h3>

                <p class="score row"><img src="svg/medal.svg" class="col-3" alt="" srcset="" /> <span class="col">Each Correct Question gives you 1 pt</span></p>
                <p class="score row"><img src="svg/tap.svg" class="col-3" alt="" srcset="" /> <span class="col">Tap the correct option to select a Question</span></p>
                <p class="score row"><img src="svg/cancel.svg" class="col-3" alt="" srcset="" /> <span class="col">Negative markings are applied on all failed Questions.</span></p>
                <p class="score row"><img src="svg/clock.svg" class="col-3" alt="" srcset="" /> <span class="col">Each question must be answered in the given duration.</span></p>


                <div style="margin-top: 45px;">   
                
                    <button on:click="{next}" class="uk-button mainBtn uk-button-default uk-button-large">Continue</button>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .score {
        margin-top: 20px;
        margin-top: 15 px;
        margin-left: 10 px;
        color: #313848;
        opacity: 0.6;
        letter-spacing: 0.7px;
        font-size: 16px;

    }
    .score > img {
        display: inline;
        width: 51px;
        height: 51px;
    }
    .content {
        font-family: "Itim", "roboto";
        height: 100%;
        overflow: auto;
        background-image: url(images/hand.svg), url(images/right.svg),
            url(images/bottom.svg);
        background-repeat: no-repeat, no-repeat, no-repeat;
        background-position: 0 0, 100%, 0 100%;
    }
    h2 {
        font-family: "Itim", "roboto";
        font-size: 20px;
    }
    h3 {
        font-family: "Itim", "roboto";
        font-size: 1.5rem;
    }
    .mbox {
        display: flexbox;
        flex-direction: row;
        margin-bottom: 50px;
    }

    .mbox > span {
        text-transform: uppercase;
        color: black;
        opacity: 0.4;
        letter-spacing: 1px;
        line-height: 115.46%;
        font-weight: 700;
        font-size: 12px;
    }
    .mbox > p > img {
        display: inline !important;
        width: 28px;
        height: 28px;
    }
    .mbox > p {
        font-weight: 1000;
        letter-spacing: 1px;
        font-size: 35px;
    }

    #type {
        font-size: 17px;
        font-weight: 700;
        margin-bottom: 10px;
        font-family: "Muli", "Helvetica Neue", "Roboto", sans-serif;
    }
    #topic {
        font-size: 22px;
        font-weight: 800;
        margin-bottom: 40px;
    }

   .mainBtn {
       background-image: url('images/bg/green2.jpeg');
       background-size: cover;
       color: white;
       font-size: 20px;
       font-weight: 600;
       border-radius: 12px;
       
   }
</style>
