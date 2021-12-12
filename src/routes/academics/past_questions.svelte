<script>
import DesktopSide from "../../components/Nav/DesktopSide.svelte";
import MobileMenu from "../../components/Nav/MobileMenu.svelte";

    
</script>

<svelte:head>
    <link rel="stylesheet" href="dist/css/app.css" />
    <script defer src="dist/js/app.js"></script>
</svelte:head>
<div class="main">
    <MobileMenu/>
    <div class="d-flex">
       <DesktopSide dash="academics" />
        <div class="content">
            <!-- BEGIN: Top Bar -->
            <div class="top-bar">
                <!-- BEGIN: Breadcrumb -->
                <div class="-intro-x breadcrumb me-auto d-none d-sm-flex">
                    <a href="">Application</a>
                    <i data-feather="chevron-right" class="breadcrumb__icon" />
                    <a href="" class="breadcrumb--active">Dashboard</a>
                </div>
                <!-- END: Breadcrumb -->
                <!-- BEGIN: Search -->
                <div class="intro-x position-relative me-3 me-sm-6">
                    <div class="search d-none d-sm-block">
                        <input
                            type="text"
                            class="search__input form-control border-transparent"
                            placeholder="Search..."
                        />
                        <i
                            data-feather="search"
                            class="search__icon dark-text-gray-300"
                        />
                    </div>
                    <a class="notification d-sm-none" href="">
                        <i
                            data-feather="search"
                            class="notification__icon dark-text-gray-300"
                        />
                    </a>
                    <div class="search-result">
                        <div class="search-result__content">
                            <div class="search-result__content__title">
                                Pages
                            </div>
                            <div class="mb-5">
                                <a href="" class="d-flex align-items-center">
                                    <div
                                        class="w-8 h-8 bg-theme-18 text-theme-9 d-flex align-items-center justify-content-center rounded-circle"
                                    >
                                        <i
                                            class="w-4 h-4"
                                            data-feather="inbox"
                                        />
                                    </div>
                                    <div class="ms-3">Mail Settings</div>
                                </a>
                                <a
                                    href=""
                                    class="d-flex align-items-center mt-2"
                                >
                                    <div
                                        class="w-8 h-8 bg-theme-17 text-theme-11 d-flex align-items-center justify-content-center rounded-circle"
                                    >
                                        <i
                                            class="w-4 h-4"
                                            data-feather="users"
                                        />
                                    </div>
                                    <div class="ms-3">Users & Permissions</div>
                                </a>
                                <a
                                    href=""
                                    class="d-flex align-items-center mt-2"
                                >
                                    <div
                                        class="w-8 h-8 bg-theme-14 text-theme-10 d-flex align-items-center justify-content-center rounded-circle"
                                    >
                                        <i
                                            class="w-4 h-4"
                                            data-feather="credit-card"
                                        />
                                    </div>
                                    <div class="ms-3">Transactions Report</div>
                                </a>
                            </div>
                            <div class="search-result__content__title">
                                Users
                            </div>
                            <div class="mb-5">
                                <a
                                    href=""
                                    class="d-flex align-items-center mt-2"
                                >
                                    <div class="w-8 h-8 image-fit">
                                        <img
                                            alt="Rubick Tailwind HTML Admin Template"
                                            class="rounded-circle"
                                            src="dist/images/profile-3.jpg"
                                        />
                                    </div>
                                    <div class="ms-3">Nicolas Cage</div>
                                    <div
                                        class="ms-auto w-48 truncate text-gray-600 fs-xs text-end"
                                    >
                                        nicolascage@left4code.com
                                    </div>
                                </a>
                                <a
                                    href=""
                                    class="d-flex align-items-center mt-2"
                                >
                                    <div class="w-8 h-8 image-fit">
                                        <img
                                            alt="Rubick Tailwind HTML Admin Template"
                                            class="rounded-circle"
                                            src="dist/images/profile-7.jpg"
                                        />
                                    </div>
                                    <div class="ms-3">Tom Cruise</div>
                                    <div
                                        class="ms-auto w-48 truncate text-gray-600 fs-xs text-end"
                                    >
                                        tomcruise@left4code.com
                                    </div>
                                </a>
                                <a
                                    href=""
                                    class="d-flex align-items-center mt-2"
                                >
                                    <div class="w-8 h-8 image-fit">
                                        <img
                                            alt="Rubick Tailwind HTML Admin Template"
                                            class="rounded-circle"
                                            src="dist/images/profile-7.jpg"
                                        />
                                    </div>
                                    <div class="ms-3">Nicolas Cage</div>
                                    <div
                                        class="ms-auto w-48 truncate text-gray-600 fs-xs text-end"
                                    >
                                        nicolascage@left4code.com
                                    </div>
                                </a>
                                <a
                                    href=""
                                    class="d-flex align-items-center mt-2"
                                >
                                    <div class="w-8 h-8 image-fit">
                                        <img
                                            alt="Rubick Tailwind HTML Admin Template"
                                            class="rounded-circle"
                                            src="dist/images/profile-6.jpg"
                                        />
                                    </div>
                                    <div class="ms-3">Angelina Jolie</div>
                                    <div
                                        class="ms-auto w-48 truncate text-gray-600 fs-xs text-end"
                                    >
                                        angelinajolie@left4code.com
                                    </div>
                                </a>
                            </div>
                            <div class="search-result__content__title">
                                Products
                            </div>
                            <a href="" class="d-flex align-items-center mt-2">
                                <div class="w-8 h-8 image-fit">
                                    <img
                                        alt="Rubick Tailwind HTML Admin Template"
                                        class="rounded-circle"
                                        src="dist/images/preview-3.jpg"
                                    />
                                </div>
                                <div class="ms-3">Nikon Z6</div>
                                <div
                                    class="ms-auto w-48 truncate text-gray-600 fs-xs text-end"
                                >
                                    Photography
                                </div>
                            </a>
                            <a href="" class="d-flex align-items-center mt-2">
                                <div class="w-8 h-8 image-fit">
                                    <img
                                        alt="Rubick Tailwind HTML Admin Template"
                                        class="rounded-circle"
                                        src="dist/images/preview-10.jpg"
                                    />
                                </div>
                                <div class="ms-3">Sony Master Series A9G</div>
                                <div
                                    class="ms-auto w-48 truncate text-gray-600 fs-xs text-end"
                                >
                                    Electronic
                                </div>
                            </a>
                            <a href="" class="d-flex align-items-center mt-2">
                                <div class="w-8 h-8 image-fit">
                                    <img
                                        alt="Rubick Tailwind HTML Admin Template"
                                        class="rounded-circle"
                                        src="dist/images/preview-11.jpg"
                                    />
                                </div>
                                <div class="ms-3">Nike Tanjun</div>
                                <div
                                    class="ms-auto w-48 truncate text-gray-600 fs-xs text-end"
                                >
                                    Sport &amp; Outdoor
                                </div>
                            </a>
                            <a href="" class="d-flex align-items-center mt-2">
                                <div class="w-8 h-8 image-fit">
                                    <img
                                        alt="Rubick Tailwind HTML Admin Template"
                                        class="rounded-circle"
                                        src="dist/images/preview-10.jpg"
                                    />
                                </div>
                                <div class="ms-3">Dell XPS 13</div>
                                <div
                                    class="ms-auto w-48 truncate text-gray-600 fs-xs text-end"
                                >
                                    PC &amp; Laptop
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- END: Search -->
                <!-- BEGIN: Notifications -->
                <div class="intro-x dropdown me-auto me-sm-6">
                    <div
                        class="dropdown-toggle notification notification--bullet cursor-pointer"
                        role="button"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                    >
                        <i
                            data-feather="bell"
                            class="notification__icon dark-text-gray-300"
                        />
                    </div>
                    <div class="notification-content pt-2 dropdown-menu">
                        <div class="notification-content__box dropdown-content">
                            <div
                                class="notification-content__title dark-text-gray-300"
                            >
                                Notifications
                            </div>
                            <div
                                class="cursor-pointer position-relative d-flex align-items-center "
                            >
                                <div class="w-12 h-12 flex-none image-fit me-1">
                                    <img
                                        alt="Rubick Bootstrap HTML Admin Template"
                                        class="rounded-pill"
                                        src="dist/images/profile-3.jpg"
                                    />
                                    <div
                                        class="w-3 h-3 bg-theme-9 position-absolute end-0 bottom-0 rounded-pill border-2 border-white dark-border-dark-3"
                                    />
                                </div>
                                <div class="ms-2 overflow-hidden">
                                    <div class="d-flex align-items-center">
                                        <a
                                            href="javascript:;"
                                            class="fw-medium truncate me-5 dark-text-gray-300"
                                            >Nicolas Cage</a
                                        >
                                        <div
                                            class="fs-xs text-gray-500 ms-auto text-nowrap"
                                        >
                                            06:05 AM
                                        </div>
                                    </div>
                                    <div
                                        class="w-full truncate text-gray-600 mt-0.5"
                                    >
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry&#039;s
                                        standard dummy text ever since the 1500
                                    </div>
                                </div>
                            </div>
                            <div
                                class="cursor-pointer position-relative d-flex align-items-center mt-5"
                            >
                                <div class="w-12 h-12 flex-none image-fit me-1">
                                    <img
                                        alt="Rubick Bootstrap HTML Admin Template"
                                        class="rounded-pill"
                                        src="dist/images/profile-7.jpg"
                                    />
                                    <div
                                        class="w-3 h-3 bg-theme-9 position-absolute end-0 bottom-0 rounded-pill border-2 border-white dark-border-dark-3"
                                    />
                                </div>
                                <div class="ms-2 overflow-hidden">
                                    <div class="d-flex align-items-center">
                                        <a
                                            href="javascript:;"
                                            class="fw-medium truncate me-5 dark-text-gray-300"
                                            >Tom Cruise</a
                                        >
                                        <div
                                            class="fs-xs text-gray-500 ms-auto text-nowrap"
                                        >
                                            01:10 PM
                                        </div>
                                    </div>
                                    <div
                                        class="w-full truncate text-gray-600 mt-0.5"
                                    >
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry&#039;s
                                        standard dummy text ever since the 1500
                                    </div>
                                </div>
                            </div>
                            <div
                                class="cursor-pointer position-relative d-flex align-items-center mt-5"
                            >
                                <div class="w-12 h-12 flex-none image-fit me-1">
                                    <img
                                        alt="Rubick Bootstrap HTML Admin Template"
                                        class="rounded-pill"
                                        src="dist/images/profile-7.jpg"
                                    />
                                    <div
                                        class="w-3 h-3 bg-theme-9 position-absolute end-0 bottom-0 rounded-pill border-2 border-white dark-border-dark-3"
                                    />
                                </div>
                                <div class="ms-2 overflow-hidden">
                                    <div class="d-flex align-items-center">
                                        <a
                                            href="javascript:;"
                                            class="fw-medium truncate me-5 dark-text-gray-300"
                                            >Nicolas Cage</a
                                        >
                                        <div
                                            class="fs-xs text-gray-500 ms-auto text-nowrap"
                                        >
                                            01:10 PM
                                        </div>
                                    </div>
                                    <div
                                        class="w-full truncate text-gray-600 mt-0.5"
                                    >
                                        Contrary to popular belief, Lorem Ipsum
                                        is not simply random text. It has roots
                                        in a piece of classical Latin literature
                                        from 45 BC, making it over 20
                                    </div>
                                </div>
                            </div>
                            <div
                                class="cursor-pointer position-relative d-flex align-items-center mt-5"
                            >
                                <div class="w-12 h-12 flex-none image-fit me-1">
                                    <img
                                        alt="Rubick Bootstrap HTML Admin Template"
                                        class="rounded-pill"
                                        src="dist/images/profile-6.jpg"
                                    />
                                    <div
                                        class="w-3 h-3 bg-theme-9 position-absolute end-0 bottom-0 rounded-pill border-2 border-white dark-border-dark-3"
                                    />
                                </div>
                                <div class="ms-2 overflow-hidden">
                                    <div class="d-flex align-items-center">
                                        <a
                                            href="javascript:;"
                                            class="fw-medium truncate me-5 dark-text-gray-300"
                                            >Angelina Jolie</a
                                        >
                                        <div
                                            class="fs-xs text-gray-500 ms-auto text-nowrap"
                                        >
                                            01:10 PM
                                        </div>
                                    </div>
                                    <div
                                        class="w-full truncate text-gray-600 mt-0.5"
                                    >
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry&#039;s
                                        standard dummy text ever since the 1500
                                    </div>
                                </div>
                            </div>
                            <div
                                class="cursor-pointer position-relative d-flex align-items-center mt-5"
                            >
                                <div class="w-12 h-12 flex-none image-fit me-1">
                                    <img
                                        alt="Rubick Bootstrap HTML Admin Template"
                                        class="rounded-pill"
                                        src="dist/images/profile-7.jpg"
                                    />
                                    <div
                                        class="w-3 h-3 bg-theme-9 position-absolute end-0 bottom-0 rounded-pill border-2 border-white dark-border-dark-3"
                                    />
                                </div>
                                <div class="ms-2 overflow-hidden">
                                    <div class="d-flex align-items-center">
                                        <a
                                            href="javascript:;"
                                            class="fw-medium truncate me-5 dark-text-gray-300"
                                            >Tom Cruise</a
                                        >
                                        <div
                                            class="fs-xs text-gray-500 ms-auto text-nowrap"
                                        >
                                            03:20 PM
                                        </div>
                                    </div>
                                    <div
                                        class="w-full truncate text-gray-600 mt-0.5"
                                    >
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry&#039;s
                                        standard dummy text ever since the 1500
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END: Notifications -->
                <!-- BEGIN: Account Menu -->
                <div class="intro-x dropdown w-8 h-8">
                    <div
                        class="dropdown-toggle w-8 h-8 rounded-pill overflow-hidden shadow-lg image-fit zoom-in"
                        role="button"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                    >
                        <img
                            alt="Rubick Tailwind HTML Admin Template"
                            src="dist/images/profile-9.jpg"
                        />
                    </div>
                    <div class="dropdown-menu w-56">
                        <ul
                            class="dropdown-content bg-theme-26 dark-bg-dark-6 text-white"
                        >
                            <li class="p-2">
                                <div class="fw-medium text-white">
                                    Nicolas Cage
                                </div>
                                <div
                                    class="fs-xs text-theme-28 mt-0.5 dark-text-gray-600"
                                >
                                    DevOps Engineer
                                </div>
                            </li>
                            <li>
                                <hr
                                    class="dropdown-divider border-theme-27 dark-border-dark-3"
                                />
                            </li>
                            <li>
                                <a
                                    href=""
                                    class="dropdown-item text-white bg-theme-1-hover dark-bg-dark-3-hover"
                                >
                                    <i
                                        data-feather="user"
                                        class="w-4 h-4 me-2"
                                    /> Profile
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    class="dropdown-item text-white bg-theme-1-hover dark-bg-dark-3-hover"
                                >
                                    <i
                                        data-feather="edit"
                                        class="w-4 h-4 me-2"
                                    /> Add Account
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    class="dropdown-item text-white bg-theme-1-hover dark-bg-dark-3-hover"
                                >
                                    <i
                                        data-feather="lock"
                                        class="w-4 h-4 me-2"
                                    /> Reset Password
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    class="dropdown-item text-white bg-theme-1-hover dark-bg-dark-3-hover"
                                >
                                    <i
                                        data-feather="help-circle"
                                        class="w-4 h-4 me-2"
                                    /> Help
                                </a>
                            </li>
                            <li>
                                <hr
                                    class="dropdown-divider border-theme-27 dark-border-dark-3"
                                />
                            </li>
                            <li>
                                <a
                                    href=""
                                    class="dropdown-item text-white bg-theme-1-hover dark-bg-dark-3-hover"
                                >
                                    <i
                                        data-feather="toggle-right"
                                        class="w-4 h-4 me-2"
                                    /> Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- END: Account Menu -->
            </div>
            <!-- END: Top Bar -->
            <div class="grid columns-12 gap-6 mt-8">
                <div class="g-col-12 g-col-lg-3 g-col-xxl-2">
                    <h2 class="intro-y fs-lg fw-medium me-auto mt-2">Inbox</h2>
                    <!-- BEGIN: Inbox Menu -->
                    <div class="intro-y box bg-theme-1 p-5 mt-6">
                        <button
                            type="button"
                            class="btn text-gray-700 dark-text-gray-300 w-full bg-white dark-bg-theme-1 mt-1"
                        >
                            <i class="w-4 h-4 me-2" data-feather="edit-3" /> Compose
                        </button>
                        <div
                            class="border-top border-theme-3 dark-border-dark-5 mt-6 pt-6 text-white"
                        >
                            <a
                                href=""
                                class="d-flex align-items-center px-3 py-2 rounded-2 bg-theme-20 dark-bg-dark-1 fw-medium"
                            >
                                <i class="w-4 h-4 me-2" data-feather="mail" /> Inbox
                            </a>
                            <a
                                href=""
                                class="d-flex align-items-center px-3 py-2 mt-2 rounded-md"
                            >
                                <i class="w-4 h-4 me-2" data-feather="star" /> Marked
                            </a>
                            <a
                                href=""
                                class="d-flex align-items-center px-3 py-2 mt-2 rounded-md"
                            >
                                <i class="w-4 h-4 me-2" data-feather="inbox" /> Draft
                            </a>
                            <a
                                href=""
                                class="d-flex align-items-center px-3 py-2 mt-2 rounded-md"
                            >
                                <i class="w-4 h-4 me-2" data-feather="send" /> Sent
                            </a>
                            <a
                                href=""
                                class="d-flex align-items-center px-3 py-2 mt-2 rounded-md"
                            >
                                <i class="w-4 h-4 me-2" data-feather="trash" /> Trash
                            </a>
                        </div>
                        <div
                            class="border-top border-theme-3 dark-border-dark-5 mt-4 pt-4 text-white"
                        >
                            <a
                                href=""
                                class="d-flex align-items-center px-3 py-2 truncate"
                            >
                                <div
                                    class="w-2 h-2 bg-theme-11 rounded-circle me-3"
                                />
                                Custom Work
                            </a>
                            <a
                                href=""
                                class="d-flex align-items-center px-3 py-2 mt-2 rounded-2 truncate"
                            >
                                <div
                                    class="w-2 h-2 bg-theme-9 rounded-circle me-3"
                                />
                                Important Meetings
                            </a>
                            <a
                                href=""
                                class="d-flex align-items-center px-3 py-2 mt-2 rounded-2 truncate"
                            >
                                <div
                                    class="w-2 h-2 bg-theme-12 rounded-circle me-3"
                                />
                                Work
                            </a>
                            <a
                                href=""
                                class="d-flex align-items-center px-3 py-2 mt-2 rounded-2 truncate"
                            >
                                <div
                                    class="w-2 h-2 bg-theme-11 rounded-circle me-3"
                                />
                                Design
                            </a>
                            <a
                                href=""
                                class="d-flex align-items-center px-3 py-2 mt-2 rounded-2 truncate"
                            >
                                <div
                                    class="w-2 h-2 bg-theme-6 rounded-circle me-3"
                                />
                                Next Week
                            </a>
                            <a
                                href=""
                                class="d-flex align-items-center px-3 py-2 mt-2 rounded-2 truncate"
                            >
                                <i class="w-4 h-4 me-2" data-feather="plus" /> Add
                                New Label
                            </a>
                        </div>
                    </div>
                    <!-- END: Inbox Menu -->
                </div>
                <div class="g-col-12 g-col-lg-9 g-col-xxl-10">
                    <!-- BEGIN: Inbox Filter -->
                    <div
                        class="intro-y d-flex flex-column-reverse flex-sm-row align-items-center"
                    >
                        <div
                            class="w-full w-sm-auto position-relative me-auto mt-3 mt-sm-0"
                        >
                            <i
                                class="w-4 h-4 position-absolute my-auto top-0 bottom-0 ms-3 start-0 z-10 text-gray-700 dark-text-gray-300"
                                data-feather="search"
                            />
                            <input
                                type="text"
                                class="form-control w-full w-sm-64 box px-10 text-gray-700 border-white dark-border-dark-3 dark-text-gray-300 placeholder-theme-13"
                                placeholder="Search mail"
                            />
                            <div
                                class="inbox-filter dropdown position-absolute top-0 bottom-0 me-3 end-0 d-flex align-items-center"
                            >
                                <i
                                    class="dropdown-toggle w-4 h-4 cursor-pointer text-gray-700 dark-text-gray-300"
                                    role="button"
                                    aria-expanded="false"
                                    data-bs-toggle="dropdown"
                                    data-feather="chevron-down"
                                />
                            </div>
                        </div>
                        <div class="w-full w-sm-auto d-flex">
                            <button class="btn btn-primary shadow-2 me-2"
                                >Start a Video Call</button
                            >
                            <div class="dropdown">
                                <button
                                    class="dropdown-toggle btn px-2 box text-gray-700 dark-text-gray-300"
                                    aria-expanded="false"
                                    data-bs-toggle="dropdown"
                                >
                                    <span
                                        class="w-5 h-5 d-flex align-items-center justify-content-center"
                                    >
                                        <i
                                            class="w-4 h-4"
                                            data-feather="plus"
                                        />
                                    </span>
                                </button>
                                <div class="dropdown-menu w-40">
                                    <ul class="dropdown-content">
                                        <li>
                                            <a href="" class="dropdown-item">
                                                <i
                                                    data-feather="user"
                                                    class="w-4 h-4 me-2"
                                                /> Contacts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" class="dropdown-item">
                                                <i
                                                    data-feather="settings"
                                                    class="w-4 h-4 me-2"
                                                /> Settings
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END: Inbox Filter -->
                    <!-- BEGIN: Inbox Content -->
                    <div class="intro-y inbox box mt-5">
                        <div
                            class="p-5 d-flex flex-column-reverse flex-sm-row text-gray-600 border-bottom border-gray-200 dark-border-dark-1"
                        >
                            <div
                                class="d-flex align-items-center mt-3 mt-sm-0 border-top border-sm-0 border-gray-200 pt-5 pt-sm-0 mt-5 mt-sm-0 mx-n5 mx-sm-0 px-5 px-sm-0"
                            >
                                <input
                                    class="form-check-input me-0 mt-0"
                                    type="checkbox"
                                />
                                <div class="dropdown ms-1">
                                    <a
                                        class="dropdown-toggle w-5 h-5 d-block dark-text-gray-300"
                                        href="javascript:;"
                                        aria-expanded="false"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i
                                            data-feather="chevron-down"
                                            class="w-5 h-5"
                                        />
                                    </a>
                                    <div class="dropdown-menu w-32">
                                        <ul class="dropdown-content">
                                            <li>
                                                <a href="" class="dropdown-item"
                                                    >All</a
                                                >
                                            </li>
                                            <li>
                                                <a href="" class="dropdown-item"
                                                    >None</a
                                                >
                                            </li>
                                            <li>
                                                <a href="" class="dropdown-item"
                                                    >Read</a
                                                >
                                            </li>
                                            <li>
                                                <a href="" class="dropdown-item"
                                                    >Unread</a
                                                >
                                            </li>
                                            <li>
                                                <a href="" class="dropdown-item"
                                                    >Starred</a
                                                >
                                            </li>
                                            <li>
                                                <a href="" class="dropdown-item"
                                                    >Unstarred</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <a
                                    href="javascript:;"
                                    class="w-5 h-5 ms-5 d-flex align-items-center justify-content-center dark-text-gray-300"
                                >
                                    <i
                                        class="w-4 h-4"
                                        data-feather="refresh-cw"
                                    />
                                </a>
                                <a
                                    href="javascript:;"
                                    class="w-5 h-5 ms-5 d-flex align-items-center justify-content-center dark-text-gray-300"
                                >
                                    <i
                                        class="w-4 h-4"
                                        data-feather="more-horizontal"
                                    />
                                </a>
                            </div>
                            <div class="d-flex align-items-center ms-sm-auto">
                                <div class="dark-text-gray-300">
                                    1 - 50 of 5,238
                                </div>
                                <a
                                    href="javascript:;"
                                    class="w-5 h-5 ms-5 d-flex align-items-center justify-content-center dark-text-gray-300"
                                >
                                    <i
                                        class="w-4 h-4"
                                        data-feather="chevron-left"
                                    />
                                </a>
                                <a
                                    href="javascript:;"
                                    class="w-5 h-5 ms-5 d-flex align-items-center justify-content-center dark-text-gray-300"
                                >
                                    <i
                                        class="w-4 h-4"
                                        data-feather="chevron-right"
                                    />
                                </a>
                                <a
                                    href="javascript:;"
                                    class="w-5 h-5 ms-5 d-flex align-items-center justify-content-center dark-text-gray-300"
                                >
                                    <i
                                        class="w-4 h-4"
                                        data-feather="settings"
                                    />
                                </a>
                            </div>
                        </div>
                        <div class="overflow-x-auto overflow-x-sm-visible">
                            <div class="intro-y">
                                <div
                                    class="inbox__item inbox__item--active d-inline-block d-sm-block text-gray-700 dark-text-gray-500 bg-gray-100 dark-bg-dark-1 border-bottom border-gray-200 dark-border-dark-1"
                                >
                                    <div class="d-flex px-5 py-3">
                                        <div
                                            class="w-72 flex-none d-flex align-items-center me-5"
                                        >
                                            <input
                                                class="form-check-input flex-none me-0 mt-0"
                                                type="checkbox"
                                            />
                                            <a
                                                href="javascript:;"
                                                class="w-5 h-5 flex-none ms-4 d-flex align-items-center justify-content-center text-gray-500"
                                            >
                                                <i
                                                    class="w-4 h-4"
                                                    data-feather="star"
                                                />
                                            </a>
                                            <a
                                                href="javascript:;"
                                                class="w-5 h-5 flex-none ms-2 d-flex align-items-center justify-content-center text-gray-500"
                                            >
                                                <i
                                                    class="w-4 h-4"
                                                    data-feather="bookmark"
                                                />
                                            </a>
                                            <div
                                                class="w-6 h-6 flex-none image-fit position-relative ms-5"
                                            >
                                                <img
                                                    alt="Rubick Bootstrap HTML Admin Template"
                                                    class="rounded-circle"
                                                    src="dist/images/profile-7.jpg"
                                                />
                                            </div>
                                            <div
                                                class="inbox__item--sender truncate ms-3"
                                            >
                                                Keanu Reeves
                                            </div>
                                        </div>
                                        <div class="w-64 w-sm-auto truncate">
                                            <span class="inbox__item--highlight"
                                                >It is a long established fact
                                            </span> It is a long established fact
                                            that a reader will be distracted by the
                                            readable content of a page when looking
                                            at its layout. The point of using Lorem
                                        </div>
                                        <div
                                            class="inbox__item--time text-nowrap ms-auto ps-10"
                                        >
                                            05:09 AM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="p-5 d-flex flex-column flex-sm-row align-items-center text-center text-sm-start text-gray-600"
                        >
                            <div class="dark-text-gray-300">
                                4.41 GB (25%) of 17 GB used Manage
                            </div>
                            <div
                                class="ms-sm-auto mt-2 mt-sm-0 dark-text-gray-300"
                            >
                                Last account activity: 36 minutes ago
                            </div>
                        </div>
                    </div>
                    <!-- END: Inbox Content -->
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .content {
    
    height: 100%;
    overflow: auto;
    background-image: url(images/hand.svg),url(images/right.svg),url(images/bottom.svg);
    background-repeat: no-repeat,no-repeat,no-repeat;
    background-position: 0 0,100%,0 100%;
    }
</style>
