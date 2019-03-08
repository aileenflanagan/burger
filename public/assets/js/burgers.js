$(function() {
    $(".dev-button").on("click", function(event) {
      console.log("devouring");
      var id = $(this).data("id");
      var changeDev= $(this).data("ch-dev")
  
      var newDev = {
        devoured: !changeDev
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDev
      }).then(
        function() {
          console.log("changed to devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burg").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });