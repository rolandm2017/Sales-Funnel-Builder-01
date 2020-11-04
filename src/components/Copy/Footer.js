import React from "react";

import { connect } from "react-redux";

import Div from "./Div";

const footer = (props) => {
    return (
        <Div>
            {props.customText ? <p>{props.customText}</p> : <p>Footer</p>}

            {props.pg === 1 ? (
                <button onClick={props.del}>Remove Footer</button>
            ) : null}
        </Div>
    );
};

const mapStateToProps = (state) => {
    return {
        comp: state.components,
        pg: state.currentPage,
    };
};

export default connect(mapStateToProps)(footer);
