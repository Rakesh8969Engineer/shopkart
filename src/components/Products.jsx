import { React, useState, useEffect } from "react";

function Products() {
  const [apidata, Setapidata] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    const jsondata = await result.json();
    Setapidata(jsondata);
  };

  return (
    <>
      <div className="max-w-full">
        <p className="text-[4rem] mobile:text-[2rem] font-bold alignment mt-[3rem] alignment">
          New Products
        </p>
        <ul>
          <li className="h-line-productpage alignment mobile:w-[900px]"></li>
        </ul>
        <ul className="flex flex-col gap-1 alignment font-[Poppins] mobile:flex mobile:flex-row mobile:gap-6 mobile:text-[0.85rem] ">
          <li className="mobile:ml-2 ">Apparel</li>
          <li className="  font-semibold text-xl mobile:text-[0.85rem] mobile:mb-[-0.5rem]">
            Accessories
          </li>
          <li>Best sellers</li>
          <li>50% off</li>
        </ul>

        <div className="product-grid ml-[4rem] mobile:ml-0 mobile:p-2">
          {apidata.map((product) => (
            <div className="product-item" key={product.id}>
              <div className="product-image">
                <img src={product.image}></img>
              </div>
              <div className="max-w-[400px] max-h-[60px] overflow-hidden p-2">
                <p className="text-[1rem] text-start font-bold text-[#000000]">
                  {product.title.toUpperCase()}
                </p>
              </div>

              <div className="w-[300px] h-[60px]  text-start  text-sm overflow-hidden ">
                {" "}
                <p className=" text-[black] text-opacity-50 text-[1rem]">
                  {product.description}
                </p>
              </div>
              <p className="font-semibold text-start p-2 font-[Poppins] text-[#333]">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
