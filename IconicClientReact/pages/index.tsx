import withAuth from "../components/private/PrivateRoot";
import * as React from "react";
import {useEffect, useState} from "react";
import Modal from "../components/ModalWindow/Modal"
import {router} from "next/client";
import {logout} from "../helpers/AuthHelper";

//функция выхода из аккаунта не доработана и вызывает непредвиденные ошибки, поэтому ее пока нет
//токен можно удалить из браузера для тестов

function Index() {
    //const [modalActive, setModalActive]=useState(false)
    //const [out,setOut]=useState(false)
    // useEffect(() => {
    //
    //     console.log('Out form: ', out)
    //     if (out) {
    //         logout()
    //         router.push('/')
    //     }
    // }, [])
    // async function exit(){
    //     if (authExists()) {
    //         awlogout()
    //         if (!authExists()) {
    //             router.push('/firstpage')
    //         }
    //     }
    // }

    return (
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
                        <button>
                            <img className="" width={30} height={30} src="/img/settings_button.svg"/>
                        </button>
                    </li>
                </div>
            </div>
            <div className="flex flex-auto">
                <div id="sidebar" className="flex flex-col justify-between ml-36 ">
                    <div className="">
                        <img className="rounded-full p-2 hover:p-0 ease-in duration-300 w-52" src="/img/photo.jpg"/>
                        <div className="flex justify-center mr-24">
                            <h1 className="align-center justify-center"> katya_photovl</h1>
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
                                <img width={240} height={185} className="p-2 hover:animate-myanim" src="/img/posts/pic1.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <img width={240} height={185} className="p-2 hover:animate-myanim" src="/img/posts/pic2.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <img width={240} height={185} className="p-2 hover:animate-myanim" src="/img/posts/pic3.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="">
                            <div className="rounded-full">
                                <img width={240} height={185}  className="p-2 hover:animate-myanim" src="/img/posts/pic4.jpg" alt=""/>
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
                                {/*<img width={240} height={185} src="/img/posts/windowform.jpg" alt=""/>*/ }
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
    )
}
export default withAuth(Index)