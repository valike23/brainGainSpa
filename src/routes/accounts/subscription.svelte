<script lang="ts">
  import DesktopSide from "../../components/Nav/DesktopSide.svelte";
  import MobileMenu from "../../components/Nav/MobileMenu.svelte";
  import TopBar from "../../components/Nav/TopBar.svelte";
  let links = [
    { name: "accoounts" },
    { name: "subscription", url: "accounts/subscription" },
  ];
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
              <h2>plan</h2>
            </div>
            <div class="col-sm-4 col-12 mb-5 mb-sm-0 ">
              <div class="uk-card uk-card-default uk-card-body active">
                <div class="row">
                  <div class="col-6">
                    <p>Begineer</p>
                  </div>
                  <div class="col-6">
                    <p class="float-end">$10/ <small>Month</small></p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <small>30 days remaining</small>
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-12">
                    <button
                      class="uk-button uk-button-default d-block d-sm-none"
                      style="line-height: 1.5rem;">Cancel Subscription</button
                    >
                    <button
                      class="uk-button uk-button-default d-none d-sm-block"
                      >Cancel Subscription</button
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-12 mb-5 mb-sm-0 ">
              <div class="uk-card uk-card-default uk-card-body ">
                <div class="row">
                  <div class="col-6">
                    <p>Begineer</p>
                  </div>
                  <div class="col-6">
                    <p class="float-end">$10/ <small>Month</small></p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <small>30 days remaining</small>
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-12">
                    <button
                      class="uk-button uk-button-default d-block d-sm-none"
                      style="line-height: 1.5rem;">Cancel Subscription</button
                    >
                    <button
                      class="uk-button uk-button-default d-none d-sm-block"
                      >Cancel Subscription</button
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-12 mb-5 mb-sm-0 ">
              <div class="uk-card uk-card-default uk-card-body ">
                <div class="row">
                  <div class="col-6">
                    <p>Begineer</p>
                  </div>
                  <div class="col-6">
                    <p class="float-end">$10/ <small>Month</small></p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <small>30 days remaining</small>
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-12">
                    <button
                      class="uk-button uk-button-default d-block d-sm-none"
                      style="line-height: 1.5rem;">Cancel Subscription</button
                    >
                    <button
                      class="uk-button uk-button-default d-none d-sm-block"
                      >Cancel Subscription</button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12 box mt-5 intro-y pt-4 pb-3">
              <h2 class="row">
                  <div class="col-10">Enable auto renewal</div>
                  <div class="col-2 pr-0 pl-0">
                    <div class="form-check form-switch float-end">
                        <input id="checkbox-switch-7" class="form-check-input float-end" checked type="checkbox">
                       
                    </div>
                  </div>
                </h2>
              <p class="mt-3">
                this option, if checked will renew your productive subscription,
                if the current plan expires. however, this might prevent you
                from.
              </p>
            </div>
          </div>
          <div class="row mt-5">
              <div class="col-12">
                  <h2>payment method</h2>
              </div>
          </div>
          <div class="row mt-5">
            <div class="col-12">
                <h2>Billing history</h2>
            </div>
            <div class="col-12 mt-5 box intro-y pt-4 ">
                <table class="table">
                    <thead class="table-dark">
                        <tr>
                            <th class="whitespace-nowrap">#</th>
                            <th class="whitespace-nowrap">DATE</th>
                            <th class="whitespace-nowrap">DETAILS</th>
                            <th class="whitespace-nowrap">AMOUNT</th>
                            <th class="whitespace-nowrap">DOWNLOAD</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Angelina</td>
                            <td>Jolie</td>
                            <td>@angelinajolie</td>
                            <td><a href="" download>invoice_july.pdf</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Brad</td>
                            <td>Pitt</td>
                            <td>@bradpitt</td>

                            <td><a href="" download>invoice_july.pdf</a></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Charlie</td>
                            <td>Hunnam</td>
                            <td>@charliehunnam</td>

                            <td><a href="" download>invoice_july.pdf</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .active {
    border: 1px solid green;
  }
  h2 {
	font-family: 'Itim', 'roboto';
	font-weight: 500;
	font-size: 1.5rem;
}
</style>
