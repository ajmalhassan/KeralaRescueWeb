function fetchList() {
  get("posts").then(function(res) {
    console.log(JSON.stringify(res))
  });
}

$(document).ready(function() {
    fetchList()
});
