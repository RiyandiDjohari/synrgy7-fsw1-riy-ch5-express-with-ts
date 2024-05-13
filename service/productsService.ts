import { products } from "../data/products";
import { Request, Response } from "express";

interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export const getProducts = (req: Request, res: Response) => {
  res.status(200).json({ message: "Success", products });
};

export const getProductsById = (req: Request, res: Response) => {
  const id: string = req.params.id;

  res.status(200).json({ message: "Success", data: products.find((row) => row.id == +id) });
};

export const createProducts = (req: Request, res: Response) => {
  const payload: Products = req.body;

  if (payload) {
    products.push(payload);
    res.status(201).json({ message: "Success", products });
  } else {
    res.status(400).json({ message: "Failed" });
  }
};

export const deleteProducts = (req: Request, res: Response) => {
  let id: string = req.params.id;

  const productIndex: number = products.findIndex((product) => product.id == +id);

  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    res.status(200).json({ message: `Delete id ${id} Success`, products });
  } else {
    res.status(404).json({ message: `Product with id ${id} not found` });
  }
};

export const updateProducts = (req: Request, res: Response) => {
  const id: string = req.params.id;
  const title: string = req.body.title;
  const description: string = req.body.description;
  const price: number = req.body.price;
  const discountPercentage: number = req.body.discountPercentage;
  const rating: number = req.body.rating;
  const stock: number = req.body.stock;
  const brand: string = req.body.brand;
  const category: string = req.body.category;
  const thumbnail: string = req.body.thumbnail;
  const images: string[] = req.body.images;

  const productIndex: number = products.findIndex((product) => product.id === +id);

  if (productIndex !== -1) {
    products[productIndex] = {
      id: Number(id),
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
    };
    res.status(200).json({ message: "Product Updated", products });
  } else {
    res.status(400).json({ message: `Product with id ${id} not found` });
  }
};
