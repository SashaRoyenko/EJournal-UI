import React from 'react';
import {Button, Input, InputItem, ItemTitle, Wrapper} from './styled';

export default class AddAdmin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            schools: ["1", "2", "3", "Na"],
        };
    }

    render() {
        const {schools} = this.state;
        return (
            <form>
                <Wrapper>
                    <InputItem>
                        <ItemTitle>Прізвище</ItemTitle>
                        <Input type="text" placeholder="   Прізвище"/>
                    </InputItem>
                    <InputItem>
                        <ItemTitle>Ім&apos;я</ItemTitle>
                        <Input type="text" placeholder="   Ім'я"/>
                    </InputItem>
                    <InputItem>
                        <ItemTitle>Навчальний заклад</ItemTitle>
                        <select name="school">
                            {schools.map((school) => <option key={"#"} value="#">{school}</option>)}
                        </select>
                    </InputItem>
                    <InputItem>
                        <ItemTitle>Електронна пошта</ItemTitle>
                        <Input type="text" placeholder="   E-mail"/>
                    </InputItem>
                    <InputItem>
                        <ItemTitle>Пароль</ItemTitle>
                        <Input type="password" placeholder="   ******"/>
                    </InputItem>
                </Wrapper>
                <Button>Підтвердити</Button>
            </form>
        );
    }
}
