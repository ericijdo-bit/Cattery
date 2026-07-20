/* ==========================================================================
   Decap CMS login, step 1 of 2 — "Login with GitHub" button.

   The CMS opens this URL in a popup window. It redirects the popup to
   GitHub's own authorization page, where the user (you) approves access.
   GitHub then redirects back to callback.js with a one-time code.

   Needs two environment variables, set in Netlify's dashboard under
   Project configuration → Environment variables (see SETUP.md):
     OAUTH_CLIENT_ID     — from your GitHub OAuth App
     OAUTH_CLIENT_SECRET — from your GitHub OAuth App (used in callback.js)
   ========================================================================== */

exports.handler = async (event) => {
  const clientId = process.env.OAUTH_CLIENT_ID;
  if (!clientId) {
    return {
      statusCode: 500,
      body: "Missing OAUTH_CLIENT_ID environment variable — see SETUP.md.",
    };
  }

  const site = process.env.URL || `https://${event.headers.host}`;
  const redirectUri = `${site}/.netlify/functions/callback`;

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: "repo,user",
  });

  return {
    statusCode: 302,
    headers: {
      Location: `https://github.com/login/oauth/authorize?${params.toString()}`,
    },
    body: "",
  };
};
