$(document).ready(function() {
    var rescueDiv = $('#rescueList')
    rescueDiv.empty()
    var requestCount = $('#requestCount')
    get("get").then(function(res) {
        requestCount.html(res.Items.length + ' Request(s) so far');
        $.each(res.Items, function (index, value) {
            rescueDiv.html(`<div class="card card-1 m-b-sm">
            <div class="small-date-time">
                <small class="font-bold">10:45 PM, 17 August</small>
            </div>
            <h4 style="margin: 5px 0">
                Panamaram, Wayanad &nbsp;
                <a class="pure-button button-small" href="#">View on maps</a>
            </h4>
            <hr>
            <div class="pure-g">
                <div class="pure-u-1-2 primary-text">${value.Number_of_people} People</div>
                <div class="pure-u-1-2 text-right">
                    <a class="pure-button button-small button-primary" href="#">Accept</a>
                    <a class="pure-button button-small" href="#">
                            <i class="fa fa-share-square-o"></i>
                        </a>
                </div>
            </div>
        </div>`)
        });
      });
});