import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import testingApp from "../firebase";
import Select from "./Select";
import Selected from "./Selected";

const UsersForm = () => {
    const [refill, setRefill] = useState(false);
    const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        sectors: [],
        isAgree: false,
    });

    const handleChange = (event) => {
        if (event.target.name === "isAgree") {
            setFormData({
                ...formData,
                isAgree: event.target.checked,
            });
        } else if (event.target.name === "sectors") {
            // collect all option tags in select box
            const options = event.target.options;
            const selected_options = [];

            for (let i = 0; i < options.length; i++) {
                if (options[i].selected) {
                    selected_options.push(options[i].value);
                }
            }

            setFormData({
                ...formData,
                sectors: selected_options,
            });
        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            });
        }
    };

    // to handle form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        setError(false); // clear existing error
        if (formData.sectors.length === 0) {
            return setError(
                "Please pick the sectors you are currently involved in."
            );
        }

        if (!refill) {
            setUserData("user-1", formData);
        } else {
            setError("Already Saved");
        }

        console.log(formData);
        // Submit form data to the server
    };

    // set user data to database
    async function setUserData(userId, userData) {
        const { name, sectors, isAgree } = userData;
        // setLoading(true);
        const db = getDatabase(testingApp);
        await set(ref(db, "users/" + userId), {
            name,
            sectors,
            isAgree,
        });
        // setLoading(false);
        setRefill(true);
    }

    // to handle reset button when user will click it
    const handleReset = (event) => {
        setError(false);
        setFormData({
            ...formData,
            sectors: [],
        });
        setRefill(false);
    };

    return (
        <div className="form-and-result-sec">
            <form className="form" onSubmit={handleSubmit}>
                <h5>
                    Please enter your name and pick the Sectors you are
                    currently involved in.
                </h5>
                <div className="user-name">
                    <label htmlFor="name">Name:</label>
                    {!refill && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    )}
                    {refill && (
                        <input
                            type="text"
                            value={formData.name}
                            contentEditable={false}
                        />
                    )}
                </div>
                <div className="sector-area">
                    <label htmlFor="sectors">Sectors:</label>
                    {!refill && (
                        <Select
                            onChangeHandler={handleChange}
                            value={formData.sectors}
                            required
                        />
                    )}
                    {refill && <Selected selected={formData.sectors} />}
                </div>
                {error && <h5 className="error">{error}</h5>}
                <input
                    type="checkbox"
                    name="isAgree"
                    checked={formData.isAgree}
                    onChange={handleChange}
                    required
                />
                {" Agree to terms"}

                <div className="button-area">
                    <input type="submit" value="Save" />
                    <input type="reset" value="Edit" onClick={handleReset} />
                </div>
            </form>
        </div>
    );
};
export default UsersForm;
