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
		const res = await this.fetch(`api/accounts/grade`);
		const grades = await res.json();
        console.log(grades);
		return { grades };
	}
</script>

<script lang="ts">
import axios from "axios";

  import { onMount } from "svelte";

  import DesktopSide from "../../components/Nav/DesktopSide.svelte";
  import MobileMenu from "../../components/Nav/MobileMenu.svelte";
  import TopBar from "../../components/Nav/TopBar.svelte";
  import type { Igrade, Istudent, Iuser } from "../../Model/accounts";
  let type = "";
  export let grades:Igrade[];
  let lockUserInfo = true;
  let lockAcademicInfo = true;
  let user: Iuser = {};
  let student:Istudent = {};
  const updateGrade = async ()=>{
    if(student.grade_id ){
        if(confirm('Are you sure you want to update the grade, be sure you know what you are doing')){
           let res = await (await axios.patch(`api/accounts/grade?id=${user.id}&grade_id=${student.grade_id}`)).data;
           console.log(res);
        }
    }
  }

  onMount(async () => {
    user = JSON.parse(sessionStorage.getItem("user"));
    type = user.type;
    console.log(user);
    if(type == 'student'){
        try {
        
        student = await (await axios.put(`api/accounts/grade?id=${user.id}`)).data[0];
        console.log(student);
       } catch (error) {
           console.log(error);
       }
    }
    else{

    }
  });

  let links = [
    { name: "accoounts" },
    { name: "settings", url: "accounts/settings" },
  ];

  const toggle  = (input: string)=>{
    if(input == 'userinfo'){
        lockUserInfo = !lockUserInfo;
    }
    if(input == 'academic'){
        lockAcademicInfo = !lockAcademicInfo;
    }
  }
</script>
<svelte:head>
    <title>Braingainspa:: Settings Page</title>
</svelte:head>

<div class="main">
  <MobileMenu />
  <div class="d-flex">
    <DesktopSide dash="accounts" />
    <div class="content">
      <!-- BEGIN: Top Bar -->
      <TopBar {links} />
      <!-- END: Top Bar -->
      <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">Settings</h2>
      </div>
      <!-- BEGIN: Profile Info -->
      <div class="intro-y box px-5 pt-5 mt-5">
        <div
          class="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5"
        >
          <div
            class="flex flex-1 px-5 items-center justify-center lg:justify-start"
          >
            <div
              class="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative"
            >
              <img
                alt="Rubick Tailwind HTML Admin Template"
                class="rounded-full"
                src="https://rubick.left4code.com/dist/images/profile-3.jpg"
              />
              <div
                class="absolute mb-1 mr-1 flex items-center justify-center bottom-0 right-0 bg-primary rounded-full p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-camera w-4 h-4 text-white"
                  ><path
                    d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                  /><circle cx="12" cy="13" r="4" /></svg
                >
              </div>
            </div>
            <div class="ml-5">
              <div
                class="w-54 sm:w-40 truncate sm:whitespace-normal font-medium text-lg"
              >
                {user.first_name + " " + user.last_name}
              </div>
              <div class="text-slate-500">{user.type}</div>
            </div>
          </div>
          <div
            class="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0"
          >
            <div class="font-medium text-center lg:text-left lg:mt-3">
              Contact Details
            </div>
            <div
              class="flex flex-col justify-center items-center lg:items-start mt-4"
            >
              <div class="truncate sm:whitespace-normal flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-mail w-4 h-4 mr-2"
                  ><path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  /><polyline points="22,6 12,13 2,6" /></svg
                > sylvesterstallone@left4code.com
              </div>
              <div class="truncate sm:whitespace-normal flex items-center mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-instagram w-4 h-4 mr-2"
                  ><rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                  /><path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                  /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg
                > Instagram Sylvester Stallone
              </div>
              <div class="truncate sm:whitespace-normal flex items-center mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-twitter w-4 h-4 mr-2"
                  ><path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  /></svg
                > Twitter Sylvester Stallone
              </div>
            </div>
          </div>
        </div>
        <ul
          class="nav nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center"
          role="tablist"
        >
          <li id="dashboard-tab" class="nav-item" role="presentation">
            <a
              href="javascript:;"
              class="nav-link py-4"
              data-tw-target="#dashboard"
              aria-controls="dashboard"
              aria-selected="false"
              role="tab"
            >
              User Details
            </a>
          </li>
          <li id="account-and-profile-tab" class="nav-item" role="presentation">
            <a
              href="javascript:;"
              class="nav-link py-4"
              data-tw-target="#account-and-profile"
              aria-controls="account-and-profile"
              aria-selected="false"
              role="tab"
            >
              Academic Settings
            </a>
          </li>
          <li id="activities-tab" class="nav-item" role="presentation">
            <a
              href="javascript:;"
              class="nav-link py-4"
              data-tw-target="#activities"
              aria-controls="activities"
              aria-selected="false"
              role="tab"
            >
              Activities
            </a>
          </li>
          <li id="tasks-tab" class="nav-item" role="presentation">
            <a
              href="javascript:;"
              class="nav-link py-4 active"
              data-tw-target="#tasks"
              aria-controls="tasks"
              aria-selected="true"
              role="tab"
            >
              Tasks
            </a>
          </li>
        </ul>
      </div>
      <!-- END: Profile Info -->
      <div class="intro-y tab-content mt-5">
        <div
          id="account-and-profile"
          class="tab-pane "
          role="tabpanel"
          aria-labelledby="account-and-profile-tab"
        >
         
        <div class="intro-y col-span-12 lg:col-span-12">
            <!-- BEGIN: Input -->
            <div class="intro-y box px-5 pt-5 mt-5">
                <div class="row pt-2">
                    <h2 class="font-medium text-base col-6 ">Academic Settings</h2>
                    <div class=" col-6 ">
                        {#if lockAcademicInfo}
                        <span style="color: green" on:click="{()=>{toggle('academic')}}" class="fa fa-unlock fa-2x float-end"></span>
                        {:else}
                        <span style="clor: green" on:click="{()=>{toggle('academic')}}" class="fa fa-2x fa-lock float-end"></span>
                        {/if}
                    </div>
                </div>
                <div id="input" class="p-5">
                    <div class="preview" style="display: block;">
                    
                        <div class="row">
                            <div class="mt-3 col-12 col-6">
                                <label for="grade" class="form-label">Grade</label>
                                <select on:blur={updateGrade} bind:value="{student.grade_id}" class="form-control" name="" id="grade" disabled="{lockAcademicInfo}">
                                  {#if !student.grade_id}
                                  <option selected value="0">Nothing selected yet</option>
                                  {#each grades as grade}
                                  <option value="{grade.id}">{grade.grade_name}</option>
                                  {/each}
                                  {:else}
                                  {#each grades as grade}
                                  <option selected={grade.id == student.grade_id} value="{grade.id}">{grade.grade_name}</option>
                                  {/each}
                                  {/if}
                                  
                                </select>
                                   </div>
                          
                        </div>
                       
                    </div>
                  
                </div>
            </div>
          
          
         
          
        </div>
        </div>

        <div
        id="dashboard"
        class="tab-pane "
        role="tabpanel"
        aria-labelledby="dashboard-tab"
      >
       
      <div class="intro-y col-span-12 lg:col-span-12">
          <!-- BEGIN: Input -->
          <div class="intro-y box px-5 pt-5 mt-5">
              <div class="row pt-2">
                  <h2 class="font-medium text-base col-6 ">User Basic Info</h2>
                  <div class=" col-6 ">
                      {#if lockUserInfo}
                      <span style="color: green" on:click="{()=>{toggle('userinfo')}}" class="fa  fa-unlock fa-2x float-end"></span>
                      {:else}
                      <span style="clor: green" on:click="{()=>{toggle('userinfo')}}" class="fa fa-2x fa-lock float-end"></span>
                      {/if}
                  </div>
              </div>
              <div id="input" class="p-5">
                  <div class="preview" style="display: block;">
                  
                      <div class="row">
                          <div class="mt-3 col-12 col-6">
                              <label for="firstname" class="form-label">First Name</label>
                              <input id="firstname" disabled="{lockUserInfo}" type="text" bind:value="{user.first_name}" class="form-control" placeholder="enter first name">
                          </div>
                          <div class="mt-3 col-12 col-6">
                              <label for="lastname" class="form-label">Last Name</label>
                              <input id="lastname" disabled="{lockUserInfo}" type="text" bind:value="{user.last_name}" class="form-control" placeholder="enter last name">
                          </div>
                          <div class="mt-3 col-12 col-6">
                              <label for="middlename" class="form-label">Middle Name</label>
                              <input id="middlename" disabled="{lockUserInfo}" type="text" bind:value="{user.middle_name}" class="form-control" placeholder="enter middle name">
                          </div>
                         
                          <div class="mt-3 col-12 col-6">
                              <label for="username" class="form-label">User Name</label>
                              <input id="username" disabled="{lockUserInfo}" type="text" bind:value="{user.user_name}" class="form-control" placeholder="enter user name">
                          </div>
                      </div>
                     
                     
                  </div>
                
              </div>
          </div>
        
        
       
        
      </div>
      </div>
        
        <div
          id="tasks"
          class="tab-pane "
          role="tabpanel"
          aria-labelledby="task-tab"
          style="width: 942px;"
        >
          <div class="grid grid-cols-12 gap-6">
            <!-- BEGIN: Top Categories -->
            <div class="intro-y box col-span-12 lg:col-span-6">
              <div
                class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400"
              >
                <h2 class="font-medium text-base mr-auto">Top tax</h2>
                <div class="dropdown ml-auto">
                  <a
                    class="dropdown-toggle w-5 h-5 block"
                    href="javascript:;"
                    aria-expanded="false"
                    data-tw-toggle="dropdown"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-more-horizontal w-5 h-5 text-slate-500"
                      ><circle cx="12" cy="12" r="1" /><circle
                        cx="19"
                        cy="12"
                        r="1"
                      /><circle cx="5" cy="12" r="1" /></svg
                    >
                  </a>
                  <div class="dropdown-menu w-40">
                    <ul class="dropdown-content">
                      <li>
                        <a href="" class="dropdown-item">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-plus w-4 h-4 mr-2"
                            ><line x1="12" y1="5" x2="12" y2="19" /><line
                              x1="5"
                              y1="12"
                              x2="19"
                              y2="12"
                            /></svg
                          > Add Category
                        </a>
                      </li>
                      <li>
                        <a href="" class="dropdown-item">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-settings w-4 h-4 mr-2"
                            ><circle cx="12" cy="12" r="3" /><path
                              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                            /></svg
                          > Settings
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="p-5">
                <div class="flex flex-col sm:flex-row">
                  <div class="mr-auto">
                    <a href="" class="font-medium">Wordpress Template</a>
                    <div class="text-slate-500 mt-1">HTML, PHP, Mysql</div>
                  </div>
                  <div class="flex">
                    <div class="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                      <div class="chartjs-size-monitor">
                        <div class="chartjs-size-monitor-expand">
                          <div class="" ></div>
                        </div>
                        <div class="chartjs-size-monitor-shrink">
                          <div class="" ></div>
                        </div>
                      </div>
                      <canvas
                        class="simple-line-chart-1 chartjs-render-monitor"
                        data-random="true"
                        height="42"
                        width="256"
                        style="display: block; height: 21px; width: 128px;"
                      ></canvas>
                    </div>
                    <div class="text-center">
                      <div class="font-medium">6.5k</div>
                      <div
                        class="bg-success/20 text-success rounded px-2 mt-1.5"
                      >
                        +150
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row mt-5">
                  <div class="mr-auto">
                    <a href="" class="font-medium">Bootstrap HTML Template</a>
                    <div class="text-slate-500 mt-1">HTML, PHP, Mysql</div>
                  </div>
                  <div class="flex">
                    <div class="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                      <div class="chartjs-size-monitor">
                        <div class="chartjs-size-monitor-expand">
                          <div class="" ></div>
                        </div>
                        <div class="chartjs-size-monitor-shrink">
                          <div class="" ></div>
                        </div>
                      </div>
                      <canvas
                        class="simple-line-chart-1 chartjs-render-monitor"
                        data-random="true"
                        height="42"
                        width="256"
                        style="display: block; height: 21px; width: 128px;"
                      ></canvas>
                    </div>
                    <div class="text-center">
                      <div class="font-medium">2.5k</div>
                      <div
                        class="bg-pending/10 text-pending rounded px-2 mt-1.5"
                      >
                        +150
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row mt-5">
                  <div class="mr-auto">
                    <a href="" class="font-medium">Tailwind HTML Template</a>
                    <div class="text-slate-500 mt-1">HTML, PHP, Mysql</div>
                  </div>
                  <div class="flex">
                    <div class="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                      <div class="chartjs-size-monitor">
                        <div class="chartjs-size-monitor-expand">
                          <div class="" ></div>
                        </div>
                        <div class="chartjs-size-monitor-shrink">
                          <div class="" >
                        </div>
                      </div>
                      <canvas
                        class="simple-line-chart-1 chartjs-render-monitor"
                        data-random="true"
                        height="42"
                        width="256"
                        style="display: block; height: 21px; width: 128px;"
                     ></canvas>
                    </div>
                    <div class="text-center">
                      <div class="font-medium">3.4k</div>
                      <div
                        class="bg-primary/10 text-primary rounded px-2 mt-1.5"
                      >
                        +150
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- END: Top Categories -->
            <!-- BEGIN: Work In Progress -->
            <div class="intro-y box col-span-12 lg:col-span-6">
              <div
                class="flex items-center px-5 py-5 sm:py-0 border-b border-slate-200/60 dark:border-darkmode-400"
              >
                <h2 class="font-medium text-base mr-auto">Work In Progress</h2>
                <div class="dropdown ml-auto sm:hidden">
                  <a
                    class="dropdown-toggle w-5 h-5 block"
                    href="javascript:;"
                    aria-expanded="false"
                    data-tw-toggle="dropdown"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-more-horizontal w-5 h-5 text-slate-500"
                      ><circle cx="12" cy="12" r="1" /><circle
                        cx="19"
                        cy="12"
                        r="1"
                      /><circle cx="5" cy="12" r="1" /></svg
                    >
                  </a>
                  <div class="nav nav-tabs dropdown-menu w-40" role="tablist">
                    <ul class="dropdown-content">
                      <li>
                        <a
                          id="work-in-progress-mobile-new-tab"
                          href="javascript:;"
                          data-tw-toggle="tab"
                          data-tw-target="#work-in-progress-new"
                          class="dropdown-item"
                          role="tab"
                          aria-controls="work-in-progress-new"
                          aria-selected="true">New</a
                        >
                      </li>
                      <li>
                        <a
                          id="work-in-progress-mobile-last-week-tab"
                          href="javascript:;"
                          data-tw-toggle="tab"
                          data-tw-target="#work-in-progress-last-week"
                          class="dropdown-item"
                          role="tab"
                          aria-selected="false">Last Week</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <ul
                  class="nav nav-link-tabs w-auto ml-auto hidden sm:flex"
                  role="tablist"
                >
                  <li
                    id="work-in-progress-new-tab"
                    class="nav-item"
                    role="presentation"
                  >
                    <a
                      href="javascript:;"
                      class="nav-link py-5 active"
                      data-tw-target="#work-in-progress-new"
                      aria-controls="work-in-progress-new"
                      aria-selected="true"
                      role="tab"
                    >
                      New
                    </a>
                  </li>
                  <li
                    id="work-in-progress-last-week-tab"
                    class="nav-item"
                    role="presentation"
                  >
                    <a
                      href="javascript:;"
                      class="nav-link py-5"
                      data-tw-target="#work-in-progress-last-week"
                      aria-controls="work-in-progress-last-week"
                      aria-selected="false"
                      role="tab"
                    >
                      Last Week
                    </a>
                  </li>
                </ul>
              </div>
              <div class="p-5">
                <div class="tab-content">
                  <div
                    id="work-in-progress-new"
                    class="tab-pane active"
                    role="tabpanel"
                    aria-labelledby="work-in-progress-new-tab"
                  >
                    <div>
                      <div class="flex">
                        <div class="mr-auto">Pending Tasks</div>
                        <div>20%</div>
                      </div>
                      <div class="progress h-1 mt-2">
                        <div
                          class="progress-bar w-1/2 bg-primary"
                          role="progressbar"
                          aria-valuenow=0
                          aria-valuemin=0
                          aria-valuemax=100
                        > </div>
                      </div>
                    </div>
                    <div class="mt-5">
                      <div class="flex">
                        <div class="mr-auto">Completed Tasks</div>
                        <div>2 / 20</div>
                      </div>
                      <div class="progress h-1 mt-2">
                        <div
                          class="progress-bar w-1/4 bg-primary"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div class="mt-5">
                      <div class="flex">
                        <div class="mr-auto">Tasks In Progress</div>
                        <div>42</div>
                      </div>
                      <div class="progress h-1 mt-2">
                        <div
                          class="progress-bar w-3/4 bg-primary"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <a href="" class="btn btn-secondary block w-40 mx-auto mt-5"
                      >View More Details</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- END: Work In Progress -->
            <!-- BEGIN: Daily Sales -->

            <!-- END: Daily Sales -->
            <!-- BEGIN: Latest Tasks -->

            <!-- END: Latest Tasks -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


