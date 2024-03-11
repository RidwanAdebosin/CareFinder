export function UserData({ reviewerObject }) {
  return (
    <div className="wrapper">
      <div className="userImg">
        <img
          src={reviewerObject.userImage}
          alt={reviewerObject.userName}
          className="userImage"
        />
      </div>
      <div className="main">
        <p className="content">{reviewerObject.userComment}</p>
        <h3>{reviewerObject.userName}</h3>
      </div>
    </div>
  );
}
