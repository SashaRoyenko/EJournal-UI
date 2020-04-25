import React from 'react';
import {Button, Input, InputItem, ItemTitle, Wrapper} from "../addAdmin/styled";

export default class EditAdmin extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedSchool: "School №1",
            name: "  selectedName",
            lastName:"  selectedLastName",
            email:"  selectedEmail",
            password:"  selectedPassword",
            schools: ["1","2","3","4"],
        };
    }

    render() {
        const {selectedSchool, schools, name, lastName, email, password} = this.state;
        return (
            <form>
                <Wrapper>
                    <InputItem>
                        <ItemTitle>Прізвище</ItemTitle>
                        <Input type="text" placeholder={lastName}/>
                    </InputItem>
                    <InputItem>
                        <ItemTitle>Ім&apos;я</ItemTitle>
                        <Input type="text" placeholder={name}/>
                    </InputItem>
                    <InputItem>
                        <ItemTitle>Навчальний заклад</ItemTitle>
                        <select name="school">
                            <option value="">{selectedSchool}</option>
                            {schools.map((school) => <option key={"#"} value="#">{school}</option>)}
                        </select>
                    </InputItem>
                    <InputItem>
                        <ItemTitle>Електронна пошта</ItemTitle>
                        <Input type="text" placeholder={email}/>
                    </InputItem>
                    <InputItem>
                        <ItemTitle>Пароль</ItemTitle>
                        <Input type="password" placeholder={password}/>
                    </InputItem>
                </Wrapper>
                <Button>Підтвердити</Button>
            </form>
        );
    }
}
