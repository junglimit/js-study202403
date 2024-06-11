
import  Product  from "./components/Product.js";

// 상품 데이터
const p1 = new Product('에어팟',200000, '에어팟으로 노래를 들어요.', 'https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg' )
const p2 = new Product('족발', 40000, '냠냠쩝쩝 족발 존맛.', 'https://i.namu.wiki/i/I63sEiy-8vUXVhV-I0IZiS9ntT0INuKXgBYAE3QqUvOlToSoEqSgpvEbUmxsFTXtoBRN4WJolyAFEAlDdeZFhQ.webp')

const productList = {
  products: [
    p1,
    p2,
    new Product('요구르트', 500, '달디단요구르트', 'https://blisgo.com/wp-content/uploads/elementor/thumbs/%EC%9A%94%EA%B5%AC%EB%A5%B4%ED%8A%B8-%EB%B3%91-p5n5r18iqjwaho4l8dypfovtexj3hmml83x90jofls.jpg')
  ],

  render() {
    const $prodList = document.createElement('ul');
    $prodList.classList.add('product-list');
    // 반복해서 li태그 생성
    // console.log('products: ', this.products);
    this.products.forEach(prod => {
      const $prodLi = document.createElement('li')
      $prodLi.classList.add('product-item');
      $prodLi.innerHTML = `
      <div>
        <img src="${prod.image}" alt="${prod.title}">
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>${prod.price}원</h3>
          <p>${prod.desc}</p>
          <button>담기</button>
        </div>
      </div>
    `;

    $prodList.appendChild($prodLi);

    });
    // div#app에 ul 추가
    document.getElementById('app').appendChild($prodList);
  },
};

productList.render();