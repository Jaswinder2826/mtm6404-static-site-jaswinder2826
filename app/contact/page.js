export default function Contact() {
    return (
      <main>
        <h1>Contact Us</h1>
        <p>Have questions or suggestions? We'd love to hear from you! Reach out to us at <a href="mailto:contact@cookingdelight.com">contact@cookingdelight.com</a> or fill out the form below:</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </main>
    );
  }
  