import BodyProfile from "../components/user/bodyProfile";
import ProfilePicture from "../components/user/profilePicture";

export default function User() {
  return (
    <div>
      <div className="text-3xl font-bold pt-10 pl-10">User</div>
      <ProfilePicture />
      <BodyProfile />
    </div>
  )
}
