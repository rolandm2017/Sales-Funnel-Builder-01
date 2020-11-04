import React, { Component } from "react";

import { connect } from "react-redux";

import Div from "../Parts/Div";
import Button from "../Parts/Button";

class TextArea extends Component {
    render() {
        return (
            <Div>
                {this.props.customText ? (
                    this.props.customText
                ) : (
                    <p>Text Area: Your Copy Goes Here</p>
                )}

                {this.props.pg === 1 ? (
                    <div>
                        <Button onClick={this.props.moveUp}>
                            Move Section Up
                        </Button>
                        <Button onClick={this.props.moveDown}>
                            Move Section Down
                        </Button>
                        <Button onClick={this.props.del}>Delete Section</Button>
                    </div>
                ) : null}
            </Div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comp: state.components,
        pg: state.currentPage,
        copy: state.copy,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setStateCopy: (copy) => dispatch({ type: "SET_COPY", payload: copy }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextArea);
