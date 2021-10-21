import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
    render() {
        const { totalCalorias } = this.props
        return (
            <section className="resultSection">
                <h1>Resultado</h1>
                <h2>{ totalCalorias }</h2>
            </section>
        )
    }
}

Result.propTypes = {
    totalCalorias: PropTypes.number.isRequired,
}

export default Result;
