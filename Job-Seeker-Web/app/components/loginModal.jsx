"use client";

import React, { useRef, useState } from "react";
import {
    Alert,
    Button,
    Checkbox,
    Label,
    Modal,
    TextInput,
} from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import axios from "axios";

function LoginModalComponent() {
    const [openModal, setOpenModal] = useState(false);
    const [email, set_email] = useState();
    const [password, set_password] = useState();
    const [login_gagal, set_login_gagal] = useState();
    const [login_berhasil, set_login_berhasil] = useState();

    const submit = async (e) => {
        e.preventDefault();

        const formData = {
            email,
            password,
        };
        try {
            const response = await axios.post("/api/user/login", formData);
            const sukses = response.status === 201;
            if (sukses) {
                localStorage.setItem("login", JSON.stringify(response.data));
                set_login_gagal("");
                set_login_berhasil(true);
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            }
        } catch (error) {
            set_login_gagal("Email atau password salah");
            set_login_berhasil(false);
        }
    };

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Sign in</Button>
            <Modal
                show={openModal}
                size="md"
                popup
                onClose={() => setOpenModal(false)}>
                <Modal.Header />
                <Modal.Body>
                    <form
                        className="space-y-6"
                        onSubmit={submit}>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Sign in to our platform
                        </h3>
                        {login_gagal ? (
                            <Alert
                                color="failure"
                                icon={HiInformationCircle}>
                                <span className="font-medium">
                                    Login Gagal!
                                </span>
                                {login_gagal}
                            </Alert>
                        ) : (
                            ""
                        )}
                        {login_berhasil ? (
                            <Alert color="success">
                                <span className="font-medium">
                                    Login Berhasil!
                                </span>
                            </Alert>
                        ) : (
                            ""
                        )}
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email"
                                value={email}
                                placeholder="name@company.com"
                                required
                                autoFocus
                                onChange={(e) => set_email(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password"
                                type="password"
                                value={password}
                                required
                                onChange={(e) => set_password(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>
                            <a
                                href="#"
                                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                                Lost Password?
                            </a>
                        </div>
                        <div className="w-full">
                            <Button type="submit">
                                Log in to your account
                            </Button>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?&nbsp;
                            <a
                                href="/register"
                                className="text-cyan-700 hover:underline dark:text-cyan-500">
                                Create account
                            </a>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginModalComponent;
