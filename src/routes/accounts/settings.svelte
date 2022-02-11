<script>
import DesktopSide from "../../components/Nav/DesktopSide.svelte";
import MobileMenu from "../../components/Nav/MobileMenu.svelte";
import TopBar from "../../components/Nav/TopBar.svelte";

let links =[{name: 'accoounts'},{name: 'settings', url: 'accounts/settings'}];
</script>
<div class="main">
<MobileMenu/>
    <div class="d-flex">
        <DesktopSide dash="accounts" />
        <div class="content">
            <TopBar {links}/>
            <div class="container">
                <div class="row" style="margin-bottom: 50px;">
                    <h2 class="intro-y fs-lg fw-medium me-auto mt-2">
                        Settings
                    </h2>

                    <div class="row">
                        <div class="col-12 tab">
                            <span>personal info</span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div class="row box">

                </div>
            </div>
        </div>
    </div>
    
</div>

<style>
    .tab {
        background-color: whitesmoke;
    }
</style>