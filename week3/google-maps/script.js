var area= "NewYork";
document.getElementById("map").src="https://maps.googleapis.com/maps/api/staticmap?center="+location+"&size=640x400&style=element:labels|visibility:off&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyAh_F5H0fkVbgqa9H3kiuauBFvglRBqnVE";
function changeArea(){
    area = document.getElementById("new area").value;
}