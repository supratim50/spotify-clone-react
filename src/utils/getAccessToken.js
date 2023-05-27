export const getAccessToken = (redirectUri, clientId) => {
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');
    console.log("code", code);

    let codeVerifier = localStorage.getItem('code_verifier');
    console.log(codeVerifier);

    let body = new URLSearchParams({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUri,
    client_id: clientId,
    code_verifier: codeVerifier
    });

    // CALL API TO GET TOKEN
    fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body
    })
    .then(response => {
        if (!response.ok) {
        throw new Error('HTTP status ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem('access_token', data.access_token);
        console.log(data.access_token);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}