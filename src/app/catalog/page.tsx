import config from "@/config/config.json";
import { getAllTaxonomy, getTaxonomy } from "@/lib/taxonomyParser";
import { humanize } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import DynamicIcon from "@/helpers/DynamicIcon";
import Link from "next/link";
import Image from "next/image";
import catalog from "@/config/catalog.json"

export interface ICatalog {
    name: string;
    image: string;
    price: string;
  }

const Categories = () => {
  const {main}:{main:ICatalog[]} = catalog
  return (
    <>
      <SeoMeta title={"Categories"} />
      <section className="section bg-gray-200 dark:bg-darkmode-theme-light">
        <div className="text-center mb-8">
            <h2>OUR CATALOG</h2>
        </div>
        <div className="container row justify-start">          
            {main.map((catalog,i) => {
              return (
                <div key={catalog.name} className="bg-theme-light max-w-sm rounded overflow-hidden shadow-xl mb-10 mr-2 ml-2 xl:ml-4">
                  <div className="mt-5 column flex justify-center mb-2">
                    <Image 
                    src={catalog.image}
                    alt=""
                    width={280}
                    height={280}
                    />            
                  </div> 
                  <div className="ml-8">
                    <h4 className="mb-2 dark:text-stone-950">{catalog.name}</h4>
                    <p className="font-bold  dark:text-stone-950">{catalog.price}</p>         
                  </div>
                  <div className="text-center mt-5 mb-5">
                    <a href="https://www.zalora.co.id/p/adidas-adidas-originals-superstar-white-2324538" className=" py-2 px-8 rounded-lg hover:bg-blue-800 bg-gray-800 text-white">
                    <DynamicIcon className="inline-block" icon="FaCartShopping" /> BELI 
                    </a>
                  </div>                  
                </div>
              );
            })}         
        </div>
      </section>
    </>
  );
};

export default Categories;
