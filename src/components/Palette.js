// https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/
import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import styled from "styled-components";

import Header from "./Copy/Header";
import Headline from "./Copy/Headline";
import TextArea from "./Copy/TextArea";
import Image from "./Copy/Image";
import EmailField from "./Copy/EmailField";
import Footer from "./Copy/Footer";

import * as actionTypes from "../store/constants";

const Button = styled.button`
    margin: 10px;
    width: 80px;
    height: 40px;
    background-color: #ff8484;

    &:hover {
        background-color: #ff1133;
    }
`;

const FlexDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

class Palette extends Component {
    componentDidMount() {
        this.props.setPage(1);
        document.title = "Sales Funnel Builder";
    }

    addComponent(e) {
        // starts the process of rendering a component to the DOM
        const headerArray = this.props.comp.filter((x) => x.type === "Header");
        const footerArray = this.props.comp.filter((x) => x.type === "Footer");

        // .pop the last entry in this.props.copy and use the .id property to go .id+1 and feed in a new value
        let nextCopyId = 0;
        if (this.props.copy.length > 0) {
            nextCopyId = this.props.copy[this.props.copy.length - 1].id + 1;
        }
        if (e.target.innerHTML === "Header" && headerArray.length < 1) {
            // Redux dispatch methods

            // // Implementing a fix for "TypeError: Cannot read property 'id' of undefined" on typing in input field
            // // this if statement checks if we need to modify the .copy state property
            // if (this.props.comp.length > this.props.copy.length) {
            // 	// let copyIds = [];
            // 	// for (let i = this.props.copy.length; i < this.props.comp.length; i++) {}
            // 	let nextCopyId = 0;
            // 	console.log("compare:", this.props.copy !== []);
            // 	if (this.props.copy.length > 0) {
            // 		console.log("goose:", this.props.copy[0]);
            // 		nextCopyId = this.props.copy.pop().id + 1;
            // 	}
            // 	console.log(nextCopyId);
            // 	this.props.header(nextCopyId);
            // } else {
            // 	this.props.header();
            // }

            // // NOTE: before Fix was implenented, this if block simply read: "this.props.header()"
            this.props.addComp("Header", nextCopyId);
        } else if (e.target.innerHTML === "Headline") {
            this.props.addComp("Headline", nextCopyId);
        } else if (e.target.innerHTML === "Text Area") {
            this.props.addComp("Text Area", nextCopyId);
        } else if (e.target.innerHTML === "Image") {
            this.props.addComp("Image", nextCopyId);
        } else if (e.target.innerHTML === "Email Field") {
            this.props.addComp("Email Field", nextCopyId);
        } else if (e.target.innerHTML === "Footer" && footerArray.length < 1) {
            this.props.addComp("Footer", nextCopyId);
        } else {
            console.log("Error: Can only add one header/footer component");
        }
    }

    deleteComponent(typeAndId) {
        let tempArray = [...this.props.comp];
        let index;
        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i].id === typeAndId[1]) {
                index = i;
            }
        }
        tempArray.splice(index, 1);
        this.props.delComponent(tempArray);
    }

    moveUp(typeAndId) {
        // typeAndId is an array where
        // typeAndId[0] === componentType & typeAndId[1] === componentUniqueId
        console.log(typeAndId);

        // return a new array of the state.components state to work with
        let tempArray = [...this.props.comp];
        if (tempArray.length <= 1) {
            console.log(
                "Error: Can't reorder components unless there is more than 1."
            );
            return null;
        }
        let index;
        // using this loop to find the correct index of the component to be swapped
        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i].id === typeAndId[1]) {
                index = i;
            }
        }
        // prevent an error from occurring
        if (index === 0) {
            console.log(
                "Error: Can't move component up if it is last in the list."
            );
            // FIXME: Is there something better I can return or do here?
            return null;
        }

        let movingDown = tempArray[index - 1];
        tempArray[index - 1] = tempArray[index];
        tempArray[index] = movingDown;

        console.table(tempArray);
        this.props.setNewComponents(tempArray);
    }

    moveDown(typeAndId) {
        let tempArray = [...this.props.comp];
        if (tempArray.length <= 1) {
            console.log(
                "Error: Can't reorder components unless there is more than 1."
            );
            return null;
        }
        let index;
        // using this loop to find the correct index of the component to be swapped
        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i].id === typeAndId[1]) {
                index = i;
            }
        }
        // prevent an error from occurring
        if (index === tempArray.length - 1) {
            console.log(
                "Error: Can't move component down if it is last in the list."
            );
            // FIXME: Is there something better I can return or do here?
            return null;
        }
        let movingUp = tempArray[index + 1];
        tempArray[index + 1] = tempArray[index];
        tempArray[index] = movingUp;

        this.props.setNewComponents(tempArray);
    }

    renderStateComponents(e) {
        // Is it really DRY enough having the same function in both Palette.js and Customize.js?
        let toRender = [];

        for (let i = 0; i < this.props.comp.length; i++) {
            if (this.props.comp[i].type === "Header") {
                toRender.push(
                    <Header
                        key={i}
                        uniqueId={this.props.comp[i].id}
                        del={() =>
                            this.deleteComponent([
                                this.props.comp[i].type,
                                this.props.comp[i].id,
                            ])
                        }
                    ></Header>
                );
            } else if (this.props.comp[i].type === "Headline") {
                toRender.push(
                    <Headline
                        key={i}
                        uniqueId={this.props.comp[i].id}
                        moveUp={() =>
                            this.moveUp([
                                this.props.comp[i].type,
                                this.props.comp[i].id,
                            ])
                        }
                        moveDown={() =>
                            this.moveDown([
                                this.props.comp[i].type,
                                this.props.comp[i].id,
                            ])
                        }
                        del={() =>
                            this.deleteComponent([
                                this.props.comp[i].type,
                                this.props.comp[i].id,
                            ])
                        }
                    ></Headline>
                );
            } else if (this.props.comp[i].type === "Text Area") {
                toRender.push(
                    <TextArea
                        key={i}
                        uniqueId={this.props.comp[i].id}
                        moveUp={() =>
                            this.moveUp([
                                this.props.comp[i].type,
                                this.props.comp[i].id,
                            ])
                        }
                        moveDown={() =>
                            this.moveDown([
                                this.props.comp[i].type,
                                this.props.comp[i].id,
                            ])
                        }
                        del={() =>
                            this.deleteComponent([
                                this.props.comp[i].type,
                                this.props.comp[i].id,
                            ])
                        }
                    ></TextArea>
                );
            } else if (this.props.comp[i].type === "Image") {
                toRender.push(
                    <Image
                        key={i}
                        uniqueId={this.props.comp[i].id}
                        moveUp={() =>
                            this.moveUp([
                                this.props.comp[i].type,
                                this.props.comp[i].id,
                            ])
                        }
                        moveDown={() =>
                            this.moveDown([
                                this.props.comp[i].type,
                                this.props.comp[i].id,
                            ])
                        }
                        del={() =>
                            this.deleteComponent([
                                this.props.comp[i].type,
                                this.props.comp[i].id,
                            ])
                        }
                    ></Image>
                );
            } else if (this.props.comp[i].type === "Email Field") {
                toRender.push(
                    <EmailField
                        key={i}
                        uniqueId={this.props.comp[i].id}
                        moveUp={() =>
                            this.moveUp([
                                this.props.comp[i].type,
                                this.props.comp[i].id,
                            ])
                        }
                        moveDown={() =>
                            this.moveDown([
                                this.props.comp[i].type,
                                this.props.comp[i].id,
                            ])
                        }
                        del={() =>
                            this.deleteComponent([
                                this.props.comp[i].type,
                                this.props.comp[i].id,
                            ])
                        }
                    ></EmailField>
                );
            } else if (this.props.comp[i].type === "Footer") {
                toRender.push(
                    <Footer
                        key={i}
                        uniqueId={this.props.comp[i].id}
                        moveUp={() =>
                            this.moveUp([
                                this.props.comp[i].type,
                                this.props.comp[i].id,
                            ])
                        }
                        moveDown={() =>
                            this.moveDown([
                                this.props.comp[i].type,
                                this.props.comp[i].id,
                            ])
                        }
                        del={() =>
                            this.deleteComponent([
                                this.props.comp[i].type,
                                this.props.comp[i].id,
                            ])
                        }
                    ></Footer>
                );
            }
        }

        return toRender;
    }

    render() {
        // let debugging = "";
        // for (let i = 0; i < this.props.comp.length; i++) {
        // 	// makes each element of the state.components array show up on the screen
        // 	debugging += this.props.comp[i].type;
        // 	debugging += this.props.comp[i].id;
        // 	debugging += " ";
        // }

        return (
            <div>
                {/* <p>Debugging: {debugging}</p>
				<p>Debugging, page: {this.props.pg}</p> */}
                <div class="buffer"></div>
                <div class="main">
                    <h2>Select Your Custom Elements</h2>
                    <FlexDiv>
                        <Button onClick={(e) => this.addComponent(e)}>
                            Header
                        </Button>
                        <Button onClick={(e) => this.addComponent(e)}>
                            Headline
                        </Button>
                        <Button onClick={(e) => this.addComponent(e)}>
                            Text Area
                        </Button>
                        <Button onClick={(e) => this.addComponent(e)}>
                            Image
                        </Button>
                        <Button onClick={(e) => this.addComponent(e)}>
                            Email Field
                        </Button>
                        <Button onClick={(e) => this.addComponent(e)}>
                            Footer
                        </Button>
                    </FlexDiv>
                    <div>{this.renderStateComponents()}</div>
                    <Link to="/customize">Go To Next Step</Link>
                </div>
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
        addComp: (component, id) =>
            dispatch({
                type: actionTypes.ADD_COMPONENT,
                payload: [component, id],
            }),
        setNewComponents: (newOrder) =>
            dispatch({ type: actionTypes.SET_NEW, payload: newOrder }),
        delComponent: (del) =>
            dispatch({ type: actionTypes.DEL, payload: del }),
        setPage: (page) =>
            dispatch({ type: actionTypes.PAGE_CHANGE, payload: page }),
        addCopy: (text, id) =>
            dispatch({
                type: actionTypes.ADD_COPY,
                payload: [text, id],
            }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
