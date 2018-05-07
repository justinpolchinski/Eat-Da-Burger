console.log("linking...");
$(document).ready(function(){
    var $addBurger = $("#addburger");
    $("#burgerImg").hide().fadeIn(1000);
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        ;
        var newBurger ={
            burger_name: $("#addBurger").val().trim(),
            devoured: 0
        };
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Then...");
            location.reload();
            
        })
    });
    $(".eatBurger").on("click",function(event){
        console.log(event);
        var id = $(this).val();
        console.log(id);
        var eatBurger = {
            devoured : 1
        }
        console.log(eatBurger);
        $.ajax('/api/burgers/'+id, {
            type: "PUT",
            data: eatBurger
        }).then(function(){
            console.log("Ate that!");
            location.reload();
        })
        
    })
});