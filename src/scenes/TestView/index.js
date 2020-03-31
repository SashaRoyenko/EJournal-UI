import React from 'react';
import { getUsers, getUserById } from '../../shared/query/test/users';

export default class TestView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: 0,
      users: [],
    };

    this.getUsers = this.getUsers.bind(this);
    this.onChangeUserId = this.onChangeUserId.bind(this);
    this.getUserById = this.getUserById.bind(this);
  }

  onChangeUserId(event) {
    this.setState({ userId: event.target.value });
  }

  async getUsers() {
    getUsers().then((users) => this.setState({ users }));
  }

  async getUserById() {
    const { userId } = this.state;
    getUserById(userId).then((user) => this.setState({ users: [user] }));
  }

  render() {
    const { users, userId } = this.state;
    return (
      <>
        <label>
          <input type="text" value={userId} onChange={this.onChangeUserId} />
        </label>
        <button onClick={this.getUserById} type="button">
          Get one user
        </button>
        <button onClick={this.getUsers} type="button">
          Get all users
        </button>
        {users.map((user, idx) => (
          <div key={user.id || idx}>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.age}</p>
            <p>{user.birthDate}</p>
          </div>
        ))}
      </>
    );
  }
}
