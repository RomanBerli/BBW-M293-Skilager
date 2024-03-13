import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import styles from './RegistrationFormTest.module.css';

function RegistrationForm() {
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
        "parents": [{
            "part1": {
                genderChoiche: "",
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                street: "",
                zipCode: "",
                city: ""
            },
            "part2": {
                genderChoiche: "",
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                street: "",
                zipCode: "",
                city: ""
            }
        }
        ],
        "billing": {
            genderChoiche: "",
            firstName: "",
            lastName: "",
            street: "",
            zipCode: "",
            city: ""
        },
        "sport": {
            "sport-choice": "",
            "niveau": "",
            "message": ""
        }
    });

    const router = useRouter();

    // const handleChange = (e) => {
    //     const { name, value, type, checked } = e.target;
    //     setUserData(prevUserData => ({
    //         ...prevUserData,
    //         participant: {
    //             ...prevUserData.participant,
    //             [name]: type === 'checkbox' ? checked : value,
    //         }

    //     }));
    // };

    const handleChange = (e, section, part = null) => {
        const { name, value, type, checked } = e.target;

        setUserData(prevUserData => {
            // Update for participant or billing or sport
            if (section !== 'parents') {
                return {
                    ...prevUserData,
                    [section]: {
                        ...prevUserData[section],
                        [name]: type === 'checkbox' ? checked : value,
                    },
                };
            }

            // Update for parents (part1 or part2)
            if (section === 'parents') {
                return {
                    ...prevUserData,
                    parents: prevUserData.parents.map((parent, index) => {
                        if (index === 0) { // Assuming you want to update the first item in the parents array
                            return {
                                ...parent,
                                [part]: {
                                    ...parent[part],
                                    [name]: type === 'checkbox' ? checked : value,
                                },
                            };
                        }
                        return parent;
                    }),
                };
            }
        });
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
                            <select className="form-select" id="genderChoiche" name="genderChoiche" value={userData.participant.genderChoiche} onChange={(e) => handleChange(e, 'participant')}>
                                <option value="" disabled hidden>Wählen Sie Ihr Geschlecht</option>
                                <option value="m">Männlich</option>
                                <option value="w">Weiblich</option>
                                <option value="d">Divers</option>
                            </select>
                        </div>
                        {/* First Name Input */}
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">Vorname</label>
                            <input type="text" className="form-control" id="firstName" name="firstName" value={userData.participant.firstName} onChange={(e) => handleChange(e, 'participant')} />
                        </div>
                        {/* Last Name Input */}
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Nachname</label>
                            <input type="text" className="form-control" id="lastName" name="lastName" value={userData.participant.lastName} onChange={(e) => handleChange(e, 'participant')} />
                        </div>
                        {/* Email Input */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={userData.participant.email} onChange={(e) => handleChange(e, 'participant')} />
                        </div>
                        {/* Street Input */}
                        <div className="mb-3">
                            <label htmlFor="street" className="form-label">Strasse</label>
                            <input type="text" className="form-control" id="street" name="street" value={userData.participant.street} onChange={(e) => handleChange(e, 'participant')} />
                        </div>
                        {/* Zip Code Input */}
                        <div className="mb-3">
                            <label htmlFor="zipCode" className="form-label">PLZ</label>
                            <input type="text" className="form-control" id="zipCode" name="zipCode" value={userData.participant.zipCode} onChange={(e) => handleChange(e, 'participant')} />
                        </div>
                        {/* City Input */}
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">Ort</label>
                            <input type="text" className="form-control" id="city" name="city" value={userData.participant.city} onChange={(e) => handleChange(e, 'participant')} />
                        </div>
                        {/* AHV Number Input */}
                        <div className="mb-3">
                            <label htmlFor="AHV" className="form-label">AHV-Nummer</label>
                            <input type="text" className="form-control" id="AHV" name="AHV" value={userData.participant.AHV} onChange={(e) => handleChange(e, 'participant')} />
                        </div>
                        {/* Birthday Input */}
                        <div className="mb-3">
                            <label htmlFor="birthday" className="form-label">Geburtsdatum</label>
                            <input type="date" className="form-control" id="birthday" name="birthday" value={userData.participant.birthday} onChange={(e) => handleChange(e, 'participant')} />
                        </div>
                        {/* Phone Input */}
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Telefonnummer</label>
                            <input type="text" className="form-control" id="phone" name="phone" value={userData.participant.phone} onChange={(e) => handleChange(e, 'participant')} />
                        </div>
                        {/* Vegetarian Checkbox */}
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="vegetarian" name="vegetarian" checked={userData.vegetarian} onChange={(e) => handleChange(e, 'participant')} />
                            <label className="form-check-label" htmlFor="vegetarian">Ich bin Vegetarier/in</label>
                        </div>
                        {/* GA Checkbox */}
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="ga" name="ga" checked={userData.ga} onChange={(e) => handleChange(e, 'participant')} />
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
                        <h1>Angaben zu den Eltern</h1>
                        <h1 className="border-bottom grey-border"></h1>

                        <div className="mb-3">
                            <label htmlFor="genderChoiche" className="form-label">Geschlecht</label>
                            <select className="form-select" id="genderChoiche" name="genderChoiche" value={userData.parents[0].part1.genderChoiche} onChange={(e) => handleChange(e, 'parents', 'part1')}>
                                <option value="" disabled hidden>Wählen Sie Ihr Geschlecht</option>
                                <option value="m">Männlich</option>
                                <option value="w">Weiblich</option>
                                <option value="d">Divers</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="firstName" class="form-label">Vorname</label>
                            <input type="text" class="form-control" id="firstName" aria-describedby="firstNameHelp" value={userData.parents[0].part1.firstName} onChange={(e) => handleChange(e, 'parents', 'part1')} />
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Nachname</label>
                            <input type="text" class="form-control" id="lastName" value={userData.parents[0].part1.lastName} onChange={(e) => handleChange(e, 'parents', 'part1')}/>
                        </div>
                        <div class="mb-3">
                            <label for="email-parents" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email-parents" value={userData.parents[0].part1.email} onChange={(e) => handleChange(e, 'parents', 'part1')} />
                        </div>
                        <div class="mb-3">
                            <label for="phone-parents" class="form-label">Telefonnummer</label>
                            <input type="phone" class="form-control" id="phone-parents" value={userData.parents[0].part1.phone} onChange={(e) => handleChange(e, 'parents', 'part1')} />
                        </div>
                        <div class="mb-3">
                            <label for="home-street-address" class="form-label">Strasse</label>
                            <input type="home-street-address" class="form-control" id="home-street-address" value={userData.parents[0].part1.street} onChange={(e) => handleChange(e, 'parents', 'part1')} />
                        </div>
                        <div class="mb-3">
                            <label for="home-zip-code" class="form-label">PLZ</label>
                            <input type="home-zip-code" class="form-control" id="home-zip-code" value={userData.parents[0].part1.zipCode} onChange={(e) => handleChange(e, 'parents', 'part1')} />
                        </div>
                        <div class="mb-3">
                            <label for="home-city" class="form-label">Ort</label>
                            <input type="home-city" class="form-control" id="home-city" value={userData.parents[0].part1.city} onChange={(e) => handleChange(e, 'parents', 'part1')} />
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
                            <h1>Angaben zu den Eltern</h1>
                            <h1 className="border-bottom grey-border"></h1>
    
                            <div className="mb-3">
                                <label htmlFor="genderChoiche" className="form-label">Geschlecht</label>
                                <select className="form-select" id="genderChoiche" name="genderChoiche" value={userData.parents[0].part2.genderChoiche} onChange={(e) => handleChange(e, 'parents', 'part2')}>
                                    <option value="" disabled hidden>Wählen Sie Ihr Geschlecht</option>
                                    <option value="m">Männlich</option>
                                    <option value="w">Weiblich</option>
                                    <option value="d">Divers</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="firstName" class="form-label">Vorname</label>
                                <input type="text" class="form-control" id="firstName" aria-describedby="firstNameHelp" value={userData.parents[0].part2.firstName} onChange={(e) => handleChange(e, 'parents', 'part2')} />
                            </div>
                            <div class="mb-3">
                                <label for="lastName" class="form-label">Nachname</label>
                                <input type="text" class="form-control" id="lastName" value={userData.parents[0].part2.lastName} onChange={(e) => handleChange(e, 'parents', 'part2')}/>
                            </div>
                            <div class="mb-3">
                                <label for="email-parents" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email-parents" value={userData.parents[0].part2.email} onChange={(e) => handleChange(e, 'parents', 'part2')} />
                            </div>
                            <div class="mb-3">
                                <label for="phone-parents" class="form-label">Telefonnummer</label>
                                <input type="phone" class="form-control" id="phone-parents" value={userData.parents[0].part2.phone} onChange={(e) => handleChange(e, 'parents', 'part2')} />
                            </div>
                            <div class="mb-3">
                                <label for="home-street-address" class="form-label">Strasse</label>
                                <input type="home-street-address" class="form-control" id="home-street-address" value={userData.parents[0].part2.street} onChange={(e) => handleChange(e, 'parents', 'part2')} />
                            </div>
                            <div class="mb-3">
                                <label for="home-zip-code" class="form-label">PLZ</label>
                                <input type="home-zip-code" class="form-control" id="home-zip-code" value={userData.parents[0].part2.zipCode} onChange={(e) => handleChange(e, 'parents', 'part2')} />
                            </div>
                            <div class="mb-3">
                                <label for="home-city" class="form-label">Ort</label>
                                <input type="home-city" class="form-control" id="home-city" value={userData.parents[0].part2.city} onChange={(e) => handleChange(e, 'parents', 'part2')} />
                            </div>
                            <div className={styles.buttoncontainer}>
                                <button type="button" class="btn btn-primary" onClick={prevStep}>Zurück</button>
                                <button type="button" class="btn btn-primary" onClick={nextStep}>Weiter</button>
                            </div>
                        </form>
                    </div>
                );
        // Additional cases for other steps...
        default:
            return null;
    }
}

export default RegistrationForm;
