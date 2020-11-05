import React from "react";

import { connect } from "react-redux";

import Div from "../Parts/Div";
import Button from "../Parts/Button";

const headline = (props) => {
    return (
        <Div>
            {props.customText ? <h1>{props.customText}</h1> : <h1>Headline</h1>}
            {props.pg === 1 ? (
                <div>
                    <Button onClick={props.moveUp}>Move Section Up</Button>
                    <Button onClick={props.moveDown}>Move Section Down</Button>
                    <Button onClick={props.del}>Delete Section</Button>
                </div>
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

export default connect(mapStateToProps)(headline);
