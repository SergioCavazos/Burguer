// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

// MODIFICAR ESTATUS DE DEVOUR CON PUT   
    $(".change-eaten").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("neweat");
      var newEatenState = {
        eaten: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed eaten status to", newEat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
 
// AGREGAR HAMGURGER A DB CON POST 
    $(".add-burger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: false 
      };
      console.log(newBurger);
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
  