var shop = {
	lid:3,
	title:'苹果',
	price:3444
}
if(shop.madeIn === undefined){
	shop.madeIn = '中国';
}
if(shop.hasOwnProperty('price')){
		shop.price*=0.9;
	} 
console.log(shop);
