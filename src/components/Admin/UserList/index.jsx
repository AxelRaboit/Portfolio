"use client";
import React, { useState, useEffect } from "react";
import { GlobalWrapperNoFooter } from "@/src/components";
import axios from "axios";
import { Container, UserList, Title, Linkk } from "./AdminUserListElements";

export const AdminUserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get("/api/admin/users");
            setUsers(res.data.users);
        };
        fetchUsers();
    }, []);

    return (
        <GlobalWrapperNoFooter>
            <Container className="container">
                <Title>Admin Users</Title>
                <UserList>
                    {users.map((user) => (
                        <li key={user._id}>
                            <Linkk href={`/profile/${user._id}`}>
                                {user.fullname} - {user.email}
                            </Linkk>
                        </li>
                    ))}
                </UserList>
            </Container>
        </GlobalWrapperNoFooter>
    );
};
