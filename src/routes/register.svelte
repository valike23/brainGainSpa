
         
 <script lang="ts">
import { onMount } from "svelte";

import type { Iuser } from "../Model/accounts";
import { handleNotification } from "../Model/browserFunctions";

let password = '';
let user: Iuser = {};

let win: any = {};
const submit = () =>{
    if(user.password !== password && user.password != '') return handleNotification('password doesnt match', window, 'error','error');
}
onMount(()=>{
    win = window;
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    win.$('.input100').each(function(){
        win.$(this).on('blur', function(){
            if(win.$(this).val().trim() != "") {
                win.$(this).addClass('has-val');
            }
            else {
                win.$(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = win.$('.validate-input .input100');

    win.$('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    win.$('.validate-form .input100').each(function(){
        win.$(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if(win.$(input).attr('type') == 'email' || win.$(input).attr('name') == 'email') {
            if(win.$(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)win.$/) == null) {
                return false;
            }
        }
        else {
            if(win.$(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = win.$(input).parent();

        win.$(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = win.$(input).parent();

        win.$(thisAlert).removeClass('alert-validate');
    }
    

})(win.jQuery);
})
 </script>        
         
         <svelte:head>
            <title>Register into BrainGainSpa</title>
            <script defer   src="jquery-3.2.1.min.js"></script>
        </svelte:head>
     
            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100">
                        <form on:submit|preventDefault="{submit}" class="login100-form validate-form">
                            <span class="login100-form-title p-b-43">
                                REGISTER INTO BRAINGAINSPA
                            </span>
                            
                            
                            <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                <input bind:value="{user.email}" required class="input100" type="email" name="email">
                                <span class="focus-input100"></span>
                                <span class="label-input100">Email</span>
                            </div>
                            <div class="wrap-input100 validate-input" data-validate = "Valid phone number">
                                <input bind:value="{user.phone}" required class="input100" type="tel" >
                                <span class="focus-input100"></span>
                                <span class="label-input100">Phone</span>
                            </div>
                            <div class="wrap-input100 validate-input" data-validate = "Valid unique name is required">
                                <input bind:value="{user.user_name}" class="input100" required type="text" >
                                <span class="focus-input100"></span>
                                <span class="label-input100">Username</span>
                            </div>
                           
                            <div class="wrap-input100 validate-input" data-validate="Password">
                                <input bind:value="{user.password}" required class="input100" type="password" name="pass">
                                <span class="focus-input100"></span>
                                <span class="label-input100"> Password</span>
                            </div>
                            
                            
                            <div class="wrap-input100 validate-input" data-validate="Confirm Password">
                                <input bind:value="{password}" required class="input100" type="password" name="cpass">
                                <span class="focus-input100"></span>
                                <span class="label-input100">Confirm Password</span>
                            </div>
                    
        
                            <div class="container-login100-form-btn">
                                <input type="submit" value="Register" class="login100-form-btn"/>
                                  
                            </div>
                            
                            <div class="text-center p-t-46 p-b-20">
                                <span class="txt2">
                                   <a href="/signin">Already have an account?</a>
                                </span>
                            </div>
        
                        </form>
        
                        <div class="login100-more" style="background-image: url('images/bg/black.jpeg');">
                        </div>
                    </div>
                </div>
            </div>