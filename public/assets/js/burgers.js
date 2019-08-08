$(function() {
    $(".change-availability").on("click", function(event) {
      var id = $(this).data("id");
      var burgerStatus = $(this).data("burgerStatus");
  
      var newBurgerStatus = {
        devoured: burgerStatus
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerStatus
      }).then(
        function() {
          console.log("changed status to", burgerStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("added new burger to the menu");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  