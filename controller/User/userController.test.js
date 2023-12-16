const axios = require("axios");
const { getProfiles, getUserDetails, getUserRepos } = require("./userControle");

jest.mock("axios");

describe("getProfiles Test", () => {
  test("should return profiles when successful", async () => {
    const mockedResponse = {
      data: [
        { id: 1, login: "user1" },
        { id: 2, login: "user2" },
      ],
    };

    axios.get.mockResolvedValueOnce(mockedResponse);

    const req = { query: {} };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getProfiles(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      { id: 1, login: "user1" },
      { id: 2, login: "user2" },
    ]);
  });
});

describe("getUserDetails Test", () => {
  test("should return user details when successful", async () => {
    const mockedResponse = {
      data: {
        id: 1,
        login: "user1",
        url: "https://github.com/user1",
        created_at: "2021-12-30",
      },
    };

    axios.get.mockResolvedValueOnce(mockedResponse);

    const req = { params: { username: "user1" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getUserDetails(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });
});

describe("getUserRepos Test", () => {
  test("should return user repos when successful", async () => {
    const mockedResponse = {
      data: [
        { id: 1, name: "repo1", html_url: "https://github.com/user1/repo1" },
        { id: 2, name: "repo2", html_url: "https://github.com/user1/repo2" },
      ],
    };

    axios.get.mockResolvedValueOnce(mockedResponse);

    const req = { params: { username: "user1" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getUserRepos(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      { id: 1, name: "repo1", html_url: "https://github.com/user1/repo1" },
      { id: 2, name: "repo2", html_url: "https://github.com/user1/repo2" },
    ]);
  });
});
