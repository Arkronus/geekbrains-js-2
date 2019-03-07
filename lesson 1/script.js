const goods = [
  { title: 'Shirt', price: 150, img: 'https://via.placeholder.com/200' },
  { title: 'Socks', price: 50, img: 'https://via.placeholder.com/200' },
  { title: 'Jacket', price: 350, img: 'https://via.placeholder.com/200' },
  { title: 'Shoes', price: 250, img: 'https://via.placeholder.com/200' },
];

const renderGoodsItem = (title='Widget', price=1, img='https://via.placeholder.com/200')=> 
  `<div class="card">
    <img src="${img}"></img>
    <div class="container">
      <h3 class="">${title}</h3>
      <p>Price: ${price}</p>
    </div>
  </div>`;

const renderGoodsList = list => {
  const goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img));
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
};

window.onload = () => {
  renderGoodsList(goods);
};