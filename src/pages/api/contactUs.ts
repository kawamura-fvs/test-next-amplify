import type { NextApiRequest, NextApiResponse } from "next";
import { API, graphqlOperation } from "@aws-amplify/api";
import { createContactUs } from "@/graphql/mutations";
import { listContactuses } from "@/graphql/queries";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { title, detail, contactType } = req.body;

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
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: "Error creating ContactUs" });
    }
  } else if (req.method === "GET") {
    try {
      const result: any = await API.graphql(graphqlOperation(listContactuses));
      res.status(200).json(result.data.listContactuses.items);
    } catch (error) {
      res.status(500).json({ error: "Error list ContactUs" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
