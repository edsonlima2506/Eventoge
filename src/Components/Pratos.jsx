import React from 'react';

class Pratos extends React.Component {
    render() {
        const { image, name, calorias, somaCalorias } = this.props
        return (
                <section className="sectionPratos">
                    <img src={ image } alt="" />
                    <h1>{ name }</h1>
                    <button
                    type="button"
                    value={ calorias }
                    onClick={ somaCalorias }
                    >Adicionar</button>
                </section>
        )
    }
}

export default Pratos;
