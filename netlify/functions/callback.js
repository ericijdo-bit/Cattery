/* ==========================================================================
   Decap CMS login, step 2 of 2 — GitHub sends the user back here after they
   approve access, with a one-time ?code=... in the URL.

   This function exchanges that code for a real access token (using the
   OAuth App's client secret, which must never be exposed to the browser —
   that's why this exchange happens server-side, in a Netlify Function
   rather than in the CMS's own JavaScript), then hands the token back to
   the admin panel via a small postMessage handshake with the popup window
   that opened it.
   ========================================================================== */

exports.handler = async (event) => {
  const code = event.queryStringParameters && event.queryStringParameters.code;
  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;

  if (!code) {
    return { statusCode: 400, body: "Missing ?code from GitHub." };
  }
  if (!clientId || !clientSecret) {
    return {
      statusCode: 500,
      body: "Missing OAUTH_CLIENT_ID / OAUTH_CLIENT_SECRET environment variables — see SETUP.md.",
    };
  }

  let tokenData;
  try {
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    tokenData = await tokenRes.json();
  } catch (err) {
    return { statusCode: 502, body: `Could not reach GitHub: ${err.message}` };
  }

  if (tokenData.error || !tokenData.access_token) {
    const message = JSON.stringify({ error: tokenData.error_description || tokenData.error || "Unknown error" });
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/html" },
      body: renderPopupScript("error", message),
    };
  }

  const payload = JSON.stringify({ token: tokenData.access_token, provider: "github" });
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: renderPopupScript("success", payload),
  };
};

// Decap CMS's popup-based GitHub login expects a two-step postMessage
// handshake: the popup first pings the opener ("authorizing:github"), the
// opener echoes back, and only then does the popup send the final
// "authorization:github:success:{...}" (or ":error:{...}") message that
// Decap actually listens for. Skipping the handshake causes silent failures
// in some browsers, so both steps are implemented here.
function renderPopupScript(result, dataJson) {
  return `<!DOCTYPE html>
<html><body>
<script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:${result}:${dataJson.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}',
      e.origin
    );
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
</body></html>`;
}
