import FormRegister from "../../components/Auth/FormRegister";

const Register = () => {
    return (
        <section className='section container'>
            <h1 className="title">
                Regístrate Gratis
            </h1>
            <p className="subtitle">
                Ingresa tus datos
            </p>
            <FormRegister />
        </section>
    );
};

export default Register;