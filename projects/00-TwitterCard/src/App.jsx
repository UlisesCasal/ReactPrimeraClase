import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {

    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUserName} userName="casal_ulises" name="Ulises Casal" />
            <TwitterFollowCard formatUserName={formatUserName} userName="NaranjaX" name="Naranja X" />
            <TwitterFollowCard formatUserName={formatUserName} userName="midudev" name="Miguel Ángel Durán" />
        </section>
    )
}