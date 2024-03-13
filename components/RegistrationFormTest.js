import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import styles from './RegistrationFormTest.module.css';
import { FaCheckCircle } from 'react-icons/fa';


export default function RegistrationForm() {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        participant: {
            genderChoiche: "",
            firstName: "",
            lastName: "",
            email: "",
            street: "",
            zipCode: "",
            city: "",
            AHV: "",
            birthday: "",
            phone: "",
            vegetarian: false,
            ga: false,
        },
        parentPart1: {
            genderChoiche: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            street: "",
            zipCode: "",
            city: ""
        },
        parentPart2: {
            genderChoiche: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            street: "",
            zipCode: "",
            city: ""
        },
        billing: {
            genderChoiche: "",
            firstName: "",
            lastName: "",
            street: "",
            zipCode: "",
            city: ""
        },
        sport: {
            sportChoiche: "",
            niveau: "",
            message: ""
        }
    });

    const router = useRouter();

    const handleChange = (section, field, value) => {
        setUserData(prevData => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: value,
            },
        }));
    };

    const nextStep = (e) => {
        setStep(step + 1)
        // handleChange(e)
    };
    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        router.push('/SuccessPage');
    };

    useEffect(() => { console.log(userData) }, [userData]);

    useEffect(() => {
        if (step === 6) {
            setTimeout(() => {
                setStep(7);
            }, 5000);
        }
    }, [step === 6]);

    switch (step) {
        case 1:
            return (
                <div className="container mt-5">
                    <h1>Angaben zum/zur Teilnehmer/in</h1>
                    <h1 className="border-bottom grey-border"></h1>
                    <form onChange={handleChange}>
                        {/* Gender Select */}
                        <div className="mb-3">
                            <label htmlFor="genderChoiche" className="form-label">Geschlecht</label>
                            <select className="form-select" id="genderChoiche" name="genderChoiche" value={userData.participant.genderChoiche} onChange={(e) => handleChange('participant', 'genderChoiche', e.target.value)}>
                                <option value="" disabled hidden>Wählen Sie Ihr Geschlecht</option>
                                <option value="m">Männlich</option>
                                <option value="w">Weiblich</option>
                                <option value="d">Divers</option>
                            </select>
                        </div>
                        {/* First Name Input */}
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">Vorname</label>
                            <input type="text" className="form-control" id="firstName" name="firstName" value={userData.participant.firstName} onChange={(e) => handleChange('participant', 'firstName', e.target.value)} />
                        </div>
                        {/* Last Name Input */}
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Nachname</label>
                            <input type="text" className="form-control" id="lastName" name="lastName" value={userData.participant.lastName} onChange={(e) => handleChange('participant', 'lastName', e.target.value)} />
                        </div>
                        {/* Email Input */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={userData.participant.email} onChange={(e) => handleChange('participant', 'email', e.target.value)} />
                        </div>
                        {/* Street Input */}
                        <div className="mb-3">
                            <label htmlFor="street" className="form-label">Strasse</label>
                            <input type="text" className="form-control" id="street" name="street" value={userData.participant.street} onChange={(e) => handleChange('participant', 'street', e.target.value)} />
                        </div>
                        {/* Zip Code Input */}
                        <div className="mb-3">
                            <label htmlFor="zipCode" className="form-label">PLZ</label>
                            <input type="text" className="form-control" id="zipCode" name="zipCode" value={userData.participant.zipCode} onChange={(e) => handleChange('participant', 'zipCode', e.target.value)} />
                        </div>
                        {/* City Input */}
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">Ort</label>
                            <input type="text" className="form-control" id="city" name="city" value={userData.participant.city} onChange={(e) => handleChange('participant', 'city', e.target.value)} />
                        </div>
                        {/* AHV Number Input */}
                        <div className="mb-3">
                            <label htmlFor="AHV" className="form-label">AHV-Nummer</label>
                            <input type="text" className="form-control" id="AHV" name="AHV" value={userData.participant.AHV} onChange={(e) => handleChange('participant', 'AHV', e.target.value)} />
                        </div>
                        {/* Birthday Input */}
                        <div className="mb-3">
                            <label htmlFor="birthday" className="form-label">Geburtsdatum</label>
                            <input type="date" className="form-control" id="birthday" name="birthday" value={userData.participant.birthday} onChange={(e) => handleChange('participant', 'birthday', e.target.value)} />
                        </div>
                        {/* Phone Input */}
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Telefonnummer</label>
                            <input type="text" className="form-control" id="phone" name="phone" value={userData.participant.phone} onChange={(e) => handleChange('participant', 'phone', e.target.value)} />
                        </div>
                        {/* Vegetarian Checkbox */}
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="vegetarian" name="vegetarian" checked={userData.participant.vegetarian} onChange={(e) => handleChange('participant', 'vegetarian', e.target.checked)} />
                            <label className="form-check-label" htmlFor="vegetarian">Ich bin Vegetarier/in</label>
                        </div>
                        {/* GA Checkbox */}
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="ga" name="ga" checked={userData.participant.ga} onChange={(e) => handleChange('participant', 'ga', e.target.checked)} />
                            <label className="form-check-label" htmlFor="ga">Ich besitze ein GA</label>
                        </div>
                        <div className={styles.firstbutton}>
                            <button type="button" className="btn btn-primary" onClick={nextStep}>Weiter</button>
                        </div>
                    </form>
                </div>
            );
        case 2:
            return (
                <div className="container mt-5">
                    <form onChange={handleChange}>
                        <h1>Angaben zum Vater</h1>
                        <h1 className="border-bottom grey-border"></h1>

                        <div className="mb-3">
                            <label htmlFor="genderChoiche" className="form-label">Geschlecht</label>
                            <select className="form-select" id="genderChoiche" name="genderChoiche" value={userData.parentPart1.genderChoiche} onChange={(e) => handleChange('parentPart1', 'genderChoiche', e.target.value)}>
                                <option value="" disabled hidden>Wählen Sie Ihr Geschlecht</option>
                                <option value="m">Männlich</option>
                                <option value="w">Weiblich</option>
                                <option value="d">Divers</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="firstName" class="form-label">Vorname</label>
                            <input type="text" class="form-control" id="firstName" aria-describedby="firstNameHelp" value={userData.parentPart1.firstName} onChange={(e) => handleChange('parentPart1', 'firstName', e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Nachname</label>
                            <input type="text" class="form-control" id="lastName" value={userData.parentPart1.lastName} onChange={(e) => handleChange('parentPart1', 'lastName', e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="email-parents" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email-parents" value={userData.parentPart1.email} onChange={(e) => handleChange('parentPart1', 'email', e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="phone-parents" class="form-label">Telefonnummer</label>
                            <input type="phone" class="form-control" id="phone-parents" value={userData.parentPart1.phone} onChange={(e) => handleChange('parentPart1', 'phone', e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="home-street-address" class="form-label">Strasse</label>
                            <input type="home-street-address" class="form-control" id="home-street-address" value={userData.parentPart1.street} onChange={(e) => handleChange('parentPart1', 'street', e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="home-zip-code" class="form-label">PLZ</label>
                            <input type="home-zip-code" class="form-control" id="home-zip-code" value={userData.parentPart1.zipCode} onChange={(e) => handleChange('parentPart1', 'zipCode', e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="home-city" class="form-label">Ort</label>
                            <input type="home-city" class="form-control" id="home-city" value={userData.parentPart1.city} onChange={(e) => handleChange('parentPart1', 'city', e.target.value)} />
                        </div>
                        <div className={styles.buttoncontainer}>
                            <button type="button" class="btn btn-primary" onClick={prevStep}>Zurück</button>
                            <button type="button" class="btn btn-primary" onClick={nextStep}>Weiter</button>
                        </div>
                    </form>
                </div>
            );
        case 3:
            return (
                <div className="container mt-5">
                    <form onChange={handleChange}>
                        <h1>Angaben zur Mutter</h1>
                        <h1 className="border-bottom grey-border"></h1>

                        <div className="mb-3">
                            <label htmlFor="genderChoiche" className="form-label">Geschlecht</label>
                            <select className="form-select" id="genderChoiche" name="genderChoiche" value={userData.parentPart2.genderChoiche} onChange={(e) => handleChange('parentPart2', 'genderChoiche', e.target.value)}>
                                <option value="" disabled hidden>Wählen Sie Ihr Geschlecht</option>
                                <option value="m">Männlich</option>
                                <option value="w">Weiblich</option>
                                <option value="d">Divers</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="firstName" class="form-label">Vorname</label>
                            <input type="text" class="form-control" id="firstName" aria-describedby="firstNameHelp" value={userData.parentPart2.firstName} onChange={(e) => handleChange('parentPart2', 'firstName', e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Nachname</label>
                            <input type="text" class="form-control" id="lastName" value={userData.parentPart2.lastName} onChange={(e) => handleChange('parentPart2', 'lastName', e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="email-parents" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email-parents" value={userData.parentPart2.email} onChange={(e) => handleChange('parentPart2', 'email', e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="phone-parents" class="form-label">Telefonnummer</label>
                            <input type="phone" class="form-control" id="phone-parents" value={userData.parentPart2.phone} onChange={(e) => handleChange('parentPart2', 'phone', e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="home-street-address" class="form-label">Strasse</label>
                            <input type="home-street-address" class="form-control" id="home-street-address" value={userData.parentPart2.street} onChange={(e) => handleChange('parentPart2', 'street', e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="home-zip-code" class="form-label">PLZ</label>
                            <input type="home-zip-code" class="form-control" id="home-zip-code" value={userData.parentPart2.zipCode} onChange={(e) => handleChange('parentPart2', 'zipCode', e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="home-city" class="form-label">Ort</label>
                            <input type="home-city" class="form-control" id="home-city" value={userData.parentPart2.city} onChange={(e) => handleChange('parentPart2', 'city', e.target.value)} />
                        </div>
                        <div className={styles.buttoncontainer}>
                            <button type="button" class="btn btn-primary" onClick={prevStep}>Zurück</button>
                            <button type="button" class="btn btn-primary" onClick={nextStep}>Weiter</button>
                        </div>
                    </form>
                </div>
            );
        case 4:
            return (
                <div className="container mt-5">
                    <form onChange={handleChange}>
                        <h1>Rechnungsadresse</h1>
                        <h1 className="border-bottom grey-border"></h1>
                        <div class="mb-3">
                            <label htmlFor="genderChoiche" className="form-label">Geschlecht</label>
                            <select className="form-select" id="genderChoiche" name="genderChoiche" value={userData.billing.genderChoiche} onChange={(e) => handleChange('billing', 'genderChoiche', e.target.value)}>
                                <option value="" disabled hidden>Wählen Sie Ihr Geschlecht</option>
                                <option value="m">Männlich</option>
                                <option value="w">Weiblich</option>
                                <option value="d">Divers</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="firstName" class="form-label">Vorname</label>
                            <input type="text" class="form-control" id="firstName" aria-describedby="firstNameHelp" value={userData.billing.firstName} onChange={(e) => handleChange('billing', 'firstName', e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Nachname</label>
                            <input type="text" class="form-control" id="lastName" value={userData.billing.lastName} onChange={(e) => handleChange('billing', 'lastName', e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="home-street-address" class="form-label">Strasse</label>
                            <input type="home-street-address" class="form-control" id="home-street-address" value={userData.billing.street} onChange={(e) => handleChange('billing', 'street', e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="home-zip-code" class="form-label">PLZ</label>
                            <input type="home-zip-code" class="form-control" id="home-zip-code" value={userData.billing.zipCode} onChange={(e) => handleChange('billing', 'zipCode', e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="home-city" class="form-label">Ort</label>
                            <input type="home-city" class="form-control" id="home-city" value={userData.billing.city} onChange={(e) => handleChange('billing', 'city', e.target.value)} />
                        </div>
                        <div className={styles.buttoncontainer}>
                            <button type="button" class="btn btn-primary" onClick={prevStep}>Zurück</button>
                            <button type="button" class="btn btn-primary" onClick={nextStep}>Weiter</button>
                        </div>
                    </form>
                </div>
            );
        case 5:
            return (
                <div className="container mt-5">
                    <form onSubmit={handleSubmit}>
                        <h1>Sport-Wahl</h1>
                        <h1 className="border-bottom grey-border"></h1>
                        <div class="mb-3">
                            <label htmlFor="sportChoiche" className="form-label">Sportart</label>
                            <select className="form-select" id="sportChoiche" name="sportChoiche" value={userData.sport.sportChoice} onChange={(e) => handleChange('sport', 'sportChoiche', e.target.value)}>
                                <option value="" selected disabled hidden>Wählen Sie Ihre Sportart</option>
                                <option value="Ski">Ski</option>
                                <option value="Snowboard">Snowboard</option>
                                <option value="Schlitteln">Schlitteln</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="niveau-select" class="form-label">Niveau</label>
                            <select class="form-select" id="niveau-select" aria-describedby="niveau-selectHelp" value={userData.sport.niveau} onChange={(e) => handleChange('sport', 'niveau', e.target.value)}>
                                <option value="" selected disabled hidden>Bitte auswählen</option>
                                <option value="Anfänger">Anfänger</option>
                                <option value="Gut">Gut</option>
                                <option value="Fortgeschritten">Fortgeschritten</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <div className="form-group">
                                <label htmlFor="message">Mitteilungen</label>
                                <input type="text" className="form-control" id="message" placeholder="Alergien? Medikamente? etc." value={userData.sport.message} onChange={(e) => handleChange('sport', 'message', e.target.value)} />
                            </div>
                        </div>
                        <div className={styles.buttoncontainer}>
                            <button type="button" class="btn btn-primary" onClick={prevStep}>Zurück</button>
                            <button type="button" class="btn btn-primary" onClick={nextStep}>Fertig</button>
                        </div>
                    </form>
                </div>
            );
        case 6:
            return (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <FaCheckCircle size={100} color="green" />
                    <h1>Registration Successful</h1>
                </div>

            );
        case 7:
            return (
                <div className="container mt-5">
                    <h2>Ihre Anmeldung wurde mit diesen Daten verschickt.</h2>
                    <hr />
                    <h3>Teilnehmer</h3>
                    <p>Name: {userData.participant.firstName} {userData.participant.lastName}</p>
                    <p>Email: {userData.participant.email}</p>
                    <p>Tel: {userData.participant.phone}</p>
                    <p>Adresse: {userData.participant.street} {userData.participant.zipCode} {userData.participant.city}</p>


                    <br />
                    <br />
                    <h3>Eltern</h3>
                    <p>Mutter: {userData.parentPart2.firstName} {userData.parentPart2.lastName}</p>
                    <p>Email: {userData.parentPart2.email}</p>
                    <p>Tel: {userData.parentPart2.phone}</p>
                    <p>Adresse: {userData.parentPart2.street} {userData.parentPart2.zipCode} {userData.parentPart2.city}</p>

                    <br />
                    <p>Vater: {userData.parentPart1.firstName} {userData.parentPart1.lastName}</p>
                    <p>Email: {userData.parentPart1.email}</p>
                    <p>Tel: {userData.parentPart1.phone}</p>
                    <p>Adresse: {userData.parentPart1.street} {userData.parentPart1.zipCode} {userData.parentPart1.city}</p>


                    <br />
                    <br />
                    <h4>Wir hoffen, dass die Angaben stimmen, sonst Melden Sie sich bitte beim Sekreteriat.</h4>
                    <br />
                    <br />
                    <h4>Wir freuen uns auf ein tolles Lager mit dir!</h4>
                    <br />
                    <br />
                    <br />

                </div>
            );
        default:
            return null;
    }
}

