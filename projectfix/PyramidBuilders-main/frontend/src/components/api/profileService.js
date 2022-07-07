import axios from "axios";

export const GetProfileData = ({ userId }) => {
	const response = axios.get(
		`http://localhost:8080/api/profile/get?userId=${userId}`,
		{
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		}
	);
	return response;
};

export const PostProfileData = () => {
	const profileData = {
		uid: this.uid,
		name: this.name,
		bio: this.bio,
		photo: this.photo,
	};
	try {
		const response = axios.post(`http://localhost:8080/api/user/profile/`, {
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(profileData),
		});
		const responseData = response.json();
		let token = responseData.token;
		localStorage.setItem("token", token);
		window.location.replace("/");
	} catch (err) {
		console.log(err.message);
	}
};
