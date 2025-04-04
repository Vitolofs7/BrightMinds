import { useForm } from "react-hook-form";
import { FormStyled } from "./form.styled";

export default function FormComponent({ isSignUp = true }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

    const password = watch("password");

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
            {isSignUp && (
                <>
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                    <input
                        {...register("firstName", { required: "First Name is required", maxLength: 20 })}
                        placeholder="First Name"
                    />

                    {errors.lastName && <p>{errors.lastName.message}</p>}
                    <input
                        {...register("lastName", { required: "Last Name is required", maxLength: 40 })}
                        placeholder="Last Name"
                    />
                </>
            )}
            {errors.password && <p>{errors.password.message}</p>}
            <input
                type="password"
                {...register("password", {
                    required: "Password is required",
                    minLength: { value: 8, message: "Password must be at least 8 characters" },

                })}
                placeholder="Password"
            />

            {isSignUp && (
                <>
                    {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                    <input
                        type="password"
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) => value === password || "Passwords do not match",
                        })}
                        placeholder="Confirm Password"
                    />
                </>
            )}
            {isSignUp && (
                <input type="submit" value="Sign up" />
            )}
            {!isSignUp && (
                <input type="submit" value="Log in" />
            )}
        </FormStyled>
    );
}