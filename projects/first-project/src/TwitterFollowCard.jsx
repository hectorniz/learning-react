import './TFC_Style.css/'
import { useState } from 'react'


export function TwitterFollowCard({userName, children}) {
  const [isFollowing, setIsFollowing] = useState(false);

  const btnValue = isFollowing ? "Siguiendo" : "Seguir"
  const btnClassName = isFollowing ? "tfc-button is-following" : "tfc-button"

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

  return (
    <article className='tfc-container'>
      <header className='tfc-header'>
        <img className='tfc-avatar' src={`https://unavatar.io/${userName}`} alt="profile" />
        <div className='tfc-info'>
          <strong>{children}</strong>
          <span className='tfc-info-username'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={btnClassName} onClick={handleClick}>
          <span className='tfc-button-text'>{btnValue}</span>
          <span className='tfc-button-stopfollowing'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
