import { books } from "../data/books";
import { Request, Response } from "express";

interface Books {
  id: number,
  author: string,
  country: string,
  imageLink: string,
  language: string,
  link: string,
  pages: number,
  title: string,
  year: number,
}

export const getBooks = (req: Request, res: Response) => {
  res.status(200).json({ message: "Success", books });
};

export const getBooksById = (req: Request, res: Response) => {
  const id: string = req.params.id;

  res.status(200).json({ message: "Success", data: books.find((row) => row.id == +id) });
};

export const createBooks = (req: Request, res: Response) => {
  const payload: Books = req.body;

  if (payload) {
    books.push(payload);
    res.status(201).json({ message: "Created new book success", books });
  } else {
    res.status(400).json({ message: "Failed to create new book" });
  }
};

export const deleteBooks = (req: Request, res: Response) => {
  let id: string = req.params.id;

  const bookIndex: number = books.findIndex((book) => book.id == +id);

  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    res.status(200).json({ message: `Delete book with id ${id} Success`, books });
  } else {
    res.status(404).json({ message: `Book with id ${id} not found` });
  }
};

export const updateBooks = (req: Request, res: Response) => {
  const id: string = req.params.id;
  const author: string = req.body.author;
  const country: string = req.body.country;
  const imageLink: string = req.body.imageLink;
  const language: string = req.body.language;
  const link: string = req.body.link;
  const pages: number = req.body.pages;
  const title: string = req.body.title;
  const year: number = req.body.year;

  const bookIndex: number = books.findIndex((book) => book.id === +id);

  if (bookIndex !== -1) {
    books[bookIndex] = {
      id: Number(id),
      author,
      country,
      imageLink,
      language,
      link,
      pages,
      title,
      year,
    };
    res.status(200).json({ message: `Books with id ${id} Updated`, books });
  } else {
    res.status(400).json({ message: `Books with id ${id} not found` });
  }
};
