/*
 TODO: open a map url passing the latitude and longitude values
*/
function openMap(lat, long) {
    console.log(lat + ' ' + long)
}

/* 
TODO: return formatted date
*/
function getFormattedDate(millis) {
    console.log(typeof millis)
    return ''
}

$(document).ready(function() {
    var rescueDiv = $('#rescueList')
    rescueDiv.empty()
    var requestCount = $('#requestCount')
    get("get").then(function(res) {
        requestCount.html(res.Items.length + ' Request(s) so far');
        $.each(res.Items, function (index, value) {
            rescueDiv.append('<div class="card card-1 m-b-sm">' +
            '<div class="small-date-time">' +
                '<small class="font-bold">'+getFormattedDate(value.TimeIndex)+'</small>' +
            '</div>'+
            '<h4 style="margin: 5px 0"> Panamaram, Wayanad &nbsp; ' +
                '<a class="pure-button button-small" onclick="openMap(' + value.lattitude +',' + value.longitude + ')">View on maps</a>'+
            '</h4>'+
            '<hr>'+
            '<div class="pure-g">'+
                '<div class="pure-u-1-2 primary-text">'+value.number_of_people+' People</div>'+
                '<div class="pure-u-1-2 text-right">'+
                    '<a class="pure-button button-small button-primary" href="#">Accept</a>'+
                    '<a class="pure-button button-small" href="#">'+
                            '<i class="fa fa-share-square-o"></i>'+
                        '</a>'+
                '</div>'+
            '</div>' +
        '</div>')
        });
      });
});