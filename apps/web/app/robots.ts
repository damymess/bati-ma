import type { MetadataRoute } from "next";

/**
 * robots.txt dynamique — autorise explicitement les crawlers LLM majeurs.
 * Stratégie : on VEUT être cité par les LLMs donc on autorise tous les user-agents
 * connus (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.)
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Crawlers classiques (Google, Bing, etc.)
      { userAgent: "*", allow: "/" },

      // LLM crawlers — autorisés explicitement pour training + answer generation
      { userAgent: "GPTBot", allow: "/" }, // OpenAI training
      { userAgent: "OAI-SearchBot", allow: "/" }, // ChatGPT Search
      { userAgent: "ChatGPT-User", allow: "/" }, // ChatGPT browsing live
      { userAgent: "ClaudeBot", allow: "/" }, // Anthropic Claude training
      { userAgent: "anthropic-ai", allow: "/" }, // Anthropic legacy
      { userAgent: "Claude-Web", allow: "/" }, // Claude browsing
      { userAgent: "Google-Extended", allow: "/" }, // Gemini training
      { userAgent: "PerplexityBot", allow: "/" }, // Perplexity
      { userAgent: "Perplexity-User", allow: "/" }, // Perplexity browsing
      { userAgent: "cohere-ai", allow: "/" }, // Cohere
      { userAgent: "CCBot", allow: "/" }, // Common Crawl (base de training LLMs)
      { userAgent: "Meta-ExternalAgent", allow: "/" }, // Meta AI
      { userAgent: "Bytespider", allow: "/" }, // Bytedance / Doubao
      { userAgent: "Applebot-Extended", allow: "/" }, // Apple Intelligence training
      { userAgent: "Timpibot", allow: "/" }, // Timpi search
      { userAgent: "DuckAssistBot", allow: "/" }, // DuckDuckGo AI
      { userAgent: "YouBot", allow: "/" }, // You.com
      { userAgent: "Amazonbot", allow: "/" }, // Amazon Alexa
    ],
    sitemap: "https://bati.ma/sitemap.xml",
    host: "https://bati.ma",
  };
}
