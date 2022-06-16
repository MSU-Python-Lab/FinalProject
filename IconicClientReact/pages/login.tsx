import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useUser} from "../hooks/useUser";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {authExists} from "../helpers/AuthHelper";
import Link from 'next/link'
import Head from "next/head";
import '../pages/_document'

function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    let [displayAuthForm, setDisplayAuthForm] = useState(false)
    const user = useUser()

    useEffect(() => {
        setDisplayAuthForm(localStorage !== undefined && !user)
        console.log('Auth form: ', displayAuthForm)
        if (user) {
            router.push('/')
        }
    }, [user])

    const AuthSelect = useTypedSelector(state => state.auth)
    const {getAuthUser} = useActions()

    // async function successLogin() {
    //     await getAuthUser(password, email)
    //     if (authExists()) {
    //         await router.push('/')
    //     }
    // }
    function successLogin() {
        getAuthUser(email, password)
    }

    return (
        displayAuthForm &&
        <section>
            <div id="dev0">
                <p className="iconic w-80 ml-[41%] h-20 hover:animate-waving-hand">Iconic</p>
                <p className="text_number mt-20">Введите номер</p>
                <p className="text_number text_dop">Ваш номер телефона будет<br/> использоваться для входа в аккаунт</p>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                       className="inputLogin hover:ring-4 hover:ring-[#82f0eb]" placeholder="Email или телефон"/><br/>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                       className="inputLogin hover:ring-4 hover:ring-[#82f0eb]" placeholder="Пароль"/>
                <p id="password1" className="w-40 text-left text-[#27E0D5] hover:underline"><a href="/restart">Забыли
                    пароль?</a></p>

                <button onClick={successLogin} className="butNext hover:opacity-80">Продолжить</button>

                <p className="w-full mt-4 text-sm text-center text-gray-500">Нет аккаунта?
                    <Link href="/registration" className="text-blue-500 underline">Зарегистрируйтесь здесь</Link></p>
            </div>
        </section>


    )
}

export default LoginPage