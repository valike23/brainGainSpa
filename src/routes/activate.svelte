

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
      const id = page.query.id;
      const res = await this.fetch(`api/accounts/activation?id=${id}`);
      const article = await res.json();
      article.token = id;
      return { article };
    }
  </script>


<script lang="ts">
    import axios from "axios";
    import { goto } from "@sapper/app";
    let result: any = {};
    import { onMount } from "svelte";
    import { handleNotification } from "../Model/browserFunctions";
    import { TIMER } from "../Model/public";
    import SweetAlert2 from "sweetalert2";
import type { Iuser } from "../Model/accounts";
    let loading = true;
    export let article;
    let verification = true;
    let user: Iuser = {};
    let password = "";
    let confirm = "";
    let text = "Set Password";
    console.log(article);
    let changeOfTime = Date.now() - Number(article.time);
    changeOfTime = changeOfTime / (1000 * 60 * 24 * TIMER.registration);
    console.log(changeOfTime);
    const submit = async () => {
      console.log("test");
      if (password != confirm)
        return handleNotification(
          "password does not match",
          window,
          "error",
          "error"
        );
      text = "Setting Password...";
      let form = new FormData();
      article.password = password;
      console.log(article);
      let data2 = {article, user};
      let body = JSON.stringify(data2);
      console.log(body);
      form.append("body", body);
      let data = await axios.post("api/accounts/activation", form);
      if (data) {
        text = "Set Password";
  
        if (data.data.message == "password reset successfully") {
          let swal = await SweetAlert2.fire({
            icon: "success",
            text: data.data.message,
            title: "Success",
          });
          if (swal) {
            goto("login");
          }
        }
        else{
          console.log(data);
          let swal = await SweetAlert2.fire({
            icon: "error",
            text: "something is not right with the data, you can contact us with this issue  ",
            title: "Error",
          });
        }
      }
      console.log(data.data);
    };
    let win: any = {};
  
    onMount(async () => {
      win = window;
      console.log(win);
      try {
        if (changeOfTime < 1) {
          let data = await win.Sweetalert2.fire({
            text: "token has expired you will be navigated to the appropiate page",
            title: "Token Expired",
            icon: "error",
          });
          if (data) {
            console.log(data);
            goto("/register");
          }
        }
      } catch (error) {
        loading = false;
        console.log(error);
        handleNotification("something went wrong", window, "error", "error");
      }
    });
   
  </script>
  <svelte:head>
  
    <title>Activation page :: BrainGainSpa</title>
  </svelte:head>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <form
          on:submit|preventDefault={submit}
          class="login100-form validate-form mt-n4"
        >
          <span class="login100-form-title "> Activate your Account </span>
          <p class="text-center mb-3">{article.email}</p>
  
          <div
            class="wrap-input100 validate-input"
            data-validate="Valid first name is required: anyname"
          >
            <input
              bind:value={user.first_name}
              required
              class="input100"
              type="text"
            />
            <span class="focus-input100" />
            <span class="label-input100">First Name</span>
          </div>
          <div
          class="wrap-input100 validate-input"
          data-validate="Valid last name is required: anyname"
        >
          <input
            bind:value={user.last_name}
            required
            class="input100"
            type="text"
          />
          <span class="focus-input100" />
          <span class="label-input100">Last Name</span>
        </div>
  
          <div
            class="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <input
              bind:value={password}
              required
              class="input100"
              type="password"
              name="pass"
            />
            <span class="focus-input100" />
            <span class="label-input100">Password</span>
          </div>
          <div
          class="wrap-input100 validate-input"
          data-validate="Password is required"
        >
          <input
            bind:value={confirm}
            required
            class="input100"
            type="password"
            name="pass"
          />
          <span class="focus-input100" />
          <span class="label-input100"> Confirm Password</span>
        </div>
      
  
          <div class="container-login100-form-btn">
            <input
              disabled={text != "Set Password"}
              value={text}
              type="submit"
              class="login100-form-btn"
            />
          </div>
        
        </form>
  
        <div
          class="login100-more"
          style="background-image: url('images/key.png'); background-color: green"
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
  