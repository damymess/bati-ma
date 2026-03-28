import { defineMiddlewares } from "@medusajs/medusa"

export default defineMiddlewares({
  routes: [
    {
      matcher: "/store/architects*",
      middlewares: [],
      bodyParser: { sizeLimit: "1mb" },
    },
    {
      matcher: "/store/project-requests*",
      middlewares: [],
      bodyParser: { sizeLimit: "1mb" },
    },
  ],
})
