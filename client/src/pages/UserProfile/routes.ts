const routeUserProfile = (userId: string | undefined | number | null = ":id") => `/userprofile/${userId}`;

export default routeUserProfile;