import { useForm } from "react-hook-form";
import { FormStyled } from "./form.styled";
import { registerUser } from "../../services/auth.service"; // Asegúrate que esta ruta sea correcta

export default function FormComponent() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm();

    const password = watch("password");

    const onSubmit = async (data) => {
        try {
            const userPayload = {
                name: data.firstName,
                lastName: data.lastName,
                role: "user", // Default role
                email: data.email,
                password: data.password,
            };

            console.log("📨 Form submitted with the following data:", userPayload);

            const response = await registerUser(userPayload);

            console.log("✅ Registration response from backend:", response);

            alert("User successfully registered!");
            reset();
        } catch (error) {
            console.error("❌ Registration error:", error);
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            {errors.email && <p>{errors.email.message}</p>}
            <input
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                    },
                })}
                placeholder="Email"
            />

            {errors.firstName && <p>{errors.firstName.message}</p>}
            <input
                {...register("firstName", {
                    required: "First Name is required",
                    maxLength: 20,
                })}
                placeholder="First Name"
            />

            {errors.lastName && <p>{errors.lastName.message}</p>}
            <input
                {...register("lastName", {
                    required: "Last Name is required",
                    maxLength: 40,
                })}
                placeholder="Last Name"
            />

            {errors.password && <p>{errors.password.message}</p>}
            <input
                type="password"
                {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                    },
                })}
                placeholder="Password"
            />

            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            <input
                type="password"
                {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                        value === password || "Passwords do not match",
                })}
                placeholder="Confirm Password"
            />

            <input type="submit" value="Sign up" />
        </FormStyled>
    );
}
