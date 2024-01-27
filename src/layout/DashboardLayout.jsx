import React from "react"
import "./dashboard-layout.scss"
import Calendar from "../components/calendar/Calendar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {Outlet} from 'react-router'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DashboardLLayout() {
    return (
        <div className={'dashboard-layout'}>
            <div className="min-h-full">
                <Header/>
                <div className={'main-area'}>
                    <main>
                        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                            <div className="mt-2 flex items-center text-md text-white font-semibold">
                                <Outlet/>
                            </div>
                        </div>
                    </main>
                </div>
                <Footer/>
            </div>
        </div>
    )
}