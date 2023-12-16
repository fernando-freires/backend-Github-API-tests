const axios = require("axios");
const { format } = require("date-fns");

module.exports = {
  async getProfiles(request, response) {
    try {
      let since = request.query.since || 0;
      const githubUsers = await axios.get(
        `https://api.github.com/users?since=${since}`
      );

      if (githubUsers && githubUsers.data) {
        const simplifiedProfiles = githubUsers.data.map(({ id, login }) => ({
          id,
          login,
        }));

        return response.status(200).json(simplifiedProfiles);
      }

      return response.status(404).json({ msg: "Profiles not found" });
    } catch (error) {
      console.error("Error fetching GitHub profiles:", error.message);
      return response.status(500).json({ msg: "Internal Server Error" });
    }
  },

  async getUserDetails(request, response) {
    try {
      let username = request.params.username;
      const githubUser = await axios.get(
        `https://api.github.com/users/${username}`
      );

      if (githubUser && githubUser.data) {
        const userDetails = {
          id: githubUser.data.id,
          login: githubUser.data.login,
          url: githubUser.data.url,
          created_at: format(
            new Date(githubUser.data.created_at),
            "yyyy-MM-dd"
          ),
        };

        return response.status(200).json(userDetails);
      }

      return response.status(404).json({ msg: "Profile not found" });
    } catch (error) {
      console.error("Error fetching GitHub profile:", error.message);
      return response.status(500).json({ msg: "Internal Server Error" });
    }
  },

  async getUserRepos(request, response) {
    try {
      let username = request.params.username;
      const githubUserRepos = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );

      if (githubUserRepos && githubUserRepos.data) {
        const simplifiedRepos = githubUserRepos.data.map(
          ({ id, name, html_url }) => ({
            id,
            name,
            html_url,
          })
        );

        return response.status(200).json(simplifiedRepos);
      }

      return response.status(404).json({ msg: "Profiles not found" });
    } catch (error) {
      console.error("Error fetching GitHub profiles:", error.message);
      return response.status(500).json({ msg: "Internal Server Error" });
    }
  },
};
