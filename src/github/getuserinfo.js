async function getUserInfo(octokit) {
    try {
        const user = await octokit.rest.users.getAuthenticated();
        return {
            name : user.login,
            iconURL : user.avatar_url,
            url : user.url,
        }

        } catch(e) {
        console.error("An error occured during this github user data fetching ",
        e)
        return
    }
}

module.exports = getUserInfo;