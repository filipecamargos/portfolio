import cssClasses from "./ProfilePic.module.css";

const ProfilePic = () => {
  return (
      <div className={cssClasses.picContainer}>
              <img src="/profile.jpg" alt="profile" />
      </div>
  );
};

export default ProfilePic;
