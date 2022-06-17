import withAuth from "../components/private/PrivateRoot";
import * as React from "react";
import {useEffect, useState} from "react";
import Modal from "../components/ModalWindow/Modal"
import {logout} from "../helpers/AuthHelper";
import {useRouter} from "next/router"
import {getAuthUser} from "../core/actions/GETAuthUser";


function Index() {
    const {payments} = getAuthUser()
    const [username, setUsername] = useState(payments?.username)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [first_name, setFirst_name] = useState(payments?.first_name)
    const [last_name, setLast_name] = useState(payments?.last_name)
    const [phone, setPhone] = useState(payments?.phone)
    const [password2, setPassword2] = useState("")
    const [modalActive, setModalActive] = useState(false)
    const [modalActive2, setModalActive2] = useState(false)

    const router = useRouter()

    function exit() {
        logout()
        router.push('/firstpage')
    }

    function changeAuthUser() {
        // putAuthUser(username,first_name,last_name,phone)
        router.push('/login')
    }


    return (
        <div>
            <div className="container mx-auto">

                <div id="Header" className="flex border w-full h-20 mb-10 bg-[#1482904D]">
                    <div
                        className="w-2/5 ml-44 mt-2 text-6xl font-sans text-gray-900 xl:text-6xl px-333 relative justify-between">
                        <h2>Iconic </h2>
                    </div>
                    <div className="flex w-2/4 mr-28 justify-between">
                        <div className="mt-6 ">
                            <label className="form-control block w-full px-10 py-1 text-base font-normal text-gray-700 bg-white

        rounded
        transition
        focus:bg-white focus:border-blue-600
      ">

                                <input placeholder="Поиск..."/>
                            </label>
                            {/*<img src="/img/magnifier1.svg" alt="Search"/>*/}
                        </div>
                    </div>
                    <div className="flex w-1/4 mr-2 mt-3 justify-between align-middle list-none">
                        <li className="">
                            <button>
                                <img className="" width={30} height={30} src="/img/user_button.svg"/>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img className="" width={30} height={30} src="/img/massage_button.svg"/>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img className="" width={30} height={30} src="/img/notifications_button.svg"/>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setModalActive2(true)}>
                                <img className="bg-red-400 rounded-full" width={30} height={30}
                                     src="/img/settings_button.svg"/>
                            </button>
                        </li>
                    </div>
                </div>
                <div className="flex flex-auto">
                    <div id="sidebar" className="flex flex-col justify-between ml-36 ">
                        <div className="">
                            <img className="rounded-full p-2 hover:p-0 ease-in duration-300 w-52" src="/img/photo.jpg"/>
                            <div className="flex justify-center mr-24">
                                <h1 className="align-center justify-center font-serif font-semibold "> {payments?.first_name} {payments?.last_name}</h1>
                            </div>
                        </div>
                        <div className="list-none flex flex-auto grid grid-cols-1 gap-4 mb-auto mt-2 py-3">
                            <li>
                                <button className="text-base font-semibold text-amber-50 bg-[#1482904D] bg-clip-padding
                            border-solid border-gray-300 m-0 focus:text-gray-700 focus: focus:border-blue-600
                            focus:outline-none d-flex align-center justify-center w-60">Подписчики
                                </button>
                            </li>
                            <li>
                                <button className="text-base font-semibold text-amber-50 bg-[#1482904D] bg-clip-padding
                             border-solid border-gray-300 m-0 focus:text-gray-700 focus: focus:border-blue-600
                             focus:outline-none d-flex align-center justify-center w-60">Подписки
                                </button>
                            </li>
                            <li>
                                <button className="text-base font-semibold text-amber-50 bg-[#1482904D] bg-clip-padding
                             border-solid border-gray-300 m-0 focus:text-gray-700 focus: focus:border-blue-600
                             focus:outline-none d-flex align-center justify-center w-60">Кошелёк
                                </button>
                            </li>
                            <li>
                                <button className="text-base font-semibold text-amber-50 bg-[#1482904D] bg-clip-padding
                            border-solid border-gray-300 m-0  focus:text-gray-700 focus: focus:border-blue-600
                            focus:outline-none d-flex align-center justify-center w-60"
                                        onClick={() => setModalActive(true)}>Резюме
                                </button>
                            </li>
                            <li>
                                <button className="text-base font-bold text-amber-50 bg-[#1482908D] bg-clip-padding
                            border-solid border-gray-300 m-0 focus:text-gray-700 focus: focus:border-blue-600
                            focus:outline-none d-flex align-center justify-center ml-3 w-52">Подписаться
                                </button>
                            </li>
                        </div>

                    </div>
                    <div className="flex flex-col">
                    </div>
                    <div id="content" className="auto-cols-auto  grid-rows-none">
                        <div className="d-flex grid grid-cols-3 gap-4 justify-between align-center mr-28 ml-36 p-1">
                            <div className="">
                                <div className="">
                                    <img width={240} height={185} className="p-2 hover:animate-myanim"
                                         src="/img/posts/pic1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <img width={240} height={185} className="p-2 hover:animate-myanim"
                                         src="/img/posts/pic2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <img width={240} height={185} className="p-2 hover:animate-myanim"
                                         src="/img/posts/pic3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="">
                                <div className="rounded-full">
                                    <img width={240} height={185} className="p-2 hover:animate-myanim"
                                         src="/img/posts/pic4.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <input name="file" type="file" className="block w-full text-sm text-state-500
      file:mr-6 file:py-16 file:px-6
      file:rounded file:border-0
      file:text-sm file:font-semibold
      file:bg-[#148206D] file:text-white
      hover:file:bg-[#1482908D]"/>
                                    {/*<img width={240} height={185} src="/img/posts/windowform.jpg" alt=""/>*/}
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <img width={240} height={185} src="/img/posts/windowform.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <img width={240} height={185} src="/img/posts/windowform.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <img width={240} height={185} src="/img/posts/windowform.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <img width={240} height={185} src="/img/posts/windowform.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <img className="rounded-full p-2 hover:p-0 ease-in duration-300 w-52" src="/img/photo.jpg"/>
                <hr/>
                {payments?.username}
                <hr/>
                {payments?.first_name}
                <hr/>
                {payments?.last_name}
                <hr/>
                {payments?.phone}
                <hr/>

            </Modal>
            <Modal active={modalActive2} setActive={setModalActive2}>
                <div className="flex">
                    <label className="font-medium ml-9 py-5 text-gray-900">Логин</label>
                    <input type="text"
                           id="bl1"
                           className="block ml-7 w-full px-4  py-3 mt-2 text-xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#148290] rounded-2xl"
                           onChange={(e) => setUsername(e.target.value)} value={username}/>
                </div>
                <div className="flex">
                    <label className="font-medium ml-12 py-5 text-gray-900">Имя</label>
                    <input type="text"
                           id="bl2"
                           className="block ml-7 w-full px-4 py-3 mt-2 text-xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#148290] rounded-2xl"
                           onChange={(e) => setFirst_name(e.target.value)} value={first_name}/>
                </div>
                <div className="flex">
                    <label className="font-medium ml-3 py-5 text-gray-900">Фамилия</label>
                    <input type="text"
                           id="bl3"
                           className="block ml-7 w-full px-4 py-3 mt-2 text-xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#148290] rounded-2xl"
                           onChange={(e) => setLast_name(e.target.value)} value={last_name}/>
                </div>
                <div className="flex">
                    <label className="font-medium ml-4 py-5 text-gray-900">Телефон</label>
                    <input type="text"
                           id="bl4"
                           className="block ml-7 w-full px-4 py-3 mt-2 text-xl  placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#148290] rounded-2xl"
                           onChange={(e) => setPhone(e.target.value)} value={phone}/>
                </div>
                <button onClick={changeAuthUser} className="text-base font-semibold text-gray-800 bg-green-400 bg-clip-padding
                            border-solid border-gray-300 m-0 focus:text-gray-700 focus: focus:border-blue-600
                            focus:outline-none d-flex align-center justify-center w-60">Сохранить изменения
                </button>
                <p>Изменения не работают из-за неполадок методом PUT</p>

                <button onClick={exit} className="text-base font-semibold text-gray-800 bg-red-400 bg-clip-padding
                            border-solid border-gray-300 m-0 focus:text-gray-700 focus: focus:border-blue-600
                            focus:outline-none d-flex align-center justify-center w-60">Выйти из аккаунта
                </button>


            </Modal>
        </div>
    )
}

export default withAuth(Index)