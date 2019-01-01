// Login authentication
const REQUEST_TOKEN_URL = 'https://api.twitter.com/oauth/request_token';

// POST API
export const obtainRequestToken = () => {
    return fetch(REQUEST_TOKEN_URL, {
        method: 'POST',
         mode: 'cors',
        headers: new Headers({
            'Access-Control-Allow-Origin':'*',
            'Authorization': 'OAuth oauth_consumer_key="MWij0ByEIMiO35M5guaThkwRx",oauth_token="182647135-HgMpQKiH5WFc85SIK84HCpUfZzGVvCsdZIMHeMRg",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1545983843",oauth_nonce="ZiEz6UQ9MLf",oauth_version="1.0",oauth_signature="cnrTnMuWS2qOTDtWVqyASVsAAfM%3D"'
    })
   }).then((response) => {
        console.log(response.json());
    }).catch((e) => {
        console.log('fetching failed')
        throw e;
    })
}


// Authorization Header
// OAuth oauth_nonce="K7ny27JTpKVsTgdyLdDfmQQWVLERj2zAK5BslRsqyw", 
// oauth_callback="https://www.google.com", 
// oauth_signature_method="HMAC-SHA1", 
// oauth_timestamp="1300228849", 
// oauth_consumer_key="tmCtXP1uMOHI2sjExReKXr97H", 
// oauth_signature="Pc%2BMLdv028fxCErFyi8KXFM%2BddU%3D", 
// oauth_version="1.0"


// Sample Response
// Response: oauth_token=Z6eEdO8MOmk394WozF5oKyuAv855l4Mlqo7hhlSLik&oauth_token_secret=Kd75W4OQfb2oJTV0vzGzeXftVAwgMnEK9MumzYcM&oauth_callback_confirmed=true

