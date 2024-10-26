import { AzureOpenAI } from "openai";
import { endpoint, apiKey, apiVersion, deployment } from "./constants.js";

const client = new AzureOpenAI({
  endpoint,
  apiKey,
  apiVersion,
  deployment,
  dangerouslyAllowBrowser: true,
});

export default client;
