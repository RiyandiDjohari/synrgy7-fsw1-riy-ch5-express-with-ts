import { data } from "../data/people";
import { Request, Response } from "express";

export const getPeople = (req: Request, res: Response) => {
  res.status(200).json({ message: "Success", data });
};

export const getPeopleById = (req: Request, res: Response) => {
  const id: string = req.params.id;

  res.status(200).json({ message: "success", data: data.find((row) => row.id == +id) });
};

export const createPeople = (req: Request, res: Response) => {
  const payload: { id: number; name: string; username: string; email: string } = req.body;

  if (payload) {
    data.push(payload);
    res.status(201).json({ message: "Success", data });
  } else {
    res.status(400).json({ message: "Failed" });
  }
};

export const deletePeople = (req: Request, res: Response) => {
  let id: string = req.params.id;

  const peopleIndex = data.findIndex((person) => person.id == +id);

  if (peopleIndex !== -1) {
    data.splice(peopleIndex, 1);
    res.status(200).json({ message: `Delete id ${id} Success`, data });
  } else {
    res.status(404).json({ message: `People with id ${id} not found` });
  }
};

export const updatePeople = (req: Request, res: Response) => {
  const id: string = req.params.id;
  const name: string = req.body.name;
  const username: string = req.body.username;
  const email: string = req.body.email;

  const peopleIndex = data.findIndex((people) => people.id === +id);

  if (peopleIndex !== -1) {
    data[peopleIndex] = {
      id: Number(id),
      name,
      username,
      email,
    };
    res.status(200).json({ message: "People Updated", data });
  } else {
    res.status(400).json({ message: `People with id ${id} not found` });
  }
};
