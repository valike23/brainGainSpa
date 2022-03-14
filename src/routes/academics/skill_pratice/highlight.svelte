<script lang="ts">
import { onMount } from "svelte";

import DesktopSide from "../../../components/Nav/DesktopSide.svelte";
import MobileMenu from "../../../components/Nav/MobileMenu.svelte";
import TopBar from "../../../components/Nav/TopBar.svelte";
import type { IquizReport } from "../../../Model/question";
let result: IquizReport ={};
let links =[{name: 'academics'},{name: 'skill pratice', url: 'academics/skill_pratice'},
{name: 'topic', url: 'academics/skill_pratice/highlight'}];
let correctScore = 0;
let incorrectScore = 0;
let percentCorrect =0;

onMount(()=>{
     result = JSON.parse(sessionStorage.getItem('result'));
    console.log(result);
    result.questions.forEach((q)=>{
    if(q.correct){
        correctScore = correctScore + 1;
    }
    else{
        incorrectScore = incorrectScore + 1;
    }
})
percentCorrect = correctScore/result.questions.length * 100;
})

</script>


<div class="main">
    <MobileMenu/>

    <div class="d-flex">
        <DesktopSide dash="academics" />
        <div class="content">
            <TopBar {links}/>
            <div class="row" style="margin-bottom: 50px;">
                <h2 class="intro-y fs-lg fw-medium me-auto mt-2">Test Summary</h2>
            </div>
            <div class="row">
                <div class="col-12 col-sm-6 grade">
                    <h2>Your Scores</h2>
                    <p class="score">{result.score || ''} pts</p>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="row heading">
                        <div class="col-4 text-center"><p>CORRECT</p></div>
                        <div class="col-4 text-center"><p>INCORRECT</p></div>
                        <div class="col-4 text-center"><p>Correct</p></div>
                    </div>
                    <div class="row item">
                        <div class="col-4 text-center"><p><span style="color: green" class="fa fa-check"></span> {correctScore}</p></div>
                        <div class="col-4 text-center"><p><span class="fa fa-times" style="color: red"></span> {incorrectScore}</p></div>
                        <div class="col-4 text-center"><p><span></span> {percentCorrect}%</p></div>
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
    .score{
        font-size: 2rem;
        font-weight: 700;
    }
    .grade{
        background-image: url('images/grade/excellent.png');
        background-size: 70px;
        background-repeat: no-repeat;
        background-position: right;
    }
    .heading{ 
        font-size: x-large;
        font-weight: bolder;
    }
    .item{
        font-size: large;
        font-weight: bold;
    }
</style>