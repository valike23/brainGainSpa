<script lang="ts">
  import axios from "axios";

  import { onMount } from "svelte";
  import Swal from "sweetalert2";
  import type { Iuser } from "../Model/accounts";
  import { handleNotification } from "../Model/browserFunctions";
import { logo } from "../Model/public";

  let password = "";
  let user: Iuser = {};
  let text = "Login";
  let win: any = {};
  const submit = async () => {
    text = "Logging In...";
    handleNotification("Logging in...", window, "info", "login");
    try {
      let form = new FormData();
      form.append("body", JSON.stringify(user));
      let data = await axios.put("api/accounts", form);
      let res = data.data;
      if (res) {
        text = "Login";
        console.log(res);
        if (res.message == "success") {
          Swal.fire({
            icon: "success",
            title: "SUCCESS!!!",
            text: "Login was successful",
          }).then(() => {
            sessionStorage.setItem('user',JSON.stringify(res.data.user));
            location.href = "/dashboard?type="+ res.data.user.type;
          });
        }
        else {
          Swal.fire({
            icon: "error",
            title: "ooosps!!",
            text: res.message,
          })
        }
      }
    } catch (error) {
      text = "Login";
      Swal.fire({
        icon: "error",
        title: "Error!!!",
        text: "Something Went wrong... We are working on it",
      });
    }
  };
  onMount(() => {
    win = window;
    (function ($) {
      "use strict";

      /*==================================================================
    [ Focus Contact2 ]*/
      win.$(".input100").each(function () {
        win.$(this).on("blur", function () {
          if (win.$(this).val().trim() != "") {
            win.$(this).addClass("has-val");
          } else {
            win.$(this).removeClass("has-val");
          }
        });
      });

      /*==================================================================
    [ Validate ]*/
      var input = win.$(".validate-input .input100");

      win.$(".validate-form").on("submit", function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
          if (validate(input[i]) == false) {
            showValidate(input[i]);
            check = false;
          }
        }

        return check;
      });

      win.$(".validate-form .input100").each(function () {
        win.$(this).focus(function () {
          hideValidate(this);
        });
      });

      function validate(input) {
        if (
          win.$(input).attr("type") == "email" ||
          win.$(input).attr("name") == "email"
        ) {
          if (
            win
              .$(input)
              .val()
              .trim()
              .match(
                /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)win.$/
              ) == null
          ) {
            return false;
          }
        } else {
          if (win.$(input).val().trim() == "") {
            return false;
          }
        }
      }

      function showValidate(input) {
        var thisAlert = win.$(input).parent();

        win.$(thisAlert).addClass("alert-validate");
      }

      function hideValidate(input) {
        var thisAlert = win.$(input).parent();

        win.$(thisAlert).removeClass("alert-validate");
      }
    })(win.jQuery);
  });
</script>

<svelte:head>
  <script defer src="jquery-3.2.1.min.js"></script>

<meta property="og:site_name" content="BrainGainSpa" />
<meta property="og:type" content="website" />

<meta property="og:url" content="/signin" />
<meta property="og:image" content="https://www.braingainspa.com/Content/imagesb/BrainGainSpa.png" />
<meta name="twitter:card" content="summary_large_image">

<!--  Non-Essential, But Recommended -->
<meta property="og:description" content="BrainGainspa Login page to have access to the applications">
<meta property="og:title" content="BrainGainspa login page">
  <title>Login to BrainGainSpa</title>
</svelte:head>
<div class="limiter">
  <div class="container-login100">
    <div class="wrap-login100">
      <form
        on:submit|preventDefault={submit}
        class="login100-form validate-form"
      >
      <p class="text-center mt-n4" ><img src="{logo}" style="margin:auto; width: 150px" alt="braingianspa logo"></p>
        <span class="login100-form-title p-b-43"> Login to continue </span>

        <div
          class="wrap-input100 validate-input"
          data-validate="Valid email is required: ex@abc.xyz"
        >
          <input
            bind:value={user.email}
            required
            class="input100"
            type="text"
            name="email"
          />
          <span class="focus-input100" />
          <span class="label-input100">Email</span>
        </div>

        <div
          class="wrap-input100 validate-input"
          data-validate="Password is required"
        >
          <input
            bind:value={user.password}
            required
            class="input100"
            type="password"
            name="pass"
          />
          <span class="focus-input100" />
          <span class="label-input100">Password</span>
        </div>

        <div class="flex-sb-m w-full p-t-3 p-b-32">
          <div class="contact100-form-checkbox">
            <input
              class="input-checkbox100"
              id="ckb1"
              type="checkbox"
              name="remember-me"
            />
            <label class="label-checkbox100" for="ckb1"> Remember me </label>
          </div>

          <div>
            <a href="#" class="txt1"> Forgot Password? </a>
          </div>
        </div>

        <div class="container-login100-form-btn">
          <input
            disabled={text != "Login"}
            value={text}
            type="submit"
            class="login100-form-btn"
          />
        </div>
        <div class="text-center p-t-46 p-b-20">
          <span class="txt2">
            <a href="/register">Dont have an account?</a>
          </span>
        </div>
        <div class="text-center p-t-46 p-b-20">
          <span class="txt2"> or sign up using </span>
        </div>

        <div class="login100-form-social flex-c-m">
          <a href="#" class="login100-form-social-item flex-c-m bg1 m-r-5">
            <i class="fa fa-facebook" aria-hidden="true" />
          </a>

          <a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5">
            <i class="fa fa-twitter" aria-hidden="true" />
          </a>
        </div>
      </form>

      <div
        class="login100-more"
        style="background-image: url('images/bg/black.jpeg');"
      />
    </div>
  </div>
</div>
<style>
   [type = 'submit'] {
    background-image: url('images/bg/button.jpeg');
    background-size: cover;
  }
</style>
