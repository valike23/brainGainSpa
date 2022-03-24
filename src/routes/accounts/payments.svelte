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
    let invoices = [];
    try {
      const res = await this.fetch(`api/accounts/invoice`);
      invoices = await res.json();

      invoices = invoices || [];
    } catch (error) {
      console.log("error", error);
      invoices = [];
    }

    return { invoices };
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";

  import DesktopSide from "../../components/Nav/DesktopSide.svelte";
  import MobileMenu from "../../components/Nav/MobileMenu.svelte";
  import TopBar from "../../components/Nav/TopBar.svelte";
  import type {
    IflutterResponse,
    Iinvoices,
    Iuser,
  } from "../../Model/accounts";
  import { flutterwaveKey, paystackPublicKey, serverURL } from "../../Model/public";
  import { goto } from "@sapper/app";
  import { check_for_session } from "../../Model/browserFunctions";
  let user: Iuser = {};
  let links = [
    { name: "accoounts" },
    { name: "payments", url: "accounts/payments" },
  ];
  let win: any = {};
  let activePayment = '';
  let activeInvoice : Iinvoices ={};
  export let invoices: Iinvoices[];
  const handlePayment = (pay: IflutterResponse) => {
    console.log(pay);
  };
  const payment = (invoice: Iinvoices) => {
    activeInvoice = invoice;
    // var myOffcanvas = document.getElementById('paycanvas');
    //var bsOffcanvas = new win.bootstrap.Offcanvas(myOffcanvas);
    //bsOffcanvas.show();
    win.UIkit.modal(document.getElementById("md"), {}).show();
  };

  const pay =() =>{
    //choose payment memthod here
    if(activePayment == 'flutterwave'){
      payWithFlutter(activeInvoice);
    }
    else if(activePayment == 'paystack') {
      payWithPaystack(activeInvoice)
    }
    activePayment = '';
  }
  const payWithPaystack =(inv: Iinvoices)=>{
    let paystack =  win.PaystackPop.setup({
  key: paystackPublicKey,
  email: user.email,
  amount: inv.amount * 100,
   onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
});

paystack.openIframe();
console.log(paystack);
  }

  const payWithFlutter = (invoice: Iinvoices) => {
    win.FlutterwaveCheckout({
      public_key: flutterwaveKey,
      tx_ref: invoice._id,
      amount: invoice.amount,
      currency: "NGN",
      payment_options: "card, banktransfer, ussd",
      // redirect_url: serverURL + '/acconts/handlePayment',
      callback: handlePayment,
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: user.email,
        phone_number: user.phone,
        name: `${user.first_name + " " + user.last_name}`,
      },
      customizations: {
        title: "BrainGainSpa",
        description: "Excercise your mind and brain",
        logo: serverURL + "/brain.png",
      },
    });
  };
  const setPayment =(pay: string)=>{
    activePayment = pay;
  }
  onMount(() => {
    win = window;

    if (!sessionStorage.getItem("user")) {
      goto("/signin");
    } else {
      user = JSON.parse(sessionStorage.getItem("user"));
      check_for_session(location, true, user);
    }
  });
</script>

<svelte:head>
  <title>Braingainspa :: Subscription</title>
</svelte:head>

<div class="main">
  <MobileMenu />
  <div class="d-flex">
    <DesktopSide dash="accounts" />
    <div class="content">
      <TopBar {links} />
      <div class="content">
        <div class="container">
          <div class="row mt-5">
            <div class="col-12 mb-4">
              <h2>Payments</h2>
            </div>
            <div class="col-12 mb-4">
              <div class="row ">
                <div class="col-sm-7 col-12">
                  <div class="row box " />
                  <h3>services</h3>

                  <div class="row mt-3">
                    {#each invoices as invoice}
                      <div class="col-sm-6 col-12 box card p-3">
                        <div class="row">
                          <div class="col-8">
                            <p class="title">{invoice.payment_type}</p>
                            <p><small>{invoice.description}</small></p>
                          </div>
                          <div class="col-4">
                            <img src={invoice.logo} alt="" />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-8 mb-3">
                            <p class="price">₦{invoice.amount}</p>
                          </div>
                          <div class="col-4">
                            {#if invoice.status == "pending"}
                              <button
                                on:click={() => {
                                  payment(invoice);
                                }}
                                class="btn btn-sm btn-primary float-end"
                                >pay</button
                              >
                            {/if}
                          </div>
                        </div>
                      </div>
                    {/each}
                  </div>
                </div>
                <div class="col-sm-5 d-sm-block d-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div id="md" uk-modal>
  <div class="uk-modal-dialog uk-modal-body">
    <h2 class="uk-modal-title">Pay With...</h2>
    <div class="row ml-n2">
     <div class="col-6">
      <div
      class:active={activePayment == 'paystack'}
      on:click="{()=>{setPayment('paystack')}}" style="margin-right: 1px;"
        class="uk-card uk-card-body uk-card-hover ml-n1 mt-4 mb-2 uk-card-primary"
        id="paystack"
      />
     </div>
     <div class="col-6">
      <div
      on:click="{()=>{setPayment('flutterwave')}}"
      class:active={activePayment == 'flutterwave'}
      class="uk-card uk-card-body uk-card-hover mt-4 mb-2 uk-card-default"
      id="flutterwave"
    />

   <div class="row">
     <div class="col">

    <button on:click="{pay}" class="uk-button uk-button-primary float-end" disabled="{activePayment == ''}">Pay</button>
     </div>
   </div>
     </div>

    </div>
    
  </div>
</div>

<style>
  .uk-modal-title{
    color: white;
  }
  #md > .uk-modal-dialog {
    background-color: green;
  }
  .active {
    border: 2px solid blue;
  }
  h2 {
    font-family: "Itim", "roboto";
    font-weight: 500;
    font-size: 1.5rem;
  }
  #paystack {
    background-image: url("images/payments/paystack.png");
    background-size: cover;
  }
  #flutterwave {
    background-image: url("images/payments/flutterwave.png");
    background-size: cover;
  }
  h3 {
    font-family: "Itim", "roboto";
    font-weight: 500;
    font-size: 1.1rem;
  }
  .title {
    font-family: "Itim", "roboto";
    font-weight: 500;
    font-size: 1.3rem;
  }
  .price {
    font-family: "Itim", "roboto";
    font-weight: 500;
    font-size: 1.2rem;
  }
</style>
