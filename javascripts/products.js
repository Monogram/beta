(function(){
  $("#products .products_list_selecters, #product_content .product_item").live("click", function(e){
    console.log(".products_list_selecters");
    console.log($(e.currentTarget).attr("target"));
    $("#product_content").load("contents/" + $(e.currentTarget).attr("target"));
  });
})();
