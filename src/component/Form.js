import '../pages/Contact.css';
import { useState } from "react";
import '../component/Form.css';

function Contact_form() {
    const [input, setInput] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    console.log(input)


    return (
        <form className='form'>
            <h2>Contact Me</h2>

            <label>Name
                <input
                    type="text"
                    name="fullname"
                    value={input.fullname || ""}
                    placeholder="Full name"
                    onChange={handleChange}
                />
            </label>
            <label>mail
                <input
                    type="email"
                    name="mail"
                    value={input.mail || ""}
                    placeholder="Email"
                    onChange={handleChange}
                />
            </label>
            <label>Phone
                <input type="tel"
                    name="phone"
                    value={input.phone || ""}
                    placeholder="Phone number"
                    onChange={handleChange}
                />
            </label>
            <label>question</label>
            <textarea
                name="question"
                value={input.question || ""}
                placeholder="Enter question "
                onChange={handleChange}
            ></textarea>
            <input type="button" value="Send Message" />

        </form>
    )


}
export default Contact_form;