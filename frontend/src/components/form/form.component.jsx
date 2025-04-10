import { useForm } from "react-hook-form";
import { FormStyled } from "./form.styled";
import { registerUser, loginUser } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { getUsername } from "../../App";
import { useUser } from "../../utils/userProvider/userProvider";

export default function FormComponent({ isSignUp = true, onLoginSuccess }) {
    const { setUser } = useUser();
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const password = watch("password");
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            if (isSignUp) {
                // Lógica de registro
                const userPayload = {
                    name: data.firstName,
                    lastName: data.lastName,
                    role: "user",
                    email: data.email,
                    password: data.password,
                };

                await registerUser(userPayload);
                reset();
                navigate("/login"); // Redirige al login después del registro exitoso
            } else {
                // Lógica de login
                const response = await loginUser(data.email, data.password);

                // Verificar que la respuesta contiene un token
                if (response.token) {
                    localStorage.setItem("token", response.token); // Guarda el token en el localStorage



                    // Actualizar el estado de autenticación en el componente superior
                    if (onLoginSuccess) {
                        onLoginSuccess(); // Llama al callback para actualizar el estado en el componente superior

                    }

                    // Redirige a la página principal después de un login exitoso
                    navigate("/homepage"); // Redirige aquí directamente
                } else {
                    throw new Error("No token received");
                }
            }
        } catch (error) {
            const message = error.response?.data?.message || (isSignUp
                ? "Registration failed. Please try again."
                : "Login failed. Please check your credentials.");
            console.error("Auth error:", message);
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

            <input type="submit" value={isSignUp ? "Sign up" : "Log in"} />
        </FormStyled>
    );
}
