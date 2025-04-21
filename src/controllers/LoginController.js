export const login = (req, res) => {
    res.render("login/login", { title: "Login"});
};

export const logout = (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
};