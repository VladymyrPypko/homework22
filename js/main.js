const kitchenProducts = [
    {
        type: 'grater',
        price: 10
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];

const devicesProducts = [
    {
        type: 'desktop',
        price: [100, 1000]
    },
    {
        type: 'laptop',
        price: [50, 1500]
    },
    {
        type: 'smartphone',
        price: [80, 2000]
    },
    {
        type: 'tablet',
        price: [20, 1300]
    }
];

const cosmeticsProducts = [
    {
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300
    }
];

const Kitchen = {category: 'kitchen'};
const Devices = {category: 'devices'};
const Cosmetics = {category: 'cosmetics'};

const getProto = (arr, proto) => {
    return arr.map(product => {
        let newProduct = Object.create(proto);
        for (let key in product) {
            newProduct[key] = product[key];
        }
        return newProduct;
    });
}

const kitchenProductsProto = getProto(kitchenProducts, Kitchen);
const devicesProductsProto = getProto(devicesProducts, Devices);
const cosmeticsProductsProto = getProto(cosmeticsProducts, Cosmetics);

const renderProducts = (products, category) => {
    products.forEach(product => {
        const productBox = document.createElement('div');
        productBox.classList.add('category__box');
        productBox.innerHTML = `
            <div class="category__image">
                <img src="images/${product.type}.svg" alt="${product.type}">
            </div>
            <div class="category__info">
                <p class="category__name">Name: <span>${product.type}</span></p>
                <p class="category__price">Price: <span>$${Array.isArray(product.price) ? product.price.join('-') : product.price}</span></p>
            </div>
        `;
        document.getElementById(category).appendChild(productBox);
    });
}

renderProducts(kitchenProductsProto, 'kitchen');
renderProducts(devicesProductsProto, 'devices');
renderProducts(cosmeticsProductsProto, 'cosmetics');