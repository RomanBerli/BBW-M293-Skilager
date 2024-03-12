import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationForm from "../components/RegistrationForm";
import RegistrationFormTest from "../components/RegistrationFormTest";

export default function IndexPage() {
    return (
        <div>
            <h1>Home</h1>
            <p>This is the home page</p>

            {/* <RegistrationForm></RegistrationForm> */}
            <RegistrationFormTest></RegistrationFormTest>
        </div>
    )
}