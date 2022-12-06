import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { loadProduct } from '../../store/asyncActions/product';

export default function ProductDescrPage() {
  const {product_id} = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadProduct(product_id));
  }, []);

  return (
    <div>
        {/* <p>{product.title}</p> */}
    </div>
  )
}
