// Login authentication
const REQUEST_TOKEN_URL = "http://localhost:4000/auth/twitter";

// POST API
// export const obtainRequestToken = () => {
//   return fetch(REQUEST_TOKEN_URL, {
//     method: "GET",
//     mode: "no-cors"
//   })
//     .then(response => {
//       console.log("success", response);
//       return response;
//     })
//     .catch(e => {
//       console.log("fetching failed");
//       throw e;
//     });
// };

// Sample Response
// Response: oauth_token=Z6eEdO8MOmk394WozF5oKyuAv855l4Mlqo7hhlSLik&oauth_token_secret=Kd75W4OQfb2oJTV0vzGzeXftVAwgMnEK9MumzYcM&oauth_callback_confirmed=true
