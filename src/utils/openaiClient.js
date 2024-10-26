import { AzureOpenAI } from "openai";
import { endpoint,  apiVersion, deployment } from "./constants.js";

const client = new AzureOpenAI({
  endpoint,
  apiKey:process.env.REACT_APP_AZURE_OPENAI_API_KEY,
  apiVersion,
  deployment,
  dangerouslyAllowBrowser: true,
});

export default client;
