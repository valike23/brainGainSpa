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
		const res = await this.fetch(`api/past_questions/faculties`);
		let resource = await res.json();
        resource = resource.faculties;
        console.log('the news here is not well: ',resource);
		return { resource };
	}
</script>

<script lang="ts">
import axios from "axios";

import { onMount } from "svelte";

    import DesktopSide from "../../../components/Nav/DesktopSide.svelte";
    import MobileMenu from "../../../components/Nav/MobileMenu.svelte";
    import TopBar from "../../../components/Nav/TopBar.svelte";
import { handleNotification } from "../../../Model/browserFunctions";
import type { Icourse, Ifaculty } from "../../../Model/question";
    export let resource:Ifaculty[];
    let faculty: Ifaculty ={};
    faculty = resource[0];
    let years = [];
    let win: any;
    let activeCourse: Icourse;
    let activeYear = 0;
    const gotoTopic = async (course: Icourse) => {
        activeCourse = course;
        activeYear = 0;
        // will do some caching of the below request here
     try {
        let data = await axios.put(`api/past_questions/faculties?course=${course.courseId}`);
        if(data){
            years = data.data;

        win.UIkit.modal(document.getElementById('year')).show();
        };
        
    
     } catch (error) {
         handleNotification('something went wrong while retrieving years', window, 'error', 'error');
     }
    };

let links =[{name: 'academics'},{name: 'past Questions', url: 'academics/past_questions/cbt'}];
const swithTo =(index: number) =>{
    faculty = resource[index];
}
const setYear =(year: number) =>{
    activeYear = year;
}
const submit = () =>{
    location.href = `academics/past_questions/instruction?id=${activeCourse.courseId}&type=${faculty.facultyName}&year=${activeYear}`;
}
onMount(()=>{
    win = window;
})
</script>

<svelte:head />

<div class="main">
    <MobileMenu />

    <div class="d-flex">
        <DesktopSide dash="academics" />
        <div class="content">
            <TopBar {links}/>
            <div class="row" style="margin-bottom: 50px;">
                <h2 class="intro-y fs-lg fw-medium me-auto mt-2">
                    Past Questions (Exam)
                </h2>
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
            <div class="row mt-3">
                <div class="col-12 text-center">
                    {#each resource as item, i}
                    <button on:click="{()=>{swithTo(i)}}" type="button" class="btn btn-secondary mr-2 mb-2">
                        {item.facultyName} <span class="badge bg-secondary ml-1">{item.courses.length + 1}</span>
                      </button>
                    {/each}
                </div>
               
            </div>
            <div class="row">
              {#each faculty.courses as course}
              <div class="col-6 col-sm-3 m2">
                <div
                    on:click={()=>{gotoTopic(course)}}
                    class="uk-card uk-card-default uk-card-body "
                >
                    <div class="svgbody">
                        <img src="{course.courseImage}" alt="" srcset="" />

                        <p>{course.courseName}</p>
                    </div>
                </div>
            </div>
              {/each}
              
            </div>
        </div>
    </div>
</div>
<div id="year" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Pick a Year</h2>
        <div class="row">
            <div class="col-12">
                {#each years as year}
                <button class:active-year={year == activeYear} on:click="{()=>{setYear(year)}}" class="uk-button uk-button-default uk-button-small mr-2 mb-2">{year}</button>
                {/each}
            </div>
        </div>
        <div class="row mt-5">
            <div class="col text-right">

            <button on:click="{submit}" disabled={activeYear == 0} class="uk-button uk-button-primary ">Submit</button>
            <button class="uk-button uk-button-danger uk-modal-close ">Close</button>
                
            </div>
        </div>
    </div>
</div>
<style>
    .active-year {
        border: 1px solid green;
    }
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
        inline-size: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .svgbody > p {
        font-family: "Itim", "roboto";
        font-size: 18px;
        margin-top: 10px;
        padding-top: 10px;
        font-weight: 500;
    }

    .m2 {
        margin-bottom: 7px;
    }
</style>
