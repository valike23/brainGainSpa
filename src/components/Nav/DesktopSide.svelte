<script lang="ts">
    export let dash;
</script>

<nav class="side-nav">
    <a href="" class="intro-x d-flex align-items-center ps-5 pt-4">
        <img
            alt="Rubick Tailwind HTML Admin Template"
            class="w-6"
            src="dist/images/logo.svg"
        />
        <span class="d-none d-xl-block text-white fs-lg ms-3">
            BrainGain<span class="fw-medium">spa</span>
        </span>
    </a>
    <div class="side-nav__devider my-6" />
    <ul>
        <li>
            <a
                class:side-menu--active={dash == "dashboard"}
                href="app/dashboard"
                class="side-menu  "
            >
                <div class="side-menu__icon">
                    <svg
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
                            ><path
                                d="M3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                            /><path d="M9 22V12h6v10" /></g
                        ></svg
                    >
                </div>
                <div class="side-menu__title">Dashboard</div>
            </a>
        </li>
        <li>
            <a
                class:side-menu--active={dash == "games"}
                href="/games"
                class="side-menu"
            >
                <div class="side-menu__icon">
                    <svg
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
                            ><rect
                                x="2"
                                y="7"
                                width="20"
                                height="15"
                                rx="2"
                                ry="2"
                            /><path d="M17 2l-5 5l-5-5" /></g
                        ></svg
                    >
                </div>
                <div class="side-menu__title">Educational Games</div>
            </a>
        </li>
        <li>
            <a
                class:side-menu--active={dash == "academics"}
                href="javascript:;.html"
                class="side-menu"
            >
                <div class="side-menu__icon"><i data-feather="box" /></div>
                <div class="side-menu__title">
                    Academics
                    <div class="side-menu__sub-icon">
                        <svg
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
                                ><path d="M6 9l6 6l6-6" /></g
                            ></svg
                        >
                    </div>
                </div>
            </a>
            <ul class="">
                <li>
                    <a href="app/academics/skill_pratice" class="side-menu">
                        <div class="side-menu__icon">
                            <svg
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
                                    ><path
                                        d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                                    /><path
                                        d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                                    /></g
                                ></svg
                            >
                        </div>
                        <div class="side-menu__title">Skill Pratice</div>
                    </a>
                </li>
                <li>
                    <a href="app/academics/past_questions" class="side-menu">
                        <div class="side-menu__icon">
                            <i data-feather="activity" />
                        </div>
                        <div class="side-menu__title">Past Questions</div>
                    </a>
                </li>
                <li>
                    <a
                        href="simple-menu-light-dashboard-overview-1.html"
                        class="side-menu"
                    >
                        <div class="side-menu__icon">
                            <i data-feather="activity" />
                        </div>
                        <div class="side-menu__title">
                            Past Questions [Exams]
                        </div>
                    </a>
                </li>
            </ul>
        </li>

        <li>
            <a
                class:side-menu--active={dash == "accounts"}
                href="javascript:;.html"
                class="side-menu"
            >
                <div class="side-menu__icon"><i data-feather="box" /></div>
                <div class="side-menu__title">
                    Accounts
                    <div class="side-menu__sub-icon">
                        <svg
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
                                ><path d="M6 9l6 6l6-6" /></g
                            ></svg
                        >
                    </div>
                </div>
            </a>
            <ul class="">
                <li>
                    <a href="index.html" class="side-menu">
                        <div class="side-menu__icon">
                            <i data-feather="activity" />
                        </div>
                        <div class="side-menu__title">Subscriptions</div>
                    </a>
                </li>
                <li>
                    <a
                        href="simple-menu-light-dashboard-overview-1.html"
                        class="side-menu"
                    >
                        <div class="side-menu__icon">
                            <i data-feather="activity" />
                        </div>
                        <div class="side-menu__title">Income</div>
                    </a>
                </li>
                <li>
                    <a
                        href="simple-menu-light-dashboard-overview-1.html"
                        class="side-menu"
                    >
                        <div class="side-menu__icon">
                            <i data-feather="activity" />
                        </div>
                        <div class="side-menu__title">Withdrawl</div>
                    </a>
                </li>
                <li>
                    <a
                        href="simple-menu-light-dashboard-overview-1.html"
                        class="side-menu"
                    >
                        <div class="side-menu__icon">
                            <i data-feather="activity" />
                        </div>
                        <div class="side-menu__title">Payments</div>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</nav>

<style>
    .side-nav {
        font-family: "Muli", "Helvetica Neue", "Roboto", sans-serif;
        font-size: 16px;
    }
</style>
