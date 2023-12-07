import { useState } from "react"
export function TwitterFollowCard({ userName, name }) {
    const state = useState(false)
    const isFollowing = state[0]
    const setIsFollowing = state[1]
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button' //depende el estado cambia los estilos
    //Le paso la funcion formatUserName
    
    const handleClick = () => {
        setIsFollowing(!isFollowing) //Cuando hago click en el botón cambio el estado
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="imagen usuario"
                    src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}