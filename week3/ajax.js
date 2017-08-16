//ID c6c37e43
//key ae1652e75d9c9ec32d8615c2623155d7

var id = "c6c37e43";
var key = "ae1652e75d9c9ec32d8615c2623155d7";
var foodURL = "https://api.nutritionix.com/v1_1/search/big%20mac?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat" +
              "&appId=" + id + "&appKey=" + key; 

$.ajax({
    url: foodURL,
    success: function(data){
        //console.log(data);
        var food = data.hits[0];
        var name = food.fields.brand_name;
        var cals = fields.nf_calories;

        $("body").append("<h2> This " + name + " has " + cals + "kcal!!!</h2> ")
    }
});