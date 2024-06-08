import React from "react"
import Header from "./components/Header"
import Destination from "./components/Destination"
import data from "./data"

export default function App() {
    const destination = data.map(item => {
        return (
            <Destination
                key={item.id}
                item={item}
            />
        )
    })
    
    return (
        <div>
            <Header />
            <section className="destinations-list">
                {destination}
            </section>
        </div>
    )
}