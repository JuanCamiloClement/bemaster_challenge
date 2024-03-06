type TErrors = {
  email: string,
  password: string
}

const validators = {
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};

export const validateField = (state: TErrors, fieldName: "email" | "password", value: string) => {
  let errorMessage = "";

  const errorActions = {
    email: () => validators.email.test(value) ? "" : "Correo inválido. Ej: correo.ejemplo123@ejemplo.com",
    password: () => validators.password.test(value) ? "" : "La contraseña debe contener al menos 8 caracteres, una letra y un número"
  }

  errorMessage = errorActions[fieldName]();

  return { ...state, [fieldName]: errorMessage }
}