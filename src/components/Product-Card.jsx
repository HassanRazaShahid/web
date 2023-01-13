import ProductImage from '../images/product-card/product.jpg'
import IconCart from '../images/product-card/icon-cart.svg'


export default function ProductCard(){
    return(
    <div className="">
        <h1 className='text-2xl font-serif justify-center mt-5 flex'>
            Product Card
        </h1>
            <div class="flex md:flex-row flex-col max-w-lg shadow-xl md:rounded-md md:overflow-hidden mx-auto my-10">

            <img src={ProductImage} alt="product" class="md:w-1/2 w-full md:h-full h-52 object-cover" />
            
            <div class="flex flex-col md:w-1/2 gap-4 p-5 justify-around">

                <h2 class="tracking-widest text-slate-500">PERFUME</h2>

                <h2 class="text-xl font-serif">The Best Fragrance Perfume Aroused Aroma</h2>

                <p class="text-sm text-slate-500">
                    A floral, solar and voluptous iterpretation composed by Hassan Raza, Perfumer-Creator for the House Channel.
                </p>

                <div class="flex justify-between items-center">
                    <p class="text-green-900 font-serif text-xl lining-nums">$149.99</p>
                    <p class="text-sm text-slate-500 line-through">$169.99</p>
                </div>

                <button class="bg-green-800 rounded-md flex justify-center gap-5 items-center p-3">
                    <img src={IconCart} alt="icon-cart" class="h-5" />
                    <span class="text-white">Add to Cart</span>
                </button>
            </div>
        </div>
    </div>
    )
}