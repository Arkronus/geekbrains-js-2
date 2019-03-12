class GoodsItem{
  constructor(title, price, description = null, img=null){
    this.title = title;
    this.price = price;
    this.description = description;
    this.img = img;
  }

  render(){
    return  `<div class="card">
              <img src="${img}"></img>
              <div class="container">
                <h3 class="">${title}</h3>
                <p>Price: ${price}</p>
              </div>
            </div>`;
  }

}

class GoodsList {
  constructor(){
    this.goodsList = [];
  }

  countTotalPrice(){
    goodsList.map(goods => goods.price).reduce(function(sum, current){
      return sum + current;
    });
  }

  addToCart(){

  }
  fetchGoods(){
    this.goodsList = [
      { title: 'Shirt', price: 150, img: 'https://via.placeholder.com/200' },
      { title: 'Socks', price: 50, img: 'https://via.placeholder.com/200' },
      { title: 'Jacket', price: 350, img: 'https://via.placeholder.com/200' },
      { title: 'Shoes', price: 250, img: 'https://via.placeholder.com/200' },
    ];
  }
}

const renderGoodsList = list => {
  const goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img));
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
};

window.onload = () => {
  renderGoodsList(goods);
};