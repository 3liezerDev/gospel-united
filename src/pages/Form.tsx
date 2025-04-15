import UserForm from "../components/shared/UserForm";

function Form() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo radial */}
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#14b8a6_100%)]" />

      {/* Contenido */}
      <UserForm />
    </div>
  );
}

export default Form;
