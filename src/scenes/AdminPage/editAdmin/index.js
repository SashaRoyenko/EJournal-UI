import React from 'react';
import { Wrapper, TableItem, Input, ItemTitle, Button} from './styled';

export default class EditAdmin extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedSchool: "School №1",
            name: "selectedName",
            lastName:"selectedLastName",
            email:"selectedEmail",
            password:"selectedPassword",
            schools: ["1","2","3","4"],
        };
    }

    render() {
        const {selectedSchool, schools, name, lastName, email, password} = this.state;
        return (
            <Wrapper>
                <form>
                <table>
                    <tr>
                        <TableItem>
                            <ItemTitle>Прізвище</ItemTitle>
                            <Input type="text" placeholder={lastName} />
                        </TableItem>
                        <TableItem>
                            <ItemTitle>Ім&apos;я</ItemTitle>
                            <Input type="text" placeholder={name} />
                        </TableItem>
                        <TableItem>
                            <ItemTitle>Навчальний заклад</ItemTitle>
                            <select name="#" >
                                <option value="">{selectedSchool}</option>
                                {schools.map((school)=>(<option value="">{school}</option>))}
                            </select>
                        </TableItem>
                    </tr>
                    <tr>
                        <TableItem>
                            <ItemTitle>Електронна пошта</ItemTitle>
                            <Input type="text" placeholder={email} />
                        </TableItem>
                        <TableItem>
                            <ItemTitle>Пароль</ItemTitle>
                            <Input type="password" placeholder={password} />
                        </TableItem>
                    </tr>
                </table>
                    <Button>Підтвердити</Button>
                </form>
            </Wrapper>
        );
    }
}
