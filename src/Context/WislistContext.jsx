import React, { createContext, useEffect, useState } from 'react'
import Product from '../Api/Product'
import Swal from 'sweetalert2';
export const WisListdata = createContext()

export const WislistContext = ({ children }) => {

    const [dataWislist, setDataWislist] = useState([])

    const WislistFunc = (id) => {
        let localWishlist = JSON.parse(localStorage.getItem('dataWislist')) || [];
        let alreadyExists = localWishlist.find((item) => item.id === id);
        if (alreadyExists) {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: `<p className="custom-text-sweetAlirt">Product already in wishlist</p>`,
                showConfirmButton: false,
                timer: 1500,
            });
            return;

        }
        let updatedWishlist = [...localWishlist, { id }];
        localStorage.setItem('dataWislist', JSON.stringify(updatedWishlist));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `<p className="custom-text-sweetAlirt">Product added to wishlist</p>`,
            showConfirmButton: false,
            timer: 1500,
        });
        filterWishlist()
    }

    const RemoveWishListfunc = (id)=>{
        let DataRemove = JSON.parse(localStorage.getItem('dataWislist')) || []
        let RemoveDataAsein = DataRemove.filter((wishlistRemove)=> wishlistRemove.id != id )
        localStorage.setItem('dataWislist', JSON.stringify(RemoveDataAsein))
        filterWishlist()
    }
    

    const filterWishlist = () => {
        let storedWishlist = JSON.parse(localStorage.getItem('dataWislist')) || [];

        if (storedWishlist && Product?.length > 0) {
            let result = storedWishlist.map((item) => {
                let product = Product.find((p) => p.id === item.id);
                return product;
            }).filter(Boolean);

            setDataWislist(result);
        }
    };

   
    useEffect(() => {
        filterWishlist()
    }, [Product])
    return (
        <>
            <WisListdata.Provider value={{dataWislist, WislistFunc, RemoveWishListfunc }}>
                {children}
            </WisListdata.Provider>
        </>
    )
}
