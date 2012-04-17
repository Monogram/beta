(function(){
  $("#products .products_list_selecters").live("click", function(e){
    console.log(".products_list_selecters");
    console.log($(e.currentTarget).attr("target"));
    $("#product_content").load("contents/" + $(e.currentTarget).attr("target"));
  });
})();
