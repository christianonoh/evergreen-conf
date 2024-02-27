import { z } from "zod";

export const cx = (...classNames: (string | undefined)[]) =>
  classNames.filter(Boolean).join(" ");

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const registrationSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  contactNumber: z
    .string()
    .regex(phoneRegex, {
      message: "Please enter a valid contact number",
    })
    .min(10, { message: "Please enter a valid contact number" })
    .max(14, { message: "Please enter a valid contact number" }),
  gender: z.string().min(1, { message: "Select your gender" }),
  organizationName: z.string().optional(),
  role: z
    .string({ invalid_type_error: "Role or Job title is required" })
    .min(2, { message: "Role or Job title is required" }),
  referralSource: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  attendanceMode: z.string().min(1, { message: "Select attendance mode" }),
  workshopsInterest: z
    .union([z.array(z.string()), z.string(), z.null()])
    .optional(),
  specialAccommodations: z.string().optional(),
  newsLetterSignup: z.boolean().optional(),
});

export type registrationSchemaType = z.infer<typeof registrationSchema>;
