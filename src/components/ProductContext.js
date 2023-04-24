import React, { useState, useEffect, createContext } from 'react'
import { productData } from '../data'

export const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {

    const [products, setProducts] = useState(productData)
    const [category, setCategory] = useState('Category (All)')
    const [categories, setCategories] = useState(['camera', 'fire alarm system', 'computer', 'POS machine'])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const allCategories = productData.map((product) => {
            return product.category
        })

        const uniqueCategory = ['Category (All)', ...new Set(allCategories)]

        setCategories(uniqueCategory)
    }, [])

    const handleClick = () => {
        setLoading(true)
        const isDefault = (str) => {
            return str.split(' ').includes('(All)')
        }

        const filteredProducts = productData.filter(products => products.category === category)
        setTimeout(() => {
            setLoading(false)
            return isDefault(category) ? setProducts(productData) : filteredProducts.length < 1 ? setProducts([]) : setProducts(filteredProducts)
        }, 1000)


    }


    return (
        <ProductContext.Provider value={{
            products,
            setProducts,
            loading,
            setLoading,
            category,
            setCategory,
            categories,
            handleClick
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider