
<script lang="ts" context="module">
	// the (optional) preload function takes a
	// `{ path, params, query }` object and turns it into
	// the data we need to render the page
	export async function preload(page, session) {
		// the `slug` parameter is available because this file
		// is called [slug].svelte
    let query = page.query;

		// `this.fetch` is a wrapper around `fetch` that allows
		// you to make credentialled requests on both
		// server and client
    let referral = query.referral;

		return { referral };
	}
  </script>

<script lang="ts">
  import { onMount } from "svelte";
  import axios from "axios";
  import type { Iuser } from "../Model/accounts";
  import { handleNotification } from "../Model/browserFunctions";
  import Swal from "sweetalert2";
  let password = "";
  let user: Iuser = {};
  export let referral ;
  console.log(referral);
  
let text = 'Register';
  let win: any = {};
  const submit = async () => {
    if (user.password !== password && user.password != "") {return handleNotification(
        "password doesnt match",
        window,
        "error",
        "error"
      );}

    let form = new FormData();
    form.append("body", JSON.stringify(user));
    console.log(form);
   try {
       text = 'Registering...';
    let data = await axios.post("api/accounts", form);
    if (data) {
      let res = data.data;
      if (res) {
          text = 'Register';
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: `The User ${user.user_name} has been created successfully`,
          
        }).then(()=> {
          location.href = '/signin';
        });
        console.log(res);
      }
    }
   } catch (error) {
       text = 'Register';
       Swal.fire({
           icon: 'error',
           title: 'Error!!!',
           text: 'Something went wrong we are looking into it'
       })
   }
  };
  const assignType = (resp) => {
    user.type = resp;
  }
  onMount(() => {
    win = window;
    console.log(win);
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
  <title>Register into BrainGainSpa</title>
  <script defer src="jquery-3.2.1.min.js"></script>
</svelte:head>

<div class="limiter">
  <div class="container-login100">
    <div class="wrap-login100">
      <form
        on:submit|preventDefault={submit}
        class="login100-form validate-form"
      >
        <span class="login100-form-title p-b-43">
          REGISTER INTO BRAINGAINSPA
        </span>
        <div class="row mb-2">
          <div class="col">
            <div class="float-end">
              <img class:active={user.type == 'student'} on:click="{()=>{assignType('student')}}" src="svg/student.svg" class="svg " alt="">
          <p class="">students</p>
            </div> 
        </div>
          <div class="col"><img class:active={user.type == 'parent'} on:click="{()=>{assignType('parent')}}"  src="svg/parents.svg" class="svg" alt="">
          <p>parents</p>
          </div>
        </div>

        <div
          class="wrap-input100 validate-input"
          data-validate="Valid email is required: ex@abc.xyz"
        >
          <input
            bind:value={user.email}
            required
            class="input100"
            type="email"
            name="email"
          />
          <span class="focus-input100" />
          <span class="label-input100">Email</span>
        </div>
        <div
          class="wrap-input100 validate-input"
          data-validate="Valid phone number"
        >
          <input bind:value={user.phone} required class="input100" type="tel" />
          <span class="focus-input100" />
          <span class="label-input100">Phone</span>
        </div>
        <div
          class="wrap-input100 validate-input"
          data-validate="Valid unique name is required"
        >
          <input
            bind:value={user.user_name}
            class="input100"
            required
            type="text"
          />
          <span class="focus-input100" />
          <span class="label-input100">Username</span>
        </div>

        <div
          class="wrap-input100 validate-input"
          data-validate="Valid unique name is required"
        >
          <input
            bind:value={referral}
            class="input100"
            autofocus
            type="text"
          />
          <span class="focus-input100" />
          <span class="label-input100">referral code</span>
        </div>

        <div class="container-login100-form-btn">
          <input disabled={text != 'Register'} type="submit" value="{text}" class="login100-form-btn" />
        </div>

        <div class="text-center p-t-46 p-b-20">
          <span class="txt2">
            <a href="/signin">Already have an account?</a>
          </span>
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
  .svg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: gray;
  }
  .active  {
    border: 4px solid green
  }
</style>