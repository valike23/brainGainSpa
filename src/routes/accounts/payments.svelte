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
    let payments = [];
    try {
      const res = await this.fetch(`api/accounts/invoice`);

      const res2 = await this.fetch(`api/accounts/payments`);
      invoices = await res.json();
      payments = await res2.json();
      payments = payments || [];
      invoices = invoices || [];
    } catch (error) {
      console.log("error", error);
      invoices = [];
    }

    return { invoices, payments };
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";

  import DesktopSide from "../../components/Nav/DesktopSide.svelte";
  import MobileMenu from "../../components/Nav/MobileMenu.svelte";
  import TopBar from "../../components/Nav/TopBar.svelte";
  import dayjs from "dayjs";
  import type {
    IflutterResponse,
    Iinvoices,
    Ipayment,
    Iuser,
  } from "../../Model/accounts";
  import {
    flutterwaveKey,
    paystackPublicKey,
    serverURL,
  } from "../../Model/public";
  import { goto } from "@sapper/app";
  import {
    check_for_session,
    handleNotification,
  } from "../../Model/browserFunctions";
  import axios from "axios";
  import Swal from "sweetalert2";
  let user: Iuser = {};
  let links = [
    { name: "accoounts" },
    { name: "payments", url: "accounts/payments" },
  ];
  let win: any = {};
  let activePayment = "";
  let activeInvoice: Iinvoices = {};
  export let invoices: Iinvoices[], payments: Ipayment[];
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

  const pay = () => {
    //choose payment memthod here
    if (activePayment == "flutterwave") {
      payWithFlutter(activeInvoice);
    } else if (activePayment == "paystack") {
      payWithPaystack(activeInvoice);
    }
    activePayment = "";
  };
  const payWithPaystack = (inv: Iinvoices) => {
    let paystack = win.PaystackPop.setup({
      key: paystackPublicKey,
      email: user.email,
      amount: inv.amount * 100,
      onClose: function () {
        alert("Window closed.");
      },
      callback: async function (response) {
        console.log(response, inv);
        let myPay: Ipayment = {};
        myPay.amount_paid = inv.amount;
        myPay.payment_ref = response.reference;
        myPay.user_id = inv.user_id;
        myPay.invoice_id = inv.id;
        myPay.source = "paystack";
        myPay.payment_status = response.status;
        //)
        handleNotification("submitting payment info", window, "info", "submit");
        try {
          let form = new FormData();
          form.append("body", JSON.stringify(myPay));
          let res = await axios.post("api/accounts/payments", form);
          if (res) {
            Swal.fire(
              "Success",
              "<p>Payment have been created successfully</p>",
              "success"
            ).then(() => {
              location.reload();
            });
          }
        } catch (error) {}
      },
    });

    paystack.openIframe();
    console.log(paystack);
  };

  const payWithFlutter = (invoice: Iinvoices) => {
    win.FlutterwaveCheckout({
      public_key: flutterwaveKey,
      tx_ref: invoice.id,
      amount: invoice.amount,
      currency: "NGN",
      payment_options: "card, banktransfer, ussd,mobilemoneyghana",
      // redirect_url: serverURL + '/acconts/handlePayment',
      callback: handlePayment,
      onclose: (incomplete)=>{
        console.log(incomplete);
      },
     
      customer: {
        email: user.email,
        phone_number: user.phone,
        name: `${user.first_name + " " + user.last_name}`,
      },
      customizations: {
        title: "BrainGainSpa",
        description: "Exercise your mind and brain",
        logo: serverURL + "/brain.png",
      },
    });
  };
  const setPayment = (pay: string) => {
    activePayment = pay;
  };
  onMount(() => {
    win = window;

    if (!sessionStorage.getItem("user")) {
      goto("/signin");
    } else {
      user = JSON.parse(sessionStorage.getItem("user"));
      check_for_session(location, true, user);
      const dataTable = new win.simpleDatatables.DataTable("#paymentTable", {
        searchable: true,
        fixedHeight: true,
      });
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

                  <h3 class="mt-4 mb-1">payments</h3>
                </div>
                <div class="col-sm-5 d-sm-block d-none" />
              </div>
              <div class="row">
                <div class="row mt-3 box">
                  <div class="col-12">
                    <table
                      id="paymentTable"
                      class="table table-responsive table-hover"
                    >
                      <thead>
                        <tr>
                          <th scope="col">s/n</th>
                          <th scope="col">payment Ref.</th>
                          <th scope="col">paid Amount (₦)</th>
                          <th scope="col">Payment Date</th>
                          <th scope="col">Source</th>
                          <th scope="col">Status</th>
                          <th scope="col">isVerfied</th>
                        </tr>
                      </thead>
                      <tbody>
                        {#each payments as pay, s}
                          <tr>
                            <th>{s + 1}</th>
                            <td>{pay.payment_ref}</td>
                            <td>{pay.amount_paid}</td>
                            <td>{dayjs(pay.payment_date).format()}</td>
                            <td>{pay.source}</td>
                            <td>{pay.payment_status}</td>
                            <td
                              >{#if pay.is_verified}
                                true
                              {:else}
                                false
                              {/if}</td
                            >
                          </tr>
                        {/each}
                      </tbody>
                    </table>
                  </div>
                </div>
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
          class:active={activePayment == "paystack"}
          on:click={() => {
            setPayment("paystack");
          }}
          style="margin-right: 1px;"
          class="uk-card uk-card-body uk-card-hover ml-n1 mt-4 mb-2 uk-card-primary"
          id="paystack"
        />
      </div>
      <div class="col-6">
        <div
          on:click={() => {
            setPayment("flutterwave");
          }}
          class:active={activePayment == "flutterwave"}
          class="uk-card uk-card-body uk-card-hover mt-4 mb-2 uk-card-default"
          id="flutterwave"
        />

        <div class="row">
          <div class="col">
            <button
              on:click={pay}
              class="uk-button uk-button-primary float-end"
              disabled={activePayment == ""}>Pay</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .uk-modal-title {
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
