import React, { useState } from "react";
import { data, Person } from "../../static/data";
import UsersListTableHead, {
  SortType,
} from "../UsersListTableHead/UsersListTableHead";
import styles from "./UsersList.module.css";
import UserListItem from "../UserItem/UserListItem";
import UserAddForm from "../UserAddForm/UserAddForm";

const UserList = () => {
  const [users, setUsers] = useState<Person[]>(data);
  const [nameSort, setNameSort] = useState<SortType>();
  const [ageSort, setAgeSort] = useState<SortType>();

  const removeUser = (id: number) => {
    setUsers((previousUsers) => {
      return previousUsers.filter((user) => user.id !== id);
    });
  };

  const sortByFirstName = () => {
    console.log("rerender");
    if (nameSort === "asc") {
      setUsers((previousUsers) => {
        const newUsers = [...previousUsers];
        newUsers.sort((userA, userB) => {
          if (userA.first_name > userB.first_name) return 1;
          if (userA.first_name < userB.first_name) return -1;
          return 0;
        });
        return newUsers;
      });
      setNameSort("desc");
    } else {
      setUsers((previousUsers) => {
        const newUsers = [...previousUsers];
        newUsers.sort((userA, userB) => {
          if (userA.first_name > userB.first_name) return -1;
          if (userA.first_name < userB.first_name) return 1;
          return 0;
        });
        return newUsers;
      });
      setNameSort("asc");
    }
  };

  const sortByAge = () => {
    if (ageSort === "asc") {
      setUsers((previousUsers) => {
        const newUsers = [...previousUsers];
        newUsers.sort((userA, userB) => {
          return userB.age - userA.age;
        });
        return newUsers;
      });
      setAgeSort("desc");
    } else {
      setUsers((previousUsers) => {
        const newUsers = [...previousUsers];
        newUsers.sort((userA, userB) => {
          return userA.age - userB.age;
        });
        return newUsers;
      });
      setAgeSort("asc");
    }
  };

  const addNewUser = (values: Person) => {
    setUsers((previousUsers: Person[]) => {
      return [values, ...previousUsers];
    });
  };

  return (
    <div className={styles.table_container}>
      <UserAddForm addNewUser={addNewUser} />
      <table>
        <UsersListTableHead
          sortByFirstName={sortByFirstName}
          nameSort={nameSort}
          sortByAge={sortByAge}
          ageSort={ageSort}
        />
        <tbody>
          {users.map((user) => {
            return (
              <React.Fragment key={user.id}>
                <UserListItem user={user} removeUser={removeUser} />
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
