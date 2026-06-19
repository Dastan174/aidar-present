import "./insta.css";
export default function Insta() {
  return (
    <div className="post">
      <div className="post-header">
        <img
          loading="lazy"
          className="avatar"
          src="/images/avatar.JPG"
          alt="avatar"
        />
        <span className="username">nuradinov555</span>
      </div>

      <img
        loading="lazy"
        className="post-image"
        src="/images/insta.jpg"
        alt="post"
      />

      <div className="post-content">
        <div className="actions">
          <span>❤️</span>
          <span>💬</span>
          <span>📤</span>
        </div>

        <p className="likes">35k likes</p>

        <p className="description">
          <strong>nuradinov555</strong> Коздорун керемет
        </p>
      </div>
    </div>
  );
}
