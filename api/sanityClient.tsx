import { createClient } from "next-sanity";

export default createClient({
    projectId: "8eio6dub",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
});



