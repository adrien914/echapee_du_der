export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === "echapee-du-der.pages.dev") {
    url.hostname = "echappee-der.com";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
