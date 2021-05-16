async function getUserInfo(octokit, username, message) {
    console.log("Getting user info ",
    octokit ? "with octokit" : "without octokit",
    "with message",
    message)
    try {
        const user = await octokit.request('GET /users/{username}', {
            username: username
        });
        console.log("Got user info!", user)
        message.setAuthor(user.login, user.avatar_url, user.url);
        return message

        } catch(e) {
        console.error("An error occured during this github user data fetching ",
        e)
        return
    }
}

module.exports = getUserInfo;