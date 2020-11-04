import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import styled from "styled-components";

import FlexDiv from "./Parts/FlexDiv";
import FlexCol from "./Parts/FlexCol";
import LinkButton from "./Parts/LinkButton";

import Header from "./Copy/Header";
import Headline from "./Copy/Headline";
import TextArea from "./Copy/TextArea";
import Image from "./Copy/Image";
import EmailField from "./Copy/EmailField";
import Footer from "./Copy/Footer";

import * as actionTypes from "../store/constants";

const InputContainer = styled.div`
    padding: "0.5em";
    border: "1px solid black";
    backgroundcolor: "#c7cdd6";
    display: "inline-block";
`;

class Customize extends Component {
    componentDidMount() {
        this.props.setPage(2);
        document.title = "Sales Funnel Builder";

        // console.log("[Customize.js] componentDidMount()");
    }

    renderStateComponents() {
        // Is it really DRY enough having the same function in both Palette.js and Customize.js?
        let toRender = [];
        // console.log("[Customize.js] renderStateComponents()]");
        console.log("Copy:", this.props.copy);

        // FIXME: Still getting "index.js:1 Warning: Each child in a list should have a unique "key" prop."
        for (let i = 0; i < this.props.comp.length; i++) {
            // console.log("Component State:", this.props.comp);
            // console.log("Copy State:", this.props.copy);

            if (this.props.comp[i].type === "Header") {
                // need this if block because toRender.push(<Header customText={this.props.copy[i].webCopy}></Header>)
                // renders an error, "cannot get .webcopy property of undefined" or something like that w/o it
                if (this.props.copy[i]) {
                    toRender.unshift(
                        <FlexCol>
                            <Header
                                key={i}
                                uniqueId={this.props.comp[i].id}
                                // This line is the reason the function repeats so much.
                                // Without the if "if (this.props.copy[i]) {} else {}" blocks of code...
                                // the customText property would render "cannot get .webcopy property of undefined"
                                customText={this.props.copy[i].webCopy}
                            ></Header>
                            <InputContainer>
                                <input
                                    key={this.props.comp.length + i}
                                    associate={this.props.comp[i].id}
                                    onChange={(e) =>
                                        this.props.addCopy(
                                            e.target.value,
                                            this.props.copy[i].id
                                        )
                                    }
                                    value={this.props.copy[i].webCopy}
                                    placeholder="Enter custom text..."
                                ></input>
                            </InputContainer>
                        </FlexCol>
                    );
                } else {
                    toRender.unshift(
                        <FlexCol>
                            <Header
                                key={i}
                                uniqueId={this.props.comp[i].id}
                            ></Header>
                            <InputContainer>
                                <input
                                    key={this.props.comp.length + i}
                                    associate={this.props.comp[i].id}
                                    onChange={(e) =>
                                        this.props.addCopy(
                                            e.target.value,
                                            this.props.copy[i].id
                                        )
                                    }
                                    value={this.props.copy[i].webCopy}
                                    placeholder="Enter custom text..."
                                ></input>
                            </InputContainer>
                        </FlexCol>
                    );
                }

                // TODO: Repeatedly reassure yourself that this if statement fixes the Infinite Loop problem.
                if (this.props.copy.length === 0) {
                    // assigns a unique ID to each piece of copy entered into database
                    this.props.getNewStateVariable(this.props.comp[i].id);
                }
            } else if (this.props.comp[i].type === "Headline") {
                if (this.props.copy[i]) {
                    toRender.push(
                        <FlexCol>
                            <Headline
                                key={i}
                                uniqueId={this.props.comp[i].id}
                                customText={this.props.copy[i].webCopy}
                            ></Headline>
                            <InputContainer>
                                <input
                                    key={this.props.comp.length + i}
                                    associate={this.props.comp[i].id}
                                    onChange={(e) =>
                                        this.props.addCopy(
                                            e.target.value,
                                            this.props.copy[i].id
                                        )
                                    }
                                    value={this.props.copy[i].webCopy}
                                    placeholder="Enter custom text..."
                                ></input>
                            </InputContainer>
                        </FlexCol>
                    );
                } else {
                    toRender.push(
                        <FlexCol>
                            <Headline
                                key={i}
                                uniqueId={this.props.comp[i].id}
                            ></Headline>
                            <InputContainer>
                                <input
                                    key={this.props.comp.length + i}
                                    associate={this.props.comp[i].id}
                                    // FIXME: getting TypeError: Cannot read property 'id' of undefined on typing
                                    onChange={(e) =>
                                        this.props.addCopy(
                                            e.target.value,
                                            this.props.copy[i].id
                                        )
                                    }
                                    value={this.props.copy[i].webCopy}
                                    placeholder="Enter custom text..."
                                ></input>
                            </InputContainer>
                        </FlexCol>
                    );
                }
                if (this.props.copy.length === 0) {
                    this.props.getNewStateVariable(this.props.comp[i].id);
                }
            } else if (this.props.comp[i].type === "Text Area") {
                if (this.props.copy[i]) {
                    toRender.push(
                        <FlexCol>
                            <TextArea
                                key={i}
                                uniqueId={this.props.comp[i].id}
                                customText={this.props.copy[i].webCopy}
                            ></TextArea>
                            <InputContainer>
                                <input
                                    key={this.props.comp.length + i}
                                    associate={this.props.comp[i].id}
                                    onChange={(e) =>
                                        this.props.addCopy(
                                            e.target.value,
                                            this.props.copy[i].id
                                        )
                                    }
                                    value={this.props.copy[i].webCopy}
                                    placeholder="Enter custom text..."
                                ></input>
                            </InputContainer>
                        </FlexCol>
                    );
                } else {
                    toRender.push(
                        <FlexCol>
                            <TextArea
                                key={i}
                                uniqueId={this.props.comp[i].id}
                            ></TextArea>
                            <InputContainer>
                                <input
                                    key={this.props.comp.length + i}
                                    associate={this.props.comp[i].id}
                                    onChange={(e) =>
                                        this.props.addCopy(
                                            e.target.value,
                                            this.props.copy[i].id
                                        )
                                    }
                                    value={this.props.copy[i].webCopy}
                                    placeholder="Enter custom text..."
                                ></input>
                            </InputContainer>
                        </FlexCol>
                    );
                }
                if (this.props.copy.length === 0) {
                    this.props.getNewStateVariable(this.props.comp[i].id);
                }
            } else if (this.props.comp[i].type === "Image") {
                if (this.props.copy[i]) {
                    toRender.push(
                        <FlexCol>
                            <Image
                                key={i}
                                uniqueId={this.props.comp[i].id}
                                customText={this.props.copy[i].webCopy}
                            ></Image>
                            <InputContainer>
                                <input
                                    key={this.props.comp.length + i}
                                    associate={this.props.comp[i].id}
                                    onChange={(e) =>
                                        this.props.addCopy(
                                            e.target.value,
                                            this.props.comp[i].id
                                        )
                                    }
                                    placeholder={"Type your caption here..."}
                                    value={this.props.copy[i].webCopy}
                                ></input>
                            </InputContainer>
                        </FlexCol>
                    );
                } else {
                    toRender.push(
                        <FlexCol>
                            <Image
                                key={i}
                                uniqueId={this.props.comp[i].id}
                            ></Image>
                            <InputContainer>
                                <input
                                    key={this.props.comp.length + i}
                                    associate={this.props.comp[i].id}
                                    onChange={(e) =>
                                        this.props.addCopy(
                                            e.target.value,
                                            this.props.comp[i].id
                                        )
                                    }
                                    placeholder={"Type your caption here..."}
                                    value={this.props.copy[i].webCopy}
                                ></input>
                            </InputContainer>
                        </FlexCol>
                    );
                }
                if (this.props.copy.length === 0) {
                    this.props.getNewStateVariable(this.props.comp[i].id);
                }
            } else if (this.props.comp[i].type === "Email Field") {
                // the Email Field section DOES NOT need an if/else block
                // because it does not have a "customText" property field
                toRender.push(
                    <div>
                        <EmailField
                            key={i}
                            uniqueId={this.props.comp[i].id}
                        ></EmailField>
                    </div>
                );
                if (this.props.copy.length === 0) {
                    this.props.getNewStateVariable(this.props.comp[i].id);
                }
            } else if (
                this.props.comp[i].type === "Footer" &&
                !this.props.comp.includes("Footer")
            ) {
                if (this.props.copy[i]) {
                    toRender.push(
                        <FlexCol>
                            <Footer
                                key={i}
                                uniqueId={this.props.comp[i].id}
                                customText={this.props.copy[i].webCopy}
                            ></Footer>
                            <InputContainer>
                                <input
                                    key={this.props.comp.length + i}
                                    associate={this.props.comp[i].id}
                                    onChange={(e) =>
                                        this.props.addCopy(
                                            e.target.value,
                                            this.props.comp[i].id
                                        )
                                    }
                                    value={this.props.copy[i].webCopy}
                                    placeholder="Enter custom text..."
                                ></input>
                            </InputContainer>
                        </FlexCol>
                    );
                } else {
                    toRender.push(
                        <FlexCol>
                            <Footer
                                key={i}
                                uniqueId={this.props.comp[i].id}
                            ></Footer>
                            <InputContainer>
                                <input
                                    key={this.props.comp.length + i}
                                    associate={this.props.comp[i].id}
                                    onChange={(e) =>
                                        this.props.addCopy(
                                            e.target.value,
                                            this.props.comp[i].id
                                        )
                                    }
                                    value={this.props.copy[i].webCopy}
                                    placeholder="Enter custom text..."
                                ></input>
                            </InputContainer>
                        </FlexCol>
                    );
                }
                if (this.props.copy.length === 0) {
                    this.props.getNewStateVariable(this.props.comp[i].id);
                }
            }
        }

        return toRender;
    }

    render() {
        return (
            <div>
                <div class="buffer"></div>
                <div class="main">
                    <h2>Your Custom Elements: Enter Custom Text</h2>

                    <FlexCol>{this.renderStateComponents()}</FlexCol>
                    <FlexDiv>
                        <LinkButton>
                            <Link to="/palette">Back</Link>
                        </LinkButton>
                        <br />
                        <LinkButton>
                            <Link to="/finalpage">Go To Third Page</Link>
                        </LinkButton>
                    </FlexDiv>
                    {/* TODO-TODAY: move enter Custom Text box inside of div */}
                </div>
                <div class="buffer"></div>
            </div>
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
        setPage: (page) =>
            dispatch({ type: actionTypes.PAGE_CHANGE, payload: page }),
        getNewStateVariable: (stateId) =>
            dispatch({ type: actionTypes.NEW_VAR, payload: stateId }),
        addCopy: (text, id) =>
            dispatch({
                type: actionTypes.ADD_COPY,
                payload: [text, id],
            }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customize);
