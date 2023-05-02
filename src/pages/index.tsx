import { useState, useEffect } from "react";

const IndexPage = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [contactType, setContactType] = useState(0);
  const [contactUsItems, setContactUsItems] = useState<Array<any>>([]);

  useEffect(() => {
    contactUsList();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await fetch("/api/contactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          detail,
          contactType,
        }),
      });

      const data = await result.json();
      console.log("ContactUs created successfully:", data);
    } catch (error) {
      console.error("Error creating ContactUs:", error);
    }
  };

  const contactUsList = async () => {
    try {
      const result = await fetch("/api/contactUs");
      const data = await result.json();
      setContactUsItems(data);
    } catch (error) {
      console.error("Error list ContactUs:", error);
    }
  };

  return (
    <div>
      <h1>Create ContactUs</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Detail:
          <input
            type="text"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            required
          />
        </label>
        <label>
          Contact Type:
          <input
            type="number"
            value={contactType}
            onChange={(e) => setContactType(parseInt(e.target.value))}
            required
          />
        </label>
        <button type="submit">Create Todo</button>
      </form>
      <h1>ContactUsList</h1>
      <ul>
        {contactUsItems.map((item: any) => (
          <li key={item.id}>
            {item.title} - {item.detail} - Type: {item.contact_type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
