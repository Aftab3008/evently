"use server";

import { CreateCategoryParams } from "@/types";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";
import Category from "../database/models/category.model";

export const createCategory = async ({
  categoryName,
}: CreateCategoryParams) => {
  try {
    await connectToDatabase();
    const newcategory = await Category.create({ name: categoryName });
    return JSON.parse(JSON.stringify(newcategory));
  } catch (error) {
    handleError(error);
  }
};

export const getAllCategories = async () => {
  try {
    await connectToDatabase();
    const categories = await Category.find();
    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    handleError(error);
  }
};
