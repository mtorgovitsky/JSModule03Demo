$(document).ready(function () {
    //your code here
});

$(document).ready(function () {
    //$(".green").text("gggggg");
});

$(document).ready(
    function () {
        $("h2").each(
            function fff() {
                this.style.color = "red";
            }
        );
    }
);

$(document).ready(
    function () {
        $("h2").eq(2).css("color", "green");
    });

//will work only onLoadDocument 
 $("h3").eq(1).css("color", "green");
