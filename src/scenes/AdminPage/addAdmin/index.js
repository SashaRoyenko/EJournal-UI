import React from 'react';
import { Wrapper, TableItem, Input, ItemTitle, Button} from './styled';

export default class Footer extends React.Component {
    render() {
        return (
            <Wrapper>
                <form>
                <table>
                    <tr>
                        <TableItem>
                            <ItemTitle>Прізвище</ItemTitle>
                            <Input type="text" placeholder="   Прізвище" />
                        </TableItem>
                        <TableItem>
                            <ItemTitle>Ім&apos;я</ItemTitle>
                            <Input type="text" placeholder="   Ім'я" />
                        </TableItem>
                        <TableItem>
                            <ItemTitle>Навчальний заклад</ItemTitle>
                            <select name="school" >
                                <option value="">Навчальний заклад</option>
                            </select>
                        </TableItem>
                    </tr>
                    <tr>
                        <TableItem>
                            <ItemTitle>Електронна пошта</ItemTitle>
                            <Input type="text" placeholder="   E-mail" />
                        </TableItem>
                        <TableItem>
                            <ItemTitle>Пароль</ItemTitle>
                            <Input type="password" placeholder="   ******" />
                        </TableItem>
                    </tr>
                </table>
                    <Button>Підтвердити</Button>
                </form>
            </Wrapper>
        );
    }
}
