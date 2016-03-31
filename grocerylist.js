var myList = [{
	item: "Coffee ",
	price: 2.95,
},
{
	item: "Milk ",
	price: 1.99,
},
{
	item: "Hot Dogs ",
	price: 2.10,
},
{
	item: "Bananas ",
	price: .99,
}]
myList.forEach (function(list){
	console.log(list.item + "= $" + list.price);
})