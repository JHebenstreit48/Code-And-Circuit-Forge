import { useState } from "react";
import "@/SCSS/ContactForm.scss";

interface Inputs {
  name: string;
  email: string;
  textarea: string;
}

export default function ContactForm() {
  const [inputs, setInputs] = useState<Inputs>({ name: "", email: "", textarea: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputs.name,
          email: inputs.email,
          message: inputs.textarea,
        }),
      });

      const result = await response.json();

      if (result.ok) {
        setStatus("success");
        setInputs({ name: "", email: "", textarea: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("❌ Submission error:", error);
      setStatus("error");
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

      <input
        type="submit"
        value={status === "sending" ? "Sending..." : "Submit"}
        className="submitButton"
        disabled={status === "sending"}
      />

      {status === "success" && <p className="successMessage">Message sent successfully!</p>}
      {status === "error" && <p className="errorMessage">Failed to send message. Please try again.</p>}
    </form>
  );
}