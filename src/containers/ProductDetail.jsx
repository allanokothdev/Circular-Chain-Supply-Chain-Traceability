import RatingBar from '../components/RatingBar'
import Tab from '../components/Tab'
import Stages from '../components/Stages'

export default function ProductDetail() {
  return (
    <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">

          <div className="w-full px-4">

            <ul className="flex flex-wrap items-center mb-4">
              <li className="mr-6">
                <a className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" href="circularchain.com" >
                  <span>Home</span>
                  <svg className="ml-6" width={4} height={7} viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                    <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="circularchain.com" >  Yeezy Tee - Black </a>
              </li>
            </ul>

          </div>

          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">

            <div className="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
              <div className="w-full sm:w-9/12 px-4">
                <img
                  className="mb-5"
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg"
                  alt=""
                />
              </div>
            </div>

          </div>

          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-md mb-6">
              <h2 className="mt-4 mb-2 text-4xl md:text-4xl lg:text-2xl font-heading font-medium">
                Yeezy Tee - Black
              </h2>
              <p className="flex items-center mb-4">
                <span className="mr-2 text-sm text-blue-500 font-medium">$</span>
                <span className="text-2xl text-blue-500 font-medium">44.90</span>
              </p>
            </div>

            <h4 className="mb-4 font-heading font-medium">Sustainability information powered by Circular Chain</h4>

            <RatingBar />
            <RatingBar />
            <RatingBar />
            <RatingBar />
            <RatingBar />

            <div className="flex flex-wrap -mx-2 mb-12">
              <div className="w-full md:w-2/3 px-2 mb-2 md:mb-0">
                <a className="block py-2 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl" href="circularchain.com"> Add to bag</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Tab />
      <Stages />



    </section>
  )
}
