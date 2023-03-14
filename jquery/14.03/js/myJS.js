$(() => {
  $("#zeevik").on("click", () => {
    console.log("Hello class 92 - the best that lecturer can get...");
  });
});

$(() => {
  //$("div").animate({ height: "100px", opacity: 0.4 }, 3000);
  $("div").slideUp(300).delay(2000).fadeIn(300);
});
