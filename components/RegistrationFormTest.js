import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import styles from './RegistrationFormTest.module.css'


function RegistrationForm() {
    const [step, setStep] = useState(1);
    const [genderChoiche, setGenderChoiche] = useState('')
    const [sportChoiche, setSportChoiche] = useState('')
    const [niveauChoiche, setNiveauChoiche] = useState('')
    const [vegetarian, setVegetarian] = useState(false)
    const [ga, setGa] = useState(false)
    const router = useRouter();

    const handleGenderChoiche = (e) => {
        setGenderChoiche(e.target.value)
    }

    const handlesportChoiche = (e) => {
        setSportChoiche(e.target.value)
    }

    const handleniveauChoiche = (e) => {
        setNiveauChoiche(e.target.value)
    }

    const handleVegetarian = (e) => {
        setVegetarian(e.target.checked)
    }

    const handleGa = (e) => {
        setGa(e.target.checked)
    }


    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/SuccessPage');
    }

    switch (step) {
        case 1:
            return (
                <div className="container mt-5">
                    <h1>Angaben zum/zur Teilnehmer/in</h1>
                    <h1 className="border-bottom grey-border"></h1>
                    <form>
                        <div class="mb-3">
                            <label for="gender" class="form-label">Geschlecht</label>
                            <select class="form-select" id="gender" aria-describedby="genderHelp">
                                <option selected disabled hidden>Wählen Sie Ihr Geschlecht</option>
                                <option value="m" onChange={handleGenderChoiche}>Männlich</option>
                                <option value="w" onChange={handleGenderChoiche}>Weiblich</option>
                                <option value="d" onChange={handleGenderChoiche}>Divers</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="firstName" class="form-label">Vorname</label>
                            <input type="text" class="form-control" id="firstName" aria-describedby="firstNameHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Nachname</label>
                            <input type="text" class="form-control" id="lastName" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="home-street-address" class="form-label">Strasse</label>
                            <input type="home-street-address" class="form-control" id="home-street-address" />
                        </div>
                        <div class="mb-3">
                            <label for="home-zip-code" class="form-label">PLZ</label>
                            <input type="home-zip-code" class="form-control" id="home-zip-code" />
                        </div>
                        <div class="mb-3">
                            <label for="home-city" class="form-label">Ort</label>
                            <input type="home-city" class="form-control" id="home-city" />
                        </div>
                        <div class="mb-3">
                            <label for="AHV" class="form-label">AHV-Nummer</label>
                            <input type="AHV" class="form-control" id="AHV" />
                        </div>
                        <div class="mb-3">
                            <label for="birthday" class="form-label">Geburtsdatum</label>
                            <input type="date" class="form-control" id="birthday" />
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Telefonnummer</label>
                            <input type="phone" class="form-control" id="phone" />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="vegetarian" />
                            <label class="form-check-label" for="vegetarian" onChange={handleVegetarian}>Ich bin Vegetarier/in</label>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="ga" />
                            <label class="form-check-label" for="ga" onChange={handleGa}>Ich besitze ein GA</label>
                        </div>
                        <div className={styles.firstbutton}>
                            <button type="button" class="btn btn-primary" onClick={nextStep}>Weiter</button>
                        </div>
                    </form>
                </div>

            );
        case 2:
            return (
                <div className="container mt-5">
                    <form>
                        <h1>Angaben zu den Eltern</h1>
                        <h1 className="border-bottom grey-border"></h1>

                        <div class="mb-3">
                            <label for="gender" class="form-label">Anrede</label>
                            <select class="form-select" id="gender" aria-describedby="genderHelp">
                                <option selected disabled hidden>Anrede</option>
                                <option value="m" onChange={handleGenderChoiche}>Männlich</option>
                                <option value="w" onChange={handleGenderChoiche}>Weiblich</option>
                                <option value="d" onChange={handleGenderChoiche}>Divers</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="firstName" class="form-label">Vorname</label>
                            <input type="text" class="form-control" id="firstName" aria-describedby="firstNameHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Nachname</label>
                            <input type="text" class="form-control" id="lastName" />
                        </div>
                        <div class="mb-3">
                            <label for="email-parents" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email-parents" />
                        </div>
                        <div class="mb-3">
                            <label for="phone-parents" class="form-label">Telefonnummer</label>
                            <input type="phone" class="form-control" id="phone-parents" />
                        </div>
                        <div class="mb-3">
                            <label for="home-street-address" class="form-label">Strasse</label>
                            <input type="home-street-address" class="form-control" id="home-street-address" />
                        </div>
                        <div class="mb-3">
                            <label for="home-zip-code" class="form-label">PLZ</label>
                            <input type="home-zip-code" class="form-control" id="home-zip-code" />
                        </div>
                        <div class="mb-3">
                            <label for="home-city" class="form-label">Ort</label>
                            <input type="home-city" class="form-control" id="home-city" />
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
                    <form>
                        <h4>Elternteil 2</h4>
                        <h1 className="border-bottom grey-border"></h1>
                        <div class="mb-3">
                            <label for="gender" class="form-label">Anrede</label>
                            <select class="form-select" id="gender" aria-describedby="genderHelp">
                                <option selected disabled hidden>Anrede</option>
                                <option value="m" onChange={handleGenderChoiche}>Männlich</option>
                                <option value="w" onChange={handleGenderChoiche}>Weiblich</option>
                                <option value="d" onChange={handleGenderChoiche}>Divers</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="firstName" class="form-label">Vorname</label>
                            <input type="text" class="form-control" id="firstName" aria-describedby="firstNameHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Nachname</label>
                            <input type="text" class="form-control" id="lastName" />
                        </div>
                        <div class="mb-3">
                            <label for="email-parents" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email-parents" />
                        </div>
                        <div class="mb-3">
                            <label for="phone-parents" class="form-label">Telefonnummer</label>
                            <input type="phone" class="form-control" id="phone-parents" />
                        </div>
                        <div class="mb-3">
                            <label for="home-street-address" class="form-label">Strasse</label>
                            <input type="home-street-address" class="form-control" id="home-street-address" />
                        </div>
                        <div class="mb-3">
                            <label for="home-zip-code" class="form-label">PLZ</label>
                            <input type="home-zip-code" class="form-control" id="home-zip-code" />
                        </div>
                        <div class="mb-3">
                            <label for="home-city" class="form-label">Ort</label>
                            <input type="home-city" class="form-control" id="home-city" />
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
                    <form>
                        <h1>Rechnungsadresse</h1>
                        <h1 className="border-bottom grey-border"></h1>
                        <div class="mb-3">
                            <label for="gender" class="form-label">Anrede</label>
                            <select class="form-select" id="gender" aria-describedby="genderHelp">
                                <option selected disabled hidden>Anrede</option>
                                <option value="m" onChange={handleGenderChoiche}>Männlich</option>
                                <option value="w" onChange={handleGenderChoiche}>Weiblich</option>
                                <option value="d" onChange={handleGenderChoiche}>Divers</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="firstName" class="form-label">Vorname</label>
                            <input type="text" class="form-control" id="firstName" aria-describedby="firstNameHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Nachname</label>
                            <input type="text" class="form-control" id="lastName" />
                        </div>
                        <div class="mb-3">
                            <label for="home-street-address" class="form-label">Strasse</label>
                            <input type="home-street-address" class="form-control" id="home-street-address" />
                        </div>
                        <div class="mb-3">
                            <label for="home-zip-code" class="form-label">PLZ</label>
                            <input type="home-zip-code" class="form-control" id="home-zip-code" />
                        </div>
                        <div class="mb-3">
                            <label for="home-city" class="form-label">Ort</label>
                            <input type="home-city" class="form-control" id="home-city" />
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
                            <label for="sport-select" class="form-label">Sportart</label>
                            <select class="form-select" id="sport-selec" aria-describedby="sport-selectHelp">
                                <option selected disabled hidden>Bitte auswählen</option>
                                <option value="ski" onChange={handlesportChoiche}>Ski</option>
                                <option value="Snowboard" onChange={handlesportChoiche}>Snowboard</option>
                                <option value="Schlitteln" onChange={handlesportChoiche}>Schlitteln</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="niveau-select" class="form-label">Niveau</label>
                            <select class="form-select" id="sport-selec" aria-describedby="sport-selectHelp">
                                <option selected disabled hidden>Bitte auswählen</option>
                                <option value="ski" onChange={handleniveauChoiche}>Anfänger</option>
                                <option value="Snowboard" onChange={handleniveauChoiche}>Gut</option>
                                <option value="Schlitteln" onChange={handleniveauChoiche}>Fortgeschritten</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <div className="form-group">
                                <label htmlFor="message">Mitteilungen</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="message"
                                    placeholder="Alergien? Medikamente? etc."
                                />
                            </div>
                        </div>
                        <div className={styles.buttoncontainer}>
                            <button type="button" class="btn btn-primary" onClick={prevStep}>Zurück</button>
                            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Fertig</button>
                        </div>
                    </form>
                </div>
            );
        default:
            return null;
    }
}

export default RegistrationForm;