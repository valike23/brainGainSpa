<script>
    import NavBar from "../components/Nav/NavBar.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="css/nav.css" />
    <script defer src="dist/js/nav.js"></script>
</svelte:head>
<NavBar />

<div class="container-fluid">
    <div class="row" style="margin-top:0px;">
        <div
            class="col-12 col-sm-6 col-md-6 d-none d-sm-block"
            style="padding-right:unset; padding-left:unset;background-color: none;"
        >
            <div style="padding: 80px 0 0 60px;">
                <h1>
                    Welcome to <span style="font-weight: bolder"
                        >BrainGainSpa</span
                    >
                </h1>
                <h5>Your Interactive Learning Assistance</h5>
            </div>
            <img
                style="height:50vh;margin: auto;margin-top: 50px;"
                src="images/bg/sign.svg"
                alt="Signup Landing"
                srcset=""
                class="img-fluid img-responsive"
            />
        </div>
        <div
            class="col-12 col-sm-6 col-md-6"
            style="padding-right:unset; padding-left:unset;  "
        >
            <div
                class="card panel-default"
                style="margin-bottom:0; height:90vh;padding-top: 120px;"
            >
                <div class="card-body">
                    <div
                        class=""
                        style="padding-left:20px; padding-right:20px; height:auto; flex:1"
                    >
                        <div
                            class="text-center text-info"
                            style="font-weight:bolder;font-size: 50px;color: #37bfe9;margin-bottom: 30px;"
                        >
                            Sign In
                        </div>

                        <div class="">
                            <form
                                action="https://learn.simbibot.com/login"
                                method="POST"
                            >
                                <div class="form-group">
                                    <div class="uk-margin">
                                        <input
                                            class="uk-input"
                                            type="email"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="uk-margin">
                                        <input
                                            class="uk-input"
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row mt-3">
                                        <div class="col-md-6" style="">
                                            <div
                                                class="checkbox"
                                                style="margin-bottom: 10px;"
                                            >
                                                <label for="NewsletterConsent">
                                                    <label
                                                        class="container-check"
                                                    >
                                                        <span
                                                            style="font-size: 13px;"
                                                            class="ml-5"
                                                            >Remember me</span
                                                        >

                                                        <input
                                                            type="checkbox"
                                                            checked="checked"
                                                            name="remember"
                                                        />
                                                        <span
                                                            class="checkmark"
                                                        />
                                                    </label>
                                                </label>
                                            </div>
                                        </div>
                                        <div
                                            class="col-md-6"
                                            style="text-align: right;padding: 5px 0 0 0;"
                                        >
                                            <a
                                                href="https://learn.simbibot.com/password/reset"
                                                style="font-weight: bolder;color: #37bfe9;"
                                                class="float-right"
                                            >
                                                Forgot Your Password?
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="">
                                    <div class="text-center">
                                        <button
                                            class="btn btn-info signin-button btn-block"
                                            style="width: 80%;padding: 10px;margin: auto;font-size: 18px;font-weight: bolder;margin-top: 30px;"
                                            >Sign in</button
                                        >
                                    </div>
                                </div>
                            </form>
                            <div style="margin-top: 20px;text-align: center;">
                                <p style="color: #555;font-weight: bold;">
                                    Don't have an account? <a
                                        href="https://learn.simbibot.com/register"
                                        style="color: #37bfe9;">SIGNUP</a
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .main {
        background-color: white;
        width: 100vw;
        margin-left: -33px;
        font-family: "Itim", "roboto";
        background-image: url(images/hand.svg), url(images/right.svg),
            url(images/bottom.svg);
        background-repeat: no-repeat, no-repeat, no-repeat;
        background-position: 0 0, 100%, 0 100%;
    }
    .con {
        height: 80vh;
    }
    h1 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
    }
    h5 {
        font-size: 1.25rem;
        margin-bottom: 0.5 rem;
        font-weight: 500;
        line-height: 1.2;
    }
</style>
