import { UserData } from "./UserData";
import "./User.css";

const initialFriends = [
  {
    id: 118836,
    userName: "Clark",
    userImage: "https://i.pravatar.cc/48?u=933372",

    userComment:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 933372,
    userName: "Sarah",
    userImage:
      "https://media.istockphoto.com/id/1432249453/photo/a-male-programmer-shows-a-female-colleague-a-coding-technique-the-codes-are-visible-on-the.jpg?s=612x612&w=is&k=20&c=vmc95VMacoArLbStnKZ2MLGIG3co7mu1ICkSf1xMSn4=",
    userComment:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },

  {
    id: 938372,
    userName: "Sarah",
    userImage:
      "https://media.istockphoto.com/id/1432249453/photo/a-male-programmer-shows-a-female-colleague-a-coding-technique-the-codes-are-visible-on-the.jpg?s=612x612&w=is&k=20&c=vmc95VMacoArLbStnKZ2MLGIG3co7mu1ICkSf1xMSn4=",
    userComment:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 933772,
    userName: "Sarah",
    userImage:
      "https://media.istockphoto.com/id/1432249453/photo/a-male-programmer-shows-a-female-colleague-a-coding-technique-the-codes-are-visible-on-the.jpg?s=612x612&w=is&k=20&c=vmc95VMacoArLbStnKZ2MLGIG3co7mu1ICkSf1xMSn4=",
    userComment:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 499476,
    userName: "Anthony",
    userImage:
      "https://media.istockphoto.com/id/1432257450/photo/a-smaller-group-of-new-programmers-learn-coding-programming-languages-and-computer-science.jpg?s=612x612&w=0&k=20&c=8tpt1mRL6HyORnh3IH7o3gd9JpwC6IXOqMtORPusIKc=",
    userComment:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

function User() {
  const reviewers = initialFriends;

  return (
    <div className="users-card">
      <div className="user-card-header">
        <h1>What our users say</h1>

        <span>
          <svg
            height="40"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
            className="bluestroke"
          >
            <line
              x1="0"
              y1="0"
              x2="200"
              y2="0"
              style={{ stroke: "#206DF6", strokeWidth: 15 }}
              className="bluestroke"
            />
          </svg>
        </span>
      </div>
      <p>
        See some of our website's frequent users and their coments about our
        services
      </p>

      <ul className="review-content-card">
        {reviewers.map((reviewer) => (
          <UserData reviewerObject={reviewer} key={reviewer.id} />
        ))}
      </ul>
    </div>
  );
}

export default User;
