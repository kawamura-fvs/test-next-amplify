import { useState, useEffect } from "react";
import { API, graphqlOperation } from "@aws-amplify/api";
import { createContactUs } from "@/graphql/mutations";
import { listContactuses } from "@/graphql/queries"

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
      const result = await API.graphql(graphqlOperation(createContactUs, {
        input: {
          title: title,
          detail: detail,
          contact_type: contactType,
          isResolve: false,
          updated_at: new Date().toISOString()
        }
      }));
      console.log("ContactUs created successfully:", result);
    } catch (error) {
      console.error("Error creating ContactUs:", error);
    }
  };

  const contactUsList = async () => {
    try {
      const result: any = await API.graphql(graphqlOperation(listContactuses));
      console.log(result);
      setContactUsItems(result.data.listContactuses.items);
    } catch (error) {
      console.error("Error list ContactUs:", error);
    }
  }

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
