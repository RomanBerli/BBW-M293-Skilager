export default function RegistrationForm() {
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="firstName" class="form-label">Vorname</label>
                    <input type="text" class="form-control" id="firstName" aria-describedby="firstNameHelp" />
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label">Nachname</label>
                    <input type="text" class="form-control" id="lastName" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="home-street-address" class="form-label">Strasse</label>
                    <input type="home-street-address" class="form-control" id="home-street-address"/>
                </div>
                {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}