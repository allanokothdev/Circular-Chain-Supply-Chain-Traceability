
const products = [
  {
    id: 1,
    name: 'LV Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's LV Tee in black.",
    price: '$35',
    brand: 'LV',
  },
  {
    id: 2,
    name: 'Yeezy Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Yeezy Tee in black.",
    price: '$35',
    brand: 'Yeezy',
  },
  {
    id: 3,
    name: 'GAP Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's GAP Tee in black.",
    price: '$35',
    brand: 'GAP',
  },
  {
    id: 4,
    name: 'Nike Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Front of men's Nike Tee in black.",
    price: '$30',
    brand: 'Nike',
  },
  {
    id: 5,
    name: 'Adidas Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Adidas Tee in black.",
    price: '$35',
    brand: 'Adidas',
  },
  {
    id: 6,
    name: 'Puma Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Puma Tee in black.",
    price: '$40',
    brand: 'Puma',
  },
  {
    id: 7,
    name: 'Yeezy Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's Yeezy Tee in black.",
    price: '$45',
    brand: 'Yeezy',
  },
  {
    id: 8,
    name: 'Nike Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Front of men's Nike Tee in black.",
    price: '$45',
    brand: 'Nike',
  },
  {
    id: 9,
    name: 'Adidas Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Adidas Tee in black.",
    price: '$35',
    brand: 'Adidas',
  },
  {
    id: 10,
    name: 'Puma Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Puma Tee in black.",
    price: '$40',
    brand: 'Puma',
  },
  {
    id: 11,
    name: 'Yeezy Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's Yeezy Tee in black.",
    price: '$45',
    brand: 'Yeezy',
  },
  {
    id: 12,
    name: 'Nike Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Front of men's Nike Tee in black.",
    price: '$45',
    brand: 'Nike',
  },
  // More products...
]

export default function ProductList() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}> <span aria-hidden="true" className="absolute inset-0" />  {product.name}</a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
