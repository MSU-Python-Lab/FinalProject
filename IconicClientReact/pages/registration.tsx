import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useUser} from "../hooks/useUser";;
import {useActions} from "../hooks/useActions";
import '../pages/_document'


function registrationPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [phone, setPhone] = useState("")
    const [password2, setPassword2] = useState("")
    const router = useRouter()
    let [displayAuthForm, setDisplayAuthForm] = useState(false)
    const user = useUser()
    useEffect(() => {
        setDisplayAuthForm(localStorage !== undefined && !user)
        console.log('Auth form: ', displayAuthForm)
        if (user) {
            router.push('/')
        }
    }, [])

    const {getRegUser} = useActions()


    // let re = /@mail.ru/gi;
    // let str = email;
    // let newstr = str.replace(re, '');
    // console.log(newstr)

    async function successReg() {
        if (password !== password2) {
            console.log("Passwords do not match", "danger");
        } else {
            if (await getRegUser(username,password,email,first_name,last_name,phone)) {
                router.push('/login')
            }
        }
    }

    return (
        displayAuthForm &&
        <>
            <section className="w-full bg-white ">
                <div className="mx-auto max-w-8xl">
                    <div className="flex flex-col h-screen lg:flex-row">
                        <div
                            className="flex flex-col  items-center justify-center bg-cover lg:w-6/12 xl:w-1/2 xl:bg-white ">
                            <div
                                className=" bg-[#E5E5E5] relative flex flex-col items-center justify-center text-center border-[#148290]
                             w-full h-full px-10 my-0 lg:w-1/2 lg:px-16 lg:my-0 sm:border-b-2 xl:border-r-2 xl:border-l-2">
                                <div className="flex flex-col items-center  tracking-tight lg:max-w-3xl px-10">
                                    <div className="relative mr-4">
                                        <h2 className="text-8xl font-sans text-gray-900 xl:text-9xl px-333 hover:animate-waving-hand">Iconic </h2>
                                    </div>
                                    <p className="text-xs text-gray-700 xl:text-xl">ты уникален</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full bg-white mr-20 lg:w-6/12 xl:w-1/2">
                            <div className="flex flex-col items-start justify-center w-full h-full p-10 lg:p-16 xl:p-24">
                                <h4  id="reg" className="w-full text-3xl ml-56 font-bold">Регистрация</h4>
                                <div  className="relative w-full mt-5 space-y-3">

                                    <div className="flex">
                                        <label className="font-medium ml-9 py-5 text-gray-900">Логин</label>
                                        <input type="text"
                                               id="bl1" className="block ml-7 w-full px-4  py-3 mt-2 text-xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#148290] rounded-2xl"
                                               onChange={(e) => setUsername(e.target.value)} value={username}/>
                                    </div>
                                    <div className="flex">
                                        <label className="font-medium ml-12 py-5 text-gray-900">Имя</label>
                                        <input type="text"
                                               id="bl2" className="block ml-7 w-full px-4 py-3 mt-2 text-xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#148290] rounded-2xl"
                                               onChange={(e) => setFirst_name(e.target.value)} value={first_name}/>
                                    </div>
                                    <div className="flex">
                                        <label className="font-medium ml-3 py-5 text-gray-900">Фамилия</label>
                                        <input type="text"
                                               id="bl3" className="block ml-7 w-full px-4 py-3 mt-2 text-xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#148290] rounded-2xl"
                                               onChange={(e) => setLast_name(e.target.value)} value={last_name}/>
                                    </div>
                                    <div className="flex">
                                        <label className="font-medium ml-4 py-5 text-gray-900">Телефон</label>
                                        <input type="text"
                                               id="bl4" className="block ml-7 w-full px-4 py-3 mt-2 text-xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#148290] rounded-2xl"
                                               onChange={(e) => setPhone(e.target.value)} value={phone}/>
                                    </div>
                                    <div className="flex">
                                        <label className="font-medium ml-8 py-5 text-gray-900">Почта</label>
                                        <input type="text"
                                               id="bl5" className="block ml-7 w-full px-4 py-3 mt-2 text-xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#148290] rounded-2xl"
                                               onChange={(e) => setEmail(e.target.value)} value={email}/>
                                    </div>
                                    <div className="flex">
                                        <label className="font-medium ml-6 py-5 text-gray-900">Пароль</label>
                                        <input type="password"
                                               id="bl6" className="block ml-7 w-full px-4 py-3 mt-2 text-xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#148290] rounded-2xl"
                                               onChange={(e) => setPassword(e.target.value)} value={password}/>
                                    </div>
                                    <div className="flex">
                                        <label className="font-medium py-2 text-gray-900">Повторите пароль</label>
                                        <input type="password"
                                               id="bl7" className="block w-full px-4 py-3 mt-2 text-xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#148290] rounded-2xl"
                                               onChange={(e) => setPassword2(e.target.value)} value={password2}/>
                                    </div>
                                    <div className="relative ml-52 py-3">
                                        <button onClick={successReg}
                                                className="inline-block px-5 py-3 text-lg font-medium text-center text-white transition duration-200 bg-[#148290] hover:bg-cyan-900 ease rounded-2xl">Зарегистрироваться
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
};


export default registrationPage;

