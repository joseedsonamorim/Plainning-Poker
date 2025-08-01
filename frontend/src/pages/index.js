import {AppShell, Box, Text, Tooltip} from "@mantine/core";
import React, {useContext} from "react";
import {useDisclosure} from "@mantine/hooks";
import MainView from "@/components/MainView";
import Sidebar from "@/components/Sidebar";
import {DataContext} from "@/DataProvider";
import UsernamePage from "@/components/UsernamePage";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/ufrpe-uni.png";
import {FaUser} from "react-icons/fa";

export default function Home() {
    const [opened, {toggle}] = useDisclosure();
    const {username, setUsername} = useContext(DataContext);


    const _changeUsername = () => {
        setUsername("")
    }

    if (!username) {
        return <UsernamePage/>
    }

    return (
        <>
            <main>
                <AppShell
                    header={{height: {base: 60, md: 70, lg: 80}}}
                    navbar={{
                        width: {base: 300, md: 400, lg: 400},
                        breakpoint: 'sm',
                        collapsed: {mobile: !opened},
                    }}
                    padding="md"
                >
                    <AppShell.Header>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                        >
                            <Box w={{base: 300, md: 400}} style={{display: 'flex', justifyContent: 'center'}}>
                                <Link href={"/"} style={{textDecoration: 'none', color: 'black'}}>
                                    <Image width={150} src={logo}
                                           alt="free online planning poker tool scrumbluff logo"/>
                                </Link>
                            </Box>

                            <Tooltip label="Click to change your username">
                                <Text onClick={() => _changeUsername()} style={{marginRight: 30, cursor: 'pointer'}}>
                                    <FaUser/> {username}
                                </Text>
                            </Tooltip>
                        </div>
                    </AppShell.Header>
                    <AppShell.Navbar p="md" style={{overflowY: 'auto'}}>
                        <Sidebar/>
                    </AppShell.Navbar>
                    <AppShell.Main style={{backgroundColor: 'rgba(0,0,0,0.01)'}}>
                        <MainView/>
                    </AppShell.Main>
                </AppShell>
            </main>
        </>
    );
}
