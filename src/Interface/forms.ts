// Login from interface.
export interface LoginValues {
  email: string;
  password: string;
}

export interface LoginPageProps {
  onSubmit: (val: LoginValues) => void;
}

// Regstration values.
export interface RegisterValues {
  name: string;
  email: string;
  password: string;
}

// Registration page props.
export interface RegistrationProps {
  onSubmit: (val: RegisterValues) => void;
}
