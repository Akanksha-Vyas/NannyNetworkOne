$(document).ready(function() {

  $.get("/api/listings").then(function(data) {
    $(".list-date").text(data.date);
    $(".list-name").text(data.name);
    $(".list-tel").text(data.phoneNumber);
    $(".list-email").text(data.email);
    $(".list-desc").text(data.description);
    $(".list-loc").text(data.location);
    $(".list-rate").text(data.hourRate);
  });
});
