const data = {
	email: this.email,
	password: this.password,
};

const url = "http://localhost:8080/api/user/profile";

try {
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(data),
	});
	const responseData = await response.json();

	let token = responseData.token;

	localStorage.setItem("token", token);

	window.location.replace("/");
} catch (err) {
	console.log(err.message);
}
