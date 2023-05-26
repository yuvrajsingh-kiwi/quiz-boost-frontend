// Login from interface.
export interface LoginValues {
  email: string;
  password: string;
}

export interface LoginPageProps {
  onSubmit: (val: LoginValues) => void;
}
