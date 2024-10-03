import * as z from "zod";

const formSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  salary: z.string().min(1, { message: "Salary is required" }),
});

export type FormInputsT = z.infer<typeof formSchema>;

export default formSchema;
