export default function Contacts() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Contacts Page</h1>

      <p>Reach me via:</p>
      <p>
        <a href="https://www.linkedin.com/in/senuri-wehara-a339461a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxMbhlnYxS4WaHZ7okQo%2BKQ%3D%3D" target="_blank">LinkedIn</a> |{" "}
        <a href="https://github.com/SWehara" target="_blank">GitHub</a> |{" "}
        <a href="mailto:senuriwehara03@gmail.com">Email</a>
      </p>

      <form action="mailto:senuriwehara03@gmial.com" method="post" encType="text/plain">
        <input type="text" name="Name" placeholder="Your Name" required /><br /><br />
        <input type="email" name="Email" placeholder="Your Email" required /><br /><br />
        <textarea name="Message" placeholder="Your Message" required></textarea><br /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
