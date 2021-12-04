<script lang="ts">
    export let dash;
</script>
<style>
    .side-nav {
        font-family: "Muli","Helvetica Neue","Roboto",sans-serif;
        font-size: 16px
    }
</style>
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
                    <i data-feather="credit-card" />
                </div>
                <div class="side-menu__title">Dashboard</div>
            </a>
        </li>
        <li>
            <a
                class:side-menu--active={dash == "games"}
                href="side-menu-light-point-of-sale.html"
                class="side-menu"
            >
                <div class="side-menu__icon">
                    <i data-feather="credit-card" />
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
                        <i data-feather="chevron-down" />
                    </div>
                </div>
            </a>
            <ul class="">
                <li>
                    <a href="app/academics/skill_pratice" class="side-menu">
                        <div class="side-menu__icon">
                            <i data-feather="activity" />
                        </div>
                        <div class="side-menu__title">Skill Pratice</div>
                    </a>
                </li>
                <li>
                    <a
                        href="app/academics/past_questions"
                        class="side-menu"
                    >
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
                        <i data-feather="chevron-down" />
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

