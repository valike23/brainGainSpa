<script lang="ts">
import { onMount } from "svelte";

    import DesktopSide from "../../components/Nav/DesktopSide.svelte";
    import MobileMenu from "../../components/Nav/MobileMenu.svelte";
    import TopBar from "../../components/Nav/TopBar.svelte";
import type { Icourse } from "../../Model/question";

    let links =[{name: 'academics'},{name: 'skill pratice', url: 'academics/skill_pratice'},{name: 'topic', url: 'academics/topic'}];
    const gotoTopic = (topic)=>{
        sessionStorage.setItem('activeTopic', JSON.stringify(topic));
        location.href="academics/instruction"
    }
    let course : Icourse ={};
    course.topics = [];
    onMount(()=>{
        if(!sessionStorage.getItem('activeCourse')) location.href="academics/skill_pratice";
        course = JSON.parse(sessionStorage.getItem('activeCourse'));
        console.log(course);
    })
</script>

<div class="main">
    <MobileMenu />

    <div class="d-flex">
        <DesktopSide dash="academics" />
        <div class="content">
            <TopBar {links}/>
            <div class="row" style="margin-bottom: 50px;">
                <h2 class="intro-y fs-lg fw-medium me-auto mt-2">Topics</h2>
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
              {#each course.topics as topic}
              <div class="col-6 col-sm-3 m2">
                <div
                    on:click={()=>{gotoTopic(topic)}}
                    class="uk-card uk-card-default uk-card-body "
                >
                    <div class="svgbody">
                        <img src="{topic.topicImage}" alt="" srcset="" />

                        <p>{topic.topicName}</p>
                    </div>
                </div>
            </div>
              {/each}
               
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
    }
    .svgbody > p {
        font-family: "Itim", "roboto";
        font-size: 18px;
        margin-top: 10px;
        padding-top: 10px;
        font-weight: 500;
        inline-size: 100%;
        white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
    }

    .m2 {
        margin-bottom: 7px;
    }
</style>
