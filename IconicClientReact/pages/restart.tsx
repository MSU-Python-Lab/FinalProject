import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useUser} from "../hooks/useUser";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {authExists} from "../helpers/AuthHelper";
import Link from 'next/link'
import Head from 'next/head'


function EnterPage() {

    return(
        //displayAuthForm &&
        <div className="container mx-auto text-center">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Birthstone+Bounce&display=swap"
                      rel="stylesheet"/>
                <link href="http://fonts.cdnfonts.com/css/gotham-pro?styles=24951" rel="stylesheet"/>
            </Head>
            <h1 id="rest" className="mt-[10%]">Восстановление</h1>
            <p id="mail" className="mt-9">Укажите email или телефон</p>
            <p id="poyasn" className="mt-2">Пожалуйста, укажите email или<br/>телефон, который вы использовали<br/>для входа на сайт</p>
            <input className="inputMail mt-5 hover:ring-4 hover:ring-[#82f0eb]" placeholder="Email или телефон"/>
            <p className="font-semibold text-[#27E0D5] hover:underline ">Я не помню эти данные или они недоступны</p>
            <form action="/firstpage">
                <button className="butNext butt hover:opacity-80">Далее</button>
            </form>




        </div>
    )

}
export default EnterPage