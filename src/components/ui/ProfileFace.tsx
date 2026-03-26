export const ProfileFace = () => {
  return (
    <figure className="profile-face" role="img" aria-label="Welcoming geometric male face avatar">
      <div className="profile-face-aura" aria-hidden="true" />
      <div className="profile-face-card">
        <div className="face-head">
          <span className="face-hair" />
          <span className="face-ear face-ear-left" />
          <span className="face-ear face-ear-right" />

          <div className="face-brow-row" aria-hidden="true">
            <span className="face-brow" />
            <span className="face-brow" />
          </div>

          <div className="face-eye-row" aria-hidden="true">
            <span className="face-eye" />
            <span className="face-eye" />
          </div>

          <span className="face-nose" aria-hidden="true" />
          <span className="face-smile" aria-hidden="true" />
        </div>

        <div className="face-shoulders" aria-hidden="true">
          <span className="face-shirt" />
        </div>

        <figcaption className="face-caption">Hello, welcome to my portfolio.</figcaption>
      </div>
    </figure>
  )
}
