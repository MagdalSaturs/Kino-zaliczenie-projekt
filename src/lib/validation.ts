import { z } from "zod";

export const personalDataSchema = z.object({
  firstName: z
    .string()
    .min(2, "Imię musi mieć co najmniej 2 znaki")
    .regex(/^[A-Za-zÀ-ž\s]+$/, "Imię może zawierać tylko litery"),

  lastName: z
    .string()
    .min(2, "Nazwisko musi mieć co najmniej 2 znaki")
    .regex(/^[A-Za-zÀ-ž\s]+$/, "Nazwisko może zawierać tylko litery"),

  email: z.string().email("Niepoprawny adres email"),

  age: z
    .string()
    .refine((val) => Number(val) >= 18, "Musisz mieć co najmniej 18 lat"),
});

export type PersonalData = z.infer<typeof personalDataSchema>;
