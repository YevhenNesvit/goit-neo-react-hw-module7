import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Базовий URL для бекенду
const BASE_URL = "https://67120d774eca2acdb5f6dada.mockapi.io/contacts";

// Операція для отримання всіх контактів
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для додавання нового контакту
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL, newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для видалення контакту по ID
export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
      try {
        await axios.delete(`${BASE_URL}/${contactId}`);
        return contactId; // Повертаємо ID видаленого контакту
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
