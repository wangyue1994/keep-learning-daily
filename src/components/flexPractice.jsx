import React from 'react'
import './flexPractice.less'

export default class FlexPractice extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <main style={{background: 'yellow', height: '1000px'}}>
                <header>header1</header>
                <nav>nav</nav>
                <article>article</article>
                <section>section</section>
                <aside>aside</aside>
                <footer>footer</footer>
            </main>
        )
    }
}