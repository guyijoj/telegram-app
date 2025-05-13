export const ProfileCard = () => {
  return (
    <div className="main-part flex flex-col justify-between items-center text-white bg-mainColor h-70 text-center p-5 rounded-b-lg">
      <p className="text-xl">Профиль</p>
      <img
        src="src/photos/random-ass-avatar.jpg"
        alt="default-profile-picture"
        className="w-30  rounded-full"
      />
      <div>
        <p className="main-heading">Имя Фамилия</p>
        <p className="sub-heading text-subText">Профессия</p>
      </div>
    </div>
  );
};
