import { useForm } from "react-hook-form";
import { FormStyled } from "./form.styled";
import { registerUser, loginUser } from "../../services/auth.service"; // Asegúrate de importar ambos servicios
import { useNavigate } from "react-router-dom"; // Importar useNavigate

export default function FormComponent({ isSignUp = true }) {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const password = watch("password");
    const navigate = useNavigate(); // Inicializar el hook navigate

    const onSubmit = async (data) => {
        try {
            if (isSignUp) {
                // Crear el objeto con los datos del usuario para enviar al backend al registrarse
                const userPayload = {
                    name: data.firstName,
                    lastName: data.lastName,
                    role: "user", // Asignando un rol predeterminado
                    email: data.email,
                    password: data.password,
                };

                console.log("📨 Form submitted with the following data:", userPayload);

                // Enviar los datos al backend utilizando el servicio de registro
                const response = await registerUser(userPayload);

                console.log("✅ Registration response from backend:", response);

                // Mostrar un mensaje de éxito
                alert("User successfully registered!");
                reset(); // Limpiar el formulario después del registro

                // Redirigir al usuario a la página de login
                navigate("/login"); // Redirigir al login
            } else {
                // Si es un formulario de login
                const response = await loginUser(data.email, data.password);

                console.log("✅ Login response from backend:", response);

                // Almacenar el token o realizar cualquier otra acción necesaria (como redirigir)
                alert("Login successful!");
                navigate("/dashboard"); // O cualquier página a la que quieras redirigir al usuario después de loguearse
            }
        } catch (error) {
            console.error("❌ Error during operation:", error);
            alert(isSignUp ? "Registration failed. Please try again." : "Login failed. Please check your credentials.");
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
            {isSignUp ? (
                <input type="submit" value="Sign up" />
            ) : (
                <input type="submit" value="Log in" />
            )}
        </FormStyled>
    );
}
