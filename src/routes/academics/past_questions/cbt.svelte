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
import { onMount } from "svelte";

    import DesktopSide from "../../../components/Nav/DesktopSide.svelte";
    import MobileMenu from "../../../components/Nav/MobileMenu.svelte";
    import TopBar from "../../../components/Nav/TopBar.svelte";
import type { Icourse, Ifaculty } from "../../../Model/question";
    export let resource:Ifaculty[];
    let faculty: Ifaculty ={};
    faculty = resource[0];
    let win: any;
    const gotoTopic = (course: Icourse) => {
        var myModal = new win.bootstrap.Modal(document.getElementById('yearmodal'), {
  keyboard: false
        });
        myModal.show();
        //location.href = `academics/past_questions/instruction?id=${course.courseId}&type=${faculty.facultyName}`;
    };

let links =[{name: 'academics'},{name: 'past Questions', url: 'academics/past_questions/cbt'}];
const swithTo =(index: number) =>{
    faculty = resource[index];
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
<div class="modal fade" tabindex="-1" id="yearmodal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Pick a Year</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Submit</button>
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
