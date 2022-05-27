import './style.css'

export function Card({name, time}) {
    return(
        <div className="cardName">
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}