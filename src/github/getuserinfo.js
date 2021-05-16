async function getUserInfo(octokit, message) {
    try {
        const user = await octokit.rest.users.getAuthenticated();
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