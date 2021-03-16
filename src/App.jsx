import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem } from './redux/actions';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 1.5em;
`

const WishList = styled.div`
    width: 400px;
    height: 540px;
    background-color: #FCC0CB;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0 0 25px 1px rgb(0, 0, 0, 0.75);
    text-align: center;
    padding-top: 0.75em;
`;

const Title = styled.h3`
    text-transform: uppercase;
    letter-spacing: 1px;
`;

const ItemList = styled.div`
    width: 285px;
    height: 250px;
    margin: auto;
    margin-top: 1.5em;
    border: 1px solid #000000;
    background-color: #FDFDFD;
    border-radius: 2px;
    text-align: left;
    ul {
        padding: 10px;
        list-style-type: none;
        margin: 0;
        li {
            margin-top: 5px;
        }
    }
`;

const ItemInput = styled.input`
    width: 280px;
    height: 32px;
    border-radius: 2px;
    margin-bottom: 22px;
`;

const Button = styled.button`
    width: ${props => props.size ? props.size : "10px"};
    height: ${props => props.height ? props.height : "45px"};
    background-color: #90EB92;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 5px 1px rgb(0, 0, 0, 0.2);
    margin-bottom: 22px;
    font-size: 1em;
    font-weight: bold;
`;



const App = (props) => {
    const [userInput, setUserInput] = useState("");
    function handleAdd() {
        if (userInput.length == 0 || userInput == "") {
            alert("ERROR\nInvalid Input - Empty String")
        } else if (props.wishList.includes(userInput)) {
            alert("ERROR\nInvalid Input - Item Exists")
            setUserInput("");
        } else {
            props.addItem(userInput);
            setUserInput("");
        }
    }
    function handleDelete(listItem) {
        props.deleteItem(listItem);
    }
    return (
        <Container>
            <WishList>
                <Title>My Wishlist</Title>
                <ItemList>
                    <ul>
                        {props.wishList.map((listItem, listIndex) => {
                            return (
                                <li onClick={() => handleDelete(listItem)}
                                    key={listIndex}>
                                    {listItem}
                                </li>
                            )
                        })}
                    </ul>
                </ItemList>
                <br />
                <ItemInput
                    type="text"
                    onChange={e => setUserInput(e.target.value)}
                    value={userInput}
                />
                <Button size="120px" height="45px" onClick={() => handleAdd()}>Add</Button> <br />
                <Button size="280px" height="45px">Submit</Button>
            </WishList>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        wishList: state.wishList
    };
};

const mapDispatchToProps = () => {
    return {
        addItem,
        deleteItem
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(App);
