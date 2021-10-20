import React from 'react';

class Pratos extends React.Component {
    render() {
        const { image, name } = this.props
        return (
                <section className="sectionPratos">
                    <img src={ image } alt="" />
                    <h1>{ name }</h1>
                </section>
        )
    }
}

export default Pratos;
