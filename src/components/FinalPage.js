import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import styled from "styled-components";

import Button from "./Parts/Button";
import Bg from "./Parts/Bg";
import FlexDiv from "./Parts/FlexDiv";
import FlexCol from "./Parts/FlexCol";
import FlexColNoMargin from "./Parts/FlexColNoMargin";
import LinkButton from "./Parts/LinkButton";

import Header from "./Copy/Header";
import Headline from "./Copy/Headline";
import TextArea from "./Copy/TextArea";
import Image from "./Copy/Image";
import EmailField from "./Copy/EmailField";
import Footer from "./Copy/Footer";

import * as actionTypes from "../store/constants";

const Input = styled.input`
    width: 200px;
    height: 50px;
    margin: 0 15px;
    padding: 0 0 0 10px;
    background-color: papayawhip;
    border: 5px solid papayawhip;
    border-radius: 10px;
`;

const InputContainer = styled.div`
    width: 240px;
`;

const Divider = styled.div`
    width: calc((100% - 240px) / 2);
    text-align: left;
`;

class FinalPage extends Component {
    componentDidMount() {
        this.props.setPage(3);
        document.title = "Sales Funnel Builder";
        // console.log("[Customize.js] componentDidMount()");
    }

    renderStateComponents() {
        // Is it really DRY enough having the same function in both Palette.js and Customize.js?
        let toRender = [];
        console.log("[FinalPage.js] renderStateComponents()]");

        for (let i = 0; i < this.props.comp.length; i++) {
            // FIXME: this.props.comp sometimes starts as "undefined"

            if (this.props.comp[i].type === "Header") {
                // this.installComponent(this.props.comp, i);
                // need this if block because toRender.push(<Header customText={this.props.copy[i].webCopy}></Header>)
                // renders an error, "cannot get .webcopy property of undefined" or something like that w/o it
                if (this.props.copy[i]) {
                    toRender.push(
                        <FlexColNoMargin>
                            <Header
                                key={i}
                                uniqueId={this.props.comp[i].id}
                                // This line is the reason the function repeats so much.
                                // Without the if "if (this.props.copy[i]) {} else {}" blocks of code...
                                // the customText property would render "cannot get .webcopy property of undefined"
                                customText={this.props.copy[i].webCopy}
                            ></Header>
                        </FlexColNoMargin>
                    );
                } else {
                    toRender.push(
                        <FlexColNoMargin>
                            <Header
                                key={i}
                                uniqueId={this.props.comp[i].id}
                            ></Header>
                        </FlexColNoMargin>
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
                        <FlexColNoMargin>
                            <Headline
                                key={i}
                                uniqueId={this.props.comp[i].id}
                                customText={this.props.copy[i].webCopy}
                            ></Headline>
                        </FlexColNoMargin>
                    );
                } else {
                    toRender.push(
                        <FlexColNoMargin>
                            <Headline
                                key={i}
                                uniqueId={this.props.comp[i].id}
                            ></Headline>
                        </FlexColNoMargin>
                    );
                }
                if (this.props.copy.length === 0) {
                    this.props.getNewStateVariable(this.props.comp[i].id);
                }
            } else if (this.props.comp[i].type === "Text Area") {
                if (this.props.copy[i]) {
                    toRender.push(
                        <FlexColNoMargin>
                            <TextArea
                                key={i}
                                uniqueId={this.props.comp[i].id}
                                customText={this.props.copy[i].webCopy}
                            ></TextArea>
                        </FlexColNoMargin>
                    );
                } else {
                    toRender.push(
                        <FlexColNoMargin>
                            <TextArea
                                key={i}
                                uniqueId={this.props.comp[i].id}
                            ></TextArea>
                        </FlexColNoMargin>
                    );
                }
                if (this.props.copy.length === 0) {
                    this.props.getNewStateVariable(this.props.comp[i].id);
                }
            } else if (this.props.comp[i].type === "Image") {
                if (this.props.copy[i]) {
                    toRender.push(
                        <FlexColNoMargin>
                            <Image
                                key={i}
                                uniqueId={this.props.comp[i].id}
                                customText={this.props.copy[i].webCopy}
                            ></Image>
                        </FlexColNoMargin>
                    );
                } else {
                    toRender.push(
                        <FlexColNoMargin>
                            <Image
                                key={i}
                                uniqueId={this.props.comp[i].id}
                            ></Image>
                        </FlexColNoMargin>
                    );
                }
                if (this.props.copy.length === 0) {
                    this.props.getNewStateVariable(this.props.comp[i].id);
                }
            } else if (this.props.comp[i].type === "Email Field") {
                // the Email Field section DOES NOT need an if/else block
                // because it does not have a "customText" property field
                toRender.push(
                    <FlexColNoMargin>
                        <EmailField
                            key={i}
                            uniqueId={this.props.comp[i].id}
                        ></EmailField>
                    </FlexColNoMargin>
                );
                if (this.props.copy.length === 0) {
                    this.props.getNewStateVariable(this.props.comp[i].id);
                }
            } else if (this.props.comp[i].type === "Footer") {
                if (this.props.copy[i]) {
                    toRender.push(
                        <FlexColNoMargin>
                            <Footer
                                key={i}
                                uniqueId={this.props.comp[i].id}
                                customText={this.props.copy[i].webCopy}
                            ></Footer>
                        </FlexColNoMargin>
                    );
                } else {
                    toRender.push(
                        <FlexColNoMargin>
                            <Footer
                                key={i}
                                uniqueId={this.props.comp[i].id}
                            ></Footer>
                        </FlexColNoMargin>
                    );
                }
                if (this.props.copy.length === 0) {
                    this.props.getNewStateVariable(this.props.comp[i].id);
                }
            }
        }

        return toRender;
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    submitDomain = () => {
        this.props.setURL(this.state.domain);
    };

    render() {
        return (
            <Bg>
                <div class="buffer"></div>
                <div>
                    <h2>Ready To Render, Now Select A Domain Name...</h2>

                    <FlexDiv>
                        <Divider></Divider>
                        <InputContainer>
                            <Input
                                onChange={this.handleChange}
                                name="domain"
                                placeholder={"Choose a name for your site..."}
                            ></Input>
                        </InputContainer>
                        <Divider>
                            <Button onClick={this.submitDomain}>Ready!</Button>
                        </Divider>
                    </FlexDiv>
                    <p>
                        Pick a domain name like "YourNewSite" or
                        "MyCoolProduct".
                    </p>
                    {this.props.siteURL.length > 11 ? (
                        <Link to={this.props.siteURL}>Go To Your New Site</Link>
                    ) : null}
                </div>
                <br />
                <h5>Here's How Your Website Will Look:</h5>
                <FlexCol>{this.renderStateComponents()}</FlexCol>

                <FlexDiv>
                    <LinkButton>
                        <Link to="/customize">Back</Link>
                    </LinkButton>
                </FlexDiv>
                <br />
            </Bg>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comp: state.components,
        pg: state.currentPage,
        copy: state.copy,
        siteURL: state.siteURL,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (page) =>
            dispatch({ type: actionTypes.PAGE_CHANGE, payload: page }),
        setURL: (domain) =>
            dispatch({ type: actionTypes.SET_URL, payload: domain }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FinalPage);
