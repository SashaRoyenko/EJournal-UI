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
                            <Input type="text" placeholder="#" />
                        </TableItem>
                        <TableItem>
                            <ItemTitle>Ім'я</ItemTitle>
                            <Input type="text" placeholder="#" />
                        </TableItem>
                        <TableItem>
                            <ItemTitle>Навчальний заклад</ItemTitle>
                            <select name="#" >
                                <option value="">Навчальний заклад</option>
                            </select>
                        </TableItem>
                    </tr>
                    <tr>
                        <TableItem>
                            <ItemTitle>Електронна пошта</ItemTitle>
                            <Input type="text" placeholder="#" />
                        </TableItem>
                        <TableItem>
                            <ItemTitle>Пароль</ItemTitle>
                            <Input type="password" placeholder="#" />
                        </TableItem>
                    </tr>
                </table>
                    <Button>Підтвердити</Button>
                </form>
            </Wrapper>
        );
    }
}
