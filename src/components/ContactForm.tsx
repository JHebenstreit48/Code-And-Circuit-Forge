import { useState } from "react";
import "@/SCSS/ContactForm.scss";

export default function ContactForm() {
  interface Inputs {
    name: string;
    email: string;
    textarea: string;
  }

  const [inputs, setInputs] = useState<Inputs>({ name: "", email: "", textarea: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = `
      mutation SendMessage($name: String!, $email: String!, $message: String!) {
        sendContactMessage(name: $name, email: $email, message: $message)
      }
    `;

    const variables = {
      name: inputs.name,
      email: inputs.email,
      message: inputs.textarea,
    };

    try {
      const response = await fetch("http://localhost:3001/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
      });

      const result = await response.json();
      console.log("✅ Submitted:", result);

      if (result.data?.sendContactMessage) {
        alert("Message sent successfully!");
        setInputs({ name: "", email: "", textarea: "" });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error("❌ Submission error:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <label className="label">Name:</label>
      <input
        type="text"
        className="textField"
        name="name"
        value={inputs.name}
        onChange={handleChange}
        required
      />

      <label className="label">Email:</label>
      <input
        type="email"
        className="textField"
        name="email"
        value={inputs.email}
        onChange={handleChange}
        required
      />

      <label className="label">Message:</label>
      <textarea
        className="messageField"
        name="textarea"
        value={inputs.textarea}
        onChange={handleChange}
        required
      />

      <input type="submit" value="Submit" className="submitButton" />
    </form>
  );
}
