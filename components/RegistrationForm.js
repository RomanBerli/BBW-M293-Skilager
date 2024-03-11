import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

export default function RegistrationForm() {
    const [genderChoiche, setGenderCjoiche] = useState('')

    const handleGenderChoiche = (e) => {
        setGenderCjoiche(e.target.value)
    }

    return (
        <div className="container mt-5">
            <div></div>
            <h1>Angaben zum/zur Teilnehmer/in</h1>
            <h1 className="border-bottom grey-border"></h1>
            <form>
            <div class="form-eltern">
            <div class="form-1">
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
                </div>
                <div class="form-1">
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
                </div>
                </div>

                <br />
                <br />
                <br />

                <h1>Angaben zu den Eltern</h1>
                <h1 className="border-bottom grey-border"></h1>
                <br />

                <div class="form-eltern">
                <div class="form-1">
                        <h2>Vater</h2>
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
                        </div>
                        <div class="form-1">
                            <h2>Mutter</h2>
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
                        </div>
                </div>
                {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <br />
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <br />
            <br />

        </div>
    )
}