
import Form from '../component/Form';
import Contact_form from '../component/Form';
import question from '../images/question.png'
import { useState } from "react";


function Contact() {

    return(
        <main className='main'>
            < img src={question} id="question_image"></img>
                    <Contact_form/>
        </main>
    )
   

}
export default Contact;