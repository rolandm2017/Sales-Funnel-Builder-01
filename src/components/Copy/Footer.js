import React from "react";

import { connect } from "react-redux";

import Div from "../Parts/Div";
import Button from "../Parts/Button";

const footer = (props) => {
    return (
        <Div>
            {props.customText ? <p>{props.customText}</p> : <p>Footer</p>}

            {props.pg === 1 ? (
                <Button onClick={props.del}>Remove Footer</Button>
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
