import React from "react";

import { connect } from "react-redux";

import cat from "../../assets/images/Cat-trilling.jpg";

import Div from "../Parts/Div";
import Button from "../Parts/Button";

const image = (props) => {
    // TODO: Connect the image to a database
    // TODO: Allow the user to upload an image to the database, one for each image component

    return (
        <Div>
            {props.pg === 3 ? (
                <div>
                    <img src={cat} alt="A cat" width="200" height="133" />
                </div>
            ) : (
                <div>
                    <p>Insert an image:</p>
                    <input placeholder="No database connected yet"></input>
                </div>
            )}
            <p>{props.customText}</p>
            <br />
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

export default connect(mapStateToProps)(image);
